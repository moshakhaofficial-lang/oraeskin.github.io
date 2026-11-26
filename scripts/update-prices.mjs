// Update price, rating and rating count for products by ASIN, from a TSV file:
//   ASIN <tab> price <tab> rating <tab> ratingCount   (e.g. B0CHYR58VF	448	4.0	4247)
// Usage: node scripts/update-prices.mjs prices.tsv "November 2026"
import fs from 'node:fs';
const [file, checked = 'November 2026'] = process.argv.slice(2);
const path = 'src/data/products.ts';
let src = fs.readFileSync(path, 'utf8');
const fmtCount = (n) => {
    const step = n >= 10000 ? 1000 : n >= 1000 ? 100 : 10;
    return Math.floor(n / step) * step;
};
const inr = (n) => n.toLocaleString('en-IN');
let updated = 0;
for (const line of fs.readFileSync(file, 'utf8').trim().split('\n')) {
    const [asin, price, rating, count] = line.split('\t');
    const at = src.indexOf(`"asin": "${asin}"`);
    if (at === -1) { console.log('not found', asin); continue; }
    const start = src.lastIndexOf('\n    {', at);
    const end = src.indexOf('\n    }', at);
    let rec = src.slice(start, end);
    const reviews = `${inr(fmtCount(+count))}+`;
    rec = rec
        .replace(/"price": [\d.]+/, `"price": ${+price}`)
        .replace(/"priceEst": "[^"]*"/, `"priceEst": "₹${inr(+price).replace(/,/g, '')}"`)
        .replace(/"amazonRating": [\d.]+/, `"amazonRating": ${+rating}`)
        .replace(/"rating": [\d.]+/, `"rating": ${+rating}`)
        .replace(/"amazonReviews": "[^"]*"/, `"amazonReviews": "${reviews}"`)
        .replace(/"reviewCount": "[^"]*"/, `"reviewCount": "${reviews}"`)
        .replace(/"lastPriceChecked": "[^"]*"/, `"lastPriceChecked": "${checked}"`);
    src = src.slice(0, start) + rec + src.slice(end);
    updated++;
}
fs.writeFileSync(path, src);
console.log(`updated ${updated} products`);
