export type SkinType = 'All' | 'Oily' | 'Dry' | 'Combination' | 'Sensitive' | 'Normal' | 'Acne-Prone';

export interface SkincareProduct {
    id: string;
    category: string;
    brand: string;
    title: string;
    asin: string;
    badge?: string;
    rating: number;
    reviewCount: string;
    priceEst: string;
    image: string;
    skinType: SkinType[];
    concerns: string[];
    keyIngredients: string[];
    pros: string[];
    cons: string[];
    verdict: string;
    scores: {
        formula: number;           // /10
        weatherResilience: number; // /10
        texture: number;           // /10
        value: number;             // /10
        overall: number;           // /10
    };
}

export const PRODUCTS: SkincareProduct[] = [
    // -------------------------------------------------------------
    // SUNSCREENS
    // -------------------------------------------------------------
    {
        id: 'minimalist-spf50',
        category: 'sunscreens',
        brand: 'Minimalist',
        title: 'Minimalist SPF 50 PA++++ Multi-Vitamin Sunscreen',
        asin: 'B09FPS9D5T',
        badge: "Editor's Choice — Best Overall",
        rating: 4.8,
        reviewCount: '24,300+',
        priceEst: '₹399',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['All', 'Sensitive', 'Combination'],
        concerns: ['Sun Tanning', 'Hyperpigmentation', 'UV Aging'],
        keyIngredients: ['Niacinamide (Vitamin B3)', 'Vitamin B5', 'Vitamin F', 'New-Gen UV Filters'],
        pros: [
            'Zero white cast on Indian Fitzpatrick skin types III to V',
            'Photostable modern European UV filters (Uvinul T 150, Avobenzone)',
            'Infused with multi-vitamins to repair past UV free radical damage'
        ],
        cons: [
            'Dewy finish can feel slightly heavy on extremely oily skin in humid monsoon'
        ],
        verdict: 'The gold standard everyday sunscreen for Indian skin. Exceptional broad-spectrum protection, zero cast, and great hydration.',
        scores: { formula: 9.8, weatherResilience: 9.4, texture: 9.7, value: 9.9, overall: 9.7 }
    },
    {
        id: 'dermaco-hyaluronic-spf50',
        category: 'sunscreens',
        brand: 'The Derma Co',
        title: 'The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++',
        asin: 'B0BVWDJTHF',
        badge: 'Best for Oily & Acne-Prone Skin',
        rating: 4.7,
        reviewCount: '19,500+',
        priceEst: '₹449',
        image: '/images/products/dermaco-hyaluronic.jpg',
        skinType: ['Oily', 'Combination', 'Sensitive'],
        concerns: ['Clogged Pores', 'Oil Control', 'Sweat'],
        keyIngredients: ['1% Hyaluronic Acid', '1% Vitamin E', 'Broad Spectrum UV Filters'],
        pros: [
            'Ultra-light water gel texture that absorbs in 10 seconds',
            'Non-comedogenic and completely non-greasy finish',
            'Zero eye stinging even in high humidity and sweat'
        ],
        cons: [
            'Not deeply moisturizing on dry flaky winter patches'
        ],
        verdict: 'The holy grail sunscreen for oily and acne-prone skin in tropical heat. Completely weightless.',
        scores: { formula: 9.6, weatherResilience: 9.8, texture: 9.9, value: 9.3, overall: 9.6 }
    },
    {
        id: 'dotkey-watermelon-spf50',
        category: 'sunscreens',
        brand: 'Dot & Key',
        title: 'Dot & Key Watermelon Hyaluronic Cooling Sunscreen SPF 50+ PA+++',
        asin: 'B0BQN2YWN5',
        badge: 'Best Cooling & Dewy Glow',
        rating: 4.6,
        reviewCount: '14,200+',
        priceEst: '₹395',
        image: '/images/products/dotkey-watermelon.jpg',
        skinType: ['Normal', 'Dry', 'Combination'],
        concerns: ['Dullness', 'Heat Flush', 'Dehydration'],
        keyIngredients: ['Watermelon Extract', 'Hyaluronic Acid', 'Beetroot Extract'],
        pros: [
            'Instant cooling sensation upon application on warm summer days',
            'Provides a radiant glass-skin glow under makeup',
            'Quick-absorbing fluid texture'
        ],
        cons: [
            'Contains subtle fragrance which very reactive sensitive skin may dislike'
        ],
        verdict: 'A refreshing, thirst-quenching sunscreen that combines powerful UV defense with a luminous dewy finish.',
        scores: { formula: 9.2, weatherResilience: 9.1, texture: 9.5, value: 9.4, overall: 9.3 }
    },
    {
        id: 'aqualogica-radiance-spf50',
        category: 'sunscreens',
        brand: 'Aqualogica',
        title: 'Aqualogica Radiance+ Dewy Sunscreen SPF 50+ PA++++',
        asin: 'B09SLF5ZH8',
        badge: 'Best Luminous Glow for Dry Skin',
        rating: 4.6,
        reviewCount: '16,800+',
        priceEst: '₹399',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['Dry', 'Normal', 'Combination'],
        concerns: ['Dullness', 'Dry Patches', 'Pigmentation'],
        keyIngredients: ['Watermelon', 'Niacinamide', 'Hyaluronic Acid'],
        pros: [
            'Delivers a luminous glass-skin glow without glitter or greasy oils',
            'Lightweight water-burst texture',
            'High PA++++ UVA rating against long-term sun spots'
        ],
        cons: [
            'Needs reapplication if sweating profusely during outdoor workouts'
        ],
        verdict: 'Ideal for those struggling with dull, tired skin who want sun defense that doubles as an illuminating primer.',
        scores: { formula: 9.3, weatherResilience: 9.0, texture: 9.6, value: 9.4, overall: 9.3 }
    },
    {
        id: 'drsheths-ceramide-vitc-spf50',
        category: 'sunscreens',
        brand: "Dr. Sheth's",
        title: "Dr. Sheth's Ceramide & Vitamin C Sunscreen SPF 50+ PA+++",
        asin: 'B09P3K8Y5V',
        badge: 'Best Barrier Healing Sunscreen',
        rating: 4.6,
        reviewCount: '13,100+',
        priceEst: '₹449',
        image: '/images/products/dotkey-rice-cream.jpg',
        skinType: ['Dry', 'Sensitive', 'Normal'],
        concerns: ['Barrier Damage', 'Pigmentation', 'Sun Spots'],
        keyIngredients: ['1% Ceramide Complex', '0.5% Vitamin C', 'Mineral & Organic UV Filters'],
        pros: [
            'Formulated by Indian dermatologists specifically for sensitive Indian skin',
            'Ceramides shield and repair compromised barriers while walking outdoors',
            'Vitamin C provides supplemental free-radical scavenging'
        ],
        cons: [
            'May feel slightly rich on extremely oily skin in humid monsoons'
        ],
        verdict: 'Exceptional 2-in-1 barrier moisturizer and sunscreen for dry or sensitized skin.',
        scores: { formula: 9.5, weatherResilience: 9.1, texture: 9.3, value: 9.2, overall: 9.3 }
    },
    {
        id: 'reequil-ultra-matte-spf50',
        category: 'sunscreens',
        brand: "Re'equil",
        title: "Re'equil Ultra Matte Dry Touch Sunscreen Gel SPF 50 PA++++",
        asin: 'B07Z8T791Q',
        badge: 'Best Waterproof & Sweat-Resistant',
        rating: 4.7,
        reviewCount: '21,000+',
        priceEst: '₹625',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['Oily', 'Combination'],
        concerns: ['Excess Sweat', 'Humid Monsoons', 'Shine'],
        keyIngredients: ['Silicone Elastomer Gel', 'Broad Spectrum Chemical & Physical Filters'],
        pros: [
            'Water-resistant for 80 minutes—ideal for swimming, gym, and tropical sweat',
            'Velvety matte primer finish that completely halts midday sebum breakthrough',
            'Zero white cast once blended'
        ],
        cons: [
            'Requires double cleansing at night to break down silicone barrier'
        ],
        verdict: 'The ultimate armor against relentless humidity and sports sweat.',
        scores: { formula: 9.7, weatherResilience: 9.9, texture: 9.4, value: 9.1, overall: 9.5 }
    },

    // -------------------------------------------------------------
    // CLEANSERS
    // -------------------------------------------------------------
    {
        id: 'cerave-foaming-cleanser',
        category: 'cleansers',
        brand: 'CeraVe',
        title: 'CeraVe Foaming Cleanser For Normal to Oily Skin',
        asin: 'B07C5SKVL7',
        badge: 'Dermatologist #1 Recommendation',
        rating: 4.8,
        reviewCount: '32,100+',
        priceEst: '₹390',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['Oily', 'Sensitive', 'Combination'],
        concerns: ['Excess Sebum', 'Acne Breakouts', 'Weak Barrier'],
        keyIngredients: ['3 Essential Ceramides (1, 3, 6-II)', 'Niacinamide', 'Hyaluronic Acid'],
        pros: [
            'Cleanses pores thoroughly without stripping natural lipid barrier',
            'Fragrance-free, non-irritating, and hypoallergenic',
            'Economical pump bottle with dermatologist heritage'
        ],
        cons: [
            'Foam is subtle, not an aggressive frothy lather'
        ],
        verdict: 'The quintessential daily cleanser for maintaining a healthy moisture barrier while controlling shine.',
        scores: { formula: 9.9, weatherResilience: 9.7, texture: 9.8, value: 9.6, overall: 9.8 }
    },
    {
        id: 'minimalist-salicylic-cleanser',
        category: 'cleansers',
        brand: 'Minimalist',
        title: 'Minimalist 2% Salicylic Acid Face Wash with LHA & Zinc',
        asin: 'B096PJMGPL',
        badge: 'Best for Active Acne & Blackheads',
        rating: 4.7,
        reviewCount: '21,400+',
        priceEst: '₹299',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Oily', 'Combination'],
        concerns: ['Blackheads', 'Acne Bumps', 'Enlarged Pores'],
        keyIngredients: ['2% Salicylic Acid (BHA)', 'Capryloyl Salicylic Acid (LHA)', 'Zinc PCA'],
        pros: [
            'Dissolves trapped oil and keratin plugs deep inside pore walls',
            'Zinc PCA curbs excess midday sebum production',
            'Gentle surfactant base minimizes dry peeling'
        ],
        cons: [
            'Too active for dry, eczema-prone skin types'
        ],
        verdict: 'The best budget-friendly BHA face wash in India. Drastically reduces blackheads within 2 weeks of use.',
        scores: { formula: 9.7, weatherResilience: 9.6, texture: 9.4, value: 9.9, overall: 9.6 }
    },
    {
        id: 'cetaphil-gentle-cleanser',
        category: 'cleansers',
        brand: 'Cetaphil',
        title: 'Cetaphil Gentle Skin Hydrating Cleanser',
        asin: 'B01CCGW4OE',
        badge: 'Best for Ultra-Sensitive & Eczema Skin',
        rating: 4.7,
        reviewCount: '28,900+',
        priceEst: '₹380',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Dry', 'Sensitive', 'All'],
        concerns: ['Redness', 'Peeling', 'Barrier Damage', 'Over-Exfoliation'],
        keyIngredients: ['Hydrating Glycerin', 'Vitamin B5 (Panthenol)', 'Niacinamide'],
        pros: [
            'Soap-free, fragrance-free formula clinically tested for sensitive skin',
            'Can be rinsed off with water or wiped away with cotton',
            'Restores moisture barrier during post-laser or active peel recovery'
        ],
        cons: [
            'Does not remove heavy waterproof mascara or thick zinc sunscreens in one pass'
        ],
        verdict: 'The gentlest cleanser on the Indian market. Irreplaceable when your skin is red, irritated, or compromised.',
        scores: { formula: 9.5, weatherResilience: 9.2, texture: 9.4, value: 9.5, overall: 9.4 }
    },
    {
        id: 'faceshop-rice-cleanser',
        category: 'cleansers',
        brand: 'The Face Shop',
        title: 'The Face Shop Rice Water Bright Foaming Cleanser',
        asin: 'B00FSB7C00',
        badge: 'Best for Radiance & Makeup Removal',
        rating: 4.6,
        reviewCount: '15,800+',
        priceEst: '₹590',
        image: '/images/products/dotkey-rice-cream.jpg',
        skinType: ['Normal', 'Combination', 'Oily'],
        concerns: ['Dullness', 'Pollution', 'Dead Skin Buildup'],
        keyIngredients: ['Rice Bran Extract', 'Soapwort Extract', 'Moringa Oil'],
        pros: [
            'Rich whip lather that melts makeup and city grime instantly',
            'Natural rice enzymes leave skin visibly illuminated and soft',
            'Generous 150ml tube lasts 4+ months of daily use'
        ],
        cons: [
            'High lather can feel slightly tight on severely dry winter skin'
        ],
        verdict: 'A luxurious brightening foam that transforms daily cleansing into a luminous K-beauty ritual.',
        scores: { formula: 9.3, weatherResilience: 9.2, texture: 9.6, value: 9.2, overall: 9.3 }
    },
    {
        id: 'simple-refreshing-wash',
        category: 'cleansers',
        brand: 'Simple',
        title: 'Simple Kind to Skin Refreshing Facial Wash 100% Soap Free',
        asin: 'B017S7H710',
        badge: 'Best Clean Minimalist Gel',
        rating: 4.6,
        reviewCount: '17,400+',
        priceEst: '₹280',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Sensitive', 'Normal', 'Combination'],
        concerns: ['Allergies', 'Chemical Sensitivity', 'Dryness'],
        keyIngredients: ['Pro-Vitamin B5', 'Vitamin E', 'Triple Purified Water'],
        pros: [
            '0% artificial perfume, 0% harsh chemicals, 0% drying alcohol',
            'Gentle crystal gel texture that rinses cleanly without any film',
            'Exceptional price-to-performance value'
        ],
        cons: [
            'Does not contain targeted chemical exfoliants for deep blackheads'
        ],
        verdict: 'No frills, no irritants—just clean, soft, happy skin.',
        scores: { formula: 9.4, weatherResilience: 9.3, texture: 9.5, value: 9.8, overall: 9.5 }
    },

    // -------------------------------------------------------------
    // SERUMS & TREATMENTS
    // -------------------------------------------------------------
    {
        id: 'minimalist-vitc-10',
        category: 'serums',
        brand: 'Minimalist',
        title: 'Minimalist 10% Vitamin C Face Serum with Centella',
        asin: 'B096VJ969J',
        badge: 'Best for Dark Spots & Hyperpigmentation',
        rating: 4.7,
        reviewCount: '17,200+',
        priceEst: '₹699',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['All', 'Sensitive', 'Combination'],
        concerns: ['Post-Acne Scars (PIH)', 'Sun Tanning', 'Uneven Skin Tone'],
        keyIngredients: ['10% Ethyl Ascorbic Acid', 'Centella Asiatica (Cica)', 'Polyhydroxy Acid (PHA)'],
        pros: [
            'Formulated with 86%+ pure Ethyl Ascorbic Acid—highly stable against Indian oxidation heat',
            'Cica water base prevents redness or irritation typical of raw L-Ascorbic acid',
            'Visible brightening on post-acne brown marks in 4-6 weeks'
        ],
        cons: [
            'Slightly viscous texture needs 60 seconds to absorb before applying moisturizer'
        ],
        verdict: 'A masterfully formulated, non-oxidizing Vitamin C serum specifically suited to melanin-rich Indian skin.',
        scores: { formula: 9.8, weatherResilience: 9.5, texture: 9.3, value: 9.7, overall: 9.6 }
    },
    {
        id: 'plum-vitc-mandarin',
        category: 'serums',
        brand: 'Plum',
        title: 'Plum 15% Vitamin C Face Serum with Mandarin & Kakadu Plum',
        asin: 'B094R9TDRW',
        badge: 'Best High-Strength Radiance',
        rating: 4.6,
        reviewCount: '15,600+',
        priceEst: '₹550',
        image: '/images/products/dotkey-rice-cream.jpg',
        skinType: ['Normal', 'Oily', 'Combination'],
        concerns: ['Stubborn Pigmentation', 'Dullness', 'Tanned Complexion'],
        keyIngredients: ['15% Ethyl Ascorbic Acid', 'Japanese Mandarin', 'Kakadu Plum', 'Rosehip Oil'],
        pros: [
            'Potent 15% active concentration speeds up fading of dark patches',
            'Packed in UV-protective dark amber glass dropper bottle',
            'Natural fruit extracts impart refreshing antioxidant synergy'
        ],
        cons: [
            'First-time active users should patch test to avoid tingling'
        ],
        verdict: 'A powerhouse brightening serum that delivers noticeable radiance and even tone for seasoned active users.',
        scores: { formula: 9.5, weatherResilience: 9.3, texture: 9.4, value: 9.6, overall: 9.5 }
    },
    {
        id: 'minimalist-niacinamide-10',
        category: 'serums',
        brand: 'Minimalist',
        title: 'Minimalist 10% Niacinamide Face Serum with Zinc PCA',
        asin: 'B08F9WPM24',
        badge: 'Best for Open Pores & Oil Balancing',
        rating: 4.8,
        reviewCount: '25,100+',
        priceEst: '₹599',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['Oily', 'Acne-Prone', 'Combination'],
        concerns: ['Enlarged Pores', 'Sebum Overproduction', 'Texture'],
        keyIngredients: ['10% Niacinamide (EU-Sourced)', '1% Zinc PCA', 'EUGEL Ferment'],
        pros: [
            'Clinically reduces pore visibility and calms inflammation within 3 weeks',
            '1% Zinc PCA curbs midday forehead grease',
            'EU-purified Niacinamide with minimal residual nicotinic acid (no burning flush)'
        ],
        cons: [
            'Sensitive skin should start with once-daily application'
        ],
        verdict: 'The definitive pore-refining and oil-balancing serum on the Indian market. An absolute staple.',
        scores: { formula: 9.9, weatherResilience: 9.8, texture: 9.6, value: 9.8, overall: 9.8 }
    },
    {
        id: 'minimalist-alpha-arbutin',
        category: 'serums',
        brand: 'Minimalist',
        title: 'Minimalist 2% Alpha Arbutin Face Serum with Hyaluronic Acid',
        asin: 'B08F8PQQH2',
        badge: 'Best for Melasma & Deep Scars',
        rating: 4.7,
        reviewCount: '14,300+',
        priceEst: '₹549',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['All', 'Sensitive'],
        concerns: ['Melasma', 'Deep Brown Acne Scars', 'Uneven Skin Tone'],
        keyIngredients: ['2% Alpha Arbutin', '1% Hyaluronic Acid', 'Aloe Vera Juice'],
        pros: [
            'Alpha Arbutin safely blocks melanin synthesis without bleaching natural skin',
            'Extremely gentle on sensitive skin compared to harsh hydroquinone',
            'Lightweight watery absorption that layers under any cream'
        ],
        cons: [
            'Requires consistent daily use for 8 weeks to see full pigment clearance'
        ],
        verdict: 'The safest, most clinically reliable choice for stubborn melasma patches on Indian cheeks.',
        scores: { formula: 9.7, weatherResilience: 9.6, texture: 9.7, value: 9.7, overall: 9.7 }
    },
    {
        id: 'dermaco-10-niacinamide',
        category: 'serums',
        brand: 'The Derma Co',
        title: 'The Derma Co 10% Niacinamide Face Serum with Zinc PCA',
        asin: 'B08DFL3M9K',
        badge: 'Best for Acne Marks & Redness',
        rating: 4.6,
        reviewCount: '16,200+',
        priceEst: '₹599',
        image: '/images/products/dermaco-hyaluronic.jpg',
        skinType: ['Oily', 'Acne-Prone'],
        concerns: ['Red Blemishes', 'Active Acne', 'Shine'],
        keyIngredients: ['10% Niacinamide', '2% Zinc PCA', 'Hyaluronic Acid'],
        pros: [
            'Fast-acting on active red marks left by picked pimples',
            'Lightweight watery gel finish',
            'Dermatologist-tested formulation'
        ],
        cons: [
            'Contains slight fragrance in older batches (check packaging)'
        ],
        verdict: 'A trusted remedy for teenagers and adults battling post-acne redness and excess grease.',
        scores: { formula: 9.4, weatherResilience: 9.5, texture: 9.5, value: 9.5, overall: 9.5 }
    },

    // -------------------------------------------------------------
    // MOISTURIZERS & BARRIER REPAIR
    // -------------------------------------------------------------
    {
        id: 'dotkey-rice-ceramide-cream',
        category: 'moisturizers',
        brand: 'Dot & Key',
        title: 'Dot & Key Rice Water & Ceramide Deep Hydrating Moisturizer',
        asin: 'B0BDVG99J5',
        badge: 'Best for Glass Skin Barrier Repair',
        rating: 4.7,
        reviewCount: '18,400+',
        priceEst: '₹395',
        image: '/images/products/dotkey-rice-cream.jpg',
        skinType: ['Normal', 'Dry', 'Combination'],
        concerns: ['Compromised Barrier', 'Dry Peeling', 'Dullness'],
        keyIngredients: ['Fermented Rice Water', '5 Essential Ceramides', 'Hyaluronic Acid', 'Probiotics'],
        pros: [
            'Combines ancient rice water glow with modern 5-ceramide barrier defense',
            'Non-sticky, quick-absorbing gel-cream that locks moisture for 48 hours',
            'Noticeably smooths flaky texture from overuse of chemical peels'
        ],
        cons: [
            'Extremely oily T-zones may prefer a pure water-gel in peak summer'
        ],
        verdict: 'The standout Indian barrier repair moisturizer. Heals redness, strengthens skin immunity, and imparts glass glow.',
        scores: { formula: 9.7, weatherResilience: 9.4, texture: 9.8, value: 9.7, overall: 9.6 }
    },
    {
        id: 'cerave-moisturizing-cream',
        category: 'moisturizers',
        brand: 'CeraVe',
        title: 'CeraVe Moisturizing Cream with 3 Essential Ceramides & MVE Tech',
        asin: 'B00TTD9BRC',
        badge: 'Dermatologist Holy Grail for Dry Skin',
        rating: 4.8,
        reviewCount: '45,000+',
        priceEst: '₹420',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['Dry', 'Sensitive', 'Normal'],
        concerns: ['Severe Dehydration', 'Eczema', 'Barrier Damage'],
        keyIngredients: ['Ceramides 1, 3, 6-II', 'MVE Delivery Technology', 'Hyaluronic Acid'],
        pros: [
            'Patented MVE technology releases ceramides slowly over 24 continuous hours',
            'Deeply nourishing yet leaves a soft matte barrier without greasiness',
            'National Eczema Association approved'
        ],
        cons: [
            'Rich tub packaging; scoop with clean fingers or spatula'
        ],
        verdict: 'Unrivaled overnight barrier repair for dry, sensitive, or peel-irritated skin.',
        scores: { formula: 9.9, weatherResilience: 9.3, texture: 9.5, value: 9.8, overall: 9.7 }
    },
    {
        id: 'minimalist-b5-moisturizer',
        category: 'moisturizers',
        brand: 'Minimalist',
        title: 'Minimalist Vitamin B5 10% Moisturizer with Zinc & Copper',
        asin: 'B094R9TFQ2',
        badge: 'Best Oil-Free Moisturizer for Oily Skin',
        rating: 4.6,
        reviewCount: '12,900+',
        priceEst: '₹349',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Oily', 'Acne-Prone', 'Sensitive'],
        concerns: ['Greasy Shine', 'Clogged Pores', 'Redness'],
        keyIngredients: ['10% Vitamin B5 (Panthenol)', 'Zinc PCA', 'Copper Gluconate', 'Betaine'],
        pros: [
            '100% oil-free, silicone-free formula that sinks in instantly',
            'Copper and Zinc soothe inflammatory acne marks',
            'Zero pore-clogging comedogenic emollients'
        ],
        cons: [
            'Too lightweight for winter dry skin'
        ],
        verdict: 'The ultimate moisturizer for acne-prone skin that rebels against heavy creams.',
        scores: { formula: 9.5, weatherResilience: 9.9, texture: 9.7, value: 9.7, overall: 9.6 }
    },
    {
        id: 'bioderma-atoderm-baume',
        category: 'moisturizers',
        brand: 'Bioderma',
        title: 'Bioderma Atoderm Intensive Baume Ultra-Soothing Balm',
        asin: 'B0176PGFU4',
        badge: 'Best Clinical Healing Balm for Stinging Skin',
        rating: 4.8,
        reviewCount: '22,400+',
        priceEst: '₹799',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['Dry', 'Sensitive'],
        concerns: ['Severe Burning', 'Itching', 'Compromised Barrier'],
        keyIngredients: ['Skin Barrier Therapy Complex', 'PEA Anti-Itch Active', 'Ceramides'],
        pros: [
            'Stops itching and stinging within 5 minutes of application',
            'Medical-grade lipid replenishment for dermatitis and over-peeled skin',
            'Biomimetic formula that reinforces natural skin microbiome'
        ],
        cons: [
            'Higher price point than domestic drugstore creams'
        ],
        verdict: 'The emergency hospital-grade rescue balm when your barrier has completely collapsed.',
        scores: { formula: 9.9, weatherResilience: 9.1, texture: 9.4, value: 9.2, overall: 9.6 }
    },

    // -------------------------------------------------------------
    // TONERS & EXFOLIANTS
    // -------------------------------------------------------------
    {
        id: 'minimalist-glycolic-toner',
        category: 'toners',
        brand: 'Minimalist',
        title: 'Minimalist 8% Glycolic Acid Exfoliating Liquid Toner',
        asin: 'B0B39LTVP4',
        badge: 'Best for Textured Skin & Body Tanning',
        rating: 4.7,
        reviewCount: '9,800+',
        priceEst: '₹499',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['Normal', 'Oily', 'Combination'],
        concerns: ['Rough Texture', 'Sun Tanning', 'Keratosis Pilaris'],
        keyIngredients: ['8% Glycolic Acid (AHA)', 'Bamboo Water', 'Natural Moisturizing Factors (NMF)'],
        pros: [
            'Dissolves dead skin cell glue for baby-smooth face and body skin',
            'Highly effective for dark underarms, neck lines, and rough elbows',
            'Gentle buffered pH prevents chemical burns'
        ],
        cons: [
            'Strictly requires daily SPF 50 sunscreen as AHA increases sun sensitivity'
        ],
        verdict: 'A versatile exfoliating treatment for face texture, dark underarms, and stubborn tan.',
        scores: { formula: 9.6, weatherResilience: 9.3, texture: 9.5, value: 9.8, overall: 9.5 }
    },
    {
        id: 'plum-greentea-toner',
        category: 'toners',
        brand: 'Plum',
        title: 'Plum Green Tea Alcohol-Free Toner with Glycolic Acid',
        asin: 'B00OCJ5MVM',
        badge: 'Best Gentle Daily Alcohol-Free Toner',
        rating: 4.6,
        reviewCount: '19,300+',
        priceEst: '₹349',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Oily', 'Acne-Prone', 'Combination'],
        concerns: ['Open Pores', 'Oiliness', 'Minor Breakouts'],
        keyIngredients: ['Organic Green Tea Extract', '0.5% Glycolic Acid', 'Glycerin'],
        pros: [
            '100% alcohol-free—does not sting or dry out the cheeks',
            'Antioxidant-rich green tea fights acne bacteria',
            'Budget-friendly staple with gentle micro-exfoliation'
        ],
        cons: [
            'Has botanical fragrance'
        ],
        verdict: 'A comforting, pore-refining daily toner for Indian youth battling oily T-zones.',
        scores: { formula: 9.3, weatherResilience: 9.4, texture: 9.5, value: 9.7, overall: 9.4 }
    },
    {
        id: 'minimalist-pha-toner',
        category: 'toners',
        brand: 'Minimalist',
        title: 'Minimalist PHA 3% Alcohol-Free Face Toner with Multi-Biotics',
        asin: 'B08F9WMQLY',
        badge: 'Best for Ultra-Sensitive & Barrier Prep',
        rating: 4.6,
        reviewCount: '8,200+',
        priceEst: '₹399',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Sensitive', 'Dry', 'All'],
        concerns: ['Roughness', 'Dehydration', 'Redness'],
        keyIngredients: ['3% Gluconolactone (PHA)', 'Multi-Biotics', 'Salicylic Acid (0.5%)'],
        pros: [
            'Polyhydroxy acids have large molecular structures that exfoliate without stinging',
            'Acts as a humectant that attracts and locks water into cells',
            'Completely alcohol-free and fragrance-free'
        ],
        cons: [
            'Gentle action means blackhead clearance takes longer than strong BHA liquids'
        ],
        verdict: 'The ideal gentle exfoliant for reactive, eczema-prone skin that cannot tolerate AHA peels.',
        scores: { formula: 9.5, weatherResilience: 9.5, texture: 9.6, value: 9.6, overall: 9.5 }
    },
    {
        id: 'cosrx-ahabha-toner',
        category: 'toners',
        brand: 'Cosrx',
        title: 'Cosrx AHA/BHA Clarifying Treatment Toner Mist',
        asin: 'B00OZ63O0G',
        badge: 'Best Spray Toner for Pores',
        rating: 4.6,
        reviewCount: '16,500+',
        priceEst: '₹890',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['Combination', 'Oily'],
        concerns: ['Whiteheads', 'Enlarged Pores', 'Uneven Texture'],
        keyIngredients: ['Willow Bark Water', 'Apple Fruit Water', 'Glycolic Acid', 'Betaine Salicylate'],
        pros: [
            'Convenient spray mist dispenser for mess-free facial spritzing',
            'Very low acid concentration safe for daily morning and night use',
            'Helps reset skin pH immediately after hard tap water cleansing'
        ],
        cons: [
            'Mild formula; not intended for deep cystic acne'
        ],
        verdict: 'A classic K-beauty daily mist that keeps micro-comedones and texture from forming.',
        scores: { formula: 9.4, weatherResilience: 9.4, texture: 9.8, value: 9.0, overall: 9.3 }
    },

    // -------------------------------------------------------------
    // EYE CARE
    // -------------------------------------------------------------
    {
        id: 'cerave-eye-repair',
        category: 'eye-care',
        brand: 'CeraVe',
        title: 'CeraVe Eye Repair Cream for Dark Circles & Puffiness',
        asin: 'B00BFZ744K',
        badge: 'Dermatologist #1 for Orbital Barrier',
        rating: 4.7,
        reviewCount: '22,100+',
        priceEst: '₹399',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['All', 'Sensitive'],
        concerns: ['Dark Circles', 'Puffiness', 'Fine Dehydration Lines'],
        keyIngredients: ['3 Essential Ceramides', 'Marine & Botanical Complex', 'Niacinamide'],
        pros: [
            'Ophthalmologist-tested and safe for contact lens wearers',
            'Strengthens delicate under-eye skin to diminish hollow discoloration',
            'Absorbs quickly without causing milia seeds'
        ],
        cons: [
            'Needs 6–8 weeks of consistent use for genetic dark circles'
        ],
        verdict: 'The safest, most restorative under-eye cream for brightening and hydrating fragile eye contours.',
        scores: { formula: 9.8, weatherResilience: 9.5, texture: 9.7, value: 9.5, overall: 9.6 }
    },
    {
        id: 'minimalist-caffeine-eye-serum',
        category: 'eye-care',
        brand: 'Minimalist',
        title: 'Minimalist 5% Caffeine Under-Eye Serum with EGCG & Peptides',
        asin: 'B095S6Q8S5',
        badge: 'Best for Morning Puffiness & Fluid Retention',
        rating: 4.6,
        reviewCount: '11,400+',
        priceEst: '₹499',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['All'],
        concerns: ['Morning Eye Bags', 'Fatigue Circles', 'Puffiness'],
        keyIngredients: ['5% Caffeine', 'Epigallocatechin Gallatyl Glucoside (EGCG)', 'Matrixyl 3000'],
        pros: [
            'Caffeine constricts capillary blood vessels, visibly de-puffing within 15 minutes',
            'EGCG green tea active fights blue-light and fatigue oxidative stress',
            'Lightweight aqueous dropper serum—cannot cause milia'
        ],
        cons: [
            'Must be layered with a cream if under-eyes are extremely dry'
        ],
        verdict: 'An espresso shot for tired, puffy eyes. Noticeable tightening and de-puffing after late nights.',
        scores: { formula: 9.6, weatherResilience: 9.6, texture: 9.8, value: 9.6, overall: 9.6 }
    },
    {
        id: 'dermaco-5-caffeine-serum',
        category: 'eye-care',
        brand: 'The Derma Co',
        title: 'The Derma Co 5% Caffeine Under-Eye Serum with 1% Hyaluronic Acid',
        asin: 'B08GGBW1K8',
        badge: 'Best De-Puffing with Hydration',
        rating: 4.6,
        reviewCount: '9,300+',
        priceEst: '₹499',
        image: '/images/products/dermaco-hyaluronic.jpg',
        skinType: ['All'],
        concerns: ['Dehydration Lines', 'Puffiness', 'Fatigue'],
        keyIngredients: ['5% Pure Caffeine', '1% Multi-Molecular Hyaluronic Acid', 'Retinol'],
        pros: [
            'Targets water retention and smooths fine surface crepiness',
            'Lightweight serum base that layers seamlessly under concealer',
            'Cooling dropper application'
        ],
        cons: [
            'Use only in PM if you have sensitive skin due to trace retinol'
        ],
        verdict: 'A great dual-action serum for office workers experiencing digital eye strain.',
        scores: { formula: 9.4, weatherResilience: 9.4, texture: 9.6, value: 9.4, overall: 9.4 }
    },

    // -------------------------------------------------------------
    // LIP CARE
    // -------------------------------------------------------------
    {
        id: 'minimalist-spf30-lipbalm',
        category: 'lip-care',
        brand: 'Minimalist',
        title: 'Minimalist SPF 30 Lip Balm with Ceramides & Hyaluronic Acid',
        asin: 'B09SK854F9',
        badge: 'Best SPF Lip Balm for Pigmentation',
        rating: 4.7,
        reviewCount: '13,200+',
        priceEst: '₹299',
        image: '/images/products/dotkey-watermelon.jpg',
        skinType: ['All'],
        concerns: ['Lip Pigmentation', 'Sun Damage', 'Chapped Peeling'],
        keyIngredients: ['SPF 30 Broad Spectrum Filters', 'Ceramides', 'Glycerin', 'Bisabolol'],
        pros: [
            'Stops UV rays from worsening natural genetic or sun-induced lip hyperpigmentation',
            'No bitter chemical sunscreen taste or greasy white film',
            'Restores cracked lips with soothing ceramides'
        ],
        cons: [
            'Needs reapplication after meals and drinks'
        ],
        verdict: 'The essential daily lip shield. If you want natural, healthy-looking lips in India, UV lip balm is non-negotiable.',
        scores: { formula: 9.7, weatherResilience: 9.5, texture: 9.6, value: 9.8, overall: 9.6 }
    },
    {
        id: 'dotkey-lip-mask',
        category: 'lip-care',
        brand: 'Dot & Key',
        title: 'Dot & Key Vitamin C+E Lip Sleeping Mask with Shea Butter',
        asin: 'B08H1RPZ3N',
        badge: 'Best Overnight Lip Plumping Mask',
        rating: 4.6,
        reviewCount: '11,800+',
        priceEst: '₹295',
        image: '/images/products/dotkey-rice-cream.jpg',
        skinType: ['All'],
        concerns: ['Severe Cracking', 'Dull Flakes', 'Dry Lips'],
        keyIngredients: ['Shea Butter', 'Vitamin C', 'Vitamin E', 'Lingonberry Oil'],
        pros: [
            'Melts away dead, dry lip flakes overnight without harsh physical scrubs',
            'Antioxidant vitamins brighten dull, pigmented lip borders',
            'Delicious berry aroma with luxurious buttery slip'
        ],
        cons: [
            'Slightly thick for daytime use under matte liquid lipsticks'
        ],
        verdict: 'The ultimate bedtime lip treatment. Wake up to plump, baby-soft lips every morning.',
        scores: { formula: 9.5, weatherResilience: 9.4, texture: 9.7, value: 9.7, overall: 9.6 }
    },

    // -------------------------------------------------------------
    // BODY CARE
    // -------------------------------------------------------------
    {
        id: 'minimalist-salicylic-bodywash',
        category: 'body-care',
        brand: 'Minimalist',
        title: 'Minimalist 2% Salicylic Acid Body Wash for Bacne & Strawberry Legs',
        asin: 'B0B941K5H7',
        badge: 'Best for Bacne & Keratosis Pilaris',
        rating: 4.7,
        reviewCount: '14,800+',
        priceEst: '₹399',
        image: '/images/products/avocado-night-cream.jpg',
        skinType: ['Oily', 'Combination', 'All'],
        concerns: ['Back Acne (Bacne)', 'Rough Strawberry Bumps', 'Body Texture'],
        keyIngredients: ['2% Salicylic Acid', 'Betaine', 'Glycerin'],
        pros: [
            'Penetrates thicker body skin to clear clogged sweat pores and gym bacne',
            'Smooths rough follicular keratosis bumps on arms and thighs',
            'Non-drying, sulfate-free lather'
        ],
        cons: [
            'Leave on skin for 60 seconds before rinsing for full BHA benefit'
        ],
        verdict: 'A game-changer for gym lovers, swimmers, and anyone struggling with stubborn body breakouts.',
        scores: { formula: 9.8, weatherResilience: 9.7, texture: 9.5, value: 9.7, overall: 9.7 }
    },
    {
        id: 'plum-bodylovin-vanilla-lotion',
        category: 'body-care',
        brand: 'Plum BodyLovin',
        title: 'Plum BodyLovin Vanilla Caramello Ultra-Rich Body Lotion',
        asin: 'B0CJJN6XNK',
        badge: 'Best Gourmand Hydration for Dry Body',
        rating: 4.6,
        reviewCount: '16,500+',
        priceEst: '₹375',
        image: '/images/products/avocado-night-cream.jpg',
        skinType: ['Dry', 'Normal'],
        concerns: ['Dry Ashy Skin', 'Rough Elbows', 'Flaking'],
        keyIngredients: ['Shea Butter', 'Cocoa Butter', 'Vitamin E', 'Glycerin'],
        pros: [
            'Irresistible warm vanilla caramel fragrance that lingers for hours',
            'Deeply restores ashy knees, elbows, and dry winter shins',
            'Rich yet absorbs without a sticky residue'
        ],
        cons: [
            'Fragrance is prominent, not suited for fragrance-allergic individuals'
        ],
        verdict: 'A luxurious body treat that turns daily moisturization into a spa-like self-care ritual.',
        scores: { formula: 9.4, weatherResilience: 9.1, texture: 9.6, value: 9.6, overall: 9.4 }
    },
    {
        id: 'biotique-morning-nectar-lotion',
        category: 'body-care',
        brand: 'Biotique',
        title: 'Biotique Morning Nectar Flawless Skin Nourishing Lotion',
        asin: 'B006NVDWGE',
        badge: 'Best Budget Herbal Daily Hydration',
        rating: 4.5,
        reviewCount: '35,000+',
        priceEst: '₹220',
        image: '/images/products/avocado-night-cream.jpg',
        skinType: ['Normal', 'Dry'],
        concerns: ['Dryness', 'Rough Skin', 'Daily Moisture'],
        keyIngredients: ['Pure Honey', 'Wheatgerm Oil', 'Seaweed Extract'],
        pros: [
            'Time-tested Ayurvedic formula loved across generations in India',
            'Ultra-affordable everyday hydration for the entire family',
            'Absorbs quickly without greasy staining on clothes'
        ],
        cons: [
            'Traditional herbal scent'
        ],
        verdict: 'A classic, economical Indian body lotion that keeps skin reliably hydrated all year.',
        scores: { formula: 9.1, weatherResilience: 9.1, texture: 9.3, value: 9.9, overall: 9.3 }
    },

    // -------------------------------------------------------------
    // SPOT TREATMENTS
    // -------------------------------------------------------------
    {
        id: 'dermaco-acne-patch',
        category: 'spot-treatments',
        brand: 'The Derma Co',
        title: 'The Derma Co 100% Hydrocolloid Invisible Acne Spot Patches',
        asin: 'B08Z4J8JWD',
        badge: 'Best SOS Pimple Healer',
        rating: 4.7,
        reviewCount: '11,700+',
        priceEst: '₹249',
        image: '/images/products/cerave-cleanser.jpg',
        skinType: ['All'],
        concerns: ['Active Pimples', 'Whiteheads', 'Skin Picking'],
        keyIngredients: ['Medical Grade Hydrocolloid', 'Salicylic Acid'],
        pros: [
            'Draws out pus and fluid overnight, visibly flattening red bumps by morning',
            'Prevents involuntary finger picking and secondary bacterial infection',
            'Ultra-thin and discreet enough to wear outdoors or under makeup'
        ],
        cons: [
            'Works best on pimples with a visible head, less effective on deep hormonal cysts'
        ],
        verdict: 'The fastest, safest way to eliminate a blemish without leaving a stubborn brown mark.',
        scores: { formula: 9.7, weatherResilience: 9.8, texture: 9.9, value: 9.7, overall: 9.7 }
    },
    {
        id: 'sebogel-spot-gel',
        category: 'spot-treatments',
        brand: 'Sebogel',
        title: 'Sebogel Salicylic Acid & Nicotinamide Blemish Gel',
        asin: 'B01MXEQZ3J',
        badge: 'Pharmacy Cult Favorite for Breakouts',
        rating: 4.6,
        reviewCount: '19,800+',
        priceEst: '₹290',
        image: '/images/products/cetaphil-cleanser.jpg',
        skinType: ['Oily', 'Acne-Prone'],
        concerns: ['Under-the-Skin Bumps', 'Inflamed Pimples', 'Redness'],
        keyIngredients: ['2% Salicylic Acid', '6% Nicotinamide (Vitamin B3)', 'Aloe Gel'],
        pros: [
            'Dermatologist-prescribed pharmacy legend across Indian clinics',
            '6% Nicotinamide prevents dark PIH pigmentation while BHA unclogs the pore',
            'Dries clear and does not peel off'
        ],
        cons: [
            'Can dry out surrounding healthy skin if applied too liberally'
        ],
        verdict: 'An indispensable pharmacy staple for flattening urgent breakouts before big events.',
        scores: { formula: 9.6, weatherResilience: 9.6, texture: 9.5, value: 9.9, overall: 9.6 }
    },

    // -------------------------------------------------------------
    // ANTI-AGING & RETINOIDS
    // -------------------------------------------------------------
    {
        id: 'minimalist-retinol-03',
        category: 'anti-aging',
        brand: 'Minimalist',
        title: 'Minimalist 0.3% Retinol Face Serum in Squalane with CoQ10',
        asin: 'B08F9VMT4X',
        badge: 'Best Beginner Retinoid for Indian Skin',
        rating: 4.7,
        reviewCount: '15,300+',
        priceEst: '₹599',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['All', 'Dry', 'Combination'],
        concerns: ['Fine Lines', 'Uneven Texture', 'Loss of Firmness'],
        keyIngredients: ['0.3% Pure Retinol', 'Plant Squalane', 'Coenzyme Q10'],
        pros: [
            'Formulated in squalane to buffer retinol irritation and preserve moisture barrier',
            'CoQ10 boosts cellular energy and collagen synthesis',
            'Waterless packaging prevents rapid degradation of active retinol'
        ],
        cons: [
            'Must be introduced gradually (2 nights a week) with diligent morning sunscreen'
        ],
        verdict: 'The ideal starting point for anyone in their mid-20s or 30s seeking gentle, effective anti-aging.',
        scores: { formula: 9.7, weatherResilience: 9.4, texture: 9.5, value: 9.7, overall: 9.6 }
    },
    {
        id: 'minimalist-granactive-retinoid-2',
        category: 'anti-aging',
        brand: 'Minimalist',
        title: 'Minimalist Granactive Retinoid 2% (0.2% HPR Active)',
        asin: 'B08F9WPLG2',
        badge: 'Best Zero-Irritation Anti-Aging',
        rating: 4.7,
        reviewCount: '11,200+',
        priceEst: '₹699',
        image: '/images/products/minimalist-spf50.jpg',
        skinType: ['Sensitive', 'All'],
        concerns: ['Wrinkles', 'Loss of Elasticity', 'Retinoid Redness'],
        keyIngredients: ['Hydroxypinacolone Retinoate (HPR)', 'Squalane', 'Vitamin E'],
        pros: [
            'Next-generation retinoid that binds directly to retinoic receptors without cellular conversion',
            'Virtually zero purging, flaking, or redness—ideal for reactive skin',
            'Smooths skin texture and fine lines within 4 weeks'
        ],
        cons: [
            'Slightly higher price than standard retinol'
        ],
        verdict: 'All the anti-aging collagen benefits of prescription retinoids without the dreaded peeling.',
        scores: { formula: 9.8, weatherResilience: 9.5, texture: 9.7, value: 9.6, overall: 9.7 }
    }
];
