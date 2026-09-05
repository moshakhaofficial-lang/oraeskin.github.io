export interface Category {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    heroImage: string;
    topActives: string[];
    featuredConcern: string;
    itemCount: number;
}

export const CATEGORIES: Category[] = [
    {
        id: 'sunscreens',
        slug: 'sunscreens',
        name: 'Sunscreens & SPF',
        tagline: 'Zero White-Cast, Sweat-Resistant Daily Sun Protection for Indian Sun',
        description: 'Comprehensive reviews of photostable, broad-spectrum SPF 50+ sunscreens formulated to resist Indian heat, humidity, and tropical sweat without leaving greasy residues or a ghost-white cast.',
        icon: '☀️',
        heroImage: '/images/products/minimalist-spf50.jpg',
        topActives: ['Niacinamide', 'Hyaluronic Acid', 'UV Filters (Uvinul A Plus, Tinosorb)'],
        featuredConcern: 'Sun Tanning & UV Hyperpigmentation',
        itemCount: 8
    },
    {
        id: 'cleansers',
        slug: 'cleansers',
        name: 'Facial Cleansers',
        tagline: 'pH-Balanced Foaming & Hydrating Washes that Cleanse Without Stripping',
        description: 'From pore-clearing 2% Salicylic Acid gels to dermatologist-approved ceramide micellar foams, explore cleansers engineered to dissolve pollution and excess sebum while protecting your moisture barrier.',
        icon: '🫧',
        heroImage: '/images/products/cerave-cleanser.jpg',
        topActives: ['Salicylic Acid (BHA)', 'Ceramides', 'Glycerin', 'Zinc PCA'],
        featuredConcern: 'Clogged Pores, Blackheads & Breakouts',
        itemCount: 7
    },
    {
        id: 'serums',
        slug: 'serums',
        name: 'Serums & Actives',
        tagline: 'Targeted High-Potency Formulas for Melasma, Dark Spots & Glow',
        description: 'Concentrated active serums designed specifically for melanin-rich Indian skin prone to stubborn PIH (post-inflammatory hyperpigmentation), acne scars, and environmental dullness.',
        icon: '✨',
        heroImage: '/images/products/minimalist-spf50.jpg',
        topActives: ['10% Vitamin C', '10% Niacinamide', '2% Alpha Arbutin', '2% Hyaluronic Acid'],
        featuredConcern: 'Stubborn Dark Spots & Dull Skin Tone',
        itemCount: 9
    },
    {
        id: 'moisturizers',
        slug: 'moisturizers',
        name: 'Moisturizers & Barrier Creams',
        tagline: 'Ceramide-Rich, Oil-Free & Gel-Based Hydrators for All Seasons',
        description: 'Whether combatting air-conditioned dehydration or soothing irritated skin from over-exfoliation, discover top-rated moisturizers that lock in water without suffocating pores.',
        icon: '💧',
        heroImage: '/images/products/dotkey-rice-cream.jpg',
        topActives: ['Ceramides NP/AP/EOP', 'Fermented Rice Water', 'Oat Extract', 'Cica (Centella)'],
        featuredConcern: 'Damaged Moisture Barrier & Dry Flakes',
        itemCount: 8
    },
    {
        id: 'toners',
        slug: 'toners',
        name: 'Toners & Exfoliants',
        tagline: 'Gentle Glycolic, Salicylic & Hydrating Milks for Refined Texture',
        description: 'Clarify rough texture, unglue dead keratin buildup, and prep your skin for deeper active penetration with pH-optimized chemical exfoliants and soothing barrier toners.',
        icon: '🧪',
        heroImage: '/images/products/cetaphil-cleanser.jpg',
        topActives: ['8% Glycolic Acid (AHA)', '2% BHA Salicylic', 'Rice Bran Extract', 'Green Tea'],
        featuredConcern: 'Textured Skin & Enlarged Pores',
        itemCount: 6
    },
    {
        id: 'eye-care',
        slug: 'eye-care',
        name: 'Under-Eye Treatments',
        tagline: 'Caffeine & Peptide Formulas for Dark Circles, Puffiness & Fine Lines',
        description: 'Target genetic and fatigue-induced peri-orbital hyperpigmentation and fluid retention with lightweight, non-comedogenic eye creams formulated for sensitive orbital skin.',
        icon: '👁️',
        heroImage: '/images/products/avocado-night-cream.jpg',
        topActives: ['Caffeine 5%', 'Peptides Matrixyl 3000', 'Hyaluronic Acid', 'Vitamin K'],
        featuredConcern: 'Dark Circles & Morning Eye Puffiness',
        itemCount: 5
    },
    {
        id: 'lip-care',
        slug: 'lip-care',
        name: 'Lip Care & SPF Balms',
        tagline: 'Non-Sticky Barrier Lip Balms, SPF 30+ Protection & Overnight Masks',
        description: 'Keep lips plump, pink, and deeply shielded against tropical sun exposure and hyperpigmentation with ceramide and peptide-infused lip balms.',
        icon: '💋',
        heroImage: '/images/products/dotkey-watermelon.jpg',
        topActives: ['SPF 30 Filters', 'Ceramides', 'Shea Butter', 'Peptides'],
        featuredConcern: 'Pigmented, Chapped & Sun-Damaged Lips',
        itemCount: 4
    },
    {
        id: 'body-care',
        slug: 'body-care',
        name: 'Dermatological Body Care',
        tagline: 'AHA Body Lotions for Keratosis Pilaris, Body Sunscreens & Hydrators',
        description: 'Extend high-performance dermatological care below the neck. Target strawberry legs, rough elbows, bacne, and uneven body tanning with active body lotions.',
        icon: '🧴',
        heroImage: '/images/products/avocado-night-cream.jpg',
        topActives: ['Lactic Acid', 'Salicylic Acid', 'Urea 10%', 'Niacinamide'],
        featuredConcern: 'Keratosis Pilaris (Strawberry Legs) & Body Acne',
        itemCount: 5
    },
    {
        id: 'spot-treatments',
        slug: 'spot-treatments',
        name: 'Acne Spot Treatments',
        tagline: 'Hydrocolloid Patches & Overnight Benzoyl Gels for Emergency Breakouts',
        description: 'Fast-acting SOS interventions to flatten cystic bumps, calm inflammation, and absorb pus without causing dark post-blemish scarring.',
        icon: '🎯',
        heroImage: '/images/products/cerave-cleanser.jpg',
        topActives: ['Hydrocolloid Dressing', 'Benzoyl Peroxide 2.5%', 'Tea Tree Oil', 'Sulfur'],
        featuredConcern: 'Active Red Pimples & Hormonal Breakouts',
        itemCount: 5
    },
    {
        id: 'anti-aging',
        slug: 'anti-aging',
        name: 'Retinoids & Anti-Aging',
        tagline: 'Gentle Granactive Retinoids, Peptides & Bakuchiol for Indian Skin',
        description: 'Stimulate cellular renewal and collagen synthesis safely without triggering retinoid dermatitis or inflammatory post-hyperpigmentation common in melanin-rich skin.',
        icon: '⏳',
        heroImage: '/images/products/minimalist-spf50.jpg',
        topActives: ['0.3% Retinol with Squalane', 'Granactive Retinoid 2%', 'Multi-Peptides', 'Bakuchiol'],
        featuredConcern: 'Fine Lines, Loss of Firmness & Wrinkles',
        itemCount: 5
    }
];
