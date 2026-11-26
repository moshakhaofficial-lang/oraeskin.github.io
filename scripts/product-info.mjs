// Print a compact summary of products: node scripts/product-info.mjs <category|regex-on-id> [more...]
import fs from 'node:fs';
const src = fs.readFileSync('src/data/products.ts', 'utf8');
const start = src.indexOf('export const PRODUCTS');
const arrStart = src.indexOf('[', start);
const end = src.indexOf('\n];\n', arrStart);
const products = Function('return ' + src.slice(arrStart, end + 2))();
const terms = process.argv.slice(2);
for (const p of products) {
    if (!terms.some((t) => p.category === t || p.subcategory === t || new RegExp(t, 'i').test(p.id))) continue;
    console.log(`${p.id} | ${p.brand} ${p.name} | ${p.category}/${p.subcategory || ''} | ${p.asin} | ${p.priceEst} ${p.size} | ${p.amazonRating}★ ${p.amazonReviews} | score ${p.oraeSkinScore} | checked ${p.lastPriceChecked} | actives: ${p.keyActives.join(', ')} | frag: ${p.fragrance} | best: ${p.bestFor}`);
}
if (process.env.DETAIL) for (const id of process.env.DETAIL.split(',')) {
    const p = products.find((x) => x.id === id);
    if (!p) { console.log('MISSING', id); continue; }
    console.log(`\n## ${id}\ntexture: ${p.texture} | finish: ${p.finish} | whiteCast: ${p.whiteCast} | frag: ${p.fragrance}\nwhy: ${p.whyWeLikeIt}\navoid: ${p.avoidIf}\npros: ${p.pros.join(' / ')}\ncons: ${p.cons.join(' / ')}`);
}
