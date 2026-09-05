export const SITE_CONFIG = {
    name: 'OraeSkin',
    title: 'OraeSkin - India\'s Trusted Skincare Editorial, Reviews & Buying Guides',
    description: 'Expert skincare reviews, dermatologist-approved routines, and top-rated skincare product guides on Amazon India tailored for Indian skin types and tropical weather.',
    url: 'https://www.oraeskin.in',
    googleAnalyticsId: 'G-E978F44468',
    amazon: {
        tag: 'oraeskin-21',
        domain: 'amazon.in',
        disclaimer: 'As an Amazon Associate, OraeSkin earns from qualifying purchases. We independently research, test, and recommend the best products for Indian skin.'
    },
    navLinks: [
        { name: 'Home', href: '/' },
        { name: 'Categories', href: '/categories' },
        { name: 'All 100+ Guides', href: '/blog' },
        { name: 'Routine Finder', href: '/#routine-finder' },
        { name: 'Top Deals', href: '/#top-picks' }
    ],
    social: {
        instagram: 'https://www.instagram.com/oraeskincosmetics/',
        youtube: 'https://www.youtube.com/@OraeSkinCosmetics',
        facebook: 'https://www.facebook.com/people/OraeskinCosmetics/61584747749616/',
        twitter: 'https://x.com/OraeSkin'
    }
};

/**
 * Generates an affiliate tracking link for Amazon India.
 * Handles ASINs, direct URLs, or search queries.
 */
export function getAmazonAffiliateUrl(asinOrUrl: string, tag: string = SITE_CONFIG.amazon.tag): string {
    if (!asinOrUrl) return `https://www.amazon.in/?tag=${tag}`;
    
    // If it's an ASIN (10 alphanumeric chars)
    if (/^[A-Z0-9]{10}$/i.test(asinOrUrl.trim())) {
        return `https://www.amazon.in/dp/${asinOrUrl.trim()}?tag=${tag}`;
    }

    // If it's already a full Amazon URL
    try {
        const url = new URL(asinOrUrl);
        url.searchParams.set('tag', tag);
        return url.toString();
    } catch {
        // Fallback to Amazon search query
        return `https://www.amazon.in/s?k=${encodeURIComponent(asinOrUrl)}&tag=${tag}`;
    }
}
