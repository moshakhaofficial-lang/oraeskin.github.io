export interface ComparisonItem {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    productAId: string;
    productBId: string;
    verdictSummary: string;
    winnerForA: string;
    winnerForB: string;
    climateVerdict: string;
    valueVerdict: string;
    lastUpdated: string;
}

export const COMPARISONS: ComparisonItem[] = [
    {
        slug: 'minimalist-spf50-vs-dermaco-hyaluronic-sunscreen',
        title: 'Minimalist SPF 50 vs The Derma Co 1% Hyaluronic Sunscreen',
        subtitle: 'Two of India’s most popular daily broad-spectrum sunscreens compared on white cast, sweat resistance, and acne safety.',
        category: 'sunscreens',
        productAId: 'minimalist-spf50',
        productBId: 'dermaco-hyaluronic-spf50',
        verdictSummary: 'Both formulas are exceptional zero-white-cast options for Indian skin. Minimalist offers slightly superior photostability and antioxidant protection, while The Derma Co excels for high-humidity summer wear due to its faster-absorbing aqua gel vehicle.',
        winnerForA: 'Best for normal, dry, or combination skin needing barrier vitamins and certified European photostability.',
        winnerForB: 'Best for oily, acne-prone skin in high humidity needing a weightless, non-tacky water-gel texture.',
        climateVerdict: 'In 35°C+ heat and monsoon humidity, The Derma Co absorbs with virtually zero residue. In dry air or air-conditioned offices, Minimalist provides longer-lasting hydration.',
        valueVerdict: 'Minimalist at ₹399 for 50g (₹7.98/g) offers slightly better price-per-gram value than The Derma Co at ₹449 for 50g (₹8.98/g).',
        lastUpdated: 'September 2026'
    },
    {
        slug: 'cerave-foaming-vs-cetaphil-gentle-cleanser',
        title: 'CeraVe Foaming Cleanser vs Cetaphil Gentle Skin Cleanser',
        subtitle: 'The ultimate barrier-safe facial wash showdown for Indian oily, dry, and sensitive skin.',
        category: 'cleansers',
        productAId: 'cerave-foaming-cleanser',
        productBId: 'cetaphil-gentle-cleanser',
        verdictSummary: 'CeraVe uses 3 essential ceramides and Niacinamide with a gel foam that removes excess sebum without stripping. Cetaphil uses a non-foaming lotion texture with Niacinamide and Panthenol designed for compromised, reactive skin.',
        winnerForA: 'Best for oily, combination, or acne-prone skin needing a satisfying cleanse that washes away pollution without tightness.',
        winnerForB: 'Best for dry, flaky, sensitive, or eczema-prone skin that cannot tolerate foaming surfactants.',
        climateVerdict: 'CeraVe is far superior for humid Indian summers where sebum builds up rapidly. Cetaphil is superior for dry Indian winters or compromised barriers after retinol overuse.',
        valueVerdict: 'Cetaphil at ₹395 for 125ml (₹3.16/ml) is more economical per unit volume than CeraVe imported at ₹625 for 87ml (₹7.18/ml).',
        lastUpdated: 'September 2026'
    },
    {
        slug: 'minimalist-10-vitc-vs-plum-15-vitc',
        title: 'Minimalist 10% Vitamin C vs Plum 15% Vitamin C Mandarin',
        subtitle: 'Comparing India’s top brightening serums: Ethyl Ascorbic Acid vs higher-strength L-Ascorbic derivatives.',
        category: 'serums',
        productAId: 'minimalist-vitc-10',
        productBId: 'plum-vitc-mandarin',
        verdictSummary: 'Minimalist uses 10% Ethyl Ascorbic Acid stabilized with Centella and Ferulic acid, making it safe for sensitive skin prone to tingling. Plum offers a punchier 15% concentration in a Japanese Mandarin base that brightens faster on stubborn tanning.',
        winnerForA: 'Best for beginners, sensitive skin, or acne-prone skin seeking gentle, non-irritating antioxidant defense.',
        winnerForB: 'Best for resilient skin dealing with stubborn sun-induced hyperpigmentation and dullness.',
        climateVerdict: 'Both serums feature water-light viscosity that layers effortlessly under daytime sunscreen without causing grease buildup in humid weather.',
        valueVerdict: 'Minimalist (₹699 for 30ml = ₹23.3/ml) and Plum (₹790 for 30ml = ₹26.3/ml) are closely matched in the mid-range active tier.',
        lastUpdated: 'September 2026'
    },
    {
        slug: 'minimalist-10-niacinamide-vs-dermaco-10-niacinamide',
        title: 'Minimalist 10% Niacinamide vs The Derma Co 10% Niacinamide',
        subtitle: 'Two best-selling pore-refining serums head-to-head for acne marks, sebum control, and barrier repair.',
        category: 'serums',
        productAId: 'minimalist-niacinamide-10',
        productBId: 'dermaco-10-niacinamide',
        verdictSummary: 'Minimalist pairs 10% Niacinamide with 1% Zinc PCA and fermented prebiotic enzymes in a fragrance-free base. The Derma Co blends 10% Niacinamide with Zinc PCA and Centella Asiatica.',
        winnerForA: 'Best for oily skin prone to active whiteheads and excess T-zone shine.',
        winnerForB: 'Best for redness-prone skin that benefits from soothing Centella alongside pore regulation.',
        climateVerdict: 'Both formulations dry down to a non-sticky matte finish within 45 seconds, making them ideal pre-sunscreen morning serums in Indian weather.',
        valueVerdict: 'Minimalist is priced at ₹599 for 30ml (₹19.96/ml), while The Derma Co is priced at ₹599 for 30ml (₹19.96/ml) — perfectly tied on economics.',
        lastUpdated: 'September 2026'
    },
    {
        slug: 'cerave-moisturizing-cream-vs-dot-and-key-rice-ceramide',
        title: 'CeraVe Moisturizing Cream vs Dot & Key Rice Water & Ceramide Cream',
        subtitle: 'Barrier repair battle: Pharmacological MVE-delivery ceramides vs probiotic rice water lightweight cream.',
        category: 'moisturizers',
        productAId: 'cerave-moisturizing-cream',
        productBId: 'dotkey-rice-ceramide-cream',
        verdictSummary: 'CeraVe is a heavy, rich occlusive cream utilizing biomimetic ceramides (1, 3, 6-II) and hyaluronic acid with multi-vesicular emulsion (MVE) technology. Dot & Key offers a lighter, souffle-like gel-cream infused with fermented rice water and ceramides.',
        winnerForA: 'Best for severely dry, compromised, peeling skin, or as a protective barrier shield during dry winter months.',
        winnerForB: 'Best for normal to combination skin that wants ceramide repair without the heavy greasy occlusiveness of a balm.',
        climateVerdict: 'Dot & Key is significantly more wearable during hot Indian summers and monsoons. CeraVe is superior for nighttime air-conditioned dehydration and north Indian winters.',
        valueVerdict: 'Dot & Key at ₹395 for 100g (₹3.95/g) offers superior mass value, while CeraVe at ₹699 for 50g (₹13.98/g) is a targeted therapeutic investment.',
        lastUpdated: 'September 2026'
    }
];

export function getComparisonBySlug(slug: string): ComparisonItem | undefined {
    return COMPARISONS.find(c => c.slug === slug);
}
