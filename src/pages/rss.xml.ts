import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config/site';

const rawPosts = import.meta.glob('./blog/*.md', { eager: true });

export const GET: APIRoute = async () => {
    const siteUrl = SITE_CONFIG.url.replace(/\/$/, '');
    
    const items = Object.entries(rawPosts).map(([filePath, post]: [string, any]) => {
        const slug = filePath.replace(/^\.\/blog\//, '').replace(/\.md$/, '');
        const title = post.frontmatter?.title || 'OraeSkin Skincare Guide';
        const description = post.frontmatter?.description || '';
        const rawDate = post.frontmatter?.date;
        const pubDate = rawDate && !isNaN(new Date(rawDate).getTime()) 
            ? new Date(rawDate).toUTCString() 
            : new Date().toUTCString();
        const imgPath = post.frontmatter?.image || '/images/products/minimalist-spf50.jpg';
        const fullImg = imgPath.startsWith('http') ? imgPath : `${siteUrl}${imgPath}`;
        const link = `${siteUrl}/blog/${slug}/`;

        return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <category><![CDATA[${post.frontmatter?.category || 'Skincare'}]]></category>
      <enclosure url="${fullImg}" length="0" type="image/jpeg" />
      <media:content url="${fullImg}" medium="image" />
    </item>`;
    }).join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_CONFIG.name} - Skincare Editorial & Reviews]]></title>
    <link>${siteUrl}</link>
    <description><![CDATA[${SITE_CONFIG.description}]]></description>
    <language>en-IN</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    return new Response(rss.trim(), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    });
};
