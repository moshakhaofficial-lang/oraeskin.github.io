import fs from 'fs';
import path from 'path';

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

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.oraeskin.in/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/blog/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/categories/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.oraeskin.in/disclosure/</loc>
    <lastmod>2026-03-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;

// Category hubs
for (const cat of CATEGORY_SLUGS) {
    xml += `  <url>
    <loc>https://www.oraeskin.in/category/${cat}/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// Blog articles
for (const file of blogFiles) {
    const slug = file.replace(/\.md$/, '');
    xml += `  <url>
    <loc>https://www.oraeskin.in/blog/${slug}/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Updated sitemap.xml with ${blogFiles.length + CATEGORY_SLUGS.length + 4} URLs`);
