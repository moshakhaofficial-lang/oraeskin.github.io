// @ts-check
import { defineConfig } from 'astro/config';

/** @returns {(tree: any) => void} */
function rehypeAmazonAffiliateLinks() {
    return (/** @type {any} */ tree) => {
        /** @param {any} node */
        function visit(node) {
            if (node.type === 'element' && node.tagName === 'a' && node.properties && node.properties.href) {
                const href = String(node.properties.href);
                if (href.includes('amazon.in') || href.includes('amzn.to')) {
                    node.properties.target = '_blank';
                    node.properties.rel = 'nofollow sponsored noopener';
                }
            }
            if (node.children && Array.isArray(node.children)) {
                node.children.forEach(visit);
            }
        }
        visit(tree);
    };
}

// https://astro.build/config
export default defineConfig({
    site: 'https://www.oraeskin.in',
    markdown: {
        rehypePlugins: [rehypeAmazonAffiliateLinks],
    },
    build: {
        assets: 'assets',
        inlineStylesheets: 'always',
    },
});
