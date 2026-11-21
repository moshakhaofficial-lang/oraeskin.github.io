// Appends new products to src/data/products.ts and their ASINs to src/config/site.ts.
// Usage: node scripts/add-products.mjs <items-module.mjs>
// The items module default-exports an array of short product records (see fields used in make()).
// The OraeSkin Score is computed from `b` with the same weights as calculateOraeSkinScore().
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const FILE = 'src/data/products.ts';
const SITE = 'src/config/site.ts';
const items = (await import(pathToFileURL(path.resolve(process.argv[2])).href)).default;

const score = b => Number((b.formula * 0.25 + b.skinSuitability * 0.20 + b.evidence * 0.20 + b.userFeedback * 0.15 + b.value * 0.10 + b.availability * 0.10).toFixed(1));
const make = p => {
    const s = score(p.b);
    const url = `https://www.amazon.in/dp/${p.asin}?tag=oraeskin-21`;
    return {
        id: p.id, name: p.name, title: p.title, brand: p.brand, category: p.category, subcategory: p.subcategory,
        asin: p.asin, amazonUrl: url, affiliateUrl: url,
        badge: p.badge, price: p.price, priceEst: `₹${p.price}`, currency: '₹', size: p.size,
        image: `/images/products/${p.id}.jpg`,
        amazonRating: p.rating, rating: p.rating, amazonReviews: p.reviews, reviewCount: p.reviews,
        scoreBreakdown: p.b,
        skinType: p.skinType, concerns: p.concerns, keyActives: p.keyActives, keyIngredients: p.keyActives,
        ingredients: p.ingredients,
        fragrance: p.fragrance, essentialOils: /^Essential/.test(p.fragrance), alcoholFree: p.alcoholFree ?? true,
        texture: p.texture, finish: p.finish, whiteCast: p.whiteCast ?? 'Not Applicable',
        bestFor: p.bestFor, avoidIf: p.avoidIf, whyWeLikeIt: p.why,
        pros: p.pros, cons: p.cons, verdict: p.verdict, alternatives: p.alts,
        lastPriceChecked: p.checked ?? 'November 2026', lastEditorialReview: p.reviewed ?? 'November 2026', inStock: true,
        oraeSkinScore: s,
        scores: { formula: p.b.formula, weatherResilience: p.b.skinSuitability, texture: p.b.skinSuitability, value: p.b.value, overall: s }
    };
};

let src = fs.readFileSync(FILE, 'utf8');
const marker = '\n];\n\n// Helper Query Functions';
if (!src.includes(marker)) throw new Error('end-of-PRODUCTS marker not found in ' + FILE);
const existing = new Set([...src.matchAll(/"id": "([^"]+)"/g)].map(m => m[1]));
const fresh = items.filter(i => !existing.has(i.id)).map(make);
for (const p of fresh) {
    for (const a of p.alternatives)
        if (!existing.has(a.productId) && !items.some(i => i.id === a.productId)) throw new Error(`${p.id}: unknown alternative ${a.productId}`);
    if (!fs.existsSync('public' + p.image)) throw new Error('missing image public' + p.image);
}
const block = fresh.map(p => JSON.stringify(p, null, 4).split('\n').map(l => '    ' + l).join('\n')).join(',\n');
if (fresh.length) fs.writeFileSync(FILE, src.replace(marker, ',\n' + block + marker));

let site = fs.readFileSync(SITE, 'utf8');
const add = fresh.filter(p => !site.includes(`'${p.asin}'`)).map(p => `    '${p.asin}', // ${p.title}`).join('\n');
if (add) fs.writeFileSync(SITE, site.replace("\n]);\n\n// Map of legacy/dead ASINs", '\n' + add + "\n]);\n\n// Map of legacy/dead ASINs"));
console.log(fresh.map(p => `${p.oraeSkinScore}  ${p.id}  ₹${p.price}/${p.size}`).join('\n') || 'nothing new');
