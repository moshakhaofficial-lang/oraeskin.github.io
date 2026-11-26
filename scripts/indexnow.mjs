#!/usr/bin/env node
// Tell Bing, Yandex, Seznam, Naver and other IndexNow search engines which pages changed.
//
//   node scripts/indexnow.mjs --all             submit every URL in public/sitemap.xml
//   node scripts/indexnow.mjs --since <commit>  submit pages changed since that commit
//   node scripts/indexnow.mjs --dry-run ...     print the URLs without submitting
//
// The key file public/<KEY>.txt must be live on the site before submitting.
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const HOST = 'www.oraeskin.in';
const SITE = `https://${HOST}`;
const KEY = '7bb8f75a985adeb65cf20750eb95bb56';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const sitemapUrls = [...fs.readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const known = new Set(sitemapUrls);

function changedUrls(since) {
    const files = execSync(`git diff --name-only ${since} HEAD`, { encoding: 'utf8' }).split('\n').filter(Boolean);
    const urls = new Set();
    for (const f of files) {
        let m;
        if ((m = f.match(/^src\/pages\/blog\/([^/]+)\.md$/))) urls.add(`${SITE}/blog/${m[1]}/`);
        else if ((m = f.match(/^src\/pages\/([a-z-]+)\.astro$/))) urls.add(m[1] === 'index' ? `${SITE}/` : `${SITE}/${m[1]}/`);
    }
    // New or edited products: their review pages
    if (files.includes('src/data/products.ts')) {
        const diff = execSync(`git diff -U0 ${since} HEAD -- src/data/products.ts`, { encoding: 'utf8' });
        for (const m of diff.matchAll(/^\+\s*"?id"?:\s*["']([a-z0-9-]+)["']/gm)) urls.add(`${SITE}/reviews/${m[1]}/`);
    }
    // Any content change refreshes the listing pages
    if (urls.size) ['/', '/blog/', '/reviews/'].forEach((p) => urls.add(SITE + p));
    return [...urls].filter((u) => known.has(u));
}

let urls;
if (args.includes('--all')) urls = sitemapUrls;
else {
    const i = args.indexOf('--since');
    if (i === -1 || !args[i + 1]) {
        console.error('Usage: node scripts/indexnow.mjs --all | --since <commit> [--dry-run]');
        process.exit(1);
    }
    urls = changedUrls(args[i + 1]);
}

if (!urls.length) {
    console.log('IndexNow: no changed pages to submit.');
    process.exit(0);
}
console.log(`IndexNow: ${urls.length} URL(s)`);
urls.slice(0, 20).forEach((u) => console.log('  ' + u));
if (urls.length > 20) console.log(`  …and ${urls.length - 20} more`);
if (dryRun) process.exit(0);

const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
// 200 = accepted, 202 = accepted (key check pending)
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (res.status >= 300) {
    console.log(await res.text());
    process.exit(1);
}
