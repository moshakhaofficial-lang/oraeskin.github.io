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
    'B09SLF5ZH8', // Aqualogica Radiance+ Dewy Sunscreen
    'B0DVB9CGDS', // Dr. Sheth's Ceramide & Vitamin C Sunscreen
    'B003YMJJSK', // CeraVe Foaming Facial Cleanser
    'B096PJMGPL', // Minimalist 2% Salicylic Acid Face Wash
    'B01CCGW4OE', // Cetaphil Gentle Skin Hydrating Cleanser
    'B0DFPZVTWZ', // The Face Shop Rice Water Bright Cleanser
    'B0FJMB2NZM', // Simple Kind to Skin Refreshing Facial Wash
    'B0HFRS79JS', // Minimalist 10% Vitamin C Face Serum
    'B0HG9T9T28', // Plum 15% Vitamin C Face Serum
    'B0FYHFR32Q', // Minimalist 10% Niacinamide Face Serum
    'B0GWN2JFFM', // Minimalist 2% Alpha Arbutin Face Serum
    'B0DMTDN158', // The Derma Co 10% Niacinamide Serum
    'B0BDVG99J5', // Dot & Key Rice Water & Ceramide Cream
    'B00TTD9BRC', // CeraVe Moisturizing Cream
    'B0F6Y86BSD', // Minimalist Vitamin B5 10% Moisturizer
    'B07CH8F17Q', // Bioderma Atoderm Intensive Baume
    'B0D4K7R9S5', // Minimalist 8% Glycolic Acid Exfoliating Liquid
    'B00OCJ5MVM', // Plum Green Tea Alcohol-Free Toner
    'B0H9RYLKZJ', // Minimalist PHA 3% Alcohol-Free Face Toner
    'B00OZ63ODA', // Cosrx AHA/BHA Clarifying Treatment Toner
    'B0GRW7P4YR', // CeraVe Eye Repair Cream
    'B0CHYR58VF', // Minimalist 5% Caffeine Under-Eye Serum
    'B0G6KTR337', // The Derma Co 5% Caffeine Under-Eye Serum
    'B0BJ6XPC77', // Minimalist SPF 30 Lip Balm with Ceramides
    'B08RX6S5D1', // Dot & Key Vitamin C+E Lip Sleeping Mask
    'B0C7VQNQ4B', // Minimalist 2% Salicylic Acid Body Wash
    'B0CJJN6XNK', // Plum BodyLovin Vanilla Caramello Body Lotion
    'B006NVDWGE', // Biotique Morning Nectar Lotion
    'B09B3CPDSJ', // The Derma Co 100% Hydrocolloid Acne Patches
    'B00U7CRJ00', // Sebogel Salicylic Acid & Nicotinamide Blemish Gel
    'B0789NX2ZV', // Minimalist 0.3% Retinol Face Serum
    'B08F8W91F8', // Minimalist Granactive Retinoid 2%
]);

// Map of legacy/dead ASINs to verified direct ASINs
export const PRODUCT_SEARCH_FALLBACKS: Record<string, string> = {
    'B07C5SKVL7': 'B003YMJJSK', // CeraVe Foaming Cleanser
    'B07MGB563Q': 'B01CCGW4OE', // Cetaphil Cleanser
    'B096VDR2BC': 'B096PJMGPL', // Minimalist Salicylic Cleanser
    'B08Z4J8JWD': 'B0CJJN6XNK', // Plum BodyLovin Lotion
    'B00791DJ9O': 'B006NVDWGE', // Biotique Morning Nectar
    'B09SH78STH': 'B0DVB9CGDS', // Dr. Sheth's Ceramide Sunscreen
    'B00KGGRG2C': 'B0DFPZVTWZ', // The Face Shop Rice Water Cleanser
    'B00FSB7C00': 'B0DFPZVTWZ', // The Face Shop Rice Water Cleanser
    'B07N9CCXN9': 'B0FJMB2NZM', // Simple Refreshing Facial Wash
    'B07C3M2RL2': 'B0FJMB2NZM', // Simple Refreshing Facial Wash
    'B08F9V7T7T': 'B0HFRS79JS', // Minimalist 10% Vitamin C
    'B096VJ969J': 'B0HFRS79JS', // Minimalist 10% Vitamin C
    'B097Z77D3D': 'B0HG9T9T28', // Plum 15% Vitamin C
    'B094R9TDRW': 'B0HG9T9T28', // Plum 15% Vitamin C
    'B08DFL3M9K': 'B0HFRS79JS', // Vitamin C Serum
    'B08F9WPM24': 'B0FYHFR32Q', // Minimalist 10% Niacinamide
    'B08F9TNQ8L': 'B0GWN2JFFM', // Minimalist 2% Alpha Arbutin
    'B08F9W9WCR': 'B0GWN2JFFM', // Minimalist 2% Alpha Arbutin
    'B08K3S6P2G': 'B0DMTDN158', // The Derma Co 10% Niacinamide
    'B096VD6J8K': 'B0F6Y86BSD', // Minimalist Vitamin B5
    'B094R9TFQ2': 'B0F6Y86BSD', // Minimalist Vitamin B5
    'B00U3U408K': 'B07CH8F17Q', // Bioderma Atoderm Intensive Baume
    'B0B39LTVP4': 'B0D4K7R9S5', // Minimalist 8% Glycolic Acid
    'B08F9V7T7U': 'B0H9RYLKZJ', // Minimalist PHA 3% Toner
    'B08F9WMQLY': 'B0H9RYLKZJ', // Minimalist PHA 3% Toner
    'B00BFZ744K': 'B0GRW7P4YR', // CeraVe Eye Repair Cream
    'B096VD6J8M': 'B0CHYR58VF', // Minimalist 5% Caffeine Serum
    'B095S6Q8S5': 'B0CHYR58VF', // Minimalist 5% Caffeine Serum
    'B0BVWDJTHG': 'B0G6KTR337', // The Derma Co 5% Caffeine Serum
    'B08GGBW1K8': 'B0G6KTR337', // The Derma Co 5% Caffeine Serum
    'B09SK854F9': 'B0BJ6XPC77', // Minimalist SPF 30 Lip Balm
    'B08L7V7D3V': 'B08RX6S5D1', // Dot & Key Lip Mask
    'B0B941K5H7': 'B0C7VQNQ4B', // Minimalist 2% Salicylic Body Wash
    'B09R1T6W12': 'B09B3CPDSJ', // The Derma Co Acne Patches
    'B08K3N7H9R': 'B0789NX2ZV', // Minimalist 0.3% Retinol
    'B08F9VMT4X': 'B0789NX2ZV', // Minimalist 0.3% Retinol
    'B08F9V7T7W': 'B08F8W91F8', // Minimalist Granactive Retinoid 2%
    'B07S8W5WJ7': 'B09FPS9D5T', // Sunscreen fallback
    'B0B13RF99G': 'B0DVB9CGDS', // Dr. Sheth's Ceramide Sunscreen
};

/**
 * Generates a direct product affiliate tracking link for Amazon India.
 * Directs strictly to the verified Amazon.in product detail page with affiliate tag.
 */
export function getAmazonAffiliateUrl(asinOrUrl: string, tag: string = SITE_CONFIG.amazon.tag): string {
    if (!asinOrUrl) return `https://www.amazon.in/?tag=${tag}`;
    const clean = asinOrUrl.trim();
    
    // 1. Check if it's in our known replacements map to a verified ASIN
    if (PRODUCT_SEARCH_FALLBACKS[clean]) {
        const target = PRODUCT_SEARCH_FALLBACKS[clean];
        if (VERIFIED_AMAZON_ASINS.has(target) || /^[A-Z0-9]{10}$/i.test(target)) {
            return `https://www.amazon.in/dp/${target}?tag=${tag}`;
        }
        return `https://www.amazon.in/s?k=${encodeURIComponent(target)}&tag=${tag}`;
    }

    // 2. If it's a verified active Amazon ASIN
    if (VERIFIED_AMAZON_ASINS.has(clean)) {
        return `https://www.amazon.in/dp/${clean}?tag=${tag}`;
    }

    // 3. If it's an ASIN pattern (10 alphanumeric chars)
    if (/^[A-Z0-9]{10}$/i.test(clean)) {
        return `https://www.amazon.in/dp/${clean}?tag=${tag}`;
    }

    // 4. If it's an HTTP(S) URL
    if (clean.startsWith('http://') || clean.startsWith('https://')) {
        try {
            const url = new URL(clean);
            const dpMatch = url.pathname.match(/\/dp\/([A-Z0-9]{10})/i);
            if (dpMatch && dpMatch[1]) {
                const asin = dpMatch[1];
                if (PRODUCT_SEARCH_FALLBACKS[asin]) {
                    const target = PRODUCT_SEARCH_FALLBACKS[asin];
                    return `https://www.amazon.in/dp/${target}?tag=${tag}`;
                }
                url.searchParams.set('tag', tag);
                return url.toString();
            }
            url.searchParams.set('tag', tag);
            return url.toString();
        } catch {
            return `https://www.amazon.in/dp/B09FPS9D5T?tag=${tag}`;
        }
    }

    // 5. Default fallback to top editor pick
    return `https://www.amazon.in/dp/B09FPS9D5T?tag=${tag}`;
}
