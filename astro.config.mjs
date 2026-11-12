// @ts-check
import { defineConfig } from 'astro/config';

const isAmazon = (/** @type {any} */ node) =>
    node.type === 'element' && node.tagName === 'a' && node.properties && node.properties.href &&
    /amazon\.in|amzn\.to/.test(String(node.properties.href));

const textOf = (/** @type {any} */ node) =>
    node.type === 'text' ? node.value : (node.children || []).map(textOf).join('');

const nonLinkText = (/** @type {any} */ node) =>
    node.type === 'text' ? node.value
        : node.tagName === 'a' ? '' : (node.children || []).map(nonLinkText).join('');

const hasAmazon = (/** @type {any} */ node) =>
    isAmazon(node) || (node.children || []).some(hasAmazon);

const addClass = (/** @type {any} */ node, /** @type {string} */ name) => {
    node.properties = node.properties || {};
    const cur = node.properties.className || [];
    node.properties.className = [...(Array.isArray(cur) ? cur : [cur]), name];
};

/**
 * Marks up Amazon links in markdown guides so CSS can present them as buy actions:
 *  - every Amazon link: sponsored rel, new tab, `buy-link`
 *  - a paragraph that is nothing but an Amazon link: `buy-cta` (full button)
 *  - Amazon links in table cells: `buy-chip`; the table gets `picks-table` and
 *    each cell a `data-label` from its column header (used for the phone card layout)
 * @returns {(tree: any) => void}
 */
function rehypeAmazonAffiliateLinks() {
    return (/** @type {any} */ tree) => {
        /** @param {any} node @param {any[]} ancestors */
        function visit(node, ancestors) {
            if (node.type === 'element' && node.tagName === 'table' && hasAmazon(node)) {
                addClass(node, 'picks-table');
                /** @type {string[]} */
                const headers = [];
                /** @param {any} n */
                const walk = (n) => {
                    if (n.type !== 'element') return;
                    if (n.tagName === 'tr') {
                        const cells = n.children.filter((/** @type {any} */ c) => c.type === 'element');
                        cells.forEach((/** @type {any} */ c, /** @type {number} */ i) => {
                            if (c.tagName === 'th') headers[i] = textOf(c).trim();
                            else if (c.tagName === 'td') {
                                if (headers[i]) c.properties = { ...c.properties, dataLabel: headers[i] };
                                if (hasAmazon(c)) addClass(c, 'buy-cell');
                            }
                        });
                    } else (n.children || []).forEach(walk);
                };
                walk(node);
            }
            if (isAmazon(node)) {
                node.properties.target = '_blank';
                node.properties.rel = 'nofollow sponsored noopener';
                const inCell = ancestors.some((a) => a.tagName === 'td');
                const para = [...ancestors].reverse().find((a) => a.tagName === 'p');
                // "Actions-only" paragraph: nothing but links (review link and/or Amazon link) and separators
                const aloneInPara = para && !ancestors.some((a) => a.tagName === 'li' || a.tagName === 'blockquote') &&
                    nonLinkText(para).replace(/[\s👉📖·•|→:–—-]/gu, '') === '';
                if (inCell) {
                    addClass(node, 'buy-chip');
                    node.properties.dataPlacement = 'guide_table';
                } else if (aloneInPara) {
                    addClass(node, 'buy-cta');
                    node.properties.dataPlacement = 'guide_cta';
                    if (!String(para.properties?.className || '').includes('buy-cta-row')) {
                        addClass(para, 'buy-cta-row');
                        // Drop pointer emoji and separators; sibling non-Amazon links become secondary buttons
                        para.children = para.children.filter((/** @type {any} */ c) => c.type !== 'text');
                        /** @param {any} n */
                        const markOthers = (n) => {
                            if (n.type !== 'element') return;
                            if (n.tagName === 'a' && !isAmazon(n)) addClass(n, 'review-btn');
                            (n.children || []).forEach(markOthers);
                        };
                        markOthers(para);
                    }
                } else {
                    addClass(node, 'buy-link');
                    node.properties.dataPlacement = 'guide_inline';
                }
            }
            if (node.children && Array.isArray(node.children)) {
                node.children.forEach((/** @type {any} */ c) => visit(c, [...ancestors, node]));
            }
        }
        visit(tree, []);
    };
}

// https://astro.build/config
export default defineConfig({
    site: 'https://www.oraeskin.in',
    trailingSlash: 'always',
    markdown: {
        rehypePlugins: [rehypeAmazonAffiliateLinks],
    },
    build: {
        assets: 'assets',
        inlineStylesheets: 'always',
    },
});
