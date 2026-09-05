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

// Verified working active ASINs on Amazon.in
export const VERIFIED_AMAZON_ASINS = new Set([
    'B09FPS9D5T', // Minimalist Sunscreen SPF 50
    'B0BVWDJTHF', // The Derma Co 1% Hyaluronic Sunscreen Aqua Gel
    'B0BQN2YWN5', // Dot & Key Watermelon Cooling Sunscreen
    'B003YMJJSK', // CeraVe Foaming Facial Cleanser
    'B0BDVG99J5', // Dot & Key Rice Water & Ceramide Cream
    'B00TTD9BRC', // CeraVe Moisturizing Cream
    'B00OZ63ODA', // Cosrx AHA/BHA Clarifying Treatment Toner
    'B096PJMGPL', // Minimalist 2% Salicylic Acid Face Wash
    'B01CCGW4OE', // Cetaphil Gentle Skin Hydrating Cleanser
    'B006NVDWGE', // Biotique Morning Nectar Lotion
    'B0CJJN6XNK', // Plum BodyLovin Vanilla Caramello Body Lotion
]);

// Map of legacy/dead ASINs or product slugs to either verified ASINs or targeted Amazon search queries
export const PRODUCT_SEARCH_FALLBACKS: Record<string, string> = {
    'B07C5SKVL7': 'B003YMJJSK', // CeraVe Foaming Cleanser
    'B07MGB563Q': 'B01CCGW4OE', // Cetaphil Cleanser
    'B096VDR2BC': 'B096PJMGPL', // Minimalist Salicylic Cleanser
    'B08Z4J8JWD': 'B0CJJN6XNK', // Plum BodyLovin Lotion
    'B00791DJ9O': 'B006NVDWGE', // Biotique Morning Nectar
    'B09SLF5ZH8': 'Aqualogica Radiance+ Dewy Sunscreen SPF 50',
    'B09SH78STH': "Dr. Sheth's Ceramide & Vitamin C Sunscreen",
    'B08F9V7T7S': "Re'equil Ultra Matte Dry Touch Sunscreen Gel",
    'B00KGGRG2C': 'The Face Shop Rice Water Bright Foaming Cleanser',
    'B00FSB7C00': 'The Face Shop Rice Water Bright Foaming Cleanser',
    'B07N9CCXN9': 'Simple Kind to Skin Refreshing Facial Wash',
    'B07C3M2RL2': 'Simple Kind to Skin Refreshing Facial Wash',
    'B08F9V7T7T': 'Minimalist 10% Vitamin C Face Serum',
    'B096VJ969J': 'Minimalist 10% Vitamin C Face Serum',
    'B097Z77D3D': 'Plum 15% Vitamin C Face Serum',
    'B094R9TDRW': 'Plum 15% Vitamin C Face Serum',
    'B08DFL3M9K': 'The Derma Co 10% Vitamin C Face Serum',
    'B08F9WPM24': 'Minimalist 10% Niacinamide Face Serum',
    'B08F9TNQ8L': 'Minimalist 2% Alpha Arbutin Face Serum',
    'B08F9W9WCR': 'Minimalist 2% Alpha Arbutin Face Serum',
    'B08K3S6P2G': 'The Derma Co 10% Niacinamide Serum with Zinc',
    'B096VD6J8K': 'Minimalist Vitamin B5 10% Moisturizer',
    'B094R9TFQ2': 'Minimalist Vitamin B5 10% Moisturizer',
    'B00U3U408K': 'Bioderma Atoderm Intensive Baume',
    'B0B39LTVP4': 'Minimalist 8% Glycolic Acid Exfoliating Liquid',
    'B00OCJ5MVM': 'Plum Green Tea Alcohol-Free Toner',
    'B08F9V7T7U': 'Minimalist PHA 3% Alcohol-Free Face Toner',
    'B08F9WMQLY': 'Minimalist PHA 3% Alcohol-Free Face Toner',
    'B00BFZ744K': 'CeraVe Eye Repair Cream',
    'B096VD6J8M': 'Minimalist 5% Caffeine Under-Eye Serum',
    'B095S6Q8S5': 'Minimalist 5% Caffeine Under-Eye Serum',
    'B0BVWDJTHG': 'The Derma Co 5% Caffeine Under-Eye Serum',
    'B08GGBW1K8': 'The Derma Co 5% Caffeine Under-Eye Serum',
    'B09SK854F9': 'Minimalist SPF 30 Lip Balm with Ceramides',
    'B08L7V7D3V': 'Dot & Key Vitamin C+E Lip Sleeping Mask',
    'B0B941K5H7': 'Minimalist 2% Salicylic Acid Body Wash',
    'B09R1T6W12': 'The Derma Co 100% Hydrocolloid Invisible Acne Patches',
    'B08K3N7H9R': 'Minimalist 0.3% Retinol Face Serum in Squalane',
    'B08F9VMT4X': 'Minimalist 0.3% Retinol Face Serum in Squalane',
    'B08F9V7T7W': 'Minimalist Granactive Retinoid 2%',
    'B07S8W5WJ7': "Re'equil Ultra Matte Dry Touch Sunscreen Gel",
    'B0B13RF99G': "Dr. Sheth's Ceramide & Vitamin C Sunscreen",
};

/**
 * Generates an affiliate tracking link for Amazon India.
 * Handles ASINs, direct URLs, product names, or search queries with automatic dead-link protection.
 */
export function getAmazonAffiliateUrl(asinOrUrl: string, tag: string = SITE_CONFIG.amazon.tag): string {
    if (!asinOrUrl) return `https://www.amazon.in/?tag=${tag}`;
    const clean = asinOrUrl.trim();
    
    // 1. Check if it's in our known replacements/fallbacks map
    if (PRODUCT_SEARCH_FALLBACKS[clean]) {
        const target = PRODUCT_SEARCH_FALLBACKS[clean];
        if (VERIFIED_AMAZON_ASINS.has(target)) {
            return `https://www.amazon.in/dp/${target}?tag=${tag}`;
        }
        return `https://www.amazon.in/s?k=${encodeURIComponent(target)}&tag=${tag}`;
    }

    // 2. If it's a verified active Amazon ASIN
    if (VERIFIED_AMAZON_ASINS.has(clean)) {
        return `https://www.amazon.in/dp/${clean}?tag=${tag}`;
    }

    // 3. If it's an HTTP(S) URL
    if (clean.startsWith('http://') || clean.startsWith('https://')) {
        try {
            const url = new URL(clean);
            const dpMatch = url.pathname.match(/\/dp\/([A-Z0-9]{10})/i);
            if (dpMatch && dpMatch[1]) {
                const asin = dpMatch[1];
                if (PRODUCT_SEARCH_FALLBACKS[asin]) {
                    const target = PRODUCT_SEARCH_FALLBACKS[asin];
                    if (VERIFIED_AMAZON_ASINS.has(target)) {
                        return `https://www.amazon.in/dp/${target}?tag=${tag}`;
                    }
                    return `https://www.amazon.in/s?k=${encodeURIComponent(target)}&tag=${tag}`;
                }
                if (VERIFIED_AMAZON_ASINS.has(asin)) {
                    url.searchParams.set('tag', tag);
                    return url.toString();
                }
            }
            url.searchParams.set('tag', tag);
            return url.toString();
        } catch {
            return `https://www.amazon.in/s?k=${encodeURIComponent(clean)}&tag=${tag}`;
        }
    }

    // 4. Default fallback: generate high-intent Amazon search with affiliate tag
    return `https://www.amazon.in/s?k=${encodeURIComponent(clean)}&tag=${tag}`;
}
