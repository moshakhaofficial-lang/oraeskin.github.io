export const SITE_CONFIG = {
    name: 'OraeSkin',
    title: 'OraeSkin - India\'s Trusted Skincare Editorial, Reviews & Buying Guides',
    description: 'Expert skincare reviews, dermatologist-approved routines, and top-rated skincare product guides on Amazon India tailored for Indian skin types and tropical weather.',
    url: 'https://www.oraeskin.in',
    googleAnalyticsId: 'G-E978F44468',
    amazon: {
        tag: 'oraeskin-21',
        domain: 'amazon.in',
        disclaimer: 'As an Amazon Associate, OraeSkin earns from qualifying purchases. We independently research and recommend the best products for Indian skin.'
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
    'B0B3MNVPDV', // Aqualogica Radiance+ Dewy Sunscreen
    'B0DVB9CGDS', // Dr. Sheth's Ceramide & Vitamin C Sunscreen
    'B07VP5JFRB', // Re'equil Ultra Matte Dry Touch Sunscreen
    'B07C5SKVL7', // CeraVe Foaming Facial Cleanser
    'B096PJMGPL', // Minimalist 2% Salicylic Acid Face Wash
    'B002P3L99G', // La Roche-Posay Effaclar Purifying Foaming Gel
    'B006LXDMCS', // Neutrogena Oil-Free Acne Wash
    'B095J52W7P', // The Derma Co 1% Salicylic Acid Gel Face Wash
    'B01CCGW732', // Cetaphil Oily Skin Cleanser
    'B0GFTYW6P1', // Re'equil Oil Control Face Wash
    'B01CCGW4OE', // Cetaphil Gentle Skin Hydrating Cleanser
    'B0DRYQ6274', // The Face Shop Rice Water Bright Cleanser
    'B0FJMB2NZM', // Simple Kind to Skin Refreshing Facial Wash
    'B08MVBF4P8', // Minimalist 10% Vitamin C Face Serum
    'B095PRGHDX', // Plum 15% Vitamin C Face Serum
    'B08F9MF314', // Minimalist 10% Niacinamide Face Serum
    'B08GGDRRQ8', // Minimalist 2% Alpha Arbutin Face Serum
    'B08TQGMWT1', // The Derma Co 10% Niacinamide Serum
    'B0BDVG99J5', // Dot & Key Rice Water & Ceramide Cream
    'B07CH8F17Q', // CeraVe Moisturizing Cream
    'B0F6Y86BSD', // Minimalist Vitamin B5 10% Moisturizer
    'B07SGC46XW', // Bioderma Atoderm Intensive Baume
    'B0BNBXWVY3', // Minimalist 8% Glycolic Acid Exfoliating Liquid
    'B00OCJ5M6C', // Plum Green Tea Alcohol-Free Toner
    'B08S581RXJ', // Minimalist PHA 3% Alcohol-Free Face Toner
    'B00OZ63ODA', // Cosrx AHA/BHA Clarifying Treatment Toner
    'B0GRW7P4YR', // CeraVe Eye Repair Cream
    'B0CHYR58VF', // Minimalist 5% Caffeine Under-Eye Serum
    'B08TTW5RJG', // The Derma Co 5% Caffeine Under-Eye Serum
    'B0BJ6XPC77', // Minimalist SPF 30 Lip Balm with Ceramides
    'B08RX6S5D1', // Dot & Key Vitamin C+E Lip Sleeping Mask
    'B0BSN7LHC4', // Minimalist 2% Salicylic Acid Body Wash
    'B0CJJN6XNK', // Plum BodyLovin Vanilla Caramello Body Lotion
    'B006NVDWGE', // Biotique Morning Nectar Lotion
    'B00U7CRJ00', // Sebogel Salicylic Acid & Nicotinamide Blemish Gel
    'B091JG3GJ5', // Minimalist 0.3% Retinol Face Serum
    'B08F8W91F8', // Minimalist Granactive Retinoid 2%
    'B01MUZVE1C', // The Ordinary Caffeine Solution 5% + EGCG
    'B0B45LL4DD', // Beauty of Joseon Revive Eye Serum
    'B096MNYLWS', // The Derma Co 10% Vitamin C + 5% Niacinamide Serum
    'B0B45RB1RV', // Deconstruct Gel Sunscreen SPF 50
    'B0C3CP6B5Y', // Foxtale Glow Sunscreen SPF 50
    'B08GG9M863', // Minimalist 2% Salicylic Acid Serum
    'B0C61Q7DM7', // The Derma Co 2% Salicylic Acid Serum
    'B0C3PCJ6SD', // The Ordinary Salicylic Acid 2% Solution
    'B0D2ZVYLSS', // Nua Pimple Patch
    'B0GDZJN3MK', // Deconstruct Pimple Patches
    'B0BPC8KG73', // Laneige Lip Sleeping Mask
    'B0CND4C95T', // WishCare Lip Balm SPF 50 (Untinted)
    'B0CND1VF2W', // WishCare Tinted Lip Balm SPF 50
    'B0DCBCL72R', // Dot & Key Barrier Repair Hydrating Lip Balm SPF 50
    'B0BV34LQRP', // Deconstruct Brightening Lip Balm SPF 50
    'B08TMFC5BN', // Re'equil Sheer Zinc Tinted Sunscreen SPF 50
    'B07G8J6ZD4', // La Shield Fisico Mineral Sunscreen SPF 50+
    'B085T374WK', // Lakmē Sun Expert Tinted Sunscreen SPF 50
    'B0CX1YQ764', // Dot & Key Strawberry Dew Tinted Sunscreen SPF 50+
    'B097K2HRQN', // Dot & Key 72HR Hydrating Gel Moisturizer
    'B09PV4379W', // Plum 3% Niacinamide & Rice Water Toner
    'B08423CWXC', // Plum E-Luminence Simply Supple Cleansing Balm
    'B0CHJSL1KV', // Dot & Key Strawberry Dew Cleansing Balm
    'B071CDDG3H', // Garnier Micellar Cleansing Water (Hydrating & Soothing)
    'B002XZLAWM', // Bioderma Sensibio H2O Micellar Water
    'B08FB972DT', // Minimalist 2% Hyaluronic Acid + PGA Serum
    'B01MYEZPC8', // The Ordinary Hyaluronic Acid 2% + B5 (with Ceramides)
    'B06XCZFCFZ', // The Ordinary Alpha Arbutin 2% + HA
    'B09DLFCB69', // Beauty of Joseon Glow Deep Serum Rice + Arbutin
    'B08XC5LQ7B', // Minimalist 3% Tranexamic Acid Serum
    'B0C1NQRPXW', // Foxtale 3% Tranexamic Acid Serum
    'B0D45NXZDZ', // The Derma Co Tran-Zelaic Pigmentation Corrector Serum
    'B0DG1DQ2S7', // Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum
    'B08MVD6T8V', // Minimalist Multi Peptide Serum (7% Matrixyl 3000)
    'B0C9DXGXZ3', // The Ordinary Multi-Peptide + Copper Peptides 1%
    'B0D8W2W8C2', // EQQUALBERRY Bakuchiol Plumping Serum
    'B0BW5KJGHT', // Blue Nectar 5% Bakuchiol Serum
    'B09B221Q7K', // SKIN1004 Madagascar Centella Soothing Cream
    'B0BTRWGQNV', // SKIN1004 Centella Probio-Cica Intensive Ampoule
    'B01LEJ5MSK', // COSRX Advanced Snail 92 All In One Cream
    'B07C5SS6YD', // Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant
    'B0B97B7GLK', // NIVEA Derma Skin Clear Toner
    'B0DMPDCBLH', // Hyphen 7% Ceramides-NMF Milky Toner Essence
    'B0G5949WL1', // Minimalist Vitamin B12 + Hyaluronic Toner
    'B085QMJ3TS', // Dabur Gulabari Premium Rose Water
    'B07MW7CX3T', // UrbanBotanics Steam Distilled Rose Water Spray
    'B09ZVGH8MG', // Forest Essentials Facial Tonic Mist Pure Rosewater
    'B08JLMRTZS', // Anua Heartleaf 77 Clear Pad
    'B0CS3KJZXF', // mCaffeine 2% Salicylic Acid Acne Pads
    'B09VLDY46B', // Minimalist 7% ALA + Glycolic Brightening Face Wash
    'B0B9RFCS5S', // L'Oréal Paris Glycolic Bright Daily Foaming Cleanser
    'B0GLGCTPRC', // Re'equil Fruit AHA Face Wash
    'B0DMTDN158', // The Ordinary Glycolic Acid 7% Exfoliating Toner
    'B00PBX3L7K', // COSRX Advanced Snail 96 Mucin Power Essence
    'B09GGCWKR7', // The Derma Co Micro-Tip Pimple Patches
    'B08TBBDRYZ', // Benzac AC 2.5% Benzoyl Peroxide Gel (20g)
    'B0882D8J7J', // Persol AC 2.5% Benzoyl Peroxide Gel (30g)
    'B0DZ7L2RD1', // The Derma Co 2.5% Benzoyl Peroxide Gel Face Wash with Ceramides
    'B0CD1RSQLT', // Benzac AC 5% Benzoyl Peroxide Gel Wash (100ml)
    'B0017SWIU4', // Mario Badescu Drying Lotion for Acne-Prone Skin (29ml)
    'B09S6MJRTX', // The Pink Foundry Acne Spot Corrector with Salicylic Acid & Sulfur (15ml)
    'B07952C372', // De La Cruz 10% Sulfur Ointment Acne Medication (6g)
    'B001N1SZF2', // The Body Shop Tea Tree Oil for Blemish-Prone Skin (10ml)
    'B0CVN1PF8Z', // Indus Valley Calming Acne Gel with Tea Tree Oil & Seaweed (30ml)
    'B075QNC39Q', // Avarelle Clear Cover Hydrocolloid Pimple Patch with Tea Tree & Calendula (40 Count)
    'B0F2277MT8', // Conscious Chemist Self-Dissolving Microneedle Acne Patches with 2% Salicylic Acid (8 Patches)
    'B0FTZCWGSK', // The Ordinary PHA 5% Exfoliating Lip Serum (15ml)
    'B0CB23VJNH', // e.l.f. Lip Exfoliator Sugar Scrub with Jojoba Oil
    'B004FHZKOA', // Aquaphor Lip Repair (10ml)
    'B0CMJZ8G6Y', // e.l.f. Glow Reviver Tinted Lip Oil with Jojoba
    'B0DSLX4G4Q', // Laneige Glaze Craze Tinted Lip Serum with Peptides & Ceramides
    'B0CXXP862S', // Swiss Beauty Dip Tint Colour-Changing Lip Oil (3ml)
    'B08MC5MJ33', // Plum Candy Melts Vegan Tinted Lip Balm (Red Velvet Love)
    'B01N2LYRWX', // Juicy Chemistry Organic Lip Balm with Blood Orange & Rosehip (5g)
    'B00V4JP4PM', // Forest Essentials Rose Lip Balm with Kokum Butter (4g)
    'B0F3XJ3JTV', // Deconstruct Brightening Tinted Lip Balm SPF 50
    'B0FNN8WXTM', // Dot & Key Meltie Tinted Lip Balm SPF 50+ with Kojic & Vitamin C
    'B0006SQ9CE', // Neutrogena Norwegian Formula Concentrated Hand Cream, Fragrance-Free (50ml)
    'B00121UVU0', // O’Keeffe’s Working Hands Hand Cream for Extremely Dry, Cracked Hands (100ml)
    'B08PVDWT4Q', // Charmis Vitamin C & Hyaluronic Hand Cream (150g)
    'B0CG5L3VZG', // Fixderma Hand Cream with Cocoa Butter & Sea Buckthorn (30g)
    'B09W5Q9ZPZ', // Be Bodywise 20% Urea Foot Cream Roll-On with 2% Lactic Acid (50ml)
    'B0BD4H29RJ', // Fixderma Foobetik Foot Cream for Dry & Cracked Feet (50g)
    'B0DTB638JZ', // Cureskin 10% Urea Foot Cream for Cracked Heels (50g)
    'B0B5ZBRDZ8', // Be Bodywise 10% Urea Body Lotion with Ceramides (200ml)
    'B0FWRQ24KD', // Be Bodywise 20% Urea Body Lotion with Ceramides (300ml)
    'B0BFQX7MS9', // Be Bodywise 5% AHA Lactic Acid Body Lotion (200ml)
    'B0BG8X8XTC', // WishCare 10% AHA + 1% BHA Body Lotion (200ml)
    'B0CWPNGRR9', // Be Bodywise 1% Salicylic Acid Body Wash (700ml)
    'B0BG8W7PJ7', // WishCare Sunscreen Body Lotion SPF 50 PA++++ (200ml)
    'B0DYV56LD9', // SunScoop 5% Niacinamide Sunscreen Body Lotion SPF 50+ PA++++ (200ml)
    'B0GLZSD24R', // Vaseline Sun Protect SPF 50 PA++++ Body Lotion (400ml)
    'B00GMC04BK', // Bio-Oil Skincare Oil (60ml)
    'B09TL5SDW8', // Plum BodyLovin’ Vanilla Vibes Body Oil (100ml)
    'B0CVX3RJ2V', // Forest Essentials After Bath Oil Lime Saffron Oudh (50ml)
    'B0FQNVY42Q', // Vaseline Intensive Care Cocoa Radiant Body Oil (200ml)
    'B0FM7VYRPW', // Plum BodyLovin’ Vanilla Caramello Body Lotion (200ml)
    'B0BMLY5MYH', // The Love Co Warm Vanilla Body Lotion (250ml)
    'B0BG8XSTP8', // WishCare Multi-Vitamin Brightening Body Lotion with 5% Vitamin C & 5% Niacinamide (200ml)
    'B0GSZ8DDJX', // Vaseline Gluta-Hya Dewy Radiance Body Lotion (330ml)
    'B09ZL9QY3B', // Vaseline Daily Brightening Body Lotion with Niacinamide (400ml)
    'B0BBRF8P9L', // Be Bodywise 10% Niacinamide Brightening Body Lotion (200ml)
    'B0FQBCD9SV', // Fixderma Shadow Invisible Sunscreen Stick SPF 50 PA+++ (15g)
    'B0BQVTM1BJ', // Beauty of Joseon Matte Sun Stick SPF 50 PA++++ (18g)
    'B0CF5PYT2S', // Earth Rhythm Glow Surge Vitamin C & E Sunstick SPF 50 (20g)
    'B0F1MY7LZJ', // Lakmé Sun Expert Invisible Sunstick SPF 50+ PA++++ (8g)
    'B0CTT91H5J', // Dot & Key Lime Rush Swim + Sports Sunscreen SPF 50+ PA++++ (50g)
    'B082PFY9S7', // Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 50+ PA++++ (80ml)
    'B0736VCPPV', // Mitchell USA Anti-Aging Neck Therapy Cream (50g)
    'B07KGMWBHM', // Mizon Snail Intensive Gold Eye Gel Patch (60 Patches)
    'B0C5HPRVP7', // Dot & Key Watermelon Cooling Hydrogel Under Eye Patches (60 Patches)
    'B0CR44H3PC', // mCaffeine Coffee Hydrogel Under Eye Patches with Caffeine (15 Pairs)
    'B08L95888H', // Cetaphil Brightening Night Comfort Cream with Niacinamide (50g)
    'B0B9QY2YHQ', // L’Oréal Paris Glycolic Bright Glowing Night Cream (15ml)
    'B08WLSGJFC', // Pilgrim Korean Retinol Night Cream with Hyaluronic Acid & Vitamin C (50g)
    'B0DCVLFTVL', // Aveeno Baby Soothing Relief Moisture Cream with Colloidal Oat (100g)
    'B0BSLF2RXJ', // Emcure Aquaoat Moisturizing Cream with Colloidal Oatmeal & Ceramides (100g)
    'B08KSL2QNF', // Minimalist 100% Plant-Derived Squalane Face Oil (30ml)
    'B07PSKR85S', // The Ordinary Squalane Cleanser (50ml)
    'B0D8CXZKF3', // The Ordinary Squalane + Amino Acids Hydrating Lip Balm (15ml)
]);

// Map of legacy/dead ASINs to verified direct ASINs
export const PRODUCT_SEARCH_FALLBACKS: Record<string, string> = {
    'B07MGB563Q': 'B01CCGW4OE', // Cetaphil Cleanser
    'B096VDR2BC': 'B096PJMGPL', // Minimalist Salicylic Cleanser
    'B08Z4J8JWD': 'B0CJJN6XNK', // Plum BodyLovin Lotion
    'B00791DJ9O': 'B006NVDWGE', // Biotique Morning Nectar
    'B09SH78STH': 'B0DVB9CGDS', // Dr. Sheth's Ceramide Sunscreen
    'B00KGGRG2C': 'B0DRYQ6274', // The Face Shop Rice Water Cleanser
    'B00FSB7C00': 'B0DRYQ6274', // The Face Shop Rice Water Cleanser
    'B0DFPZVTWZ': 'B0DRYQ6274', // The Face Shop Rice Water Cleanser
    'B07N9CCXN9': 'B0FJMB2NZM', // Simple Refreshing Facial Wash
    'B07C3M2RL2': 'B0FJMB2NZM', // Simple Refreshing Facial Wash
    'B08F9V7T7T': 'B08MVBF4P8', // Minimalist 10% Vitamin C
    'B096VJ969J': 'B08MVBF4P8', // Minimalist 10% Vitamin C
    'B097Z77D3D': 'B095PRGHDX', // Plum 15% Vitamin C
    'B094R9TDRW': 'B095PRGHDX', // Plum 15% Vitamin C
    'B0HG9T9T28': 'B095PRGHDX', // Plum 15% Vitamin C
    'B08DFL3M9K': 'B08MVBF4P8', // Vitamin C Serum
    'B08F9WPM24': 'B08F9MF314', // Minimalist 10% Niacinamide
    'B0FYHFR32Q': 'B08F9MF314', // Minimalist 10% Niacinamide
    'B08F9TNQ8L': 'B08GGDRRQ8', // Minimalist 2% Alpha Arbutin
    'B08F9W9WCR': 'B08GGDRRQ8', // Minimalist 2% Alpha Arbutin
    'B08K3S6P2G': 'B08TQGMWT1', // The Derma Co 10% Niacinamide
    'B096VD6J8K': 'B0F6Y86BSD', // Minimalist Vitamin B5
    'B094R9TFQ2': 'B0F6Y86BSD', // Minimalist Vitamin B5
    'B00U3U408K': 'B07SGC46XW', // Bioderma Atoderm Intensive Baume
    'B0B39LTVP4': 'B0BNBXWVY3', // Minimalist 8% Glycolic Acid
    'B0D4K7R9S5': 'B0BNBXWVY3', // Minimalist 8% Glycolic Acid
    'B08F9V7T7U': 'B08S581RXJ', // Minimalist PHA 3% Toner
    'B08F9WMQLY': 'B08S581RXJ', // Minimalist PHA 3% Toner
    'B0H9RYLKZJ': 'B08S581RXJ', // Minimalist PHA 3% Toner
    'B00OCJ5MVM': 'B00OCJ5M6C', // Plum Green Tea Toner
    'B00BFZ744K': 'B0GRW7P4YR', // CeraVe Eye Repair Cream
    'B096VD6J8M': 'B0CHYR58VF', // Minimalist 5% Caffeine Serum
    'B095S6Q8S5': 'B0CHYR58VF', // Minimalist 5% Caffeine Serum
    'B0BVWDJTHG': 'B08TTW5RJG', // The Derma Co 5% Caffeine Serum
    'B08GGBW1K8': 'B08TTW5RJG', // The Derma Co 5% Caffeine Serum
    'B09SK854F9': 'B0BJ6XPC77', // Minimalist SPF 30 Lip Balm
    'B08L7V7D3V': 'B08RX6S5D1', // Dot & Key Lip Mask
    'B0B941K5H7': 'B0BSN7LHC4', // Minimalist 2% Salicylic Body Wash
    'B09R1T6W12': 'B09GGCWKR7', // The Derma Co Acne Patches
    'B09B3CPDSJ': 'B09GGCWKR7', // The Derma Co Acne Patches
    'B08K3N7H9R': 'B091JG3GJ5', // Minimalist 0.3% Retinol
    'B08F9VMT4X': 'B091JG3GJ5', // Minimalist 0.3% Retinol
    'B0789NX2ZV': 'B091JG3GJ5', // Minimalist 0.3% Retinol
    'B08F9V7T7W': 'B08F8W91F8', // Minimalist Granactive Retinoid 2%
    'B07S8W5WJ7': 'B09FPS9D5T', // Sunscreen fallback
    'B0B13RF99G': 'B0DVB9CGDS', // Dr. Sheth's Ceramide Sunscreen
    'B09SLF5ZH8': 'B0B3MNVPDV', // Aqualogica Radiance+ Sunscreen
    'B08F9V7T7S': 'B07VP5JFRB', // Re'equil Ultra Matte Sunscreen
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
