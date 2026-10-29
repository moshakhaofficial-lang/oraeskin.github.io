// ============================================================================
// ORAESKIN CENTRALIZED PRODUCT DATA ENGINE
// Single Source of Truth for Products, Reviews, Comparisons & Routine Finder
// ============================================================================

export type SkinType = 'All' | 'Oily' | 'Dry' | 'Combination' | 'Sensitive' | 'Normal' | 'Acne-Prone';

export interface ProductScoreBreakdown {
    formula: number;          // /10 (Weight 25%) - Stability, absence of drying alcohols & potential irritants
    skinSuitability: number;  // /10 (Weight 20%) - Performance in Indian humidity, non-comedogenic, white-cast safety
    evidence: number;         // /10 (Weight 20%) - Peer-reviewed scientific validation of core actives
    userFeedback: number;     // /10 (Weight 15%) - Synthesized feedback from verified Amazon India customers
    value: number;            // /10 (Weight 10%) - Price per ml/gram and daily cost-per-use in INR
    availability: number;     // /10 (Weight 10%) - Consistent Prime shipping and authentic batch availability in India
}

export interface ProductAlternative {
    label: string;
    productId: string;
    reason: string;
}

export type Product = SkincareProduct;

export interface SkincareProduct {
    id: string;
    name: string;
    brand: string;
    title: string;
    category: string;
    subcategory?: string;
    asin: string;
    amazonUrl?: string;
    affiliateUrl?: string;
    badge?: string;
    price: number;
    priceEst: string;
    currency: string;
    size: string;
    image: string;
    amazonRating: number;
    rating: number; // Backward compatibility
    amazonReviews: string;
    reviewCount: string; // Backward compatibility
    oraeSkinScore: number;
    scoreBreakdown: ProductScoreBreakdown;
    scores: { // Backward compatibility
        formula: number;
        weatherResilience: number;
        texture: number;
        value: number;
        overall: number;
    };
    skinType: SkinType[];
    concerns: string[];
    keyActives: string[];
    keyIngredients: string[]; // Backward compatibility
    ingredients: string[];
    fragrance: 'Fragrance-Free' | 'Subtle Natural Fragrance' | 'Added Fragrance';
    essentialOils: boolean;
    alcoholFree: boolean;
    texture: string;
    finish: string;
    whiteCast: string;
    bestFor: string;
    avoidIf: string;
    whyWeLikeIt: string;
    pros: string[];
    cons: string[];
    verdict: string;
    alternatives: ProductAlternative[];
    lastPriceChecked: string;
    lastEditorialReview: string;
    inStock: boolean;
}

export function calculateOraeSkinScore(b: ProductScoreBreakdown): number {
    const score = (
        b.formula * 0.25 +
        b.skinSuitability * 0.20 +
        b.evidence * 0.20 +
        b.userFeedback * 0.15 +
        b.value * 0.10 +
        b.availability * 0.10
    );
    return Number(score.toFixed(1));
}

export const PRODUCTS: SkincareProduct[] = [
    {
        "id": "minimalist-spf50",
        "name": "SPF 50 Multi-Vitamin Sunscreen",
        "title": "Minimalist SPF 50 PA++++ Multi-Vitamin Sunscreen",
        "brand": "Minimalist",
        "category": "sunscreens",
        "subcategory": "Chemical Hybrid Sunscreen",
        "asin": "B09FPS9D5T",
        "amazonUrl": "https://www.amazon.in/dp/B09FPS9D5T?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09FPS9D5T?tag=oraeskin-21",
        "badge": "Editor's Pick — Best Overall",
        "price": 346,
        "priceEst": "₹346",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/minimalist-spf50.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "36,900+",
        "reviewCount": "36,900+",
        "scoreBreakdown": {
            "formula": 9.6,
            "skinSuitability": 9.5,
            "evidence": 9.7,
            "userFeedback": 9.4,
            "value": 9.8,
            "availability": 9.9
        },
        "skinType": [
            "All",
            "Sensitive",
            "Combination",
            "Normal"
        ],
        "concerns": [
            "Sun Protection",
            "Tanning",
            "UV Damage",
            "Pigmentation"
        ],
        "keyActives": [
            "Uvinul A Plus",
            "Avobenzone",
            "Niacinamide (Vitamin B3)",
            "Vitamin B5"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Panthenol (Vitamin B5)",
            "Tocopherol",
            "Octocrylene",
            "Avobenzone"
        ],
        "ingredients": [
            "Aqua",
            "Octocrylene",
            "Ethylhexyl Methoxycinnamate",
            "Niacinamide",
            "Panthenol",
            "Titanium Dioxide",
            "Glycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Lotion",
        "finish": "Natural Dewy",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Daily indoor/outdoor UV protection for normal to combination skin with zero white cast.",
        "avoidIf": "You have extremely oily skin in 85%+ humidity and require an ultra-matte powdery dry touch.",
        "whyWeLikeIt": "Combines photostable European UV filters with barrier-repairing B-vitamins without leaving a white ghost cast on melanin-rich Indian skin.",
        "pros": [
            "Zero white cast on Indian skin tones (Fitzpatrick III to V)",
            "Photostable broad-spectrum protection certified with PA++++ rating",
            "Infused with 4 active vitamins (B3, B5, F, E) for antioxidant defense"
        ],
        "cons": [
            "Dewy finish can feel slightly heavy on extremely oily skin in humid monsoons"
        ],
        "verdict": "The benchmark everyday sunscreen in the Indian market. Reliable photostability, clean formulation, and unmatched value under ₹400.",
        "alternatives": [
            {
                "label": "Matte Alternative for Oily Skin",
                "productId": "reequil-ultra-matte-spf50",
                "reason": "Provides a powdery dry-touch silicone finish that controls intense midday oiliness."
            },
            {
                "label": "Water-Light Gel Alternative",
                "productId": "dermaco-hyaluronic-spf50",
                "reason": "Absorbs faster with zero dewy tackiness on sweat-prone days."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.6,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.8,
            "overall": 9.6
        }
    },
    {
        "id": "dermaco-hyaluronic-spf50",
        "name": "1% Hyaluronic Sunscreen Aqua Gel",
        "title": "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++",
        "brand": "The Derma Co",
        "category": "sunscreens",
        "subcategory": "Aqua Gel Sunscreen",
        "asin": "B0BVWDJTHF",
        "amazonUrl": "https://www.amazon.in/dp/B0BVWDJTHF?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BVWDJTHF?tag=oraeskin-21",
        "badge": "Best for Oily & Acne-Prone Skin",
        "price": 479,
        "priceEst": "₹479",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/dermaco-hyaluronic-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "43,000+",
        "reviewCount": "43,000+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.7,
            "evidence": 9.4,
            "userFeedback": 9.5,
            "value": 9.1,
            "availability": 9.8
        },
        "skinType": [
            "Oily",
            "Combination",
            "Sensitive",
            "Acne-Prone"
        ],
        "concerns": [
            "Clogged Pores",
            "Midday Shine",
            "Heavy Sweat",
            "Sun Protection"
        ],
        "keyActives": [
            "1% Hyaluronic Acid",
            "Vitamin E",
            "Zinc Oxide",
            "Titanium Dioxide"
        ],
        "keyIngredients": [
            "Hyaluronic Acid",
            "Tocopheryl Acetate",
            "Cyclopentasiloxane",
            "Glycerin"
        ],
        "ingredients": [
            "Water",
            "Ethylhexyl Methoxycinnamate",
            "Butyl Methoxydibenzoylmethane",
            "Hyaluronic Acid",
            "Vitamin E"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water-Burst Gel",
        "finish": "Weightless Semi-Matte",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Oily and acne-prone skin that breaks out or feels suffocated by traditional lotion sunscreens.",
        "avoidIf": "You have severely compromised dry skin needing rich lipid barrier restoration.",
        "whyWeLikeIt": "Melts on contact with skin like a splash of water, leaving virtually zero weight or greasy shine.",
        "pros": [
            "Ultra-light water gel texture that absorbs in under 10 seconds",
            "Non-comedogenic with zero pore-clogging heavy waxes",
            "Zero eye-stinging even when sweating outdoors"
        ],
        "cons": [
            "May require a separate hydrating moisturizer underneath on dry skin patches"
        ],
        "verdict": "An outstanding lightweight formulation tailored for Indian tropical summers and oily T-zones.",
        "alternatives": [
            {
                "label": "Dewier Alternative for Normal Skin",
                "productId": "minimalist-spf50",
                "reason": "Offers more barrier lipids if your cheeks feel slightly tight."
            },
            {
                "label": "Cooling Gel Alternative",
                "productId": "dotkey-watermelon-spf50",
                "reason": "Adds refreshing watermelon extract with an instant cooling sensation."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.5,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.7,
            "texture": 9.7,
            "value": 9.1,
            "overall": 9.5
        }
    },
    {
        "id": "dotkey-watermelon-spf50",
        "name": "Watermelon Hyaluronic Cooling Sunscreen",
        "title": "Dot & Key Watermelon Hyaluronic Cooling Sunscreen SPF 50+ PA+++",
        "brand": "Dot & Key",
        "category": "sunscreens",
        "subcategory": "Cooling Fluid Gel",
        "asin": "B0BQN2YWN5",
        "amazonUrl": "https://www.amazon.in/dp/B0BQN2YWN5?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BQN2YWN5?tag=oraeskin-21",
        "badge": "Best Cooling & Dewy Glow",
        "price": 387,
        "priceEst": "₹387",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/dotkey-watermelon-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "12,900+",
        "reviewCount": "12,900+",
        "scoreBreakdown": {
            "formula": 9,
            "skinSuitability": 9.2,
            "evidence": 9.1,
            "userFeedback": 9.3,
            "value": 9.5,
            "availability": 9.7
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Heat Flush",
            "Dehydration",
            "Sun Protection"
        ],
        "keyActives": [
            "Watermelon Extract",
            "Hyaluronic Acid",
            "Beetroot Extract"
        ],
        "keyIngredients": [
            "Watermelon Fruit Extract",
            "Sodium Hyaluronate",
            "Beta Vulgaris Extract"
        ],
        "ingredients": [
            "Aqua",
            "Citrullus Lanatus Fruit Extract",
            "Ethylhexyl Methoxycinnamate",
            "Hyaluronic Acid",
            "Glycerin"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Fluid Gel Cream",
        "finish": "Dewy Luminous",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Dull, parched skin needing daytime luminosity and an instant cooling burst in hot weather.",
        "avoidIf": "You are hyper-reactive to subtle fruit scents or prefer a strictly flat matte finish.",
        "whyWeLikeIt": "Leaves an instant glass-skin radiance under makeup with zero chalky residue.",
        "pros": [
            "Instant cooling sensation upon application on warm summer days",
            "Provides a luminous glass-skin glow without greasy oils",
            "Quick-absorbing fluid texture that sits well under foundation"
        ],
        "cons": [
            "PA+++ rating provides slightly less UVA protection than PA++++ competitors"
        ],
        "verdict": "A refreshing, thirst-quenching sunscreen that combines decent UV defense with instant dewy appeal.",
        "alternatives": [
            {
                "label": "Higher UVA Protection Alternative",
                "productId": "minimalist-spf50",
                "reason": "Upgrades to full PA++++ broad spectrum with zero fragrance."
            },
            {
                "label": "Dewy Dry-Skin Alternative",
                "productId": "aqualogica-radiance-spf50",
                "reason": "Features niacinamide and watermelon with a rich water-burst texture."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.2,
        "scores": {
            "formula": 9,
            "weatherResilience": 9.2,
            "texture": 9.2,
            "value": 9.5,
            "overall": 9.2
        }
    },
    {
        "id": "aqualogica-radiance-spf50",
        "name": "Radiance+ Dewy Sunscreen SPF 50+",
        "title": "Aqualogica Radiance+ Dewy Sunscreen SPF 50+ PA++++",
        "brand": "Aqualogica",
        "category": "sunscreens",
        "subcategory": "Dewy Hydration Sunscreen",
        "asin": "B0B3MNVPDV",
        "amazonUrl": "https://www.amazon.in/dp/B0B3MNVPDV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B3MNVPDV?tag=oraeskin-21",
        "badge": "Best Luminous Glow for Dry Skin",
        "price": 382,
        "priceEst": "₹382",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/aqualogica-radiance-spf50.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "10,500+",
        "reviewCount": "10,500+",
        "scoreBreakdown": {
            "formula": 9.1,
            "skinSuitability": 9.2,
            "evidence": 9,
            "userFeedback": 9.3,
            "value": 9.4,
            "availability": 9.7
        },
        "skinType": [
            "Dry",
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Dry Patches",
            "Pigmentation",
            "Sun Protection"
        ],
        "keyActives": [
            "Watermelon Extract",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Sodium Hyaluronate",
            "Watermelon Extract",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Octyl Methoxycinnamate",
            "Niacinamide",
            "Watermelon Extract",
            "Glycerin"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrating Emulsion",
        "finish": "Radiant Luminous",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Dry to normal skin looking for a lit-from-within glow without feeling greasy.",
        "avoidIf": "You have very active acne or extremely congested pores.",
        "whyWeLikeIt": "Gives an immediate plump bounce to tired morning skin with proven PA++++ photostability.",
        "pros": [
            "Delivers a luminous glass-skin glow without glitter or greasy oils",
            "Lightweight water-burst texture",
            "High PA++++ UVA rating protecting against long-term sun spots"
        ],
        "cons": [
            "Can look overly shiny on oily skin types after 3-4 hours in heat"
        ],
        "verdict": "A hydrating crowd-pleaser that brightens dull skin while delivering high-grade UV defense.",
        "alternatives": [
            {
                "label": "Barrier-Repair Alternative",
                "productId": "drsheths-ceramide-vitc-spf50",
                "reason": "Adds ceramides for extra barrier strengthening."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.2,
        "scores": {
            "formula": 9.1,
            "weatherResilience": 9.2,
            "texture": 9.2,
            "value": 9.4,
            "overall": 9.2
        }
    },
    {
        "id": "drsheths-ceramide-vitc-spf50",
        "name": "Ceramide & Vitamin C Sunscreen",
        "title": "Dr. Sheth's Ceramide & Vitamin C Sunscreen SPF 50+ PA+++",
        "brand": "Dr. Sheth's",
        "category": "sunscreens",
        "subcategory": "Barrier Strengthening Sunscreen",
        "asin": "B0DVB9CGDS",
        "amazonUrl": "https://www.amazon.in/dp/B0DVB9CGDS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DVB9CGDS?tag=oraeskin-21",
        "badge": "Best for Weakened Moisture Barrier",
        "price": 369,
        "priceEst": "₹369",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/drsheths-ceramide-vitc-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "900+",
        "reviewCount": "900+",
        "scoreBreakdown": {
            "formula": 9.4,
            "skinSuitability": 9.3,
            "evidence": 9.3,
            "userFeedback": 9.4,
            "value": 8.9,
            "availability": 9.6
        },
        "skinType": [
            "Dry",
            "Sensitive",
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Barrier Damage",
            "Pigmentation",
            "Sun Protection",
            "Sensitivity"
        ],
        "keyActives": [
            "1% Ceramide Complex",
            "2% Vitamin C (Ascorbyl Glucoside)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Ceramide NP",
            "Ceramide AP",
            "Ascorbyl Glucoside",
            "Sodium Hyaluronate"
        ],
        "ingredients": [
            "Water",
            "Ethylhexyl Salicylate",
            "Ceramides",
            "Ascorbyl Glucoside",
            "Glycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion Cream",
        "finish": "Natural Satin",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Sensitive or damaged skin needing barrier lipids alongside strong sun defense.",
        "avoidIf": "You prefer a completely silicone-powder dry touch.",
        "whyWeLikeIt": "Pairs essential skin-identical ceramides with stable Vitamin C for dual barrier repair and UV defense.",
        "pros": [
            "Ceramide complex rebuilds the lipid barrier during sun exposure",
            "Zero white cast on dark Indian complexions",
            "Fragrance-free formula ideal for reactive, stinging skin"
        ],
        "cons": [
            "Slightly higher price point compared to entry-level chemical sunscreens"
        ],
        "verdict": "A thoughtful hybrid formula that treats and protects stressed skin simultaneously.",
        "alternatives": [
            {
                "label": "Budget Barrier Alternative",
                "productId": "minimalist-spf50",
                "reason": "Provides similar vitamin protection at ₹399."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.3,
        "scores": {
            "formula": 9.4,
            "weatherResilience": 9.3,
            "texture": 9.3,
            "value": 8.9,
            "overall": 9.3
        }
    },
    {
        "id": "reequil-ultra-matte-spf50",
        "name": "Ultra Matte Dry Touch Sunscreen Gel",
        "title": "Re'equil Ultra Matte Dry Touch Sunscreen Gel SPF 50 PA++++",
        "brand": "Re'equil",
        "category": "sunscreens",
        "subcategory": "Silicone Dry-Touch Sunscreen",
        "asin": "B07VP5JFRB",
        "amazonUrl": "https://www.amazon.in/dp/B07VP5JFRB?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07VP5JFRB?tag=oraeskin-21",
        "badge": "Best Sweat & Humidity Proof",
        "price": 580,
        "priceEst": "₹580",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/reequil-ultra-matte-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "11,800+",
        "reviewCount": "11,800+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.6,
            "evidence": 9.6,
            "userFeedback": 9.5,
            "value": 8.6,
            "availability": 9.7
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Heavy Sweating",
            "Water Resistance",
            "Extreme Humidity",
            "Sun Protection"
        ],
        "keyActives": [
            "Zinc Oxide",
            "Titanium Dioxide",
            "Uvinul A Plus",
            "Tinosorb S"
        ],
        "keyIngredients": [
            "Cyclopentasiloxane",
            "Dimethicone Crosspolymer",
            "Zinc Oxide",
            "Titanium Dioxide"
        ],
        "ingredients": [
            "Cyclopentasiloxane",
            "Zinc Oxide",
            "Titanium Dioxide",
            "Dimethicone",
            "Tinosorb S"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Anhydrous Velvet Gel",
        "finish": "Ultra Matte Powder Finish",
        "whiteCast": "Minimal/Sheer (Blends Clear in 30s)",
        "bestFor": "Outdoor workouts, humid monsoon commuting, and intense oily breakthrough on the T-zone.",
        "avoidIf": "You dislike silicone-primer textures or have severely dry, flaky skin.",
        "whyWeLikeIt": "The ultimate sweat-proof shield. Water droplets slide right off without melting or dripping into eyes.",
        "pros": [
            "Certified water and sweat resistant for up to 80 minutes",
            "Doubles as a smoothing makeup primer that blurs enlarged pores",
            "Highest UVA protection rating (PA++++ with broad spectrum filters)"
        ],
        "cons": [
            "Requires double cleansing (micellar water or cleansing oil) to remove thoroughly at night"
        ],
        "verdict": "The undefeated king of sweat resistance for Indian tropical conditions.",
        "alternatives": [
            {
                "label": "Lightweight Water Gel Alternative",
                "productId": "dermaco-hyaluronic-spf50",
                "reason": "Easier to wash off without needing an oil cleanser."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.5,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 8.6,
            "overall": 9.5
        }
    },
    {
        "id": "cerave-foaming-cleanser",
        "name": "Foaming Facial Cleanser",
        "title": "CeraVe Foaming Cleanser For Normal to Oily Skin",
        "brand": "CeraVe",
        "category": "cleansers",
        "subcategory": "Gel-to-Foam Cleanser",
        "asin": "B07C5SKVL7",
        "amazonUrl": "https://www.amazon.in/dp/B07C5SKVL7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07C5SKVL7?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Daily Wash",
        "price": 1061,
        "priceEst": "₹1,061",
        "currency": "₹",
        "size": "236ml",
        "image": "/images/products/cerave-foaming-cleanser.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "38,600+",
        "reviewCount": "38,600+",
        "scoreBreakdown": {
            "formula": 9.8,
            "skinSuitability": 9.7,
            "evidence": 9.8,
            "userFeedback": 9.6,
            "value": 9.5,
            "availability": 9.8
        },
        "skinType": [
            "Oily",
            "Sensitive",
            "Combination",
            "Normal"
        ],
        "concerns": [
            "Oiliness",
            "City Pollution",
            "Pore Cleansing",
            "Barrier Health"
        ],
        "keyActives": [
            "3 Essential Ceramides (1, 3, 6-II)",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Ceramide NP",
            "Ceramide AP",
            "Ceramide EOP",
            "Niacinamide",
            "Sodium Hyaluronate"
        ],
        "ingredients": [
            "Aqua",
            "Cocamidopropyl Hydroxysultaine",
            "Glycerin",
            "Sodium Lauroyl Sarcosinate",
            "Ceramides",
            "Niacinamide"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Clear Foaming Gel",
        "finish": "Fresh & Clean without Tightness",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily morning and evening cleansing that purifies oil without stripping moisture lipids.",
        "avoidIf": "You have extremely dry, parched skin that does not tolerate any foam.",
        "whyWeLikeIt": "Clean formulation philosophy at its peak: removes excess sebum while simultaneously depositing ceramides.",
        "pros": [
            "Contains 3 skin-identical ceramides that prevent moisture loss during washing",
            "Non-comedogenic and completely fragrance-free",
            "Gentle foaming action removes waterproof sunscreen residues cleanly"
        ],
        "cons": [
            "Larger bottle size has a higher upfront price, though cost-per-ml is excellent"
        ],
        "verdict": "The gold standard everyday cleanser. Thorough yet exceptionally respectful of the skin barrier.",
        "alternatives": [
            {
                "label": "Active Acne Alternative",
                "productId": "minimalist-salicylic-cleanser",
                "reason": "Adds 2% Salicylic Acid for active blackheads and whiteheads."
            },
            {
                "label": "Hydrating Milk Alternative",
                "productId": "cetaphil-gentle-cleanser",
                "reason": "Zero foam formulation for severely dry or reactive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.8,
            "weatherResilience": 9.7,
            "texture": 9.7,
            "value": 9.5,
            "overall": 9.7
        }
    },
    {
        "id": "minimalist-salicylic-cleanser",
        "name": "2% Salicylic Acid Face Wash",
        "title": "Minimalist 2% Salicylic Acid Face Wash with LHA & Zinc",
        "brand": "Minimalist",
        "category": "cleansers",
        "subcategory": "BHA Exfoliating Cleanser",
        "asin": "B096PJMGPL",
        "amazonUrl": "https://www.amazon.in/dp/B096PJMGPL?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B096PJMGPL?tag=oraeskin-21",
        "badge": "Best for Active Acne & Blackheads",
        "price": 284,
        "priceEst": "₹284",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/minimalist-salicylic-cleanser.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "29,500+",
        "reviewCount": "29,500+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.6,
            "evidence": 9.7,
            "userFeedback": 9.4,
            "value": 9.9,
            "availability": 9.9
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blackheads",
            "Whiteheads",
            "Active Pimples",
            "Sebum Buildup"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)",
            "Capryloyl Salicylic Acid (LHA)",
            "Zinc PCA"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Zinc PCA",
            "Capryloyl Salicylic Acid",
            "Allantoin"
        ],
        "ingredients": [
            "Aqua",
            "Disodium Laureth Sulfosuccinate",
            "Cocamidopropyl Betaine",
            "Salicylic Acid",
            "Zinc PCA"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Gel",
        "finish": "Deeply Clarified & Matte",
        "whiteCast": "Not Applicable",
        "bestFor": "Targeting congested pores, recurring whiteheads, and oily breakouts at an unbeatable price.",
        "avoidIf": "You have dry, wind-chapped skin or an actively compromised stinging barrier.",
        "whyWeLikeIt": "Formulated at an optimal pH (3.5 - 4.0) ensuring the BHA penetrates deep into oily pores without drying alcohol.",
        "pros": [
            "2% Salicylic Acid dissolves stubborn oxidized sebum and dead keratin plugs",
            "Zinc PCA reduces surface oiliness and calms bacterial inflammation",
            "Unmatched value under ₹300 for a clinical-grade BHA face wash"
        ],
        "cons": [
            "Daily 2x usage can be drying for combination skin; best used once daily at night"
        ],
        "verdict": "The most cost-effective and clinically sound acne cleanser available on Amazon India.",
        "alternatives": [
            {
                "label": "Gentler Non-Exfoliating Alternative",
                "productId": "cerave-foaming-cleanser",
                "reason": "Better for everyday maintenance when active pimples have cleared."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 9.9,
            "overall": 9.7
        }
    },
    {
        "id": "cetaphil-gentle-cleanser",
        "name": "Gentle Skin Hydrating Cleanser",
        "title": "Cetaphil Gentle Skin Hydrating Cleanser",
        "brand": "Cetaphil",
        "category": "cleansers",
        "subcategory": "Hydrating Lotion Cleanser",
        "asin": "B01CCGW4OE",
        "amazonUrl": "https://www.amazon.in/dp/B01CCGW4OE?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01CCGW4OE?tag=oraeskin-21",
        "badge": "Best for Dry & Hypersensitive Skin",
        "price": 351,
        "priceEst": "₹351",
        "currency": "₹",
        "size": "118ml",
        "image": "/images/products/cetaphil-gentle-cleanser.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "70,900+",
        "reviewCount": "70,900+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.5,
            "evidence": 9.5,
            "userFeedback": 9.2,
            "value": 9.3,
            "availability": 9.9
        },
        "skinType": [
            "Dry",
            "Sensitive",
            "Normal"
        ],
        "concerns": [
            "Dryness",
            "Burning / Stinging",
            "Eczema-Prone",
            "Over-Exfoliation"
        ],
        "keyActives": [
            "Niacinamide (Vitamin B3)",
            "Panthenol (Pro-Vitamin B5)",
            "Glycerin"
        ],
        "keyIngredients": [
            "Glycerin",
            "Niacinamide",
            "Panthenol",
            "Cetearyl Alcohol"
        ],
        "ingredients": [
            "Water",
            "Glycerin",
            "Cetearyl Alcohol",
            "Panthenol",
            "Niacinamide",
            "Sodium Cocoyl Isethionate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Non-Foaming Cream Lotion",
        "finish": "Ultra Soft & Calmed",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, eczema-prone, or post-procedure skin that burns from regular surfactants.",
        "avoidIf": "You want a squeaky clean foaming feeling to remove heavy grease.",
        "whyWeLikeIt": "Decades of clinical pedigree backed by a modern reformulated blend of Niacinamide and Panthenol.",
        "pros": [
            "Zero harsh sulfates; completely non-foaming and non-stripping",
            "Hydrates continuously as it cleanses",
            "Safe for use even without water using a cotton pad"
        ],
        "cons": [
            "Cannot remove heavy waterproof silicone sunscreens on its own"
        ],
        "verdict": "The ultimate comforting rescue wash for irritated, dehydrated, or inflamed skin.",
        "alternatives": [
            {
                "label": "Foaming Sensitive Alternative",
                "productId": "simple-refreshing-wash",
                "reason": "Light foam that still respects sensitive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.3,
            "overall": 9.4
        }
    },
    {
        "id": "faceshop-rice-cleanser",
        "name": "Rice Water Bright Foaming Cleanser",
        "title": "The Face Shop Rice Water Bright Foaming Cleanser",
        "brand": "The Face Shop",
        "category": "cleansers",
        "subcategory": "Brightening Korean Cleanser",
        "asin": "B0DRYQ6274",
        "amazonUrl": "https://www.amazon.in/dp/B0DRYQ6274?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DRYQ6274?tag=oraeskin-21",
        "badge": "Best Korean Brightening Foam",
        "price": 674,
        "priceEst": "₹674",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/faceshop-rice-cleanser.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "500+",
        "reviewCount": "500+",
        "scoreBreakdown": {
            "formula": 9.1,
            "skinSuitability": 9,
            "evidence": 9,
            "userFeedback": 9.4,
            "value": 9,
            "availability": 9.7
        },
        "skinType": [
            "Normal",
            "Combination",
            "Oily"
        ],
        "concerns": [
            "Dull Complexion",
            "Pigmentation",
            "Uneven Tone"
        ],
        "keyActives": [
            "Rice Bran Water",
            "Soapwort Extract",
            "Moringa Oil"
        ],
        "keyIngredients": [
            "Oryza Sativa (Rice) Extract",
            "Saponaria Officinalis Leaf Extract",
            "Moringa Oleifera Seed Oil"
        ],
        "ingredients": [
            "Water",
            "Myristic Acid",
            "Glycerin",
            "Potassium Hydroxide",
            "Rice Extract"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Whipped Pearl Cream",
        "finish": "Radiant Luminous Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Those who love rich, creamy K-beauty foams and want to target post-summer dullness.",
        "avoidIf": "You have severely compromised dry skin that reacts to traditional saponified cleansers.",
        "whyWeLikeIt": "Whipped micro-bubbles lift stubborn city pollution particles with soothing rice amino acids.",
        "pros": [
            "Dense micro-whip foam provides a luxurious cleansing experience",
            "Rice water gently brightens surface dullness over time",
            "Small dime-sized amount creates enough foam for face and neck"
        ],
        "cons": [
            "Slightly alkaline pH means dry skin should follow up quickly with toner"
        ],
        "verdict": "A lavish K-beauty favorite that delivers sparkling clean skin with proven radiance.",
        "alternatives": [
            {
                "label": "Barrier-First Alternative",
                "productId": "cerave-foaming-cleanser",
                "reason": "Maintains an acidic 5.5 pH with ceramides."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.2,
        "scores": {
            "formula": 9.1,
            "weatherResilience": 9,
            "texture": 9,
            "value": 9,
            "overall": 9.2
        }
    },
    {
        "id": "simple-refreshing-wash",
        "name": "Kind to Skin Refreshing Facial Wash",
        "title": "Simple Kind to Skin Refreshing Facial Wash 100% Soap Free",
        "brand": "Simple",
        "category": "cleansers",
        "subcategory": "Gel Cleanser",
        "asin": "B0FJMB2NZM",
        "amazonUrl": "https://www.amazon.in/dp/B0FJMB2NZM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FJMB2NZM?tag=oraeskin-21",
        "badge": "Best Budget Everyday Wash",
        "price": 384,
        "priceEst": "₹384",
        "currency": "₹",
        "size": "250ml",
        "image": "/images/products/simple-refreshing-wash.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "22,400+",
        "reviewCount": "22,400+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.4,
            "evidence": 9.2,
            "userFeedback": 9.4,
            "value": 9.9,
            "availability": 9.9
        },
        "skinType": [
            "All",
            "Sensitive",
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Daily Cleansing",
            "Redness",
            "Sensitivity",
            "Budget"
        ],
        "keyActives": [
            "Pro-Vitamin B5",
            "Vitamin E",
            "Triple Purified Water"
        ],
        "keyIngredients": [
            "Panthenol",
            "Tocopheryl Acetate",
            "Allantoin",
            "Cocamidopropyl Betaine"
        ],
        "ingredients": [
            "Aqua",
            "Cocamidopropyl Betaine",
            "Propylene Glycol",
            "Panthenol",
            "Tocopheryl Acetate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Crystal Clear Gel",
        "finish": "Pure Clean Refreshment",
        "whiteCast": "Not Applicable",
        "bestFor": "College students and budget-conscious buyers seeking an honest, no-fuss daily face wash.",
        "avoidIf": "You need strong active chemical exfoliation for deep stubborn cysts.",
        "whyWeLikeIt": "100% soap-free, zero perfume, zero colorants — simplicity executed with perfection under ₹250.",
        "pros": [
            "100% soap-free gentle cleansing base that does not irritate eyes",
            "Zero artificial perfumes, harsh chemicals, or drying alcohols",
            "Affordable 150ml tube that lasts 2-3 months of daily use"
        ],
        "cons": [
            "Does not contain active exfoliating acids for targeted acne treatment"
        ],
        "verdict": "The ultimate budget-friendly daily cleanser for anyone wanting honest, irritation-free cleansing.",
        "alternatives": [
            {
                "label": "Acne-Targeting Alternative",
                "productId": "minimalist-salicylic-cleanser",
                "reason": "Adds 2% Salicylic Acid for breakout-prone skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.4,
            "texture": 9.4,
            "value": 9.9,
            "overall": 9.4
        }
    },
    {
        "id": "minimalist-vitc-10",
        "name": "10% Vitamin C Face Serum",
        "title": "Minimalist 10% Vitamin C Face Serum with Centella",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Antioxidant Brightening Serum",
        "asin": "B08MVBF4P8",
        "amazonUrl": "https://www.amazon.in/dp/B08MVBF4P8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08MVBF4P8?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Vitamin C",
        "price": 593,
        "priceEst": "₹593",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-vitc-10.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "25,000+",
        "reviewCount": "25,000+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.5,
            "evidence": 9.8,
            "userFeedback": 9.3,
            "value": 9.4,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Sensitive",
            "Combination",
            "Normal"
        ],
        "concerns": [
            "Dark Spots",
            "Dullness",
            "Sun Tan",
            "Early Fine Lines"
        ],
        "keyActives": [
            "10% Ethyl Ascorbic Acid",
            "1% Centella Asiatica Extract",
            "Polyhydroxy Acid (PHA)"
        ],
        "keyIngredients": [
            "Ethyl Ascorbic Acid",
            "Centella Asiatica Water",
            "Gluconolactone",
            "Glycerin"
        ],
        "ingredients": [
            "Centella Asiatica Water",
            "3-O-Ethyl Ascorbic Acid",
            "Gluconolactone",
            "Ethoxydiglycol",
            "Glycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silky Water Fluid",
        "finish": "Fast-Absorbing Satin",
        "whiteCast": "Not Applicable",
        "bestFor": "Beginners and sensitive skin types wanting to fade sun spots without stinging or oxidation.",
        "avoidIf": "You require an intense 20% L-Ascorbic Acid formula and your skin is already resilient.",
        "whyWeLikeIt": "Ethyl Ascorbic Acid is chemically stable against Indian room temperature heat and does not turn brown within weeks.",
        "pros": [
            "86% pure Vitamin C content in a thermally stable, non-oxidizing molecule",
            "Centella Asiatica calms redness and soothes reactive skin",
            "Zero tingling or purging commonly triggered by unstable pure L-Ascorbic acid"
        ],
        "cons": [
            "Takes 4-6 weeks of consistent morning use to see noticeable fading of deep dark marks"
        ],
        "verdict": "The smartest Vitamin C investment for Indian climates. Photostable, non-irritating, and highly effective.",
        "alternatives": [
            {
                "label": "Higher Concentration Alternative",
                "productId": "plum-vitc-mandarin",
                "reason": "Features 15% concentration with Kakadu Plum for experienced users."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.4,
            "overall": 9.6
        }
    },
    {
        "id": "plum-vitc-mandarin",
        "name": "15% Vitamin C Face Serum",
        "title": "Plum 15% Vitamin C Face Serum with Mandarin & Kakadu Plum",
        "brand": "Plum",
        "category": "serums",
        "subcategory": "Potent Glow Serum",
        "asin": "B095PRGHDX",
        "amazonUrl": "https://www.amazon.in/dp/B095PRGHDX?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B095PRGHDX?tag=oraeskin-21",
        "badge": "Best High-Potency Vitamin C",
        "price": 447,
        "priceEst": "₹447",
        "currency": "₹",
        "size": "20ml",
        "image": "/images/products/plum-vitc-mandarin.jpg",
        "amazonRating": 4.0,
        "rating": 4.0,
        "amazonReviews": "15,100+",
        "reviewCount": "15,100+",
        "scoreBreakdown": {
            "formula": 9.4,
            "skinSuitability": 9.1,
            "evidence": 9.6,
            "userFeedback": 9.2,
            "value": 9.5,
            "availability": 9.8
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Stubborn Sun Spots",
            "Uneven Pigmentation",
            "Loss of Radiance"
        ],
        "keyActives": [
            "15% Ethyl Ascorbic Acid",
            "Kakadu Plum Extract",
            "Japanese Mandarin Extract"
        ],
        "keyIngredients": [
            "3-O-Ethyl Ascorbic Acid",
            "Terminalia Ferdinandiana Fruit Extract",
            "Citrus Reticulata Peel Extract"
        ],
        "ingredients": [
            "Aqua",
            "3-O-Ethyl Ascorbic Acid",
            "Propanediol",
            "Kakadu Plum Extract",
            "Mandarin Extract",
            "Glycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Viscous Liquid",
        "finish": "Hydrated Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "Those with stubborn post-inflammatory hyperpigmentation seeking faster visible brightening.",
        "avoidIf": "You have inflamed active cystic breakouts or ultra-reactive skin.",
        "whyWeLikeIt": "Kakadu Plum (nature’s richest Vitamin C source) combined with a high 15% active level drives powerful skin rejuvenation.",
        "pros": [
            "Potent 15% active concentration speeds up hyperpigmentation reduction",
            "Kakadu plum boosts natural skin defense against environmental smog",
            "Amber glass dropper bottle preserves formula integrity"
        ],
        "cons": [
            "May cause mild tingling for first-time users; best introduced 3 times weekly"
        ],
        "verdict": "A potent, fast-working brightening serum that delivers noticeable clarity for resilient Indian skin.",
        "alternatives": [
            {
                "label": "Beginner-Safe Alternative",
                "productId": "minimalist-vitc-10",
                "reason": "Gentler 10% dose with Centella for sensitive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.4,
            "weatherResilience": 9.1,
            "texture": 9.1,
            "value": 9.5,
            "overall": 9.4
        }
    },
    {
        "id": "minimalist-niacinamide-10",
        "name": "10% Niacinamide Face Serum",
        "title": "Minimalist 10% Niacinamide Face Serum with Zinc PCA",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Sebum & Texture Serum",
        "asin": "B08F9MF314",
        "amazonUrl": "https://www.amazon.in/dp/B08F9MF314?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08F9MF314?tag=oraeskin-21",
        "badge": "Best for Open Pores & Oil Control",
        "price": 485,
        "priceEst": "₹485",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-niacinamide-10.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "27,100+",
        "reviewCount": "27,100+",
        "scoreBreakdown": {
            "formula": 9.8,
            "skinSuitability": 9.6,
            "evidence": 9.9,
            "userFeedback": 9.6,
            "value": 9.7,
            "availability": 9.9
        },
        "skinType": [
            "Oily",
            "Acne-Prone",
            "Combination",
            "Normal"
        ],
        "concerns": [
            "Enlarged Pores",
            "Midday Greasiness",
            "Post-Acne Blemishes",
            "Uneven Texture"
        ],
        "keyActives": [
            "10% Pure Niacinamide (Vitamin B3)",
            "1% Zinc PCA",
            "EUGROL G"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Zinc PCA",
            "Aloe Barbadensis Leaf Juice",
            "Dimethyl Isosorbide"
        ],
        "ingredients": [
            "Aqua",
            "Niacinamide",
            "Glycerin",
            "Zinc PCA",
            "Aloe Vera Leaf Juice",
            "Phenoxyethanol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water Gel Fluid",
        "finish": "Non-Sticky Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Regulating excessive sebum, visibly shrinking stretched oil pores, and fading red post-acne marks (PIE).",
        "avoidIf": "Your skin experiences temporary flushing from high-strength Vitamin B3 (start with 5% if sensitive).",
        "whyWeLikeIt": "Uses pure Lonza (Switzerland) grade Niacinamide with minimal residual nicotinic acid to prevent flushing.",
        "pros": [
            "Clinically balances oil secretion without stripping essential hydration",
            "Strengthens the stratum corneum barrier by boosting ceramide synthesis",
            "Zinc PCA inhibits acne-causing bacteria"
        ],
        "cons": [
            "10% active concentration can cause mild flushing on ultra-dry, irritated skin"
        ],
        "verdict": "The single most versatile, multi-tasking serum for Indian skin dealing with humidity and pores.",
        "alternatives": [
            {
                "label": "Derma Co Niacinamide Alternative",
                "productId": "dermaco-10-niacinamide",
                "reason": "Adds Centella Asiatica for extra redness calming."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.8,
        "scores": {
            "formula": 9.8,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 9.7,
            "overall": 9.8
        }
    },
    {
        "id": "minimalist-alpha-arbutin",
        "name": "2% Alpha Arbutin Face Serum",
        "title": "Minimalist 2% Alpha Arbutin Face Serum with Hyaluronic Acid",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Pigmentation & Melasma Serum",
        "asin": "B08GGDRRQ8",
        "amazonUrl": "https://www.amazon.in/dp/B08GGDRRQ8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08GGDRRQ8?tag=oraeskin-21",
        "badge": "Best for Stubborn Dark Marks & Melasma",
        "price": 466,
        "priceEst": "₹466",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-alpha-arbutin.jpg",
        "amazonRating": 4.0,
        "rating": 4.0,
        "amazonReviews": "18,800+",
        "reviewCount": "18,800+",
        "scoreBreakdown": {
            "formula": 9.6,
            "skinSuitability": 9.7,
            "evidence": 9.7,
            "userFeedback": 9.3,
            "value": 9.5,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Sensitive",
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Melasma",
            "Post-Acne Brown Marks (PIH)",
            "Sun Tanning",
            "Freckles"
        ],
        "keyActives": [
            "2% Alpha Arbutin",
            "1% Hyaluronic Acid",
            "Hydroxyphenoxy Propionic Acid (HPA)"
        ],
        "keyIngredients": [
            "Alpha Arbutin",
            "Sodium Hyaluronate",
            "Glycerin",
            "Dimethyl Isosorbide"
        ],
        "ingredients": [
            "Aqua",
            "Alpha Arbutin",
            "Propanediol",
            "Sodium Hyaluronate",
            "Phenoxyethanol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Featherlight Serum",
        "finish": "Bare-Skin Hydrated",
        "whiteCast": "Not Applicable",
        "bestFor": "Targeting stubborn dark melanin deposits, dark acne marks, and hormonal melasma patches safely.",
        "avoidIf": "You are looking for active exfoliation or pore unclogging (use Salicylic Acid instead).",
        "whyWeLikeIt": "Alpha Arbutin safely suppresses tyrosinase enzyme activity without the cytotoxicity or rebound pigmentation risks of hydroquinone.",
        "pros": [
            "One of the safest, most effective dark spot ingredients for melanin-rich skin",
            "Formulated at optimal pH (4.5 - 5.5) to prevent arbutin degradation",
            "Gentle enough for both morning and evening application"
        ],
        "cons": [
            "Requires strict daily sunscreen use to prevent UV from reversing fading progress"
        ],
        "verdict": "A gold standard, scientifically rigorous dark spot treatment with exceptional safety.",
        "alternatives": [
            {
                "label": "Antioxidant Brightener Alternative",
                "productId": "minimalist-vitc-10",
                "reason": "Combines melanin reduction with collagen boosting."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.6,
            "weatherResilience": 9.7,
            "texture": 9.7,
            "value": 9.5,
            "overall": 9.6
        }
    },
    {
        "id": "dermaco-10-niacinamide",
        "name": "10% Niacinamide Serum with Zinc",
        "title": "The Derma Co 10% Niacinamide Face Serum with Zinc PCA",
        "brand": "The Derma Co",
        "category": "serums",
        "subcategory": "Oil & Spot Serum",
        "asin": "B08TQGMWT1",
        "amazonUrl": "https://www.amazon.in/dp/B08TQGMWT1?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08TQGMWT1?tag=oraeskin-21",
        "badge": "Best Soothing Texture Serum",
        "price": 490,
        "priceEst": "₹490",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/dermaco-10-niacinamide.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "16,700+",
        "reviewCount": "16,700+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.5,
            "evidence": 9.6,
            "userFeedback": 9.3,
            "value": 9.2,
            "availability": 9.8
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Pore Texture",
            "Acne Redness",
            "Excess Sebum"
        ],
        "keyActives": [
            "10% Niacinamide",
            "Zinc PCA",
            "Centella Asiatica"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Zinc PCA",
            "Centella Asiatica Extract",
            "Glycerin"
        ],
        "ingredients": [
            "Water",
            "Niacinamide",
            "Zinc PCA",
            "Centella Extract",
            "Glycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Fluid Gel",
        "finish": "Smooth Matte",
        "whiteCast": "Not Applicable",
        "bestFor": "Acne-prone skin struggling with both oily shine and red inflammatory post-pimple marks.",
        "avoidIf": "You are allergic to Vitamin B3 complexes.",
        "whyWeLikeIt": "The addition of Centella provides immediate soothing benefits to red, angry breakout clusters.",
        "pros": [
            "Centella Asiatica calms irritation while Niacinamide balances sebum",
            "Absorbs quickly without sticky residue",
            "Improves skin texture over 21-28 days of regular use"
        ],
        "cons": [
            "Dropper can occasionally dispense too much product due to fluid viscosity"
        ],
        "verdict": "A well-rounded pore-refining serum that effectively soothes redness while reducing shine.",
        "alternatives": [
            {
                "label": "Pure Formula Alternative",
                "productId": "minimalist-niacinamide-10",
                "reason": "Features Swiss Lonza-grade Niacinamide for ultra-sensitive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.2,
            "overall": 9.4
        }
    },
    {
        "id": "dotkey-rice-ceramide-cream",
        "name": "Barrier Repair Moisturizer",
        "title": "Dot & Key Barrier Repair Moisturizer with 5 Ceramides, Hyaluronic & Rice Water",
        "brand": "Dot & Key",
        "category": "moisturizers",
        "subcategory": "Ceramide Barrier Cream",
        "asin": "B0BDVG99J5",
        "amazonUrl": "https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21",
        "badge": "Best Budget Barrier Repair Cream",
        "price": 328,
        "priceEst": "₹328",
        "currency": "₹",
        "size": "100g",
        "image": "/images/products/dotkey-barrier-repair-moisturizer.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "16,100+",
        "reviewCount": "16,100+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.6,
            "evidence": 8.5,
            "userFeedback": 8.6,
            "value": 9.2,
            "availability": 9.2
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination",
            "Sensitive"
        ],
        "concerns": [
            "Barrier Damage",
            "Dehydration",
            "Rough Texture",
            "Flakiness"
        ],
        "keyActives": [
            "5 Ceramides (1, 2, 3, 4, 6-II)",
            "Hyaluronic Acid",
            "Japanese Rice Water"
        ],
        "keyIngredients": [
            "Ceramide Complex",
            "Hyaluronic Acid",
            "Oryza Sativa (Rice) Bran Water",
            "Polyglutamic Acid",
            "Lactobacillus Ferment"
        ],
        "ingredients": [
            "Aqua",
            "Caprylic Capric Triglyceride",
            "Glycerine",
            "Glyceryl Stearate (and) PEG-100 Stearate",
            "Cetyl Alcohol",
            "Cetearyl Olivate (and) Sorbitan Olivate",
            "Dimethicone (and) Dimethicone Crosspolymer",
            "Cyclopentasiloxane",
            "Hyaluronic Acid",
            "Ceramide 1, 2, 3, 4, 6 II",
            "Tocopheryl Acetate",
            "Polyglutamic Acid",
            "Lactobacillus (and) Maltodextrin",
            "Oryza Sativa (Rice) Bran Water",
            "Cocos Nucifera (Coconut) Oil",
            "Olea Europaea (Olive) Fruit Oil",
            "Simmondsia Chinensis (Jojoba) Seed Oil",
            "Xanthan Gum",
            "Benzyl Alcohol (and) Ethylhexylglycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Smooth Cream",
        "finish": "Soft & Hydrated, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, normal or sensitive skin with a weakened barrier — tightness, flaking or stinging — that needs an affordable daily ceramide cream.",
        "avoidIf": "Your skin is very oily or prone to clogging from coconut oil; try an oil-free gel moisturizer instead.",
        "whyWeLikeIt": "Five ceramides with hyaluronic acid, polyglutamic acid and rice water in a fragrance-free cream for about ₹3 per gram. That's a strong barrier formula at a budget price.",
        "pros": [
            "Five ceramides plus hyaluronic and polyglutamic acid support a damaged barrier",
            "Unscented, per the listing — suits sensitive skin",
            "Generous 100g for around ₹330"
        ],
        "cons": [
            "Contains coconut oil, which some acne-prone skin finds clogging",
            "Tub packaging — use clean fingers or a spatula"
        ],
        "verdict": "One of the best-value ceramide moisturizers on Amazon India for dry or sensitised skin. Oily, acne-prone skin may prefer a lighter gel.",
        "alternatives": [
            {
                "label": "Oil-Free Alternative for Oily Skin",
                "productId": "minimalist-b5-moisturizer",
                "reason": "Lightweight, oil-free gel with 10% Vitamin B5."
            },
            {
                "label": "Richer Ceramide Alternative",
                "productId": "cerave-moisturizing-cream",
                "reason": "Thicker cream with 3 ceramides for very dry skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 9.2,
            "overall": 8.7
        }
    },
    {
        "id": "cerave-moisturizing-cream",
        "name": "Moisturizing Cream with Ceramides",
        "title": "CeraVe Moisturizing Cream with 3 Essential Ceramides & MVE Tech",
        "brand": "CeraVe",
        "category": "moisturizers",
        "subcategory": "Intensive Barrier Cream",
        "asin": "B07CH8F17Q",
        "amazonUrl": "https://www.amazon.in/dp/B07CH8F17Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07CH8F17Q?tag=oraeskin-21",
        "badge": "Best for Severely Dry & Compromised Skin",
        "price": 344,
        "priceEst": "₹344",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/cerave-moisturizing-cream.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "21,700+",
        "reviewCount": "21,700+",
        "scoreBreakdown": {
            "formula": 9.9,
            "skinSuitability": 9.6,
            "evidence": 9.9,
            "userFeedback": 9.7,
            "value": 9.2,
            "availability": 9.8
        },
        "skinType": [
            "Dry",
            "Sensitive",
            "Normal"
        ],
        "concerns": [
            "Severe Dryness",
            "Eczema",
            "Stinging Skin",
            "Post-Retinol Peeling"
        ],
        "keyActives": [
            "3 Essential Ceramides (1, 3, 6-II)",
            "Hyaluronic Acid",
            "MVE Delivery Technology"
        ],
        "keyIngredients": [
            "Ceramide NP",
            "Ceramide AP",
            "Ceramide EOP",
            "Phytosphingosine",
            "Cholesterol"
        ],
        "ingredients": [
            "Aqua",
            "Glycerin",
            "Cetearyl Alcohol",
            "Caprylic/Capric Triglyceride",
            "Ceramides",
            "Dimethicone"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Velvety Cream",
        "finish": "Comforting Non-Greasy Shield",
        "whiteCast": "Not Applicable",
        "bestFor": "Night-time slugging, healing retinol burns, dry winter patches, and eczema flare-ups.",
        "avoidIf": "You have heavily congested oily skin prone to sebaceous filaments in hot weather.",
        "whyWeLikeIt": "Patented MultiVesicular Emulsion (MVE) technology releases moisture continuously over 24 hours.",
        "pros": [
            "Replenishes the exact 3:1:1 lipid ratio found naturally in healthy skin",
            "Non-comedogenic despite its rich, deeply occlusive barrier texture",
            "Completely fragrance-free and hypoallergenic"
        ],
        "cons": [
            "Too rich for daytime use on combination skin during hot summer months"
        ],
        "verdict": "The global benchmark in dermatological barrier repair. Unbeatable for parched, stinging skin.",
        "alternatives": [
            {
                "label": "Lighter Gel-Cream Alternative",
                "productId": "dotkey-rice-ceramide-cream",
                "reason": "Absorbs faster for day use."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.9,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 9.2,
            "overall": 9.7
        }
    },
    {
        "id": "minimalist-b5-moisturizer",
        "name": "Vitamin B5 10% Moisturizer",
        "title": "Minimalist Vitamin B5 10% Moisturizer with Zinc & Copper",
        "brand": "Minimalist",
        "category": "moisturizers",
        "subcategory": "Oil-Free Gel Moisturizer",
        "asin": "B0F6Y86BSD",
        "amazonUrl": "https://www.amazon.in/dp/B0F6Y86BSD?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0F6Y86BSD?tag=oraeskin-21",
        "badge": "Best for Oily & Acne-Prone Skin",
        "price": 237,
        "priceEst": "₹237",
        "currency": "₹",
        "size": "30g",
        "image": "/images/products/minimalist-b5-moisturizer.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "16,500+",
        "reviewCount": "16,500+",
        "scoreBreakdown": {
            "formula": 9.6,
            "skinSuitability": 9.8,
            "evidence": 9.7,
            "userFeedback": 9.5,
            "value": 9.7,
            "availability": 9.9
        },
        "skinType": [
            "Oily",
            "Acne-Prone",
            "Sensitive",
            "Combination"
        ],
        "concerns": [
            "Acne Flare-Ups",
            "Greasy T-Zone",
            "Clogged Pores",
            "Redness"
        ],
        "keyActives": [
            "10% Vitamin B5 (Panthenol)",
            "Zinc Gluconate",
            "Copper Gluconate",
            "Magnesium Aspartate"
        ],
        "keyIngredients": [
            "Panthenol",
            "Zinc Gluconate",
            "Copper Gluconate",
            "Betaine",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Panthenol",
            "Glycerin",
            "Betaine",
            "Zinc Gluconate",
            "Copper Gluconate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Featherlight Gel Cream",
        "finish": "Matte Clean Hydration",
        "whiteCast": "Not Applicable",
        "bestFor": "Hydrating acne-prone skin without feeding fungal acne or clogging sebaceous glands.",
        "avoidIf": "You suffer from severely cracked skin and need thick occlusive waxes.",
        "whyWeLikeIt": "High 10% Panthenol concentration reduces transepidermal water loss while Zinc and Copper heal inflammation.",
        "pros": [
            "100% oil-free formulation that will not trigger acne breakouts",
            "High 10% Panthenol actively speeds up post-acne wound healing",
            "Lightweight gel consistency absorbs instantly without shine"
        ],
        "cons": [
            "May feel insufficient in severe winter conditions for dry cheek zones"
        ],
        "verdict": "The ideal lightweight daily moisturizer for humid Indian climates and breakout-prone complexions.",
        "alternatives": [
            {
                "label": "Dewy Finish Alternative",
                "productId": "dotkey-rice-ceramide-cream",
                "reason": "Provides a more radiant finish with ceramides."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.6,
            "weatherResilience": 9.8,
            "texture": 9.8,
            "value": 9.7,
            "overall": 9.7
        }
    },
    {
        "id": "bioderma-atoderm-baume",
        "name": "Atoderm Intensive Baume",
        "title": "Bioderma Atoderm Intensive Baume Ultra-Soothing Balm",
        "brand": "Bioderma",
        "category": "moisturizers",
        "subcategory": "Medical Restorative Balm",
        "asin": "B07SGC46XW",
        "amazonUrl": "https://www.amazon.in/dp/B07SGC46XW?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07SGC46XW?tag=oraeskin-21",
        "badge": "Best Medical Grade Barrier Rescue",
        "price": 472,
        "priceEst": "₹472",
        "currency": "₹",
        "size": "45ml",
        "image": "/images/products/bioderma-atoderm-baume.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "2,700+",
        "reviewCount": "2,700+",
        "scoreBreakdown": {
            "formula": 9.9,
            "skinSuitability": 9.5,
            "evidence": 9.9,
            "userFeedback": 9.6,
            "value": 8.8,
            "availability": 9.5
        },
        "skinType": [
            "Dry",
            "Sensitive"
        ],
        "concerns": [
            "Atopic Dermatitis",
            "Extreme Itching",
            "Cracked Barrier",
            "Allergic Sensitivity"
        ],
        "keyActives": [
            "Lipigenium Complex",
            "Skin Barrier Therapy Patent",
            "PEA Anti-Itching Agent"
        ],
        "keyIngredients": [
            "Ceramides",
            "Phytosphingosine",
            "Palmitoylethanolamide (PEA)",
            "Canola Oil"
        ],
        "ingredients": [
            "Aqua",
            "Glycerin",
            "Paraffinum Liquidum",
            "Helianthus Annuus Seed Oil",
            "Canola Oil",
            "Ceramide NP"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Emollient Balm",
        "finish": "Deeply Protective Cocoon",
        "whiteCast": "Not Applicable",
        "bestFor": "Atopic, chronically inflamed, or peeling skin that itches or stings incessantly.",
        "avoidIf": "You have acne-prone oily skin; the heavy emollient base will clog pores.",
        "whyWeLikeIt": "Biological approach that biologically stimulates lipid synthesis and relieves intense itching sensation within minutes.",
        "pros": [
            "Clinically soothes severe skin itching and reduces scratching urges",
            "Reconstructs a durable moisture shield against allergens and air pollution",
            "Safe for infants, children, and extreme sensitive skin types"
        ],
        "cons": [
            "Premium pricing reflects imported European clinical manufacturing"
        ],
        "verdict": "The gold standard medical rescue balm for cracked, stinging, or chronically dry skin.",
        "alternatives": [
            {
                "label": "Affordable Barrier Alternative",
                "productId": "cerave-moisturizing-cream",
                "reason": "High efficacy at a lower price point."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.9,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 8.8,
            "overall": 9.6
        }
    },
    {
        "id": "minimalist-glycolic-toner",
        "name": "8% Glycolic Acid Exfoliating Liquid",
        "title": "Minimalist 8% Glycolic Acid Exfoliating Liquid Toner",
        "brand": "Minimalist",
        "category": "toners",
        "subcategory": "AHA Chemical Exfoliant",
        "asin": "B0BNBXWVY3",
        "amazonUrl": "https://www.amazon.in/dp/B0BNBXWVY3?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BNBXWVY3?tag=oraeskin-21",
        "badge": "Best for Brightening & Rough Texture",
        "price": 474,
        "priceEst": "₹474",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/minimalist-glycolic-toner.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "5,400+",
        "reviewCount": "5,400+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.3,
            "evidence": 9.8,
            "userFeedback": 9.4,
            "value": 9.7,
            "availability": 9.8
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Rough Texture",
            "Dull Skin",
            "Dark Elbows / Knees",
            "Keratosis Pilaris"
        ],
        "keyActives": [
            "8% Pure Glycolic Acid (AHA)",
            "Bamboo Water",
            "Chamomile Extract"
        ],
        "keyIngredients": [
            "Glycolic Acid",
            "Bambusa Vulgaris Water",
            "Chamomilla Recutita Extract"
        ],
        "ingredients": [
            "Aqua",
            "Glycolic Acid",
            "Bambusa Vulgaris Water",
            "Propanediol",
            "Sodium Hydroxide"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water Liquid",
        "finish": "Smooth Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "Weekly chemical peeling to smooth rough chicken skin, fade post-sun tan, and brighten facial dullness.",
        "avoidIf": "You have sensitive, broken, or actively stinging skin.",
        "whyWeLikeIt": "Formulated with small-molecule AHA at effective free-acid level buffered with soothing bamboo water.",
        "pros": [
            "8% Glycolic Acid dissolves cemented dead skin cells on surface layer",
            "Multi-purpose use on face, dark underarms, textured elbows, and legs",
            "Generous 150ml volume offers exceptional value per application"
        ],
        "cons": [
            "Potent AHA formulation requires wearing daily sunscreen to prevent photosensitivity"
        ],
        "verdict": "The most versatile, high-potency chemical exfoliating toner in India. Unmatched for full-body radiance.",
        "alternatives": [
            {
                "label": "Gentle Sensitive Skin Alternative",
                "productId": "minimalist-pha-toner",
                "reason": "Uses large-molecule PHA for zero irritation."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.3,
            "texture": 9.3,
            "value": 9.7,
            "overall": 9.6
        }
    },
    {
        "id": "plum-greentea-toner",
        "name": "Green Tea Alcohol-Free Toner",
        "title": "Plum Green Tea Alcohol-Free Toner with Glycolic Acid",
        "brand": "Plum",
        "category": "toners",
        "subcategory": "Clarifying Toner",
        "asin": "B00OCJ5M6C",
        "amazonUrl": "https://www.amazon.in/dp/B00OCJ5M6C?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00OCJ5M6C?tag=oraeskin-21",
        "badge": "Best Gentle Daily Pore Refiner",
        "price": 351,
        "priceEst": "₹351",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/plum-greentea-toner.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "14,100+",
        "reviewCount": "14,100+",
        "scoreBreakdown": {
            "formula": 9.2,
            "skinSuitability": 9.4,
            "evidence": 9.3,
            "userFeedback": 9.4,
            "value": 9.6,
            "availability": 9.8
        },
        "skinType": [
            "Oily",
            "Acne-Prone",
            "Combination"
        ],
        "concerns": [
            "Open Pores",
            "Greasy T-Zone",
            "Mild Breakouts"
        ],
        "keyActives": [
            "Green Tea Extract",
            "0.5% Glycolic Acid",
            "Glycerin"
        ],
        "keyIngredients": [
            "Camellia Sinensis (Green Tea) Leaf Extract",
            "Glycolic Acid",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Glycerin",
            "Green Tea Extract",
            "Glycolic Acid",
            "Phenoxyethanol"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Refreshing Water",
        "finish": "Clean Matte Tone",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily morning/evening pore clarifying for teenagers and oily skin types.",
        "avoidIf": "You want a strictly 100% fragrance-free clinical formula.",
        "whyWeLikeIt": "Green tea polyphenols combat acne bacteria while a gentle 0.5% dose of glycolic acid prevents clogged pores.",
        "pros": [
            "100% alcohol-free toner that will not dry out skin or cause rebound oiliness",
            "Rich in green tea epigallocatechin gallate (EGCG) antioxidants",
            "Very affordable large 200ml bottle"
        ],
        "cons": [
            "Contains mild fragrance that very sensitive skin may prefer to avoid"
        ],
        "verdict": "A classic Indian bestseller for daily oil management and pore tightening.",
        "alternatives": [
            {
                "label": "Clinical Fragrance-Free Alternative",
                "productId": "minimalist-pha-toner",
                "reason": "Strictly fragrance-free with balancing prebiotics."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.2,
            "weatherResilience": 9.4,
            "texture": 9.4,
            "value": 9.6,
            "overall": 9.4
        }
    },
    {
        "id": "minimalist-pha-toner",
        "name": "PHA 3% Alcohol-Free Face Toner",
        "title": "Minimalist PHA 3% Alcohol-Free Face Toner with Multi-Biotics",
        "brand": "Minimalist",
        "category": "toners",
        "subcategory": "Hydrating Exfoliant Toner",
        "asin": "B08S581RXJ",
        "amazonUrl": "https://www.amazon.in/dp/B08S581RXJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08S581RXJ?tag=oraeskin-21",
        "badge": "Best for Sensitive Skin Exfoliation",
        "price": 338,
        "priceEst": "₹338",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/minimalist-pha-toner.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "9,500+",
        "reviewCount": "9,500+",
        "scoreBreakdown": {
            "formula": 9.6,
            "skinSuitability": 9.8,
            "evidence": 9.6,
            "userFeedback": 9.4,
            "value": 9.6,
            "availability": 9.8
        },
        "skinType": [
            "Sensitive",
            "Dry",
            "All"
        ],
        "concerns": [
            "Stinging Skin",
            "Micro-Flakes",
            "Microbiome Balance"
        ],
        "keyActives": [
            "3% Gluconolactone (PHA)",
            "Multi-Biotics (Pre & Probiotics)",
            "Polyglutamic Acid"
        ],
        "keyIngredients": [
            "Gluconolactone",
            "Niacinamide",
            "Polyglutamic Acid",
            "Lactobacillus Ferment"
        ],
        "ingredients": [
            "Aqua",
            "Gluconolactone",
            "Niacinamide",
            "Glycerin",
            "Lactobacillus Ferment Lysate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrating Essence Water",
        "finish": "Plump Dewy Smoothness",
        "whiteCast": "Not Applicable",
        "bestFor": "Those who want smooth, glowing skin but cannot tolerate Glycolic or Salicylic acid tingling.",
        "avoidIf": "You require aggressive pore-clearing for deep cystic acne nodules.",
        "whyWeLikeIt": "PHAs have larger molecular structures that gently dissolve surface debris without penetrating deep enough to cause stinging.",
        "pros": [
            "Zero stinging or irritation even on rosacea-prone or eczema-prone skin",
            "Prebiotics and probiotics nourish the healthy skin microbiome",
            "Acts as a humectant that draws ambient moisture directly into skin"
        ],
        "cons": [
            "Exfoliates more gradually compared to strong 8% Glycolic acid"
        ],
        "verdict": "The gentlest exfoliating toner on the market. Ideal for restoring radiance to fragile skin.",
        "alternatives": [
            {
                "label": "Higher Strength Exfoliant",
                "productId": "minimalist-glycolic-toner",
                "reason": "Stronger 8% AHA for resilient skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.6,
            "weatherResilience": 9.8,
            "texture": 9.8,
            "value": 9.6,
            "overall": 9.6
        }
    },
    {
        "id": "cosrx-ahabha-toner",
        "name": "AHA/BHA Clarifying Treatment Toner",
        "title": "Cosrx AHA/BHA Clarifying Treatment Toner Mist",
        "brand": "Cosrx",
        "category": "toners",
        "subcategory": "Clarifying Spray Toner",
        "asin": "B00OZ63ODA",
        "amazonUrl": "https://www.amazon.in/dp/B00OZ63ODA?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00OZ63ODA?tag=oraeskin-21",
        "badge": "Best Daily Preventative Mist",
        "price": 990,
        "priceEst": "₹990",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/cosrx-ahabha-toner.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "19,800+",
        "reviewCount": "19,800+",
        "scoreBreakdown": {
            "formula": 9.5,
            "skinSuitability": 9.6,
            "evidence": 9.5,
            "userFeedback": 9.5,
            "value": 8.8,
            "availability": 9.6
        },
        "skinType": [
            "Combination",
            "Oily",
            "Normal"
        ],
        "concerns": [
            "Whiteheads",
            "Blackheads",
            "Daily Oil Maintenance"
        ],
        "keyActives": [
            "Willow Bark Water (Natural BHA)",
            "Apple Fruit Water (Natural AHA)",
            "Allantoin"
        ],
        "keyIngredients": [
            "Salix Alba (Willow) Bark Water",
            "Pyrus Malus (Apple) Fruit Water",
            "Glycolic Acid",
            "Betaine Salicylate"
        ],
        "ingredients": [
            "Mineral Water",
            "Salix Alba Bark Water",
            "Pyrus Malus Fruit Water",
            "Butylene Glycol",
            "1,2-Hexanediol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Ultra-Fine Facial Mist",
        "finish": "Refreshed Hydration",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily maintenance between cleansing and serums to keep pores continuously unclogged.",
        "avoidIf": "You expect rapid overnight clearing of deep cystic acne.",
        "whyWeLikeIt": "The convenient spray nozzle allows zero-friction application without requiring disposable cotton pads.",
        "pros": [
            "Very mild daily exfoliating percentage suitable for twice-daily application",
            "Hygienic mist bottle eliminates wasteful friction from cotton pads",
            "Natural botanical waters soothe active inflammation"
        ],
        "cons": [
            "Higher price point due to imported Korean manufacturing"
        ],
        "verdict": "A gentle, reliable K-beauty icon for keeping everyday breakouts and blackheads at bay.",
        "alternatives": [
            {
                "label": "Affordable Indian Alternative",
                "productId": "plum-greentea-toner",
                "reason": "High-value daily green tea toner under ₹400."
            }
        ],
        "lastPriceChecked": "September 2026",
        "lastEditorialReview": "September 2026",
        "inStock": false,
        "oraeSkinScore": 9.5,
        "scores": {
            "formula": 9.5,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 8.8,
            "overall": 9.5
        }
    },
    {
        "id": "cerave-eye-repair",
        "name": "Eye Repair Cream",
        "title": "CeraVe Eye Repair Cream for Dark Circles & Puffiness",
        "brand": "CeraVe",
        "category": "eye-care",
        "subcategory": "Barrier Eye Cream",
        "asin": "B0GRW7P4YR",
        "amazonUrl": "https://www.amazon.in/dp/B0GRW7P4YR?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GRW7P4YR?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Eye Cream",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "14.2g",
        "image": "/images/products/cerave-eye-repair.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "38,200+",
        "reviewCount": "38,200+",
        "scoreBreakdown": {
            "formula": 9.8,
            "skinSuitability": 9.7,
            "evidence": 9.8,
            "userFeedback": 9.6,
            "value": 9.7,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Sensitive",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Dark Circles",
            "Morning Eye Bags",
            "Fine Dehydration Lines"
        ],
        "keyActives": [
            "3 Essential Ceramides",
            "Marine & Botanical Complex",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Ceramides (1, 3, 6-II)",
            "Niacinamide",
            "Sodium Hyaluronate",
            "Chrysin"
        ],
        "ingredients": [
            "Aqua",
            "Niacinamide",
            "Cetyl Alcohol",
            "Caprylic/Capric Triglyceride",
            "Glycerin",
            "Ceramides"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Non-Greasy Whipped Cream",
        "finish": "Hydrated Velvet",
        "whiteCast": "Not Applicable",
        "bestFor": "Treating thinning under-eye skin, morning puffiness, and chronic dark shadow circles.",
        "avoidIf": "Your dark circles are purely caused by deep genetic bone hollows.",
        "whyWeLikeIt": "Ophthalmologist-tested and hypoallergenic, safe for sensitive contact lens wearers with zero milia risk.",
        "pros": [
            "Contains 3 essential ceramides that strengthen fragile under-eye tissue",
            "Marine and botanical complex helps reduce fluid retention puffiness",
            "Fast-absorbing and prevents concealer from creasing into fine lines"
        ],
        "cons": [
            "Cannot correct deep structural tear trough bone hollows"
        ],
        "verdict": "The most medically sound, non-irritating eye cream for everyday dark circle restoration.",
        "alternatives": [
            {
                "label": "Caffeine Serum Alternative",
                "productId": "minimalist-caffeine-eye-serum",
                "reason": "Features 5% Caffeine for rapid fluid drainage and screen fatigue."
            }
        ],
        "lastPriceChecked": "September 2026",
        "lastEditorialReview": "September 2026",
        "inStock": false,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.8,
            "weatherResilience": 9.7,
            "texture": 9.7,
            "value": 9.7,
            "overall": 9.7
        }
    },
    {
        "id": "minimalist-caffeine-eye-serum",
        "name": "Vitamin K + Retinal 0.1% Under Eye Cream",
        "title": "Minimalist Vitamin K + Retinal 0.1% Under Eye Cream with 3% Caffeine & Peptides",
        "brand": "Minimalist",
        "category": "eye-care",
        "subcategory": "Retinal Eye Cream",
        "asin": "B0CHYR58VF",
        "amazonUrl": "https://www.amazon.in/dp/B0CHYR58VF?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CHYR58VF?tag=oraeskin-21",
        "badge": "Best for Dark Circles & Fine Lines",
        "price": 463,
        "priceEst": "₹463",
        "currency": "₹",
        "size": "14g",
        "image": "/images/products/minimalist-vitk-retinal-eye-cream.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "4,000+",
        "reviewCount": "4,000+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 7.6,
            "userFeedback": 8,
            "value": 8,
            "availability": 9
        },
        "skinType": [
            "All",
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Vascular Dark Circles",
            "Puffy Eyes",
            "Fine Lines",
            "Crow's Feet"
        ],
        "keyActives": [
            "Vitamin K",
            "Retinal 0.1%",
            "3% Caffeine",
            "Palmitoyl Tripeptide-1 & Tetrapeptide-7"
        ],
        "keyIngredients": [
            "Vitamin K",
            "Retinal",
            "Caffeine",
            "Palmitoyl Tripeptide-1",
            "Palmitoyl Tetrapeptide-7",
            "Chrysin",
            "Zerumbone"
        ],
        "ingredients": [
            "Vitamin K",
            "Retinal",
            "Caffeine",
            "Palmitoyl Tripeptide-1",
            "Palmitoyl Tetrapeptide-7",
            "Chrysin",
            "N-Hydroxysuccinimide",
            "Zerumbone"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Eye Cream",
        "finish": "Smooth, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Bluish or purplish dark circles and early fine lines, for anyone who can tolerate a gentle retinoid around the eyes.",
        "avoidIf": "You are pregnant or breastfeeding (retinoids), or your under-eye skin is very sensitive or eczema-prone.",
        "whyWeLikeIt": "It combines several approaches in one small tube: retinal for texture and fine lines, caffeine for puffiness, peptides for firmness, and vitamin K and chrysin for vascular discolouration.",
        "pros": [
            "Retinal (retinaldehyde) works faster than retinol on fine lines and texture",
            "3% caffeine helps with morning puffiness",
            "Fragrance-free and unscented"
        ],
        "cons": [
            "Retinoid can sting or flake on sensitive under-eye skin — start every other night",
            "Evidence for vitamin K and chrysin on dark circles is limited",
            "Small 14g tube for the price"
        ],
        "verdict": "A well-rounded retinal eye cream for dark circles and early lines. Use it at night, introduce it slowly and always wear sunscreen.",
        "alternatives": [
            {
                "label": "Retinoid-Free Caffeine Alternative",
                "productId": "dermaco-5-caffeine-serum",
                "reason": "5% caffeine serum for puffiness if you want to skip a stronger retinoid."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8,
            "overall": 8.2
        }
    },
    {
        "id": "dermaco-5-caffeine-serum",
        "name": "5% Caffeine Under-Eye Serum with Roller",
        "title": "The Derma Co 5% Caffeine Under-Eye Serum with 1% Hyaluronic Acid",
        "brand": "The Derma Co",
        "category": "eye-care",
        "subcategory": "Cooling Roller Eye Serum",
        "asin": "B08TTW5RJG",
        "amazonUrl": "https://www.amazon.in/dp/B08TTW5RJG?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08TTW5RJG?tag=oraeskin-21",
        "badge": "Best Cooling Metal Roller Applicator",
        "price": 539,
        "priceEst": "₹539",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/dermaco-5-caffeine-serum.jpg",
        "amazonRating": 3.8,
        "rating": 3.8,
        "amazonReviews": "1,100+",
        "reviewCount": "1,100+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.4,
            "evidence": 9.4,
            "userFeedback": 9.2,
            "value": 9.1,
            "availability": 9.7
        },
        "skinType": [
            "All",
            "Normal",
            "Oily"
        ],
        "concerns": [
            "Under-Eye Swelling",
            "Eye Fatigue",
            "Dark Circles"
        ],
        "keyActives": [
            "5% Caffeine",
            "1% Hyaluronic Acid",
            "Retinol Peptide Blend"
        ],
        "keyIngredients": [
            "Caffeine",
            "Sodium Hyaluronate",
            "Peptides",
            "Glycerin"
        ],
        "ingredients": [
            "Water",
            "Caffeine",
            "Hyaluronic Acid",
            "Glycerin",
            "Niacinamide"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Fluid Gel",
        "finish": "Cooling Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Those who love a cooling lymphatic drainage massage applicator to instantly revive tired eyes.",
        "avoidIf": "You prefer using clean ring fingers or have broken skin around the eye.",
        "whyWeLikeIt": "The stainless steel roller ball cools on contact, physically boosting lymphatic micro-circulation.",
        "pros": [
            "Metal roller-ball applicator provides immediate chilled depuffing benefits",
            "Hyaluronic acid keeps fine dehydration lines plump and bouncy",
            "Absorbs quickly without interfering with makeup application"
        ],
        "cons": [
            "15ml volume runs out faster than standard 30ml dropper bottles"
        ],
        "verdict": "A travel-friendly, cooling depuffing essential for busy professionals staring at screens.",
        "alternatives": [
            {
                "label": "Higher Volume Dropper Alternative",
                "productId": "minimalist-caffeine-eye-serum",
                "reason": "Double the product (30ml) for the same price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.3,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.4,
            "texture": 9.4,
            "value": 9.1,
            "overall": 9.3
        }
    },
    {
        "id": "minimalist-spf30-lipbalm",
        "name": "SPF 30 Lip Balm with Ceramides",
        "title": "Minimalist SPF 30 Lip Balm with Ceramides & Hyaluronic Acid",
        "brand": "Minimalist",
        "category": "lip-care",
        "subcategory": "UV Defense Lip Balm",
        "asin": "B0BJ6XPC77",
        "amazonUrl": "https://www.amazon.in/dp/B0BJ6XPC77?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BJ6XPC77?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Daily Lip SPF",
        "price": 264,
        "priceEst": "₹264",
        "currency": "₹",
        "size": "8g",
        "image": "/images/products/minimalist-spf30-lipbalm.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "3,400+",
        "reviewCount": "3,400+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.8,
            "evidence": 9.7,
            "userFeedback": 9.5,
            "value": 9.8,
            "availability": 9.9
        },
        "skinType": [
            "All",
            "Sensitive",
            "Dry"
        ],
        "concerns": [
            "Lip Pigmentation",
            "Sun Damage",
            "Chapped Peeling Lips"
        ],
        "keyActives": [
            "Avobenzone & Uvinul Filters",
            "Ceramide Complex",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Ceramides",
            "Sodium Hyaluronate",
            "Shea Butter",
            "Petrolatum"
        ],
        "ingredients": [
            "Petrolatum",
            "Microcrystalline Wax",
            "Ceramide NP",
            "Ethylhexyl Methoxycinnamate",
            "Hyaluronic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Non-Sticky Butter Balm",
        "finish": "Natural Sheen",
        "whiteCast": "None (Fitzpatrick III-V Safe)",
        "bestFor": "Preventing and reversing dark lip pigmentation caused by chronic UV exposure and smoking.",
        "avoidIf": "You strictly prefer sweet flavored or strongly tinted colored lip glosses.",
        "whyWeLikeIt": "Addresses the #1 cause of dark lips in India (unprotected UV rays) without bad chemical taste or stickiness.",
        "pros": [
            "Certified SPF 30 broad spectrum UV protection specifically for lips",
            "Ceramides and Hyaluronic acid heal deep cracked peeling fissures",
            "Completely fragrance-free and neutral taste (no bitter sunscreen flavor)"
        ],
        "cons": [
            "Requires reapplication every 2 hours if drinking hot beverages"
        ],
        "verdict": "The most essential daily lip treatment in India for preventing and lightening dark, sun-damaged lips.",
        "alternatives": [
            {
                "label": "Overnight Recovery Mask",
                "productId": "dotkey-lip-mask",
                "reason": "Ultra-rich overnight hydration with Shea Butter and Vitamin C."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.8,
            "texture": 9.8,
            "value": 9.8,
            "overall": 9.7
        }
    },
    {
        "id": "dotkey-lip-mask",
        "name": "Vitamin C+E Lip Sleeping Mask",
        "title": "Dot & Key Vitamin C+E Lip Sleeping Mask with Shea Butter",
        "brand": "Dot & Key",
        "category": "lip-care",
        "subcategory": "Overnight Lip Butter Mask",
        "asin": "B08RX6S5D1",
        "amazonUrl": "https://www.amazon.in/dp/B08RX6S5D1?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08RX6S5D1?tag=oraeskin-21",
        "badge": "Best Overnight Chapped Lip Healer",
        "price": 194,
        "priceEst": "₹194",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/dotkey-lip-mask.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "7,200+",
        "reviewCount": "7,200+",
        "scoreBreakdown": {
            "formula": 9.3,
            "skinSuitability": 9.5,
            "evidence": 9.2,
            "userFeedback": 9.4,
            "value": 9.6,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Dry",
            "Sensitive"
        ],
        "concerns": [
            "Dry Flaking Lips",
            "Dehydration Fissures",
            "Dull Pigmentation"
        ],
        "keyActives": [
            "Vitamin C (Ascorbyl Palmitate)",
            "Vitamin E",
            "Raw Shea Butter",
            "Castor Oil"
        ],
        "keyIngredients": [
            "Shea Butter",
            "Castor Seed Oil",
            "Tocopherol",
            "Ascorbyl Palmitate"
        ],
        "ingredients": [
            "Ricinus Communis Seed Oil",
            "Butyrospermum Parkii Butter",
            "Beeswax",
            "Vitamin C",
            "Vitamin E"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thick Velvety Butter",
        "finish": "Glossy Moisture Blanket",
        "whiteCast": "Not Applicable",
        "bestFor": "Transforming severely chapped, rough, peeling lips into baby-soft pillows overnight.",
        "avoidIf": "You want a daytime matte balm that sits flat under matte liquid lipstick.",
        "whyWeLikeIt": "Creates an intensive occlusive moisture blanket that seals in vitamins throughout 8 hours of sleep.",
        "pros": [
            "Thick nourishing blanket eliminates morning lip flaking after one night",
            "Vitamin C gently promotes brighter, pinker natural lip tone",
            "Generous 20g jar lasts over 6 months of daily bedtime use"
        ],
        "cons": [
            "Rich buttery consistency is too thick for daytime outdoor use"
        ],
        "verdict": "A luxurious, ultra-nourishing overnight lip sanctuary that restores dry, flaky lips effortlessly.",
        "alternatives": [
            {
                "label": "Daytime SPF Alternative",
                "productId": "minimalist-spf30-lipbalm",
                "reason": "Adds SPF 30 protection for daytime sunlight."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.4,
        "scores": {
            "formula": 9.3,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.6,
            "overall": 9.4
        }
    },
    {
        "id": "minimalist-salicylic-bodywash",
        "name": "2% Salicylic Acid Body Wash",
        "title": "Minimalist 2% Salicylic Acid Body Wash for Bacne & Strawberry Legs",
        "brand": "Minimalist",
        "category": "body-care",
        "subcategory": "Exfoliating Body Cleanser",
        "asin": "B0BSN7LHC4",
        "amazonUrl": "https://www.amazon.in/dp/B0BSN7LHC4?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BSN7LHC4?tag=oraeskin-21",
        "badge": "Editor's Choice — Best for Bacne",
        "price": 296,
        "priceEst": "₹296",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/minimalist-salicylic-bodywash.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "2,900+",
        "reviewCount": "2,900+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.7,
            "evidence": 9.8,
            "userFeedback": 9.6,
            "value": 9.7,
            "availability": 9.9
        },
        "skinType": [
            "Oily",
            "Combination",
            "All",
            "Acne-Prone"
        ],
        "concerns": [
            "Back Acne (Bacne)",
            "Strawberry Legs (KP)",
            "Chest Pimples",
            "Body Odor"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)",
            "Betaine",
            "Zinc PCA"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Zinc PCA",
            "Betaine",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Sodium Lauroyl Methyl Isethionate",
            "Salicylic Acid",
            "Zinc PCA",
            "Betaine"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silky Foaming Gel",
        "finish": "Smooth & Decongested",
        "whiteCast": "Not Applicable",
        "bestFor": "Eliminating stubborn back and chest acne breakouts and smoothing rough follicular dots on thighs and arms.",
        "avoidIf": "You have severely compromised eczema plaques on your body.",
        "whyWeLikeIt": "Clinical-grade facial actives (2% BHA and Zinc) brought to an affordable, fragrance-free body wash format.",
        "pros": [
            "Clears active back and chest breakouts within 2-3 weeks of regular use",
            "Smooths keratosis pilaris (strawberry legs) on arms and thighs",
            "Gentle sulfate-free surfactant base prevents full-body barrier drying"
        ],
        "cons": [
            "Must be left on the body for 60 seconds before rinsing for optimal BHA penetration"
        ],
        "verdict": "The most effective, dermatologist-recognized active body wash for conquering body acne in India.",
        "alternatives": [
            {
                "label": "Nourishing Fragrance Alternative",
                "productId": "plum-bodylovin-vanilla-lotion",
                "reason": "Deep hydration with warm vanilla scent."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.7,
            "texture": 9.7,
            "value": 9.7,
            "overall": 9.7
        }
    },
    {
        "id": "plum-bodylovin-vanilla-lotion",
        "name": "BodyLovin Vanilla Caramello Body Lotion",
        "title": "Plum BodyLovin Vanilla Caramello Ultra-Rich Body Lotion",
        "brand": "Plum BodyLovin",
        "category": "body-care",
        "subcategory": "Gourmand Body Lotion",
        "asin": "B0CJJN6XNK",
        "amazonUrl": "https://www.amazon.in/dp/B0CJJN6XNK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CJJN6XNK?tag=oraeskin-21",
        "badge": "Best Long-Lasting Fragrance & Hydration",
        "price": 350,
        "priceEst": "₹350",
        "currency": "₹",
        "size": "400ml",
        "image": "/images/products/plum-bodylovin-vanilla-lotion.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "3,400+",
        "reviewCount": "3,400+",
        "scoreBreakdown": {
            "formula": 9.1,
            "skinSuitability": 9.3,
            "evidence": 8.9,
            "userFeedback": 9.6,
            "value": 9.5,
            "availability": 9.8
        },
        "skinType": [
            "Dry",
            "Normal"
        ],
        "concerns": [
            "Dry Scaly Body Skin",
            "Dull Body Texture",
            "All-Day Scent"
        ],
        "keyActives": [
            "Shea Butter",
            "Brazil Nut Oil",
            "Sunflower Seed Oil"
        ],
        "keyIngredients": [
            "Butyrospermum Parkii Butter",
            "Bertholletia Excelsa Seed Oil",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Helianthus Annuus Seed Oil",
            "Glycerin",
            "Shea Butter",
            "Brazil Nut Oil"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Velvety Lotion",
        "finish": "Silky Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "Those who want all-day warm bakery vanilla scent paired with deeply moisturized, silky body skin.",
        "avoidIf": "You are allergic to perfumes or need clinical treatment for active body pimples.",
        "whyWeLikeIt": "Exceptional sensory pleasure: absorbs without stickiness in Indian weather while keeping skin smelling delicious for 6+ hours.",
        "pros": [
            "Decadent warm vanilla caramel fragrance that lingers on skin and clothes",
            "Cold-pressed Brazil nut oil provides high fatty-acid moisture retention",
            "Non-greasy finish that does not feel sticky under jeans or humid clothes"
        ],
        "cons": [
            "Not suitable for users with facial acne who touch their face after applying"
        ],
        "verdict": "A comforting, mood-lifting body lotion that combines serious moisture with unforgettable aroma.",
        "alternatives": [
            {
                "label": "Clinical Exfoliating Alternative",
                "productId": "minimalist-salicylic-bodywash",
                "reason": "Targets acne and rough texture instead of scent."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.3,
        "scores": {
            "formula": 9.1,
            "weatherResilience": 9.3,
            "texture": 9.3,
            "value": 9.5,
            "overall": 9.3
        }
    },
    {
        "id": "biotique-morning-nectar-lotion",
        "name": "Morning Nectar Nourishing Lotion",
        "title": "Biotique Morning Nectar Flawless Skin Nourishing Lotion",
        "brand": "Biotique",
        "category": "body-care",
        "subcategory": "Ayurvedic Botanical Lotion",
        "asin": "B006NVDWGE",
        "amazonUrl": "https://www.amazon.in/dp/B006NVDWGE?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B006NVDWGE?tag=oraeskin-21",
        "badge": "Best Ayurvedic Botanical Value",
        "price": 171,
        "priceEst": "₹171",
        "currency": "₹",
        "size": "190ml",
        "image": "/images/products/biotique-morning-nectar-lotion.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "52,200+",
        "reviewCount": "52,200+",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 9,
            "evidence": 8.7,
            "userFeedback": 9.2,
            "value": 9.9,
            "availability": 9.9
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dryness",
            "Daily Body Care",
            "Budget Value"
        ],
        "keyActives": [
            "Pure Honey",
            "Wheatgerm Oil",
            "Seaweed Extract"
        ],
        "keyIngredients": [
            "Honey",
            "Triticum Vulgare Germ Oil",
            "Fucus Vesiculosus Extract"
        ],
        "ingredients": [
            "Water",
            "Honey",
            "Wheatgerm Oil",
            "Seaweed Extract",
            "Lotion Base"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Fluid Milk",
        "finish": "Hydrated Satin",
        "whiteCast": "Not Applicable",
        "bestFor": "Everyday budget body moisturizing for Indian households seeking traditional botanical blends.",
        "avoidIf": "You have active fungal acne or are allergic to essential botanical oils.",
        "whyWeLikeIt": "A trusted staple in millions of Indian households delivering smooth skin under ₹220 for 190ml.",
        "pros": [
            "Time-tested Ayurvedic formulation with pure honey and wheatgerm oil",
            "Ultra-affordable price point accessible for entire family use",
            "Light fluid texture spreads easily over large body areas"
        ],
        "cons": [
            "Botanical extracts may not suit reactive, allergy-prone skin profiles"
        ],
        "verdict": "The ultimate budget-friendly daily body lotion with deep cultural trust across India.",
        "alternatives": [
            {
                "label": "Clinical Treatment Alternative",
                "productId": "minimalist-salicylic-bodywash",
                "reason": "Focuses on active BHA exfoliation."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.1,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 9,
            "texture": 9,
            "value": 9.9,
            "overall": 9.1
        }
    },
    {
        "id": "dermaco-acne-patch",
        "name": "Micro-Tip Salicylic Acid Pimple Patches",
        "title": "The Derma Co Micro-Tip Salicylic Acid Acne Pimple Patches with Hydrocolloid",
        "brand": "The Derma Co",
        "category": "spot-treatments",
        "subcategory": "Micro-Tip Hydrocolloid Patch",
        "asin": "B09GGCWKR7",
        "amazonUrl": "https://www.amazon.in/dp/B09GGCWKR7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09GGCWKR7?tag=oraeskin-21",
        "badge": "Best Micro-Tip Patch for Early Pimples",
        "price": 479,
        "priceEst": "₹479",
        "currency": "₹",
        "size": "24 Patches",
        "image": "/images/products/dermaco-microtip-acne-patch.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "400+",
        "reviewCount": "400+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 7.8,
            "evidence": 7.5,
            "userFeedback": 8,
            "value": 6.5,
            "availability": 8.8
        },
        "skinType": [
            "All",
            "Acne-Prone"
        ],
        "concerns": [
            "Active Pimples",
            "Whiteheads",
            "Skin Picking Urges"
        ],
        "keyActives": [
            "Hydrocolloid",
            "Micro-Tip Actives (Willow Bark, Glycolic Acid)",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Hydrocolloid",
            "Willow Bark Extract",
            "Glycolic Acid",
            "Gluconolactone",
            "Niacinamide",
            "Allantoin"
        ],
        "ingredients": [
            "DM Water",
            "Propylene Glycol",
            "Glycolic Acid",
            "Willow Bark Extract",
            "Gluconolactone",
            "Carbomer",
            "Hydroxypropyl Methylcellulose",
            "Allantoin",
            "Aloe Vera Extract",
            "Glycerin",
            "Xanthan Gum",
            "Niacinamide",
            "DMDM Hydantoin",
            "Methylchloroisothiazolinone (and) Methylisothiazolinone",
            "Disodium EDTA",
            "Sodium Hyaluronate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Clear Hydrocolloid Patch with Micro-Tips",
        "finish": "Clear Matte, Blends In",
        "whiteCast": "Not Applicable",
        "bestFor": "Early or surface pimples where you want to stop picking and deliver actives straight into the spot overnight.",
        "avoidIf": "You react to the preservatives methylisothiazolinone or DMDM hydantoin, or you're treating deep cysts that need a dermatologist.",
        "whyWeLikeIt": "A hydrocolloid patch that physically stops picking and absorbs fluid, with micro-tips that deliver exfoliating actives into the spot.",
        "pros": [
            "Hydrocolloid absorbs oil and pus and stops you picking",
            "Micro-tips deliver actives directly into the pimple",
            "Clear, tapered edge is discreet on most skin tones"
        ],
        "cons": [
            "Around ₹20 per patch — plain hydrocolloid patches cost a fraction of that",
            "Despite the 'salicylic acid' name, the listed ingredients show willow bark extract and glycolic acid rather than salicylic acid itself",
            "Contains methylisothiazolinone, a preservative some people are allergic to"
        ],
        "verdict": "Handy for stubborn early spots, but pricey. For ripe whiteheads, a basic hydrocolloid patch does the job for less.",
        "alternatives": [
            {
                "label": "Leave-On Gel Alternative",
                "productId": "sebogel-spot-gel",
                "reason": "Salicylic acid and nicotinamide gel for bumps without a visible head."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.6,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 7.8,
            "texture": 7.8,
            "value": 6.5,
            "overall": 7.6
        }
    },
    {
        "id": "sebogel-spot-gel",
        "name": "Salicylic Acid & Nicotinamide Blemish Gel",
        "title": "Sebogel Salicylic Acid & Nicotinamide Blemish Gel",
        "brand": "Sebogel",
        "category": "spot-treatments",
        "subcategory": "Pharmacy Blemish Gel",
        "asin": "B00U7CRJ00",
        "amazonUrl": "https://www.amazon.in/dp/B00U7CRJ00?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00U7CRJ00?tag=oraeskin-21",
        "badge": "Best Pharmacy Acne Gel under ₹300",
        "price": 200,
        "priceEst": "₹200",
        "currency": "₹",
        "size": "30g",
        "image": "/images/products/sebogel-spot-gel.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "5,300+",
        "reviewCount": "5,300+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.5,
            "evidence": 9.8,
            "userFeedback": 9.5,
            "value": 9.9,
            "availability": 9.9
        },
        "skinType": [
            "Oily",
            "Acne-Prone"
        ],
        "concerns": [
            "Under-the-Skin Bumps",
            "Inflamed Acne",
            "Excess Sebum"
        ],
        "keyActives": [
            "2% Salicylic Acid",
            "6% Nicotinamide (Niacinamide)",
            "Allantoin"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Nicotinamide",
            "Allantoin",
            "Carbomer"
        ],
        "ingredients": [
            "Aqua",
            "Nicotinamide",
            "Salicylic Acid",
            "Propylene Glycol",
            "Allantoin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Targeted Clear Gel",
        "finish": "Quick-Drying Film",
        "whiteCast": "Not Applicable",
        "bestFor": "Drying out emerging red blemishes and treating stubborn under-the-skin blind pimples.",
        "avoidIf": "You plan to slather it across the entire face like a regular moisturizer.",
        "whyWeLikeIt": "The dermatologist pharmacy classic: 6% Nicotinamide dramatically suppresses redness while 2% BHA clears the canal.",
        "pros": [
            "High 6% Nicotinamide concentration quickly subdues inflammatory redness",
            "2% Salicylic Acid unclogs deep follicular plugs",
            "Legendary pharmacy staple available for just ₹240 on Amazon India"
        ],
        "cons": [
            "Can cause localized flaking if applied too aggressively more than twice daily"
        ],
        "verdict": "The ultimate pharmacy secret weapon for urgent blemish control at rock-bottom price.",
        "alternatives": [
            {
                "label": "Surface Whitehead Patch",
                "productId": "dermaco-acne-patch",
                "reason": "Better for ripe pus-filled pimples."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.5,
            "texture": 9.5,
            "value": 9.9,
            "overall": 9.7
        }
    },
    {
        "id": "minimalist-retinol-03",
        "name": "0.3% Retinol Face Serum in Squalane",
        "title": "Minimalist 0.3% Retinol Face Serum in Squalane with CoQ10",
        "brand": "Minimalist",
        "category": "anti-aging",
        "subcategory": "Pure Retinol Serum",
        "asin": "B091JG3GJ5",
        "amazonUrl": "https://www.amazon.in/dp/B091JG3GJ5?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B091JG3GJ5?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Beginner Retinol",
        "price": 539,
        "priceEst": "₹539",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-retinol-03.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "9,500+",
        "reviewCount": "9,500+",
        "scoreBreakdown": {
            "formula": 9.8,
            "skinSuitability": 9.4,
            "evidence": 9.9,
            "userFeedback": 9.4,
            "value": 9.6,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Dry",
            "Combination",
            "Normal"
        ],
        "concerns": [
            "Fine Lines",
            "Loss of Firmness",
            "Uneven Texture",
            "Adult Acne"
        ],
        "keyActives": [
            "0.3% Pure Retinol",
            "Plant-Derived Squalane",
            "1% Coenzyme Q10"
        ],
        "keyIngredients": [
            "Pure Retinol",
            "Squalane",
            "Coenzyme Q10",
            "Tocopherol"
        ],
        "ingredients": [
            "Squalane",
            "Caprylic/Capric Triglyceride",
            "Pure Retinol",
            "Coenzyme Q10",
            "Tocopherol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Waterless Squalane Oil",
        "finish": "Silky Nourished Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "Those in their mid-20s or 30s starting their first clinical anti-aging and cell turnover journey.",
        "avoidIf": "You are currently pregnant or nursing (retinoids are strictly contraindicated).",
        "whyWeLikeIt": "Formulated in water-free squalane to prevent retinol degradation from oxidation while dramatically buffering irritation.",
        "pros": [
            "Waterless squalane base provides continuous lipid hydration to prevent peeling",
            "0.3% pure retinol is clinically proven to boost collagen synthesis",
            "Antioxidant CoQ10 shields cells from oxidative free radical damage"
        ],
        "cons": [
            "Requires gradual introduction (1-2 nights a week) and nightly buffering with moisturizer"
        ],
        "verdict": "The safest, most scientifically sound entry-level retinol serum in the Indian market.",
        "alternatives": [
            {
                "label": "Zero-Purging Retinoid Alternative",
                "productId": "minimalist-granactive-retinoid-2",
                "reason": "Next-gen HPR ester with zero peeling or irritation."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.8,
            "weatherResilience": 9.4,
            "texture": 9.4,
            "value": 9.6,
            "overall": 9.7
        }
    },
    {
        "id": "minimalist-granactive-retinoid-2",
        "name": "Granactive Retinoid 2% (0.2% HPR)",
        "title": "Minimalist Granactive Retinoid 2% (0.2% HPR Active)",
        "brand": "Minimalist",
        "category": "anti-aging",
        "subcategory": "Next-Gen Retinoid Serum",
        "asin": "B08F8W91F8",
        "amazonUrl": "https://www.amazon.in/dp/B08F8W91F8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08F8W91F8?tag=oraeskin-21",
        "badge": "Best for Sensitive Skin & Zero Purging",
        "price": 629,
        "priceEst": "₹629",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-granactive-retinoid-2.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "4,700+",
        "reviewCount": "4,700+",
        "scoreBreakdown": {
            "formula": 9.7,
            "skinSuitability": 9.8,
            "evidence": 9.6,
            "userFeedback": 9.5,
            "value": 9.4,
            "availability": 9.8
        },
        "skinType": [
            "Sensitive",
            "All",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Crow's Feet",
            "Dull Tone",
            "Early Wrinkles",
            "Sensitive Aging"
        ],
        "keyActives": [
            "2% Granactive Retinoid (0.2% Hydroxypinacolone Retinoate)",
            "Dimethyl Isosorbide"
        ],
        "keyIngredients": [
            "Hydroxypinacolone Retinoate",
            "Dimethyl Isosorbide",
            "Caprylic/Capric Triglyceride"
        ],
        "ingredients": [
            "Caprylic/Capric Triglyceride",
            "Dimethyl Isosorbide",
            "Hydroxypinacolone Retinoate",
            "Tocopherol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silky Emulsion Fluid",
        "finish": "Featherlight Satin",
        "whiteCast": "Not Applicable",
        "bestFor": "Sensitive skin types who want cellular anti-aging results without peeling, redness, or retinoid dermatitis.",
        "avoidIf": "You are pregnant or breastfeeding.",
        "whyWeLikeIt": "Hydroxypinacolone Retinoate (HPR) binds directly to retinoid receptors without requiring enzymatic conversion.",
        "pros": [
            "Bypasses the enzymatic conversion cascade, binding directly to cellular receptors",
            "Virtual zero incidence of peeling, redness, stinging, or purging",
            "Safe for regular every-other-night usage much sooner than traditional retinol"
        ],
        "cons": [
            "Slightly higher price point than basic entry retinol serums"
        ],
        "verdict": "The modern technological marvel for anti-aging with virtually zero downtime or peeling.",
        "alternatives": [
            {
                "label": "Classic Pure Retinol Alternative",
                "productId": "minimalist-retinol-03",
                "reason": "Proven traditional pure retinol in squalane."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.7,
        "scores": {
            "formula": 9.7,
            "weatherResilience": 9.8,
            "texture": 9.8,
            "value": 9.4,
            "overall": 9.7
        }
    },
    {
        "id": "lrp-effaclar-purifying-gel",
        "name": "Effaclar Purifying Foaming Gel",
        "title": "La Roche-Posay Effaclar Purifying Foaming Gel Face Wash for Oily, Acne-Prone Skin",
        "brand": "La Roche-Posay",
        "category": "cleansers",
        "subcategory": "Zinc Gel Cleanser",
        "asin": "B002P3L99G",
        "amazonUrl": "https://www.amazon.in/dp/B002P3L99G?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B002P3L99G?tag=oraeskin-21",
        "badge": "Best Premium Gentle Wash for Oily Skin",
        "price": 1400,
        "priceEst": "₹1,400",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/lrp-effaclar-purifying-gel.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "7,300+",
        "reviewCount": "7,300+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 9,
            "evidence": 8.5,
            "userFeedback": 9.2,
            "value": 7,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone",
            "Sensitive"
        ],
        "concerns": [
            "Oiliness",
            "Active Pimples",
            "Pore Cleansing",
            "Shine Control"
        ],
        "keyActives": [
            "Zinc PCA",
            "La Roche-Posay Thermal Spring Water"
        ],
        "keyIngredients": [
            "Zinc PCA",
            "Thermal Spring Water",
            "Coco-Betaine"
        ],
        "ingredients": [
            "Aqua / Water",
            "Sodium Laureth Sulfate",
            "PEG-8",
            "Coco-Betaine",
            "Hexylene Glycol",
            "Sodium Chloride",
            "Zinc PCA",
            "Parfum / Fragrance"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Clear Foaming Gel",
        "finish": "Clean & Oil-Free without Squeaky Tightness",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily and acne-prone skin that wants a reliable daily foam without an exfoliating acid, especially alongside prescription or leave-on acne actives.",
        "avoidIf": "You are on a tight budget, or your skin reacts to added fragrance.",
        "whyWeLikeIt": "A deliberately simple, acid-free foaming gel with Zinc PCA for oil control. Because it does not exfoliate, it pairs safely with retinoids, benzoyl peroxide or salicylic serums.",
        "pros": [
            "Acid-free, so it layers safely under strong leave-on acne treatments",
            "Zinc PCA helps keep midday shine down on oily T-zones",
            "Can double as a body wash for chest and back breakouts",
            "Strong Amazon India rating (4.6★ across 7,300+ ratings)"
        ],
        "cons": [
            "Around ₹7 per ml — several times the price of Indian alternatives",
            "Contains added fragrance and a sulfate surfactant, which some sensitive skin dislikes",
            "Does not treat clogged pores by itself; you still need a BHA or retinoid for blackheads"
        ],
        "verdict": "A dependable, gentle foaming gel for oily skin and the safest partner for strong acne treatments, though you pay a premium for the brand.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "reequil-oil-control-facewash",
                "reason": "Also built around Zinc PCA for oil control, at about a third of the price per ml."
            },
            {
                "label": "Fragrance-Free Alternative",
                "productId": "cerave-foaming-cleanser",
                "reason": "Fragrance-free foaming cleanser with ceramides for oily skin with a weak barrier."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 9,
            "texture": 8.8,
            "value": 7,
            "overall": 8.6
        }
    },
    {
        "id": "neutrogena-oilfree-acne-wash",
        "name": "Oil-Free Acne Wash",
        "title": "Neutrogena Oil-Free Acne Wash with 2% Salicylic Acid",
        "brand": "Neutrogena",
        "category": "cleansers",
        "subcategory": "BHA Acne Cleanser",
        "asin": "B006LXDMCS",
        "amazonUrl": "https://www.amazon.in/dp/B006LXDMCS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B006LXDMCS?tag=oraeskin-21",
        "badge": "Classic 2% Salicylic Acne Wash",
        "price": 705,
        "priceEst": "₹705",
        "currency": "₹",
        "size": "175ml",
        "image": "/images/products/neutrogena-oilfree-acne-wash.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "10,900+",
        "reviewCount": "10,900+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.5,
            "evidence": 8.8,
            "userFeedback": 8.4,
            "value": 7.5,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Acne-Prone"
        ],
        "concerns": [
            "Active Pimples",
            "Blackheads",
            "Whiteheads",
            "Sebum Buildup"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Sodium C14-16 Olefin Sulfonate",
            "Cocamidopropyl Betaine"
        ],
        "ingredients": [
            "Salicylic Acid 2% (active)",
            "Water",
            "Sodium C14-16 Olefin Sulfonate",
            "Cocamidopropyl Betaine",
            "Sodium Chloride",
            "Fragrance"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Translucent Foaming Gel",
        "finish": "Squeaky-Clean & Matte",
        "whiteCast": "Not Applicable",
        "bestFor": "Very oily, breakout-prone skin that tolerates a strong foam and wants the maximum 2% salicylic acid in a cleanser.",
        "avoidIf": "You have dry, sensitive or fragrance-reactive skin, or you already use a leave-on BHA or retinoid every night.",
        "whyWeLikeIt": "One of the longest-running 2% salicylic acid washes, with decades of use behind it. A familiar choice for persistent oiliness and clogged pores.",
        "pros": [
            "Full 2% salicylic acid, the maximum commonly used in acne cleansers",
            "Pump bottle makes daily dosing easy and hygienic",
            "Rich lather that clears sunscreen and sweat well in humid weather"
        ],
        "cons": [
            "Contains added fragrance — a common trigger for sensitive skin",
            "Strong foam can feel drying if used twice daily, especially in winter or AC rooms",
            "A rinse-off acid has short contact time; leave-on BHA works harder on stubborn blackheads"
        ],
        "verdict": "An effective 2% BHA wash for very oily, resilient skin. Sensitive or fragrance-averse skin will do better with the Minimalist or The Derma Co alternatives.",
        "alternatives": [
            {
                "label": "Fragrance-Free BHA Alternative",
                "productId": "minimalist-salicylic-cleanser",
                "reason": "2% salicylic acid with LHA and zinc, fragrance-free and under ₹300."
            },
            {
                "label": "Gentler Budget Alternative",
                "productId": "dermaco-1-salicylic-facewash",
                "reason": "Milder 1% salicylic acid, easier to use twice daily."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8.8,
            "texture": 8.4,
            "value": 7.5,
            "overall": 8.3
        }
    },
    {
        "id": "dermaco-1-salicylic-facewash",
        "name": "1% Salicylic Acid Gel Face Wash",
        "title": "The Derma Co 1% Salicylic Acid Gel Face Wash with Witch Hazel",
        "brand": "The Derma Co",
        "category": "cleansers",
        "subcategory": "BHA Gel Cleanser",
        "asin": "B095J52W7P",
        "amazonUrl": "https://www.amazon.in/dp/B095J52W7P?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B095J52W7P?tag=oraeskin-21",
        "badge": "Best Budget Acne Face Wash",
        "price": 217,
        "priceEst": "₹217",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/dermaco-1-salicylic-facewash.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "8,900+",
        "reviewCount": "8,900+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 8.3,
            "userFeedback": 8.2,
            "value": 9.6,
            "availability": 9.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Active Pimples",
            "Oiliness",
            "Whiteheads",
            "Pore Cleansing"
        ],
        "keyActives": [
            "1% Salicylic Acid (BHA)",
            "Willow Bark Extract",
            "Witch Hazel Extract"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Salix Alba (Willow) Bark Extract",
            "Hamamelis Virginiana (Witch Hazel) Extract",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua (Water)",
            "Sodium Alpha Olefin Sulfonate",
            "Cocamidopropyl Betaine",
            "Glycerin",
            "Cocamide MEA",
            "Sodium Lactate",
            "Salicylic Acid",
            "Salix Alba (Willow) Bark Extract",
            "Hamamelis Virginiana (Witch Hazel) Extract",
            "Coco-Glucoside",
            "Glyceryl Oleate",
            "PEG-120 Methyl Glucose Dioleate",
            "Sodium Chloride",
            "Phenoxyethanol",
            "Triethylene Glycol",
            "Disodium EDTA"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Clear Gel",
        "finish": "Fresh & Lightly Matte",
        "whiteCast": "Not Applicable",
        "bestFor": "Students and first-time acne routines that want a gentle, fragrance-free salicylic wash they can use twice a day without breaking the bank.",
        "avoidIf": "You have very dry or eczema-prone skin, or you need a stronger 2% BHA for stubborn blackheads.",
        "whyWeLikeIt": "A 1% salicylic acid level is gentle enough for twice-daily use, and at roughly ₹2 per ml it is one of the cheapest fragrance-free BHA washes on Amazon India.",
        "pros": [
            "Fragrance-free with a short, transparent ingredient list",
            "1% BHA is easier to tolerate twice daily than 2% washes",
            "Glycerin and glyceryl oleate soften the cleanse",
            "About ₹2 per ml — excellent value"
        ],
        "cons": [
            "Witch hazel extract can sting very reactive skin",
            "Milder 1% strength may not be enough on its own for heavy blackhead congestion",
            "Tube packaging makes it harder to judge how much is left"
        ],
        "verdict": "The best-value everyday salicylic face wash for oily, mildly acne-prone skin. Step up to a 2% wash only if breakouts persist.",
        "alternatives": [
            {
                "label": "Stronger 2% BHA Alternative",
                "productId": "minimalist-salicylic-cleanser",
                "reason": "2% salicylic acid with LHA for more stubborn blackheads."
            },
            {
                "label": "Non-Acid Daily Alternative",
                "productId": "reequil-oil-control-facewash",
                "reason": "Zinc-based oil control without an exfoliating acid, for days your skin feels sensitised."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.8,
            "texture": 8.5,
            "value": 9.6,
            "overall": 8.6
        }
    },
    {
        "id": "cetaphil-oily-skin-cleanser",
        "name": "Oily Skin Cleanser",
        "title": "Cetaphil Oily Skin Cleanser Foaming Face Wash for Oily, Acne-Prone Skin",
        "brand": "Cetaphil",
        "category": "cleansers",
        "subcategory": "Gentle Foaming Cleanser",
        "asin": "B01CCGW732",
        "amazonUrl": "https://www.amazon.in/dp/B01CCGW732?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01CCGW732?tag=oraeskin-21",
        "badge": "Best Gentle Foam for Oily Sensitive Skin",
        "price": 579,
        "priceEst": "₹579",
        "currency": "₹",
        "size": "118ml",
        "image": "/images/products/cetaphil-oily-skin-cleanser.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "20,800+",
        "reviewCount": "20,800+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.4,
            "evidence": 7.8,
            "userFeedback": 8.4,
            "value": 8,
            "availability": 9.2
        },
        "skinType": [
            "Oily",
            "Combination",
            "Sensitive",
            "Acne-Prone"
        ],
        "concerns": [
            "Oiliness",
            "Barrier Health",
            "Pore Cleansing"
        ],
        "keyActives": [
            "Glycerin",
            "Sunflower Seed Oil",
            "Shea Butter"
        ],
        "keyIngredients": [
            "Glycerin",
            "Caprylic/Capric Triglyceride",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Butyrospermum Parkii (Shea Butter)"
        ],
        "ingredients": [
            "Purified Water",
            "Glycerin",
            "Caprylic/Capric Triglyceride",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Pentylene Glycol",
            "Butyrospermum Parkii (Shea Butter)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Soft Foaming Gel",
        "finish": "Clean & Comfortable, Not Stripped",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily or combination skin that is also sensitive — for example skin irritated by acne medication — and needs oil removal without tightness.",
        "avoidIf": "You want an acne-treating active in your cleanser; this one contains no salicylic acid.",
        "whyWeLikeIt": "An unscented, pH-balanced foam that cleans off oil while glycerin and plant lipids help the skin feel comfortable afterwards. Useful for oily skin that reacts to stronger washes.",
        "pros": [
            "Unscented and soap-free, per the listing",
            "Glycerin, sunflower seed oil and shea butter help offset the drying effect of washing",
            "Widely available at a mid-range price with 20,800+ Amazon India ratings"
        ],
        "cons": [
            "No acne-treating active — breakouts need a separate BHA, benzoyl peroxide or retinoid",
            "The Amazon listing shows only a partial ingredient list; check the pack for the full one",
            "Small 118ml size for the price compared with Indian brands"
        ],
        "verdict": "A comfortable, fragrance-free daily foam for oily but sensitive skin. Pair it with a leave-on active if acne is the main concern.",
        "alternatives": [
            {
                "label": "Ceramide Alternative",
                "productId": "cerave-foaming-cleanser",
                "reason": "Similar gentle foam with added ceramides and niacinamide."
            },
            {
                "label": "Acne-Active Alternative",
                "productId": "dermaco-1-salicylic-facewash",
                "reason": "Adds 1% salicylic acid for active breakouts at a lower price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.4,
            "texture": 8.6,
            "value": 8,
            "overall": 8.4
        }
    },
    {
        "id": "reequil-oil-control-facewash",
        "name": "Oil Control Face Wash",
        "title": "Re'equil Oil Control Face Wash with Zinc PCA — Soap & Sulphate Free",
        "brand": "Re'equil",
        "category": "cleansers",
        "subcategory": "Sulphate-Free Zinc Cleanser",
        "asin": "B0GFTYW6P1",
        "amazonUrl": "https://www.amazon.in/dp/B0GFTYW6P1?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GFTYW6P1?tag=oraeskin-21",
        "badge": "Best Sulphate-Free Oil Control Under ₹300",
        "price": 293,
        "priceEst": "₹293",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/reequil-oil-control-facewash.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "2,900+",
        "reviewCount": "2,900+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.6,
            "evidence": 7.6,
            "userFeedback": 8,
            "value": 9.2,
            "availability": 8.8
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Oiliness",
            "Shine Control",
            "Pore Cleansing"
        ],
        "keyActives": [
            "Zinc PCA"
        ],
        "keyIngredients": [
            "Zinc PCA",
            "Gentle Non-Soap Surfactants"
        ],
        "ingredients": [
            "Zinc PCA",
            "Soap-free, sulphate-free surfactant base (full INCI on pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Clear Gel",
        "finish": "Shine-Free & Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily, shine-prone skin that feels tight or red after sulphate foams and wants zinc-based oil control on a budget.",
        "avoidIf": "You expect a single cleanser to clear active acne; there is no exfoliating acid here.",
        "whyWeLikeIt": "Soap- and sulphate-free with Zinc PCA for sebum control, so it targets shine without the stripped feeling that drives rebound oiliness.",
        "pros": [
            "Soap- and sulphate-free, non-comedogenic and paraben-free per the brand",
            "Zinc PCA helps regulate oil, the same approach as premium options",
            "Generous 150ml for under ₹300"
        ],
        "cons": [
            "No exfoliating acid, so blackheads need a separate BHA",
            "Full ingredient list is not shown on the Amazon listing — check the pack",
            "Low-foam gels can feel less 'clean' to people used to rich lathers"
        ],
        "verdict": "A smart budget pick for everyday oil control, especially if sulphate washes leave your skin tight. Add a leave-on BHA for acne.",
        "alternatives": [
            {
                "label": "Premium Zinc Alternative",
                "productId": "lrp-effaclar-purifying-gel",
                "reason": "Similar Zinc PCA approach with a richer foam and a longer track record."
            },
            {
                "label": "Acne-Active Alternative",
                "productId": "dermaco-1-salicylic-facewash",
                "reason": "Adds 1% salicylic acid for active pimples at a similar price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.8,
            "texture": 8.3,
            "value": 9.2,
            "overall": 8.3
        }
    },
    {
        "id": "theordinary-caffeine-egcg",
        "name": "Caffeine Solution 5% + EGCG",
        "title": "The Ordinary Caffeine Solution 5% + EGCG Depuffing Eye Serum",
        "brand": "The Ordinary",
        "category": "eye-care",
        "subcategory": "Caffeine Eye Serum",
        "asin": "B01MUZVE1C",
        "amazonUrl": "https://www.amazon.in/dp/B01MUZVE1C?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01MUZVE1C?tag=oraeskin-21",
        "badge": "Best for Morning Puffiness",
        "price": 900,
        "priceEst": "₹900",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/theordinary-caffeine-egcg.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "19,000+",
        "reviewCount": "19,000+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8.2,
            "userFeedback": 8.4,
            "value": 8.2,
            "availability": 9
        },
        "skinType": [
            "All",
            "Sensitive",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Puffy Eyes",
            "Late Night Fatigue",
            "Vascular Dark Circles"
        ],
        "keyActives": [
            "5% Caffeine",
            "EGCG (Green Tea)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Caffeine",
            "Epigallocatechin Gallatyl Glucoside",
            "Hyaluronic Acid",
            "Glycine Soja (Soybean) Seed Extract"
        ],
        "ingredients": [
            "Aqua (Water)",
            "Caffeine",
            "Maltodextrin",
            "Glycerin",
            "Propanediol",
            "Epigallocatechin Gallatyl Glucoside",
            "Gallyl Glucoside",
            "Hyaluronic Acid",
            "Glycine Soja Seed Extract"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Water-Based Serum",
        "finish": "Absorbs Quickly, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Morning puffiness and tired-looking eyes, including sensitive or milia-prone skin and contact lens wearers who want a light, retinoid-free formula.",
        "avoidIf": "Your main concern is fine lines or brown pigment-type dark circles; caffeine mainly helps puffiness and bluish shadows.",
        "whyWeLikeIt": "A simple, fragrance-free water serum with a high 5% caffeine level and green tea EGCG. It's light enough to use morning and night without clogging the eye area.",
        "pros": [
            "High 5% caffeine for visible de-puffing",
            "Fragrance-free, retinoid-free and lightweight — gentle on sensitive eyes",
            "30ml lasts months at a rice-grain dose"
        ],
        "cons": [
            "Can feel slightly tacky before it sinks in",
            "Little effect on pigment-type (brown) dark circles",
            "Not moisturising enough alone for very dry under-eyes"
        ],
        "verdict": "The most dependable caffeine eye serum on Amazon India for puffiness. Pair it with a moisturiser if your under-eyes are dry.",
        "alternatives": [
            {
                "label": "Budget Caffeine Alternative",
                "productId": "dermaco-5-caffeine-serum",
                "reason": "Indian 5% caffeine serum with retinol and peptides at a lower price."
            },
            {
                "label": "Retinal Alternative for Fine Lines",
                "productId": "minimalist-caffeine-eye-serum",
                "reason": "Retinal, vitamin K and 3% caffeine in one cream for lines and dark circles."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.2,
            "overall": 8.5
        }
    },
    {
        "id": "boj-revive-eye-serum",
        "name": "Revive Eye Serum: Ginseng + Retinal",
        "title": "Beauty of Joseon Revive Eye Serum with Ginseng & Retinal",
        "brand": "Beauty of Joseon",
        "category": "eye-care",
        "subcategory": "Gentle Retinal Eye Serum",
        "asin": "B0B45LL4DD",
        "amazonUrl": "https://www.amazon.in/dp/B0B45LL4DD?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B45LL4DD?tag=oraeskin-21",
        "badge": "Best Gentle Retinal for Sensitive Eyes",
        "price": 1136,
        "priceEst": "₹1,136",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/boj-revive-eye-serum.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "19,300+",
        "reviewCount": "19,300+",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 8.6,
            "evidence": 7.8,
            "userFeedback": 8.2,
            "value": 7.4,
            "availability": 8.6
        },
        "skinType": [
            "All",
            "Dry",
            "Sensitive",
            "Normal"
        ],
        "concerns": [
            "Fine Lines",
            "Crow's Feet",
            "Dehydration",
            "Dark Circles"
        ],
        "keyActives": [
            "Retinal (Liposomal)",
            "Ginseng Root Extract",
            "Niacinamide",
            "Adenosine"
        ],
        "keyIngredients": [
            "Retinal",
            "Panax Ginseng Root Extract",
            "Niacinamide",
            "Adenosine",
            "Ceramide NP",
            "Palmitoyl Tripeptide-5",
            "Sodium Hyaluronate"
        ],
        "ingredients": [
            "Water",
            "Glycerin",
            "Dipropylene Glycol",
            "Caprylic/Capric Triglyceride",
            "1,2-Hexanediol",
            "Niacinamide",
            "Cetearyl Alcohol",
            "Panax Ginseng Root Extract",
            "Macadamia Ternifolia Seed Oil",
            "Adenosine",
            "Cholesterol",
            "Retinal",
            "Sodium Hyaluronate",
            "Tocopherol",
            "Ceramide NP",
            "Palmitoyl Tripeptide-5"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silky Serum-Cream",
        "finish": "Soft & Hydrated, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Early fine lines and dry, crinkly under-eyes, for people who want to try a retinoid around the eyes without much irritation.",
        "avoidIf": "You are pregnant or breastfeeding (it contains retinal), or you want a fast, strong anti-ageing effect.",
        "whyWeLikeIt": "A low dose of encapsulated retinal cushioned by ceramide, cholesterol, niacinamide and ginseng. That's a gentle way to bring a retinoid into an eye routine.",
        "pros": [
            "Gentle, encapsulated retinal with a supportive base of ceramide NP, cholesterol and hyaluronate",
            "Fragrance-free; the brand reports a sensitive-skin patch test",
            "Pump applicator keeps the formula hygienic"
        ],
        "cons": [
            "Retinal is low in the ingredient list — results are gradual",
            "Around ₹38 per ml, pricier than Indian options",
            "Imported, so stock and price on Amazon India can fluctuate"
        ],
        "verdict": "A comfortable first retinoid for the eye area, especially for dry or sensitive skin. Pick Minimalist's retinal cream if you want more punch for less money.",
        "alternatives": [
            {
                "label": "Stronger, Cheaper Retinal",
                "productId": "minimalist-caffeine-eye-serum",
                "reason": "Retinal 0.1% plus caffeine and vitamin K, under ₹500."
            },
            {
                "label": "Retinoid-Free Alternative",
                "productId": "theordinary-caffeine-egcg",
                "reason": "Light caffeine serum for puffiness, safe if you're avoiding retinoids."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 7.4,
            "overall": 8.3
        }
    },
    {
        "id": "cosrx-snail-96-essence",
        "name": "Advanced Snail 96 Mucin Power Essence",
        "title": "COSRX Advanced Snail 96 Mucin Power Essence",
        "brand": "COSRX",
        "category": "serums",
        "subcategory": "Hydrating Essence",
        "asin": "B00PBX3L7K",
        "amazonUrl": "https://www.amazon.in/dp/B00PBX3L7K?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00PBX3L7K?tag=oraeskin-21",
        "badge": "Best Korean Hydrating Essence",
        "price": 1300,
        "priceEst": "₹1,300",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/cosrx-snail-96-essence.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "103,400+",
        "reviewCount": "103,400+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 7.4,
            "userFeedback": 8.6,
            "value": 7.6,
            "availability": 9.2
        },
        "skinType": [
            "All",
            "Dry",
            "Combination",
            "Sensitive"
        ],
        "concerns": [
            "Dehydration",
            "Barrier Damage",
            "Dullness",
            "Rough Texture"
        ],
        "keyActives": [
            "96% Snail Secretion Filtrate",
            "Sodium Hyaluronate",
            "Panthenol",
            "Allantoin"
        ],
        "keyIngredients": [
            "Snail Secretion Filtrate",
            "Betaine",
            "Sodium Hyaluronate",
            "Allantoin",
            "Panthenol"
        ],
        "ingredients": [
            "Snail Secretion Filtrate",
            "Betaine",
            "Butylene Glycol",
            "1,2-Hexanediol",
            "Sodium Polyacrylate",
            "Phenoxyethanol",
            "Sodium Hyaluronate",
            "Allantoin",
            "Ethyl Hexanediol",
            "Carbomer",
            "Panthenol",
            "Arginine"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light, Stretchy Essence",
        "finish": "Dewy & Plump",
        "whiteCast": "Not Applicable",
        "bestFor": "Dehydrated or sensitised skin that needs light, layerable hydration — a classic step in Korean 'glass skin' routines.",
        "avoidIf": "You are vegan or avoid animal-derived ingredients, or you dislike a slightly slippery texture.",
        "whyWeLikeIt": "A short, fragrance-free formula built around snail mucin with hyaluronate, panthenol and allantoin. It's an easy hydrating layer for almost every skin type, including oily skin in humid weather.",
        "pros": [
            "Very short, fragrance-free ingredient list",
            "Light enough for oily skin in humid weather, layers under moisturiser",
            "Huge Amazon India following (103,000+ ratings)"
        ],
        "cons": [
            "Animal-derived — not suitable for vegans",
            "Snail mucin's skin benefits have limited clinical evidence; it works mainly as a humectant",
            "Imported pricing at around ₹13 per ml"
        ],
        "verdict": "The benchmark Korean hydrating essence: simple, gentle and easy to layer. It hydrates well, but don't expect it to treat acne or pigmentation.",
        "alternatives": [
            {
                "label": "Budget Hydration Alternative",
                "productId": "minimalist-b5-moisturizer",
                "reason": "Oil-free Vitamin B5 gel moisturiser for under ₹250."
            },
            {
                "label": "Gentle Exfoliating Toner",
                "productId": "minimalist-pha-toner",
                "reason": "PHA 3% toner for texture, if you wanted the exfoliating step instead."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 7.6,
            "overall": 8.4
        }
    },
    {
        "id": "deconstruct-gel-sunscreen-spf50",
        "name": "Gel Sunscreen SPF 50 PA++++",
        "title": "Deconstruct Gel Sunscreen SPF 50 PA++++ for Oily Skin",
        "brand": "Deconstruct",
        "category": "sunscreens",
        "subcategory": "New-Gen Filter Gel Sunscreen",
        "asin": "B0B45RB1RV",
        "amazonUrl": "https://www.amazon.in/dp/B0B45RB1RV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B45RB1RV?tag=oraeskin-21",
        "badge": "Best Gel Sunscreen for Oily Skin",
        "price": 367,
        "priceEst": "₹367",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/deconstruct-gel-sunscreen-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "18,600+",
        "reviewCount": "18,600+",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 9,
            "evidence": 8.6,
            "userFeedback": 8.4,
            "value": 9,
            "availability": 9.2
        },
        "skinType": [
            "Oily",
            "Combination",
            "Normal",
            "Acne-Prone"
        ],
        "concerns": [
            "Sun Protection",
            "Tanning",
            "Oiliness",
            "UV Damage"
        ],
        "keyActives": [
            "DHHB (Uvinul A Plus)",
            "Ethylhexyl Triazone",
            "Bemotrizinol",
            "Bisoctrizole (MBBT)"
        ],
        "keyIngredients": [
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Ethylhexyl Triazone",
            "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
            "Methylene Bis-Benzotriazolyl Tetramethylbutylphenol",
            "Glycerin",
            "Squalane"
        ],
        "ingredients": [
            "Aqua",
            "C12-C15 Alkyl Benzoate",
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Ethylhexyl Triazone",
            "Bis Ethylhexyloxyphenol Methoxyphenyl Triazine",
            "Phospholipids",
            "Polysorbate 80",
            "Butylene Glycol",
            "Glycerin",
            "Methylene Bis-Benzotriazolyl Tetramethylbutylphenol",
            "Decyl Glucoside",
            "Xanthan Gum",
            "Octyl Salicylate",
            "Squalane",
            "Butyloctyl Salicylate",
            "Phenoxyethanol (and) Ethylhexylglycerin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Gel",
        "finish": "Non-Greasy, Natural",
        "whiteCast": "Zero",
        "bestFor": "Oily and combination skin that wants a light, photostable daily sunscreen with modern UV filters at a budget price.",
        "avoidIf": "Your skin is very dry and needs a richer, moisturising sunscreen.",
        "whyWeLikeIt": "Four new-generation, photostable UV filters (including Uvinul A Plus and Tinosorb S) in a fragrance-free gel under ₹400. That's a filter line-up usually found in pricier sunscreens.",
        "pros": [
            "Four modern, photostable UV filters for broad UVA/UVB coverage",
            "Unscented, lightweight gel with no white cast",
            "Under ₹400 for 50g"
        ],
        "cons": [
            "Not very moisturising — dry skin will need a moisturiser underneath",
            "Gel sunscreens can pill if layered over heavy creams"
        ],
        "verdict": "One of the best-value sunscreens for oily skin on Amazon India, with a genuinely modern filter system.",
        "alternatives": [
            {
                "label": "Ultra-Matte Alternative",
                "productId": "reequil-ultra-matte-spf50",
                "reason": "Drier, more mattifying finish for very oily skin."
            },
            {
                "label": "Hydrating Alternative",
                "productId": "dermaco-hyaluronic-spf50",
                "reason": "Hyaluronic aqua gel with a little more hydration."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.8,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 9,
            "texture": 9,
            "value": 9,
            "overall": 8.8
        }
    },
    {
        "id": "foxtale-glow-sunscreen-spf50",
        "name": "Glow Sunscreen SPF 50 PA++++",
        "title": "Foxtale Glow Sunscreen SPF 50 PA++++ with Vitamin C & Niacinamide",
        "brand": "Foxtale",
        "category": "sunscreens",
        "subcategory": "Dewy Glow Sunscreen",
        "asin": "B0C3CP6B5Y",
        "amazonUrl": "https://www.amazon.in/dp/B0C3CP6B5Y?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C3CP6B5Y?tag=oraeskin-21",
        "badge": "Best Dewy Glow Sunscreen Under ₹350",
        "price": 318,
        "priceEst": "₹318",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/foxtale-glow-sunscreen-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "9,900+",
        "reviewCount": "9,900+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 8.4,
            "userFeedback": 8.4,
            "value": 9.2,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Sun Protection",
            "Dullness",
            "Tanning",
            "Uneven Tone"
        ],
        "keyActives": [
            "New-Gen UV Filters (DHHB, Ethylhexyl Triazone, Tris-Biphenyl Triazine)",
            "Niacinamide",
            "Ethyl Ascorbic Acid (Vitamin C)"
        ],
        "keyIngredients": [
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Ethylhexyl Triazone",
            "Tris-Biphenyl Triazine",
            "Niacinamide",
            "Ethyl Ascorbic Acid",
            "Tocopherol"
        ],
        "ingredients": [
            "Aqua",
            "C12-15 Alkyl Benzoate",
            "Propylene Glycol",
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Dimethicone",
            "Cetearyl Olivate (and) Sorbitan Olivate",
            "Ethylhexyl Triazone",
            "Glyceryl Monostearate",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Niacinamide",
            "Tris-Biphenyl Triazine",
            "Ethyl Ascorbic Acid",
            "Tocopherol",
            "Disodium EDTA",
            "Fragrance (allergen-free)"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Lotion",
        "finish": "Dewy Glow",
        "whiteCast": "Zero",
        "bestFor": "Normal to dry skin that wants a radiant, dewy finish and a little brightening support from niacinamide and vitamin C.",
        "avoidIf": "You have very oily skin that dislikes glow, or you avoid fragrance.",
        "whyWeLikeIt": "Modern UV filters including Tinosorb A2B, with niacinamide and a stable vitamin C derivative, for a glowy finish at a low price.",
        "pros": [
            "New-gen UV filters with a radiant finish and no white cast",
            "Niacinamide and ethyl ascorbic acid support even tone",
            "Very good value at around ₹6 per ml"
        ],
        "cons": [
            "Contains added fragrance (labelled allergen-free)",
            "The glow finish can look shiny on oily skin by midday"
        ],
        "verdict": "A great budget pick for dull, normal-to-dry skin that wants a glow. Oily or fragrance-sensitive skin should choose a gel instead.",
        "alternatives": [
            {
                "label": "Fragrance-Free Dewy Alternative",
                "productId": "aqualogica-radiance-spf50",
                "reason": "Dewy gel sunscreen with watermelon and niacinamide."
            },
            {
                "label": "Gel Alternative for Oily Skin",
                "productId": "deconstruct-gel-sunscreen-spf50",
                "reason": "Unscented, non-greasy gel with four modern filters."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 9.2,
            "overall": 8.5
        }
    },
    {
        "id": "minimalist-salicylic-serum-2",
        "name": "2% Salicylic Acid Serum",
        "title": "Minimalist 2% Salicylic Acid Serum for Acne & Blackheads",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "BHA Exfoliating Serum",
        "asin": "B08GG9M863",
        "amazonUrl": "https://www.amazon.in/dp/B08GG9M863?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08GG9M863?tag=oraeskin-21",
        "badge": "Best Overall Salicylic Acid Serum",
        "price": 483,
        "priceEst": "₹483",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-salicylic-serum-2.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "26,800+",
        "reviewCount": "26,800+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.6,
            "evidence": 9,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9.4
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blackheads",
            "Whiteheads",
            "Active Pimples",
            "Pore Cleansing"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)"
        ],
        "keyIngredients": [
            "Salicylic Acid"
        ],
        "ingredients": [
            "Salicylic Acid 2% (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum",
        "finish": "Clean, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily, acne-prone skin with blackheads, whiteheads and clogged pores that needs a leave-on BHA.",
        "avoidIf": "You have dry or sensitised skin, or already use another strong exfoliant or retinoid every night.",
        "whyWeLikeIt": "A leave-on 2% salicylic acid works much harder on clogged pores than a face wash, and Minimalist's version is fragrance-free and widely trusted.",
        "pros": [
            "Full 2% salicylic acid in a leave-on serum for blackheads and whiteheads",
            "Fragrance-free",
            "Strong track record (26,800+ Amazon India ratings)"
        ],
        "cons": [
            "Can dry or irritate if used daily from the start — begin every other night",
            "Amazon listing doesn't show the full ingredient list"
        ],
        "verdict": "The best all-round leave-on BHA for most oily, acne-prone skin in India.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "dermaco-salicylic-serum-2",
                "reason": "2% salicylic serum with witch hazel in a small, cheap 10ml bottle."
            },
            {
                "label": "Gentler Squalane-Based Alternative",
                "productId": "theordinary-salicylic-solution-2",
                "reason": "Oil-based 2% solution that releases BHA more gradually."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.6,
            "overall": 8.7
        }
    },
    {
        "id": "dermaco-salicylic-serum-2",
        "name": "2% Salicylic Acid Face Serum",
        "title": "The Derma Co 2% Salicylic Acid Face Serum with Witch Hazel",
        "brand": "The Derma Co",
        "category": "serums",
        "subcategory": "BHA Exfoliating Serum",
        "asin": "B0C61Q7DM7",
        "amazonUrl": "https://www.amazon.in/dp/B0C61Q7DM7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C61Q7DM7?tag=oraeskin-21",
        "badge": "Best Budget Salicylic Acid Serum",
        "price": 182,
        "priceEst": "₹182",
        "currency": "₹",
        "size": "10ml",
        "image": "/images/products/dermaco-salicylic-serum-2.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "14,400+",
        "reviewCount": "14,400+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.4,
            "evidence": 8.8,
            "userFeedback": 8.2,
            "value": 8,
            "availability": 9.2
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blackheads",
            "Active Pimples",
            "Oiliness",
            "Pore Cleansing"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)",
            "Witch Hazel Extract",
            "Willow Bark Extract",
            "Sodium Hyaluronate"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Hamamelis Virginiana (Witch Hazel) Extract",
            "Salix Alba (Willow) Bark Extract",
            "Sodium Hyaluronate",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua (Water)",
            "Propanediol",
            "Ethoxydiglycol",
            "Salicylic Acid",
            "Methylpropanediol",
            "Glycerin",
            "Pentylene Glycol",
            "Hamamelis Virginiana (Witch Hazel) Extract",
            "Salix Alba (Willow) Bark Extract",
            "Sodium Hyaluronate",
            "Dimethyl Isosorbide",
            "Sclerotium Gum",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Sodium Benzoate",
            "Potassium Sorbate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery Serum",
        "finish": "Light & Matte",
        "whiteCast": "Not Applicable",
        "bestFor": "Trying a leave-on BHA for the first time on a budget, or spot-using it on oily, congested areas.",
        "avoidIf": "Your skin stings easily (witch hazel can irritate), or you want a large bottle for full-face daily use.",
        "whyWeLikeIt": "A water-based 2% salicylic serum with hyaluronate and glycerin to offset dryness, at a very low entry price.",
        "pros": [
            "2% salicylic acid with a transparent full ingredient list",
            "Hyaluronate and glycerin help reduce dryness",
            "Cheap way to test whether BHA suits you"
        ],
        "cons": [
            "Only 10ml — about ₹18 per ml, more than Minimalist's 30ml",
            "Witch hazel can sting sensitive skin"
        ],
        "verdict": "A low-risk way to try a leave-on BHA. Move to a bigger bottle once you know it works for you.",
        "alternatives": [
            {
                "label": "Better-Value Bottle",
                "productId": "minimalist-salicylic-serum-2",
                "reason": "Same 2% strength in a 30ml bottle."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8,
            "overall": 8.4
        }
    },
    {
        "id": "theordinary-salicylic-solution-2",
        "name": "Salicylic Acid 2% Solution",
        "title": "The Ordinary Salicylic Acid 2% Solution (Squalane Base)",
        "brand": "The Ordinary",
        "category": "serums",
        "subcategory": "Anhydrous BHA Solution",
        "asin": "B0C3PCJ6SD",
        "amazonUrl": "https://www.amazon.in/dp/B0C3PCJ6SD?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C3PCJ6SD?tag=oraeskin-21",
        "badge": "Best Gentle, Oil-Based BHA",
        "price": 600,
        "priceEst": "₹600",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/theordinary-salicylic-solution-2.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "14,800+",
        "reviewCount": "14,800+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.4,
            "evidence": 9,
            "userFeedback": 8.6,
            "value": 7.8,
            "availability": 9
        },
        "skinType": [
            "Combination",
            "Normal",
            "Acne-Prone",
            "Sensitive"
        ],
        "concerns": [
            "Blackheads",
            "Rough Texture",
            "Pore Cleansing",
            "Active Pimples"
        ],
        "keyActives": [
            "2% Salicylic Acid (BHA)",
            "Squalane Base",
            "Hydrating Polyglycerides"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Squalane",
            "Polyglycerides"
        ],
        "ingredients": [
            "Squalane",
            "Salicylic Acid",
            "Polyglyceryl esters (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Oil-Serum",
        "finish": "Soft, Slightly Silky",
        "whiteCast": "Not Applicable",
        "bestFor": "Combination or acne-prone skin that finds water-based BHA serums drying, and wants a gentler, gradual exfoliation.",
        "avoidIf": "You have very oily skin and dislike any oil-based texture.",
        "whyWeLikeIt": "Dissolving 2% salicylic acid in a squalane base releases the acid more gradually, which many people find less drying than water-based BHA serums.",
        "pros": [
            "Squalane base makes 2% BHA feel less drying",
            "Fragrance-free and simple",
            "Highest Amazon rating of the three serums we compared (4.3★)"
        ],
        "cons": [
            "Most expensive of the three per ml",
            "Oily texture may feel heavy on very oily skin in summer"
        ],
        "verdict": "The gentlest way to use a full-strength BHA, if your skin finds other serums drying.",
        "alternatives": [
            {
                "label": "Water-Based Alternative",
                "productId": "minimalist-salicylic-serum-2",
                "reason": "Lighter, non-oily 2% BHA serum for very oily skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 7.8,
            "overall": 8.6
        }
    },
    {
        "id": "nua-pimple-patch",
        "name": "Pimple Patch (Hydrocolloid + Salicylic Acid)",
        "title": "Nua Pimple Patch — 36 Hydrocolloid & Salicylic Acid Patches",
        "brand": "Nua",
        "category": "spot-treatments",
        "subcategory": "Hydrocolloid Pimple Patch",
        "asin": "B0D2ZVYLSS",
        "amazonUrl": "https://www.amazon.in/dp/B0D2ZVYLSS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0D2ZVYLSS?tag=oraeskin-21",
        "badge": "Best Budget Pimple Patch",
        "price": 135,
        "priceEst": "₹135",
        "currency": "₹",
        "size": "36 Patches",
        "image": "/images/products/nua-pimple-patch.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "2,400+",
        "reviewCount": "2,400+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.6,
            "evidence": 8.2,
            "userFeedback": 8,
            "value": 9.6,
            "availability": 8.8
        },
        "skinType": [
            "All",
            "Acne-Prone"
        ],
        "concerns": [
            "Whiteheads",
            "Pus-Filled Pimples",
            "Skin Picking Urges"
        ],
        "keyActives": [
            "Hydrocolloid",
            "Salicylic Acid"
        ],
        "keyIngredients": [
            "Hydrocolloid",
            "Salicylic Acid"
        ],
        "ingredients": [
            "Hydrocolloid",
            "Salicylic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thin Hydrocolloid Patch",
        "finish": "Discreet",
        "whiteCast": "Not Applicable",
        "bestFor": "Ripe, pus-filled whiteheads overnight, and stopping yourself from picking.",
        "avoidIf": "You're treating deep cysts with no visible head — patches can't reach them.",
        "whyWeLikeIt": "Hydrocolloid patches with salicylic acid at under ₹4 each. That's the cheapest sensible way to stop picking and flatten ripe spots overnight.",
        "pros": [
            "Under ₹4 per patch — excellent value",
            "Hydrocolloid absorbs fluid and blocks picking",
            "Unscented"
        ],
        "cons": [
            "Works on surface whiteheads, not deep or blind pimples",
            "Listing doesn't state the salicylic acid strength"
        ],
        "verdict": "The best-value pimple patch on Amazon India for whiteheads. Buy these before pricier micro-tip patches.",
        "alternatives": [
            {
                "label": "Leave-On Gel Alternative",
                "productId": "sebogel-spot-gel",
                "reason": "Salicylic and nicotinamide gel for bumps without a visible head."
            },
            {
                "label": "Branded Alternative",
                "productId": "deconstruct-pimple-patch",
                "reason": "Salicylic acid patches in three sizes with strong adhesion."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 9.6,
            "overall": 8.4
        }
    },
    {
        "id": "deconstruct-pimple-patch",
        "name": "Pimple Patches (Salicylic Acid)",
        "title": "Deconstruct Pimple Patches — 36 Patches in 3 Sizes",
        "brand": "Deconstruct",
        "category": "spot-treatments",
        "subcategory": "Hydrocolloid Pimple Patch",
        "asin": "B0GDZJN3MK",
        "amazonUrl": "https://www.amazon.in/dp/B0GDZJN3MK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GDZJN3MK?tag=oraeskin-21",
        "badge": "Best Multi-Size Pimple Patch",
        "price": 275,
        "priceEst": "₹275",
        "currency": "₹",
        "size": "36 Patches",
        "image": "/images/products/deconstruct-pimple-patch.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "400+",
        "reviewCount": "400+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.4,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 8.4,
            "availability": 8.6
        },
        "skinType": [
            "All",
            "Acne-Prone"
        ],
        "concerns": [
            "Whiteheads",
            "Active Pimples",
            "Skin Picking Urges"
        ],
        "keyActives": [
            "Hydrocolloid (Carboxymethyl Cellulose)",
            "Salicylic Acid"
        ],
        "keyIngredients": [
            "Carboxymethyl Cellulose",
            "Salicylic Acid"
        ],
        "ingredients": [
            "Carboxymethyl Cellulose",
            "Homopolymer",
            "Petroleum Resins",
            "Styrene Butadiene Copolymer",
            "Mineral Oil",
            "Polyurethane",
            "Pentaerythritol Tetrakis",
            "Salicylic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrocolloid Patch (3 Sizes)",
        "finish": "Discreet",
        "whiteCast": "Not Applicable",
        "bestFor": "Whiteheads and small inflamed spots of different sizes, when you want patches that stay put overnight.",
        "avoidIf": "You have cystic acne — the brand itself says these aren't formulated for cysts.",
        "whyWeLikeIt": "Three patch sizes in one pack and strong adhesion, with salicylic acid in the hydrocolloid.",
        "pros": [
            "Three sizes cover tiny to larger spots",
            "Strong adhesion for overnight wear",
            "Unscented"
        ],
        "cons": [
            "The title says 1% niacinamide, but the listed ingredients don't include niacinamide",
            "About twice the price per patch of Nua"
        ],
        "verdict": "A solid patch if you want multiple sizes, but Nua does the basic job for less.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "nua-pimple-patch",
                "reason": "Hydrocolloid and salicylic patches at under ₹4 each."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.4,
            "overall": 8.2
        }
    }
];

// Helper Query Functions
export function getAllProducts(): SkincareProduct[] {
    return PRODUCTS;
}

export function getProductById(id: string): SkincareProduct | undefined {
    return PRODUCTS.find(p => p.id === id);
}

// Products currently buyable on Amazon India; use for anything that shows product cards
export const AVAILABLE_PRODUCTS = PRODUCTS.filter(p => p.inStock);

export function getProductsByCategory(category: string): SkincareProduct[] {
    return AVAILABLE_PRODUCTS.filter(p => p.category === category);
}

export function getProductsByConcern(concern: string): SkincareProduct[] {
    const lower = concern.toLowerCase();
    return AVAILABLE_PRODUCTS.filter(p => p.concerns.some(c => c.toLowerCase().includes(lower)));
}

export function getProductsBySkinType(skinType: SkinType): SkincareProduct[] {
    if (skinType === 'All') return AVAILABLE_PRODUCTS;
    return AVAILABLE_PRODUCTS.filter(p => p.skinType.includes(skinType) || p.skinType.includes('All'));
}

export function getTopPicks(limit = 6): SkincareProduct[] {
    return [...AVAILABLE_PRODUCTS].sort((a, b) => b.oraeSkinScore - a.oraeSkinScore).slice(0, limit);
}

// Topic keywords in a guide's title/category/keywords → product categories
const TOPIC_CATEGORY_RULES: [RegExp, string][] = [
    [/sunscreen|spf|sun protection|uv\b/i, 'sunscreens'],
    [/cleanser|face ?wash|facewash/i, 'cleansers'],
    [/serum|vitamin c|niacinamide|arbutin|actives/i, 'serums'],
    [/moisturi[sz]er|barrier|cream|hydrat/i, 'moisturizers'],
    [/toner|exfoliat|peel|aha|bha|pha/i, 'toners'],
    [/eye|dark circle|puff/i, 'eye-care'],
    [/\blip/i, 'lip-care'],
    [/body|bacne|underarm|thigh|knuckle|neck|chafing|lotion/i, 'body-care'],
    [/spot|pimple|patch|breakout|acne/i, 'spot-treatments'],
    [/retin|anti-?aging|wrinkle|fine lines|mature/i, 'anti-aging'],
];

/**
 * Picks products to recommend at the end of a guide: products the guide links to
 * (by ASIN) come first, then products from matching categories and concerns.
 */
export function getRelatedProducts(text: string, mentionedAsins: string[] = [], limit = 6): SkincareProduct[] {
    const categories = TOPIC_CATEGORY_RULES.filter(([re]) => re.test(text)).map(([, c]) => c);
    const lower = text.toLowerCase();
    const scored = AVAILABLE_PRODUCTS.map(p => {
        let score = 0;
        const mentionIndex = mentionedAsins.indexOf(p.asin);
        if (mentionIndex >= 0) score += 20 - Math.min(mentionIndex, 10);
        const catIndex = categories.indexOf(p.category);
        if (catIndex >= 0) score += 30 - catIndex * 3;
        score += p.concerns.filter(c => lower.includes(c.toLowerCase())).length * 2;
        if (lower.includes(p.brand.toLowerCase())) score += 1;
        return { p, score };
    });
    return scored
        .sort((a, b) => b.score - a.score || b.p.oraeSkinScore - a.p.oraeSkinScore)
        .slice(0, limit)
        .map(s => s.p);
}

export function getAlternativeProducts(productId: string): { product: SkincareProduct; label: string; reason: string }[] {
    const p = getProductById(productId);
    if (!p || !p.alternatives) return [];
    return p.alternatives
        .map(alt => {
            const target = getProductById(alt.productId);
            if (!target || !target.inStock) return null;
            return { product: target, label: alt.label, reason: alt.reason };
        })
        .filter((item): item is { product: SkincareProduct; label: string; reason: string } => item !== null);
}
