import fs from 'fs';
import path from 'path';
import { PRODUCTS } from '../src/data/products.ts';
import { COMPARISONS } from '../src/data/comparisons.ts';

const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const BLOG_DIR = path.resolve('src/pages/blog');

const CATEGORY_SLUGS = [
    'sunscreens',
    'cleansers',
    'serums',
    'moisturizers',
    'toners',
    'eye-care',
    'lip-care',
    'body-care',
    'spot-treatments',
    'anti-aging'
];

const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.oraeskin.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/how-we-review/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/about/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/corrections/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/disclosure/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/reviews/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/comparisons/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/categories/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

// Category hubs
for (const cat of CATEGORY_SLUGS) {
    xml += `  <url>
    <loc>https://www.oraeskin.in/category/${cat}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Product Review Pages
for (const p of PRODUCTS) {
    xml += `  <url>
    <loc>https://www.oraeskin.in/reviews/${p.id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Product Comparison Pages
for (const c of COMPARISONS) {
    xml += `  <url>
    <loc>https://www.oraeskin.in/comparisons/${c.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Blog Buying Guides
for (const file of blogFiles) {
    const slug = file.replace(/\.md$/, '');
    xml += `  <url>
    <loc>https://www.oraeskin.in/blog/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
const totalUrls = 9 + CATEGORY_SLUGS.length + PRODUCTS.length + COMPARISONS.length + blogFiles.length;
console.log(`Updated sitemap.xml with ${totalUrls} verified URLs`);
