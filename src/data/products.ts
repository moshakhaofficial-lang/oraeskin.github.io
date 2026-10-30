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
            "formula": 8.6,
            "skinSuitability": 8.5,
            "evidence": 8.7,
            "userFeedback": 8.2,
            "value": 8.8,
            "availability": 9.3
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.8,
            "overall": 8.6
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
            "formula": 8.3,
            "skinSuitability": 8.7,
            "evidence": 8.4,
            "userFeedback": 8.4,
            "value": 8.1,
            "availability": 9.2
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
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.7,
            "texture": 8.7,
            "value": 8.1,
            "overall": 8.5
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
            "formula": 8,
            "skinSuitability": 8.2,
            "evidence": 8.1,
            "userFeedback": 8.6,
            "value": 8.5,
            "availability": 9.1
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
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8.5,
            "overall": 8.3
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
            "formula": 8.1,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9.1
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
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8.1,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8.4,
            "overall": 8.2
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
            "formula": 8.4,
            "skinSuitability": 8.3,
            "evidence": 8.3,
            "userFeedback": 8.4,
            "value": 7.9,
            "availability": 9
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
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.3,
            "texture": 8.3,
            "value": 7.9,
            "overall": 8.4
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
            "formula": 8.7,
            "skinSuitability": 8.6,
            "evidence": 8.6,
            "userFeedback": 8.4,
            "value": 7.6,
            "availability": 9.1
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
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 7.6,
            "overall": 8.5
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
            "formula": 8.8,
            "skinSuitability": 8.7,
            "evidence": 8.8,
            "userFeedback": 8.8,
            "value": 8.5,
            "availability": 9.2
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
        "oraeSkinScore": 8.8,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8.7,
            "texture": 8.7,
            "value": 8.5,
            "overall": 8.8
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
            "formula": 8.7,
            "skinSuitability": 8.6,
            "evidence": 8.7,
            "userFeedback": 8.4,
            "value": 8.9,
            "availability": 9.3
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.9,
            "overall": 8.7
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
            "formula": 8.3,
            "skinSuitability": 8.5,
            "evidence": 8.5,
            "userFeedback": 8.6,
            "value": 8.3,
            "availability": 9.3
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
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.3,
            "overall": 8.5
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
            "formula": 8.1,
            "skinSuitability": 8,
            "evidence": 8,
            "userFeedback": 9,
            "value": 8,
            "availability": 9.1
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
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.1,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8.3
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
            "formula": 8.3,
            "skinSuitability": 8.4,
            "evidence": 8.2,
            "userFeedback": 9.2,
            "value": 8.9,
            "availability": 9.3
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.9,
            "overall": 8.6
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
            "formula": 8.7,
            "skinSuitability": 8.5,
            "evidence": 8.8,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9.2
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.4,
            "overall": 8.6
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
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "15,100+",
        "reviewCount": "15,100+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.1,
            "evidence": 8.6,
            "userFeedback": 8,
            "value": 8.5,
            "availability": 9.2
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
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.1,
            "texture": 8.1,
            "value": 8.5,
            "overall": 8.4
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
            "formula": 8.8,
            "skinSuitability": 8.6,
            "evidence": 8.9,
            "userFeedback": 8.4,
            "value": 8.7,
            "availability": 9.3
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
        "oraeSkinScore": 8.8,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.7,
            "overall": 8.8
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
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "18,800+",
        "reviewCount": "18,800+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.7,
            "evidence": 8.7,
            "userFeedback": 8,
            "value": 8.5,
            "availability": 9.2
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.7,
            "texture": 8.7,
            "value": 8.5,
            "overall": 8.6
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
            "formula": 8.3,
            "skinSuitability": 8.5,
            "evidence": 8.6,
            "userFeedback": 8.2,
            "value": 8.2,
            "availability": 9.2
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
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.2,
            "overall": 8.5
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
            "formula": 8.9,
            "skinSuitability": 8.6,
            "evidence": 8.9,
            "userFeedback": 8.4,
            "value": 8.2,
            "availability": 9.2
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.9,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.2,
            "overall": 8.7
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
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8.7,
            "userFeedback": 8.4,
            "value": 8.7,
            "availability": 9.3
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.7,
            "overall": 8.7
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
            "formula": 8.9,
            "skinSuitability": 8.5,
            "evidence": 8.9,
            "userFeedback": 8.8,
            "value": 7.8,
            "availability": 8.9
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.9,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 7.8,
            "overall": 8.7
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
            "formula": 8.7,
            "skinSuitability": 8.3,
            "evidence": 8.8,
            "userFeedback": 8.6,
            "value": 8.7,
            "availability": 9.2
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.3,
            "texture": 8.3,
            "value": 8.7,
            "overall": 8.7
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
            "formula": 8.2,
            "skinSuitability": 8.4,
            "evidence": 8.3,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9.2
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
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.6,
            "overall": 8.4
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
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8.6,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9.2
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.6,
            "overall": 8.7
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
            "formula": 8.5,
            "skinSuitability": 8.6,
            "evidence": 8.5,
            "userFeedback": 9.4,
            "value": 7.8,
            "availability": 9
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.5,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 7.8,
            "overall": 8.6
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
            "formula": 8.8,
            "skinSuitability": 8.7,
            "evidence": 8.8,
            "userFeedback": 9.6,
            "value": 8.7,
            "availability": 9.2
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
        "oraeSkinScore": 8.9,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8.7,
            "texture": 8.7,
            "value": 8.7,
            "overall": 8.9
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
            "formula": 8.3,
            "skinSuitability": 8.4,
            "evidence": 8.4,
            "userFeedback": 7.6,
            "value": 8.1,
            "availability": 9.1
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
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.1,
            "overall": 8.3
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
            "formula": 8.7,
            "skinSuitability": 8.8,
            "evidence": 8.7,
            "userFeedback": 8.4,
            "value": 8.8,
            "availability": 9.3
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.8,
            "overall": 8.7
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
            "formula": 8.3,
            "skinSuitability": 8.5,
            "evidence": 8.2,
            "userFeedback": 8.2,
            "value": 8.6,
            "availability": 9.2
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
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.3,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.6,
            "overall": 8.4
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
            "formula": 8.7,
            "skinSuitability": 8.7,
            "evidence": 8.8,
            "userFeedback": 8.4,
            "value": 8.7,
            "availability": 9.3
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.7,
            "texture": 8.7,
            "value": 8.7,
            "overall": 8.7
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
            "formula": 8.1,
            "skinSuitability": 8.3,
            "evidence": 7.9,
            "userFeedback": 8.8,
            "value": 8.5,
            "availability": 9.2
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
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.1,
            "weatherResilience": 8.3,
            "texture": 8.3,
            "value": 8.5,
            "overall": 8.4
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
            "formula": 7.8,
            "skinSuitability": 8,
            "evidence": 7.7,
            "userFeedback": 8.6,
            "value": 8.9,
            "availability": 9.3
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
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.9,
            "overall": 8.2
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
            "formula": 8.7,
            "skinSuitability": 8.5,
            "evidence": 8.8,
            "userFeedback": 8.2,
            "value": 8.9,
            "availability": 9.3
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.5,
            "texture": 8.5,
            "value": 8.9,
            "overall": 8.7
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
            "formula": 8.8,
            "skinSuitability": 8.4,
            "evidence": 8.9,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9.2
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
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.6,
            "overall": 8.7
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
            "formula": 8.7,
            "skinSuitability": 8.8,
            "evidence": 8.6,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9.2
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
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.7,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.4,
            "overall": 8.6
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
    },
    {
        "id": "laneige-lip-sleeping-mask",
        "name": "Lip Sleeping Mask",
        "title": "Laneige Lip Sleeping Mask with Vitamin C & Shea Butter",
        "brand": "Laneige",
        "category": "lip-care",
        "subcategory": "Overnight Lip Mask",
        "asin": "B0BPC8KG73",
        "amazonUrl": "https://www.amazon.in/dp/B0BPC8KG73?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BPC8KG73?tag=oraeskin-21",
        "badge": "Best Overnight Lip Mask",
        "price": 510,
        "priceEst": "₹510",
        "currency": "₹",
        "size": "8g",
        "image": "/images/products/laneige-lip-sleeping-mask.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "16,000+",
        "reviewCount": "16,000+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.8,
            "evidence": 7.8,
            "userFeedback": 9,
            "value": 7,
            "availability": 9
        },
        "skinType": [
            "All",
            "Dry"
        ],
        "concerns": [
            "Chapped Lips",
            "Dry Lips",
            "Peeling Lips"
        ],
        "keyActives": [
            "Shea Butter",
            "Vitamin C",
            "Berry Fruit Complex"
        ],
        "keyIngredients": [
            "Shea Butter",
            "Vitamin C",
            "Berry Fruit Extracts"
        ],
        "ingredients": [
            "Shea Butter",
            "Vitamin C",
            "Berry Fruit Complex",
            "Fragrance (full ingredient list on the pack)"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thick, Balmy Mask",
        "finish": "Glossy Overnight Layer",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, chapped or peeling lips that need a thick overnight treatment.",
        "avoidIf": "Your lips react to fragrance or flavouring.",
        "whyWeLikeIt": "A cult-favourite occlusive mask that seals moisture into lips overnight, so they wake up softer and smoother.",
        "pros": [
            "Thick texture seals in moisture overnight",
            "Very high Amazon India rating (4.5★ from 16,000+)",
            "A little goes a long way"
        ],
        "cons": [
            "Only 8g for ₹510 — expensive per gram",
            "Contains fragrance/flavouring",
            "No SPF — not for daytime sun protection"
        ],
        "verdict": "The best overnight fix for chapped lips if you don't mind paying a premium. Pair it with an SPF balm by day.",
        "alternatives": [
            {
                "label": "Budget Lip Mask",
                "productId": "dotkey-lip-mask",
                "reason": "Shea butter and vitamin C + E lip mask for under ₹200."
            },
            {
                "label": "Daytime SPF Partner",
                "productId": "wishcare-ceramide-lip-balm-spf50",
                "reason": "SPF 50 balm for daytime protection."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 7,
            "overall": 8.4
        }
    },
    {
        "id": "wishcare-ceramide-lip-balm-spf50",
        "name": "Lip Balm SPF 50 (Untinted)",
        "title": "WishCare Lip Balm SPF 50 PA++++ with Kojic Acid & Niacinamide (Untinted)",
        "brand": "WishCare",
        "category": "lip-care",
        "subcategory": "SPF Lip Balm",
        "asin": "B0CND4C95T",
        "amazonUrl": "https://www.amazon.in/dp/B0CND4C95T?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CND4C95T?tag=oraeskin-21",
        "badge": "Best Untinted SPF 50 Lip Balm",
        "price": 239,
        "priceEst": "₹239",
        "currency": "₹",
        "size": "5g",
        "image": "/images/products/wishcare-ceramide-lip-balm-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "5,900+",
        "reviewCount": "5,900+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 8,
            "userFeedback": 8.6,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "All"
        ],
        "concerns": [
            "Dark Lips",
            "Sun Protection",
            "Dry Lips"
        ],
        "keyActives": [
            "SPF 50 PA++++",
            "Kojic Acid",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Kojic Acid",
            "Niacinamide",
            "UV Filters"
        ],
        "ingredients": [
            "Kojic Acid",
            "Niacinamide",
            "UV Filters (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Smooth Stick",
        "finish": "Natural, Untinted",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily lip sun protection and gradual brightening for sun-darkened lips.",
        "avoidIf": "You want a rich overnight treatment rather than a daytime balm.",
        "whyWeLikeIt": "High SPF 50 PA++++ protection for lips, which darken easily in the sun, plus kojic acid and niacinamide for brightening.",
        "pros": [
            "SPF 50 PA++++ in a lip balm",
            "Kojic acid and niacinamide for brightening",
            "Untinted — works for everyone"
        ],
        "cons": [
            "Despite the 'ceramide' product name, the listed ingredients mention only kojic acid and niacinamide",
            "Needs reapplying after eating or drinking"
        ],
        "verdict": "A dependable daily SPF lip balm, and one of the best first steps for dark lips.",
        "alternatives": [
            {
                "label": "Tinted Version",
                "productId": "wishcare-tinted-lip-balm-spf50",
                "reason": "Same SPF 50 formula with a natural pink tint."
            },
            {
                "label": "Brightening Alternative",
                "productId": "deconstruct-brightening-lip-balm-spf50",
                "reason": "SPF 50 with vitamin C and resorcinol for dark lips."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.4,
            "overall": 8.4
        }
    },
    {
        "id": "wishcare-tinted-lip-balm-spf50",
        "name": "Tinted Lip Balm SPF 50",
        "title": "WishCare Tinted Lip Balm SPF 50 PA++++ with Kojic Acid & Niacinamide",
        "brand": "WishCare",
        "category": "lip-care",
        "subcategory": "Tinted SPF Lip Balm",
        "asin": "B0CND1VF2W",
        "amazonUrl": "https://www.amazon.in/dp/B0CND1VF2W?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CND1VF2W?tag=oraeskin-21",
        "badge": "Best Tinted SPF Lip Balm",
        "price": 239,
        "priceEst": "₹239",
        "currency": "₹",
        "size": "5g",
        "image": "/images/products/wishcare-tinted-lip-balm-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "15,500+",
        "reviewCount": "15,500+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 8,
            "userFeedback": 8.6,
            "value": 8.4,
            "availability": 9.2
        },
        "skinType": [
            "All"
        ],
        "concerns": [
            "Dark Lips",
            "Sun Protection",
            "Dull Lips"
        ],
        "keyActives": [
            "SPF 50 PA++++",
            "Kojic Acid",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Kojic Acid",
            "Niacinamide",
            "UV Filters"
        ],
        "ingredients": [
            "Kojic Acid",
            "Niacinamide",
            "UV Filters",
            "Watermelon flavour (full ingredient list on the pack)"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Smooth Stick",
        "finish": "Natural Pink Tint",
        "whiteCast": "Not Applicable",
        "bestFor": "College and office wear: a hint of colour with SPF 50 every day.",
        "avoidIf": "Your lips react to flavoured balms.",
        "whyWeLikeIt": "Combines a wearable tint with SPF 50 and brightening actives, so sun protection doesn't feel like an extra step.",
        "pros": [
            "Natural pink tint with SPF 50 PA++++",
            "Kojic acid and niacinamide for dark lips",
            "Very popular (15,500+ ratings)"
        ],
        "cons": [
            "Watermelon flavouring",
            "Tint may look different on very pigmented lips"
        ],
        "verdict": "The easiest way to wear SPF on your lips every day.",
        "alternatives": [
            {
                "label": "Untinted Version",
                "productId": "wishcare-ceramide-lip-balm-spf50",
                "reason": "Same SPF 50 protection without tint."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.4,
            "overall": 8.4
        }
    },
    {
        "id": "dotkey-barrier-repair-lip-balm-spf50",
        "name": "Barrier Repair Hydrating Lip Balm SPF 50",
        "title": "Dot & Key Barrier Repair Hydrating Lip Balm SPF 50 (Blueberry)",
        "brand": "Dot & Key",
        "category": "lip-care",
        "subcategory": "SPF Lip Balm",
        "asin": "B0DCBCL72R",
        "amazonUrl": "https://www.amazon.in/dp/B0DCBCL72R?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DCBCL72R?tag=oraeskin-21",
        "badge": "Best Budget SPF Lip Balm",
        "price": 199,
        "priceEst": "₹199",
        "currency": "₹",
        "size": "4.5g",
        "image": "/images/products/dotkey-barrier-repair-lip-balm-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "3,700+",
        "reviewCount": "3,700+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.4,
            "evidence": 8,
            "userFeedback": 8.6,
            "value": 8.8,
            "availability": 8.8
        },
        "skinType": [
            "All",
            "Dry"
        ],
        "concerns": [
            "Dry Lips",
            "Sun Protection",
            "Chapped Lips"
        ],
        "keyActives": [
            "SPF 50 (Uvinul A Plus + Octinoxate)",
            "Shea Butter",
            "Avocado Oil",
            "Petrolatum"
        ],
        "keyIngredients": [
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Octyl Methoxycinnamate",
            "Shea Butter",
            "Avocado Oil",
            "Petrolatum",
            "Tocopheryl Acetate"
        ],
        "ingredients": [
            "Hydrogenated Polyisobutene",
            "Petrolatum",
            "Hydrogenated Castor Oil",
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Synthetic Wax",
            "Microcrystalline Wax",
            "Ozokerite",
            "Paraffin Wax",
            "Shea Butter",
            "Caprylic/Capric Triglyceride",
            "Octyl Methoxycinnamate",
            "Mica",
            "Tocopheryl Acetate",
            "Avocado Oil",
            "Flavor"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Waxy Stick",
        "finish": "Natural, Non-Tinted",
        "whiteCast": "Not Applicable",
        "bestFor": "Everyday SPF and moisture for dry lips on a tight budget.",
        "avoidIf": "You prefer petrolatum-free or flavour-free lip care.",
        "whyWeLikeIt": "Real UV filters (including Uvinul A Plus) in an occlusive, shea-and-avocado base that keeps lips from drying out.",
        "pros": [
            "SPF 50 with Uvinul A Plus for UVA",
            "Petrolatum, shea butter and avocado oil seal in moisture",
            "Under ₹200"
        ],
        "cons": [
            "Contains petrolatum and flavouring",
            "Despite the 'barrier repair' name, no ceramides are listed"
        ],
        "verdict": "A practical, cheap SPF lip balm for dry lips. Skip it if you avoid petrolatum.",
        "alternatives": [
            {
                "label": "Flavour-Free SPF Alternative",
                "productId": "wishcare-ceramide-lip-balm-spf50",
                "reason": "Untinted SPF 50 balm with kojic acid and niacinamide."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.8,
            "overall": 8.3
        }
    },
    {
        "id": "deconstruct-brightening-lip-balm-spf50",
        "name": "Brightening Lip Balm SPF 50",
        "title": "Deconstruct Brightening Lip Balm SPF 50 with Vitamin C & Resorcinol",
        "brand": "Deconstruct",
        "category": "lip-care",
        "subcategory": "Brightening SPF Lip Balm",
        "asin": "B0BV34LQRP",
        "amazonUrl": "https://www.amazon.in/dp/B0BV34LQRP?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BV34LQRP?tag=oraeskin-21",
        "badge": "Best for Dark, Pigmented Lips",
        "price": 193,
        "priceEst": "₹193",
        "currency": "₹",
        "size": "4.5g",
        "image": "/images/products/deconstruct-brightening-lip-balm-spf50.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "9,000+",
        "reviewCount": "9,000+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 8.2,
            "userFeedback": 8,
            "value": 8.8,
            "availability": 9
        },
        "skinType": [
            "All"
        ],
        "concerns": [
            "Dark Lips",
            "Uneven Lip Tone",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50",
            "Vitamin C",
            "Resorcinol",
            "Murumuru & Cupuaçu Butter"
        ],
        "keyIngredients": [
            "Vitamin C",
            "Resorcinol",
            "Murumuru Butter",
            "Theobroma Grandiflorum Seed Butter",
            "Vitamin E"
        ],
        "ingredients": [
            "Vitamin C",
            "Resorcinol",
            "Murumuru Butter",
            "Vitamin E",
            "Theobroma Grandiflorum Seed Butter (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Smooth Stick",
        "finish": "Natural",
        "whiteCast": "Not Applicable",
        "bestFor": "Sun-darkened or smoker's lips that need SPF plus active brightening.",
        "avoidIf": "You are pregnant (the brand advises discretion) or your lips are cracked and stinging.",
        "whyWeLikeIt": "Pairs SPF 50 with vitamin C and resorcinol, an ingredient used for pigmentation. It's unflavoured, with nourishing butters.",
        "pros": [
            "SPF 50 with brightening vitamin C and resorcinol",
            "Unflavoured",
            "Under ₹200"
        ],
        "cons": [
            "Brightening is gradual — weeks of daily use",
            "Resorcinol can irritate cracked lips"
        ],
        "verdict": "The best budget pick for dark lips: protection and brightening in one stick.",
        "alternatives": [
            {
                "label": "Gentler SPF Alternative",
                "productId": "wishcare-ceramide-lip-balm-spf50",
                "reason": "SPF 50 with milder kojic acid and niacinamide."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8.8,
            "overall": 8.4
        }
    },
    {
        "id": "reequil-sheer-zinc-tinted-spf50",
        "name": "Sheer Zinc Tinted Sunscreen SPF 50",
        "title": "Re'equil Sheer Zinc Tinted Sunscreen — 100% Mineral SPF 50 PA++++",
        "brand": "Re'equil",
        "category": "sunscreens",
        "subcategory": "Tinted Mineral Sunscreen",
        "asin": "B08TMFC5BN",
        "amazonUrl": "https://www.amazon.in/dp/B08TMFC5BN?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08TMFC5BN?tag=oraeskin-21",
        "badge": "Best Tinted Mineral Sunscreen",
        "price": 590,
        "priceEst": "₹590",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/reequil-sheer-zinc-tinted-spf50.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "2,100+",
        "reviewCount": "2,100+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.4,
            "evidence": 8.8,
            "userFeedback": 8.2,
            "value": 7.8,
            "availability": 8.8
        },
        "skinType": [
            "All",
            "Sensitive"
        ],
        "concerns": [
            "Sun Protection",
            "Melasma",
            "Pigmentation",
            "Sensitive Skin"
        ],
        "keyActives": [
            "Zinc Oxide (100% mineral)",
            "Tint"
        ],
        "keyIngredients": [
            "Zinc Oxide"
        ],
        "ingredients": [
            "Zinc Oxide (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Tinted Cream",
        "finish": "Sheer Tint, No White Cast",
        "whiteCast": "Minimal (tinted)",
        "bestFor": "Sensitive or melasma-prone skin that wants a filter-free mineral sunscreen without a white cast.",
        "avoidIf": "Your skin is very deep and the single tint shade looks ashy, or you dislike any tint.",
        "whyWeLikeIt": "Zinc oxide is gentle and broad-spectrum, and the tint hides the white cast mineral sunscreens usually leave on Indian skin.",
        "pros": [
            "100% mineral (zinc oxide) — ideal for sensitive skin",
            "Tint offsets white cast",
            "Water resistant"
        ],
        "cons": [
            "One tint shade won't suit every skin tone",
            "Pricier than chemical sunscreens",
            "Amazon listing doesn't show the full ingredient list"
        ],
        "verdict": "The best mineral option for sensitive and pigment-prone Indian skin, if the tint suits you.",
        "alternatives": [
            {
                "label": "Untinted Mineral Alternative",
                "productId": "lashield-fisico-mineral-spf50",
                "reason": "Matte, 100% mineral zinc oxide gel."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 7.8,
            "overall": 8.5
        }
    },
    {
        "id": "lashield-fisico-mineral-spf50",
        "name": "Fisico Mineral Sunscreen SPF 50+",
        "title": "La Shield Fisico 100% Mineral Sunscreen SPF 50+ PA++++",
        "brand": "La Shield",
        "category": "sunscreens",
        "subcategory": "Mineral Sunscreen Gel",
        "asin": "B07G8J6ZD4",
        "amazonUrl": "https://www.amazon.in/dp/B07G8J6ZD4?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07G8J6ZD4?tag=oraeskin-21",
        "badge": "Best Matte Mineral Sunscreen",
        "price": 600,
        "priceEst": "₹600",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/lashield-fisico-mineral-spf50.jpg",
        "amazonRating": 3.9,
        "rating": 3.9,
        "amazonReviews": "7,400+",
        "reviewCount": "7,400+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.2,
            "evidence": 8.8,
            "userFeedback": 7.8,
            "value": 7.8,
            "availability": 8.8
        },
        "skinType": [
            "Oily",
            "Sensitive",
            "Acne-Prone"
        ],
        "concerns": [
            "Sun Protection",
            "Sensitive Skin",
            "Oiliness"
        ],
        "keyActives": [
            "Zinc Oxide (100% mineral)",
            "Silicone Matte Base",
            "Vitamin E"
        ],
        "keyIngredients": [
            "Zinc Oxide",
            "C12-15 Alkyl Benzoate",
            "Cyclopentasiloxane",
            "Dimethicone Crosspolymer",
            "Tocopheryl Acetate"
        ],
        "ingredients": [
            "Zinc Oxide",
            "C12-15 Alkyl Benzoate",
            "Isostearic Acid",
            "Polyhydroxystearic Acid",
            "Cyclopentasiloxane",
            "Dimethicone Crosspolymer",
            "Dimethicone/PPG-20 Crosspolymer",
            "Tocopheryl Acetate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silicone Gel",
        "finish": "Matte",
        "whiteCast": "Mild",
        "bestFor": "Oily, sensitive skin that reacts to chemical UV filters and wants a matte finish.",
        "avoidIf": "You have deep skin and dislike any white cast, or very dry skin.",
        "whyWeLikeIt": "A short, fragrance-free formula with zinc oxide as the only UV filter, in a silky silicone base that dries matte.",
        "pros": [
            "Zinc oxide is the only UV filter — gentle for reactive skin",
            "Matte silicone finish suits oily skin",
            "Short, fragrance-free ingredient list"
        ],
        "cons": [
            "Can leave a mild white cast on deeper skin",
            "Lower rating than most picks (3.9★)",
            "Silicone base can pill over heavy creams"
        ],
        "verdict": "A solid untinted mineral sunscreen for oily, sensitive skin. Choose a tinted mineral if white cast bothers you.",
        "alternatives": [
            {
                "label": "Tinted Mineral Alternative",
                "productId": "reequil-sheer-zinc-tinted-spf50",
                "reason": "Tinted zinc sunscreen that hides white cast."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 7.8,
            "overall": 8.3
        }
    },
    {
        "id": "lakme-tinted-sunscreen-spf50",
        "name": "Sun Expert Tinted Sunscreen SPF 50",
        "title": "Lakmē Sun Expert Tinted Sunscreen SPF 50 PA+++ with Niacinamide",
        "brand": "Lakmē",
        "category": "sunscreens",
        "subcategory": "Tinted Sunscreen",
        "asin": "B085T374WK",
        "amazonUrl": "https://www.amazon.in/dp/B085T374WK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B085T374WK?tag=oraeskin-21",
        "badge": "Best Budget Tinted Sunscreen",
        "price": 271,
        "priceEst": "₹271",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/lakme-tinted-sunscreen-spf50.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "7,100+",
        "reviewCount": "7,100+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8,
            "evidence": 7.8,
            "userFeedback": 8.2,
            "value": 9.6,
            "availability": 9.4
        },
        "skinType": [
            "Normal",
            "Combination",
            "Oily"
        ],
        "concerns": [
            "Sun Protection",
            "Uneven Tone",
            "Dullness"
        ],
        "keyActives": [
            "Octinoxate + Zinc Oxide + Titanium Dioxide",
            "Niacinamide",
            "Tint"
        ],
        "keyIngredients": [
            "Ethylhexyl Methoxycinnamate",
            "Zinc Oxide",
            "Phenylbenzimidazole Sulfonic Acid",
            "Titanium Dioxide",
            "Niacinamide"
        ],
        "ingredients": [
            "Water",
            "Cyclopentasiloxane",
            "Glycerine",
            "Ethylhexyl Methoxycinnamate",
            "Zinc Oxide",
            "Phenylbenzimidazole Sulfonic Acid",
            "Dimethicone Crosspolymer",
            "Caprylic Capric Triglyceride",
            "Niacinamide",
            "Perfume",
            "Titanium Dioxide",
            "DMDM Hydantoin"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Tinted Lotion",
        "finish": "Even-Toned, Natural",
        "whiteCast": "Zero (tinted)",
        "bestFor": "Budget-friendly daily tinted protection that evens out skin tone for office or college.",
        "avoidIf": "You have sensitive skin or avoid fragrance, or want strong, modern UVA filters.",
        "whyWeLikeIt": "A huge 100ml tube at under ₹300 with a light tint and niacinamide. It's easy to apply generously, which matters more than anything for real-world protection.",
        "pros": [
            "100ml for under ₹300 — easy to use generously",
            "Light tint evens tone",
            "Widely available"
        ],
        "cons": [
            "Contains perfume and an older filter mix (octinoxate)",
            "PA+++ rather than PA++++"
        ],
        "verdict": "A practical budget tinted sunscreen. Sensitive or melasma-prone skin should choose a fragrance-free mineral tint instead.",
        "alternatives": [
            {
                "label": "Modern-Filter Tinted Alternative",
                "productId": "dotkey-strawberry-dew-tinted-spf50",
                "reason": "New-gen filters with PA++++ and a beige tint."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.1,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.6,
            "overall": 8.1
        }
    },
    {
        "id": "dotkey-strawberry-dew-tinted-spf50",
        "name": "Strawberry Dew Tinted Sunscreen SPF 50+",
        "title": "Dot & Key Strawberry Dew Tinted Sunscreen SPF 50+ PA++++",
        "brand": "Dot & Key",
        "category": "sunscreens",
        "subcategory": "Tinted Sunscreen",
        "asin": "B0CX1YQ764",
        "amazonUrl": "https://www.amazon.in/dp/B0CX1YQ764?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CX1YQ764?tag=oraeskin-21",
        "badge": "Best Modern-Filter Tinted Sunscreen",
        "price": 489,
        "priceEst": "₹489",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/dotkey-strawberry-dew-tinted-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "5,100+",
        "reviewCount": "5,100+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.4,
            "evidence": 8.6,
            "userFeedback": 8.6,
            "value": 8,
            "availability": 8.8
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Sun Protection",
            "Uneven Tone",
            "Dullness"
        ],
        "keyActives": [
            "New-Gen Filters (DHHB, Ethylhexyl Triazone, Bemotrizinol)",
            "Titanium Dioxide",
            "Tint"
        ],
        "keyIngredients": [
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Ethylhexyl Triazone",
            "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
            "Titanium Dioxide",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Ethylhexyl Triazone",
            "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine",
            "Isododecane",
            "Glycerin",
            "Dimethicone",
            "Phenyl Trimethicone",
            "Titanium Dioxide"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lightweight Tinted Fluid",
        "finish": "Dewy, Even-Toned",
        "whiteCast": "Zero (tinted)",
        "bestFor": "Normal to dry skin that wants a dewy tint with strong, modern UVA/UVB protection.",
        "avoidIf": "You have very oily skin that dislikes dewy finishes.",
        "whyWeLikeIt": "Modern, photostable filters (including Tinosorb S) with a tint that adds visible-light coverage and evens tone.",
        "pros": [
            "New-gen filters with PA++++",
            "Tint helps even tone and hides cast",
            "Dewy, comfortable finish"
        ],
        "cons": [
            "Single beige shade won't suit every tone",
            "Dewy finish can look shiny on oily skin"
        ],
        "verdict": "The best tinted sunscreen here for strong UVA protection, if the shade works for you.",
        "alternatives": [
            {
                "label": "Mineral Tinted Alternative",
                "productId": "reequil-sheer-zinc-tinted-spf50",
                "reason": "100% mineral tinted option for sensitive skin."
            },
            {
                "label": "Budget Tinted Alternative",
                "productId": "lakme-tinted-sunscreen-spf50",
                "reason": "100ml tinted sunscreen for under ₹300."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8,
            "overall": 8.5
        }
    },
    {
        "id": "dotkey-72hr-hydrating-gel",
        "name": "72HR Hydrating Gel Moisturizer",
        "title": "Dot & Key 72HR Hydrating Gel Moisturizer with Hyaluronic Acid & Probiotics",
        "brand": "Dot & Key",
        "category": "moisturizers",
        "subcategory": "Oil-Free Gel Moisturizer",
        "asin": "B097K2HRQN",
        "amazonUrl": "https://www.amazon.in/dp/B097K2HRQN?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B097K2HRQN?tag=oraeskin-21",
        "badge": "Best Gel Moisturizer for Humid Weather",
        "price": 304,
        "priceEst": "₹304",
        "currency": "₹",
        "size": "25g",
        "image": "/images/products/dotkey-72hr-hydrating-gel.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "4,600+",
        "reviewCount": "4,600+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.8,
            "evidence": 7.8,
            "userFeedback": 8.6,
            "value": 7,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Dehydration",
            "Oiliness",
            "Shine Control"
        ],
        "keyActives": [
            "Hyaluronic Acid",
            "Rice Bran Water",
            "Probiotic (Lactobacillus) Ferment",
            "Oat Extract"
        ],
        "keyIngredients": [
            "Silanetriol (and) Hyaluronic Acid",
            "Saccharide Isomerate",
            "Oryza Sativa (Rice) Bran Water",
            "Lactobacillus Ferment",
            "Avena Sativa (Oat) Meal Extract"
        ],
        "ingredients": [
            "Aqua",
            "Cyclopentasiloxane",
            "Dimethicone Crosspolymer",
            "Glycerine",
            "Hyaluronic Acid",
            "Saccharide Isomerate",
            "Oryza Sativa (Rice) Bran Water",
            "Saccharomyces/Xylinum/Black Tea Ferment",
            "Lactobacillus (and) Maltodextrin",
            "Avena Sativa (Oat) Meal Extract",
            "Pyrus Malus (Apple) Fruit Extract",
            "Fragrance (allergen-free)",
            "CI 42090"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water-Light Gel",
        "finish": "Non-Sticky, Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily and combination skin that wants weightless hydration in humid Indian summers.",
        "avoidIf": "You have dry skin that needs richer moisture, or you avoid fragrance and dyes.",
        "whyWeLikeIt": "A silicone-gel base with hyaluronic acid and humectants that hydrates without any heaviness, which suits oily skin in monsoon and summer.",
        "pros": [
            "Very light, non-sticky gel for oily skin",
            "Hyaluronic acid and saccharide isomerate hydrate well",
            "Comfortable under sunscreen"
        ],
        "cons": [
            "Only 25g — about ₹12 per gram",
            "Contains fragrance and a blue colourant (CI 42090)",
            "Despite the '5 ceramides' claim on the box, ceramides don't appear in the listed ingredients"
        ],
        "verdict": "A pleasant gel moisturiser for oily skin in humid weather, but pricey per gram. Minimalist B5 is better value.",
        "alternatives": [
            {
                "label": "Better-Value Gel",
                "productId": "minimalist-b5-moisturizer",
                "reason": "Fragrance-free oil-free gel with vitamin B5 and zinc."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 7,
            "overall": 8.2
        }
    },
    {
        "id": "plum-niacinamide-rice-toner",
        "name": "3% Niacinamide & Rice Water Toner",
        "title": "Plum 3% Niacinamide & Rice Water Alcohol-Free Face Toner",
        "brand": "Plum",
        "category": "toners",
        "subcategory": "Hydrating Niacinamide Toner",
        "asin": "B09PV4379W",
        "amazonUrl": "https://www.amazon.in/dp/B09PV4379W?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09PV4379W?tag=oraeskin-21",
        "badge": "Best Alcohol-Free Niacinamide Toner",
        "price": 364,
        "priceEst": "₹364",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/plum-niacinamide-rice-toner.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "6,400+",
        "reviewCount": "6,400+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.6,
            "evidence": 8.2,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination",
            "Normal",
            "Acne-Prone"
        ],
        "concerns": [
            "Open Pores",
            "Oiliness",
            "Dullness",
            "Acne Marks"
        ],
        "keyActives": [
            "3% Niacinamide",
            "Rice Extract & Sake Ferment",
            "Rose Water",
            "Oat Kernel Extract"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Oryza Sativa (Rice) Extract",
            "Rice Ferment Filtrate (Sake)",
            "Rosa Damascena Flower Water",
            "Avena Sativa (Oat) Kernel Extract"
        ],
        "ingredients": [
            "Aqua",
            "Niacinamide",
            "Oryza Sativa (Rice) Extract",
            "Pentylene Glycol",
            "Rosa Damascena (Rose) Flower Water",
            "Rice Ferment Filtrate (Sake)",
            "Avena Sativa (Oat) Kernel Extract",
            "Methyl Gluceth-20",
            "Sorbitol",
            "Cyclodextrin"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery Toner",
        "finish": "Fresh, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily or combination skin that wants a gentle, non-exfoliating toner for pores and tone.",
        "avoidIf": "You expect exfoliation — this toner has no acids.",
        "whyWeLikeIt": "3% niacinamide with rice and oat extracts in an alcohol-free base. It suits oily skin without the sting of exfoliating toners.",
        "pros": [
            "3% niacinamide for oil control and tone",
            "Alcohol-free and non-exfoliating — gentle",
            "150ml for under ₹400"
        ],
        "cons": [
            "Rose water adds a light natural scent",
            "Results are subtle compared with a niacinamide serum"
        ],
        "verdict": "A gentle everyday toner for oily skin. Use a serum if you want stronger niacinamide results.",
        "alternatives": [
            {
                "label": "Exfoliating Alternative",
                "productId": "minimalist-pha-toner",
                "reason": "Gentle PHA toner that also exfoliates."
            },
            {
                "label": "Stronger Niacinamide",
                "productId": "minimalist-niacinamide-10",
                "reason": "10% niacinamide serum for more visible oil control."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 8.6,
            "overall": 8.5
        }
    },
    {
        "id": "plum-cleansing-balm",
        "name": "E-Luminence Simply Supple Cleansing Balm",
        "title": "Plum E-Luminence Simply Supple Cleansing Balm with Vitamin E",
        "brand": "Plum",
        "category": "cleansers",
        "subcategory": "Cleansing Balm",
        "asin": "B08423CWXC",
        "amazonUrl": "https://www.amazon.in/dp/B08423CWXC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08423CWXC?tag=oraeskin-21",
        "badge": "Best Cleansing Balm for Double Cleansing",
        "price": 488,
        "priceEst": "₹488",
        "currency": "₹",
        "size": "90g",
        "image": "/images/products/plum-cleansing-balm.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "2,000+",
        "reviewCount": "2,000+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.4,
            "evidence": 8.2,
            "userFeedback": 8.6,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Makeup Removal",
            "Sunscreen Removal",
            "Dryness"
        ],
        "keyActives": [
            "Kokum Butter",
            "Sunflower Seed Oil",
            "Argan Oil",
            "Vitamin E"
        ],
        "keyIngredients": [
            "Ethylhexyl Palmitate",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Garcinia Indica (Kokum) Seed Butter",
            "Argania Spinosa (Argan) Oil",
            "Tocopheryl Acetate"
        ],
        "ingredients": [
            "Ethylhexyl Palmitate",
            "Cetearyl Alcohol",
            "Polysorbate 60",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "PEG-20 Glyceryl Triisostearate",
            "Aqua",
            "Oryza Sativa (Rice) Bran Wax",
            "Copernicia Cerifera (Carnauba) Wax",
            "Tocopheryl Acetate",
            "Garcinia Indica (Kokum) Seed Butter",
            "Coco Glucoside",
            "Argania Spinosa (Argan) Oil",
            "Phenoxyethanol",
            "Fragrance"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Solid Balm, Melts to Oil",
        "finish": "Soft, Non-Drying",
        "whiteCast": "Not Applicable",
        "bestFor": "The first step of a double cleanse at night, to melt off sunscreen and makeup without stripping.",
        "avoidIf": "You avoid fragrance, or have very acne-prone skin that reacts to rich oils and waxes.",
        "whyWeLikeIt": "Emulsifies with water and rinses clean, so it removes water-resistant sunscreen and makeup gently before your regular face wash.",
        "pros": [
            "Melts sunscreen and makeup quickly",
            "Rinses off without a greasy film",
            "90g lasts months"
        ],
        "cons": [
            "Contains fragrance",
            "Rich waxes may not suit very acne-prone skin"
        ],
        "verdict": "A dependable, good-value balm for double cleansing. Follow it with a gentle face wash.",
        "alternatives": [
            {
                "label": "No-Rinse Alternative",
                "productId": "bioderma-sensibio-h2o",
                "reason": "Fragrance-free micellar water for sensitive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.4,
            "overall": 8.3
        }
    },
    {
        "id": "dotkey-strawberry-cleansing-balm",
        "name": "Strawberry Dew Cleansing Balm",
        "title": "Dot & Key Strawberry Dew Cleansing Balm",
        "brand": "Dot & Key",
        "category": "cleansers",
        "subcategory": "Cleansing Balm",
        "asin": "B0CHJSL1KV",
        "amazonUrl": "https://www.amazon.in/dp/B0CHJSL1KV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CHJSL1KV?tag=oraeskin-21",
        "badge": "Best Rated Cleansing Balm",
        "price": 424,
        "priceEst": "₹424",
        "currency": "₹",
        "size": "70g",
        "image": "/images/products/dotkey-strawberry-cleansing-balm.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "500+",
        "reviewCount": "500+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 9,
            "value": 8,
            "availability": 8.6
        },
        "skinType": [
            "Normal",
            "Combination",
            "Dry"
        ],
        "concerns": [
            "Makeup Removal",
            "Sunscreen Removal"
        ],
        "keyActives": [
            "Sunflower Seed Oil",
            "Kokum & Shea Butter",
            "Strawberry Extract"
        ],
        "keyIngredients": [
            "Ethylhexyl Palmitate",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Garcinia Indica (Kokum) Seed Butter",
            "Butyrospermum Parkii (Shea) Butter",
            "Fragaria Ananassa (Strawberry) Fruit Extract"
        ],
        "ingredients": [
            "Ethylhexyl Palmitate",
            "Cetearyl Alcohol (and) Polysorbate 60",
            "Sorbeth-30 Tetraoleate",
            "Candelilla Wax",
            "Aqua",
            "Carnauba Wax",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Fragaria Ananassa (Strawberry) Fruit Extract",
            "Garcinia Indica (Kokum) Seed Butter",
            "Shea Butter",
            "Tocopheryl Acetate",
            "CI 14720:1",
            "Fragrance (allergen-free)"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Solid Balm, Melts to Oil",
        "finish": "Soft, Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Removing makeup and sunscreen in the evening for normal and dry skin.",
        "avoidIf": "You avoid fragrance and colourants.",
        "whyWeLikeIt": "A very similar balm-to-oil formula to Plum's, with kokum and shea butter, and a high user rating.",
        "pros": [
            "Melts and rinses cleanly",
            "Highest rating here (4.5★)",
            "Nourishing kokum and shea butter"
        ],
        "cons": [
            "Contains fragrance and a red colourant",
            "Smaller 70g pot, fewer ratings (500+)"
        ],
        "verdict": "A well-liked balm. Plum's is better value per gram.",
        "alternatives": [
            {
                "label": "Better-Value Balm",
                "productId": "plum-cleansing-balm",
                "reason": "Similar formula in a larger 90g pot."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8,
            "overall": 8.2
        }
    },
    {
        "id": "garnier-micellar-water",
        "name": "Micellar Cleansing Water (Hydrating & Soothing)",
        "title": "Garnier Micellar Cleansing Water, Hydrating & Soothing, 400ml",
        "brand": "Garnier",
        "category": "cleansers",
        "subcategory": "Micellar Water",
        "asin": "B071CDDG3H",
        "amazonUrl": "https://www.amazon.in/dp/B071CDDG3H?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B071CDDG3H?tag=oraeskin-21",
        "badge": "Best Value Micellar Water",
        "price": 280,
        "priceEst": "₹280",
        "currency": "₹",
        "size": "400ml",
        "image": "/images/products/garnier-micellar-water.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "33,700+",
        "reviewCount": "33,700+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.6,
            "evidence": 8.2,
            "userFeedback": 8.8,
            "value": 9.8,
            "availability": 9.4
        },
        "skinType": [
            "All",
            "Sensitive"
        ],
        "concerns": [
            "Makeup Removal",
            "Lazy Cleansing"
        ],
        "keyActives": [
            "Micelles (Mild Surfactants)",
            "Glycerin"
        ],
        "keyIngredients": [
            "Glycerin",
            "Mild Surfactants"
        ],
        "ingredients": [
            "Aqua",
            "Glycerin",
            "Mild micellar surfactants (full ingredient list on the pack)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water",
        "finish": "No Residue",
        "whiteCast": "Not Applicable",
        "bestFor": "Quick, no-rinse removal of light makeup and sunscreen on busy nights or while travelling.",
        "avoidIf": "You wear heavy waterproof makeup — use a balm or the waterproof version instead.",
        "whyWeLikeIt": "400ml for under ₹300 makes it the best-value micellar water, and its huge rating base suggests it suits most skin.",
        "pros": [
            "Exceptional value — 400ml under ₹300",
            "Gentle, no-rinse cleansing",
            "Very well rated (33,700+ ratings)"
        ],
        "cons": [
            "Struggles with waterproof makeup",
            "Still best followed by a rinse-off cleanser at night"
        ],
        "verdict": "The best-value micellar water in India for everyday lazy cleansing.",
        "alternatives": [
            {
                "label": "Premium Sensitive-Skin Alternative",
                "productId": "bioderma-sensibio-h2o",
                "reason": "The original micellar water, very gentle for sensitive skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 9.8,
            "overall": 8.6
        }
    },
    {
        "id": "bioderma-sensibio-h2o",
        "name": "Sensibio H2O Micellar Water",
        "title": "Bioderma Sensibio H2O Micellar Water for Sensitive Skin, 500ml",
        "brand": "Bioderma",
        "category": "cleansers",
        "subcategory": "Micellar Water",
        "asin": "B002XZLAWM",
        "amazonUrl": "https://www.amazon.in/dp/B002XZLAWM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B002XZLAWM?tag=oraeskin-21",
        "badge": "Best Micellar Water for Sensitive Skin",
        "price": 1039,
        "priceEst": "₹1,039",
        "currency": "₹",
        "size": "500ml",
        "image": "/images/products/bioderma-sensibio-h2o.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "47,900+",
        "reviewCount": "47,900+",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 9,
            "evidence": 8.6,
            "userFeedback": 8.8,
            "value": 7.6,
            "availability": 9.2
        },
        "skinType": [
            "All",
            "Sensitive",
            "Dry"
        ],
        "concerns": [
            "Makeup Removal",
            "Sensitive Skin",
            "Lazy Cleansing"
        ],
        "keyActives": [
            "Micelles (PEG-6 Caprylic/Capric Glycerides)",
            "Cucumber Extract",
            "Fructooligosaccharides"
        ],
        "keyIngredients": [
            "PEG-6 Caprylic/Capric Glycerides",
            "Fructooligosaccharides",
            "Mannitol",
            "Xylitol",
            "Rhamnose",
            "Cucumis Sativus (Cucumber) Fruit Extract"
        ],
        "ingredients": [
            "Aqua",
            "PEG-6 Caprylic/Capric Glycerides",
            "Fructooligosaccharides",
            "Mannitol",
            "Xylitol",
            "Rhamnose",
            "Cucumis Sativus (Cucumber) Fruit Extract",
            "Propylene Glycol",
            "Cetrimonium Bromide",
            "Disodium EDTA"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water",
        "finish": "No Residue",
        "whiteCast": "Not Applicable",
        "bestFor": "Sensitive, reactive or eczema-prone skin that needs the gentlest makeup removal, including around the eyes.",
        "avoidIf": "You're on a tight budget — Garnier does a similar job for much less.",
        "whyWeLikeIt": "The original micellar water: a short, fragrance-free formula that's very well tolerated by sensitive skin and eyes.",
        "pros": [
            "Fragrance-free, short ingredient list",
            "Very gentle on sensitive skin and eyes",
            "Huge rating base (47,900+)"
        ],
        "cons": [
            "About four times the price per ml of Garnier",
            "Not strong enough for waterproof makeup"
        ],
        "verdict": "The gold standard for sensitive skin. Pick it if Garnier ever stings.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "garnier-micellar-water",
                "reason": "Similar gentle cleansing at a fraction of the price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 9,
            "texture": 9,
            "value": 7.6,
            "overall": 8.7
        }
    },
    {
        "id": "minimalist-hyaluronic-acid-2",
        "name": "2% Hyaluronic Acid + PGA Serum",
        "title": "Minimalist 2% Hyaluronic Acid + PGA Serum",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Hydrating Serum",
        "asin": "B08FB972DT",
        "amazonUrl": "https://www.amazon.in/dp/B08FB972DT?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08FB972DT?tag=oraeskin-21",
        "badge": "Best Value Hydrating Serum",
        "price": 569,
        "priceEst": "₹569",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-hyaluronic-acid-2.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "8,100+",
        "reviewCount": "8,100+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 9,
            "evidence": 8.6,
            "userFeedback": 8.4,
            "value": 8.5,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Dehydrated",
            "Oily"
        ],
        "concerns": [
            "Dehydration",
            "Fine Lines",
            "Dullness"
        ],
        "keyActives": [
            "Hyaluronic Acid (multi-weight, 2%)",
            "Polyglutamic Acid (PGA)"
        ],
        "keyIngredients": [
            "Hyaluronic Acid (multi-weight, 2%)",
            "Polyglutamic Acid (PGA)"
        ],
        "ingredients": [
            "Hyaluronic Acid (multi-weight, 2%)",
            "Polyglutamic Acid (PGA)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Watery Serum",
        "finish": "Dewy, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Any skin type that feels tight or dehydrated, including oily skin.",
        "avoidIf": "You expect it to replace a moisturiser on dry skin.",
        "whyWeLikeIt": "Several molecular weights of hyaluronic acid plus polyglutamic acid draw water into the upper layers of skin without oil or fragrance.",
        "pros": [
            "Fragrance-free and oil-free",
            "Multi-weight HA plus PGA for layered hydration",
            "Works under any moisturiser"
        ],
        "cons": [
            "Needs a moisturiser on top, or it can feel tight in dry air",
            "The Amazon listing shows only a short ingredient summary"
        ],
        "verdict": "A simple, well-priced hydrating serum. Apply on damp skin and seal with a moisturiser.",
        "alternatives": [
            {
                "label": "With Ceramides",
                "productId": "the-ordinary-hyaluronic-acid-b5",
                "reason": "Adds panthenol and ceramides."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 9,
            "texture": 9,
            "value": 8.5,
            "overall": 8.7
        }
    },
    {
        "id": "the-ordinary-hyaluronic-acid-b5",
        "name": "Hyaluronic Acid 2% + B5 (with Ceramides)",
        "title": "The Ordinary Hyaluronic Acid 2% + B5 (with Ceramides)",
        "brand": "The Ordinary",
        "category": "serums",
        "subcategory": "Hydrating Serum",
        "asin": "B01MYEZPC8",
        "amazonUrl": "https://www.amazon.in/dp/B01MYEZPC8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01MYEZPC8?tag=oraeskin-21",
        "badge": "Most Popular Hyaluronic Serum",
        "price": 1000,
        "priceEst": "₹1000",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/the-ordinary-hyaluronic-acid-b5.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "42,000+",
        "reviewCount": "42,000+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 9,
            "evidence": 8.6,
            "userFeedback": 8.6,
            "value": 7.2,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Dehydrated",
            "Sensitive"
        ],
        "concerns": [
            "Dehydration",
            "Barrier Repair",
            "Fine Lines"
        ],
        "keyActives": [
            "Hyaluronic Acid (multi-depth)",
            "Panthenol (Vitamin B5)",
            "Ceramides"
        ],
        "keyIngredients": [
            "Hyaluronic Acid (multi-depth)",
            "Panthenol (Vitamin B5)",
            "Ceramides"
        ],
        "ingredients": [
            "Hyaluronic Acid (multi-depth)",
            "Panthenol (Vitamin B5)",
            "Ceramides"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Slightly Gel-like Serum",
        "finish": "Plump, Slightly Tacky",
        "whiteCast": "Not Applicable",
        "bestFor": "Dehydrated or sensitive skin that wants hydration plus barrier support.",
        "avoidIf": "You dislike a slightly tacky feel before moisturiser.",
        "whyWeLikeIt": "Combines several forms of hyaluronic acid with vitamin B5 and ceramides, and has one of the largest rating bases of any serum on Amazon India.",
        "pros": [
            "42,000+ Amazon India ratings",
            "Panthenol and ceramides support the barrier",
            "Fragrance-free"
        ],
        "cons": [
            "₹1,000 for 30ml, nearly twice Minimalist",
            "Can pill under some sunscreens if over-applied"
        ],
        "verdict": "A reliable, well-reviewed hydrator. Worth the premium if you want ceramides in the same step.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-hyaluronic-acid-2",
                "reason": "Similar hydration for less."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 9,
            "texture": 9,
            "value": 7.2,
            "overall": 8.6
        }
    },
    {
        "id": "the-ordinary-alpha-arbutin-2",
        "name": "Alpha Arbutin 2% + HA",
        "title": "The Ordinary Alpha Arbutin 2% + HA",
        "brand": "The Ordinary",
        "category": "serums",
        "subcategory": "Brightening Serum",
        "asin": "B06XCZFCFZ",
        "amazonUrl": "https://www.amazon.in/dp/B06XCZFCFZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B06XCZFCFZ?tag=oraeskin-21",
        "badge": "Best Concentrated Arbutin",
        "price": 948,
        "priceEst": "₹948",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/the-ordinary-alpha-arbutin-2.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "8,300+",
        "reviewCount": "8,300+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.8,
            "evidence": 8.4,
            "userFeedback": 8.2,
            "value": 8.2,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Sensitive"
        ],
        "concerns": [
            "Dark Spots",
            "Hyperpigmentation",
            "Uneven Tone"
        ],
        "keyActives": [
            "Alpha Arbutin (2%)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Alpha Arbutin (2%)",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Alpha Arbutin (2%)",
            "Hyaluronic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Gel Serum",
        "finish": "Slightly Tacky",
        "whiteCast": "Not Applicable",
        "bestFor": "Fading acne marks and sun spots without acids or strong irritants.",
        "avoidIf": "You want quick results; arbutin needs 8–12 weeks.",
        "whyWeLikeIt": "A straightforward 2% alpha arbutin serum. Arbutin slows the enzyme that makes melanin and is usually well tolerated by sensitive skin.",
        "pros": [
            "2% alpha arbutin, the most-used strength",
            "Gentle, no acids",
            "Can be used morning or night"
        ],
        "cons": [
            "Results are gradual (2–3 months)",
            "Slightly sticky finish",
            "Costs about twice the Minimalist version"
        ],
        "verdict": "A gentle, well-known arbutin. Pair it with daily sunscreen or the marks will come back.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-alpha-arbutin",
                "reason": "Same 2% strength for less."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.2,
            "overall": 8.5
        }
    },
    {
        "id": "boj-glow-deep-serum",
        "name": "Glow Deep Serum Rice + Arbutin",
        "title": "Beauty of Joseon Glow Deep Serum Rice + Arbutin",
        "brand": "Beauty of Joseon",
        "category": "serums",
        "subcategory": "Brightening Serum",
        "asin": "B09DLFCB69",
        "amazonUrl": "https://www.amazon.in/dp/B09DLFCB69?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09DLFCB69?tag=oraeskin-21",
        "badge": "Best Hydrating Brightening Serum",
        "price": 1080,
        "priceEst": "₹1080",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/boj-glow-deep-serum.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "9,800+",
        "reviewCount": "9,800+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.8,
            "evidence": 8,
            "userFeedback": 8.6,
            "value": 7.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Dark Spots",
            "Uneven Tone"
        ],
        "keyActives": [
            "Rice Bran Water",
            "Alpha Arbutin (2%)",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Rice Bran Water",
            "Alpha Arbutin (2%)",
            "Niacinamide"
        ],
        "ingredients": [
            "Rice Bran Water",
            "Alpha Arbutin (2%)",
            "Niacinamide"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Essence-Serum",
        "finish": "Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Dull skin with light marks that also wants hydration.",
        "avoidIf": "You want the strongest single-active spot treatment.",
        "whyWeLikeIt": "Pairs alpha arbutin and niacinamide with a rice-water base, so it brightens and hydrates in one step.",
        "pros": [
            "Arbutin and niacinamide together",
            "Hydrating, dewy finish",
            "Fragrance-free"
        ],
        "cons": [
            "₹1,080 for 30ml",
            "The Amazon listing does not show the full ingredient list"
        ],
        "verdict": "A pleasant all-round brightening serum, more for dullness and light marks than stubborn pigmentation.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-alpha-arbutin",
                "reason": "Targeted 2% arbutin for less."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 7.6,
            "overall": 8.4
        }
    },
    {
        "id": "minimalist-tranexamic-3",
        "name": "3% Tranexamic Acid Serum",
        "title": "Minimalist 3% Tranexamic Acid Serum",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Pigmentation Serum",
        "asin": "B08XC5LQ7B",
        "amazonUrl": "https://www.amazon.in/dp/B08XC5LQ7B?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08XC5LQ7B?tag=oraeskin-21",
        "badge": "Best Tranexamic Acid Serum",
        "price": 616,
        "priceEst": "₹616",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-tranexamic-3.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "4,500+",
        "reviewCount": "4,500+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8.2,
            "userFeedback": 8.2,
            "value": 8,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Sensitive"
        ],
        "concerns": [
            "Hyperpigmentation",
            "Melasma",
            "Dark Spots"
        ],
        "keyActives": [
            "Tranexamic Acid (3%)",
            "Kojic Acid"
        ],
        "keyIngredients": [
            "Tranexamic Acid (3%)",
            "Kojic Acid"
        ],
        "ingredients": [
            "Tranexamic Acid (3%)",
            "Kojic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum",
        "finish": "Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Stubborn pigmentation, sun spots and post-acne marks on sensitive skin.",
        "avoidIf": "You have melasma that has not been seen by a dermatologist; it often needs prescription care.",
        "whyWeLikeIt": "Tranexamic acid is a gentle pigment-fader that works alongside niacinamide or arbutin, and this pairs it with kojic acid.",
        "pros": [
            "3% tranexamic acid with kojic acid",
            "Low irritation, no exfoliating acids",
            "Fragrance-free"
        ],
        "cons": [
            "The Amazon listing shows only a short ingredient summary",
            "Needs 8–12 weeks and daily sunscreen"
        ],
        "verdict": "A good first tranexamic serum. Pair it with SPF 50 every day.",
        "alternatives": [
            {
                "label": "With Niacinamide",
                "productId": "foxtale-tranexamic-3",
                "reason": "Adds niacinamide and peptides."
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
            "value": 8,
            "overall": 8.5
        }
    },
    {
        "id": "foxtale-tranexamic-3",
        "name": "3% Tranexamic Acid Serum",
        "title": "Foxtale 3% Tranexamic Acid Face Serum with Peptides & Niacinamide",
        "brand": "Foxtale",
        "category": "serums",
        "subcategory": "Pigmentation Serum",
        "asin": "B0C1NQRPXW",
        "amazonUrl": "https://www.amazon.in/dp/B0C1NQRPXW?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C1NQRPXW?tag=oraeskin-21",
        "badge": "Best Multi-Active Pigment Serum",
        "price": 493,
        "priceEst": "₹493",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/foxtale-tranexamic-3.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "2,100+",
        "reviewCount": "2,100+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.4,
            "evidence": 8,
            "userFeedback": 8,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Hyperpigmentation",
            "Dark Spots",
            "Uneven Tone"
        ],
        "keyActives": [
            "Tranexamic Acid (3%)",
            "Niacinamide",
            "Oligopeptide-68"
        ],
        "keyIngredients": [
            "Tranexamic Acid",
            "Niacinamide",
            "Oligopeptide-68",
            "Squalane",
            "Sodium Hyaluronate"
        ],
        "ingredients": [
            "Aqua",
            "Propylene Glycol",
            "Dicaprylyl Carbonate",
            "Tranexamic Acid (3%)",
            "Glycerin",
            "C15-19 Alkane",
            "Diethylamino Hydroxybenzoyl Hexyl Benzoate",
            "Oligopeptide-68",
            "Niacinamide",
            "Betaine",
            "Squalane",
            "Phenoxyethanol",
            "Sodium Hyaluronate",
            "Tocopherol",
            "Allergen-free Fragrance"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Milky Serum",
        "finish": "Soft, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily or combination skin with marks that wants one multi-active serum.",
        "avoidIf": "You avoid fragrance.",
        "whyWeLikeIt": "Combines 3% tranexamic acid with niacinamide and a brightening peptide, and the full ingredient list is on the listing.",
        "pros": [
            "Tranexamic acid, niacinamide and peptide in one",
            "Full ingredient list disclosed",
            "Under ₹500"
        ],
        "cons": [
            "Contains fragrance",
            "Includes a UV filter (DHHB) that is unusual in a serum"
        ],
        "verdict": "Good value for oily skin with marks, if fragrance is not a problem for you.",
        "alternatives": [
            {
                "label": "Fragrance-Free",
                "productId": "minimalist-tranexamic-3",
                "reason": "Fragrance-free tranexamic serum."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8.4,
            "overall": 8.2
        }
    },
    {
        "id": "dermaco-tran-zelaic",
        "name": "Tran-Zelaic Pigmentation Corrector Serum",
        "title": "The Derma Co. Tran-Zelaic Serum with 3% Tranexamic Acid & 10% Azelaic Acid",
        "brand": "The Derma Co",
        "category": "serums",
        "subcategory": "Pigmentation Serum",
        "asin": "B0D45NXZDZ",
        "amazonUrl": "https://www.amazon.in/dp/B0D45NXZDZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0D45NXZDZ?tag=oraeskin-21",
        "badge": "Best Azelaic + Tranexamic Combo",
        "price": 382,
        "priceEst": "₹382",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/dermaco-tran-zelaic.jpg",
        "amazonRating": 3.9,
        "rating": 3.9,
        "amazonReviews": "900+",
        "reviewCount": "900+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8,
            "evidence": 8.4,
            "userFeedback": 7.8,
            "value": 9,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Hyperpigmentation",
            "Acne Marks",
            "Acne"
        ],
        "keyActives": [
            "Azelaic Acid (10%)",
            "Tranexamic Acid (3%)",
            "Niacinamide",
            "Alpha Arbutin"
        ],
        "keyIngredients": [
            "Azelaic Acid",
            "Tranexamic Acid",
            "Niacinamide",
            "Alpha Arbutin",
            "4-Butyl Resorcinol",
            "Ferulic Acid"
        ],
        "ingredients": [
            "Aqua",
            "Azelaic Acid",
            "Propanediol",
            "Niacinamide",
            "Dimethyl Isosorbide",
            "Tranexamic Acid",
            "Betaine",
            "Alpha Arbutin",
            "Panthenol",
            "Phenethyl Alcohol",
            "Caprylyl Glycol",
            "Glycerin",
            "Sodium PCA",
            "4-Butyl Resorcinol",
            "Ferulic Acid",
            "Terminalia Ferdinandiana Fruit Extract",
            "Allantoin",
            "Sodium Hyaluronate",
            "Xanthan Gum",
            "Sodium Hydroxide",
            "Disodium EDTA"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum",
        "finish": "Matte to Satin",
        "whiteCast": "Not Applicable",
        "bestFor": "Acne-prone skin with both active breakouts and dark marks.",
        "avoidIf": "Your skin is very sensitive; this many actives together can sting at first.",
        "whyWeLikeIt": "Stacks 10% azelaic acid, 3% tranexamic acid, niacinamide, arbutin and butyl resorcinol, an unusually complete pigment formula at this price.",
        "pros": [
            "Five pigment-fading actives",
            "Fragrance-free, full ingredient list",
            "Lowest price per ml in this group"
        ],
        "cons": [
            "3.9★, the lowest rating here; some users report stinging",
            "Many actives at once makes it harder to tell what irritates"
        ],
        "verdict": "The strongest-looking formula for the money. Patch test and start every other night.",
        "alternatives": [
            {
                "label": "Gentler Option",
                "productId": "minimalist-tranexamic-3",
                "reason": "Fewer actives, easier to tolerate."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9,
            "overall": 8.3
        }
    },
    {
        "id": "anua-azelaic-10-serum",
        "name": "Azelaic Acid 10 Hyaluron Redness Soothing Serum",
        "title": "Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum",
        "brand": "Anua",
        "category": "serums",
        "subcategory": "Soothing Serum",
        "asin": "B0DG1DQ2S7",
        "amazonUrl": "https://www.amazon.in/dp/B0DG1DQ2S7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DG1DQ2S7?tag=oraeskin-21",
        "badge": "Best Azelaic Serum for Redness",
        "price": 1600,
        "priceEst": "₹1600",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/anua-azelaic-10-serum.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "7,400+",
        "reviewCount": "7,400+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.8,
            "evidence": 8.2,
            "userFeedback": 9,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "Sensitive",
            "Acne-Prone",
            "Combination"
        ],
        "concerns": [
            "Redness",
            "Acne",
            "Uneven Tone"
        ],
        "keyActives": [
            "Azelaic Acid (10%, brand claim)",
            "Hyaluronic Acid",
            "Centella Asiatica"
        ],
        "keyIngredients": [
            "Azelaic Acid (10%, brand claim)",
            "Hyaluronic Acid",
            "Centella Asiatica"
        ],
        "ingredients": [
            "Azelaic Acid (10%, brand claim)",
            "Hyaluronic Acid",
            "Centella Asiatica"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Gel Serum",
        "finish": "Hydrated, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Red, reactive or acne-prone skin that finds plain azelaic acid gels gritty or drying.",
        "avoidIf": "You have diagnosed rosacea; see a dermatologist, as prescription azelaic acid (15–20%) is usually stronger.",
        "whyWeLikeIt": "Pairs azelaic acid with hyaluronic acid and centella in a smooth serum, and has a 4.5★ average from 7,400+ ratings.",
        "pros": [
            "Highest rating in this group (4.5★)",
            "Smooth, hydrating texture",
            "Includes soothing centella"
        ],
        "cons": [
            "₹1,600 for 30ml",
            "The Amazon listing does not show the full ingredient list, so we cannot confirm the azelaic form"
        ],
        "verdict": "The most comfortable azelaic option here, but expensive. For acne marks on a budget, try Derma Co Tran-Zelaic.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "dermaco-tran-zelaic",
                "reason": "10% azelaic plus tranexamic for far less."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 6.8,
            "overall": 8.4
        }
    },
    {
        "id": "minimalist-multi-peptide",
        "name": "Multi Peptide Serum (7% Matrixyl 3000)",
        "title": "Minimalist Multi Peptide Night Serum with 7% Matrixyl 3000 & 3% Bio-Placenta",
        "brand": "Minimalist",
        "category": "anti-aging",
        "subcategory": "Peptide Serum",
        "asin": "B08MVD6T8V",
        "amazonUrl": "https://www.amazon.in/dp/B08MVD6T8V?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08MVD6T8V?tag=oraeskin-21",
        "badge": "Best Value Peptide Serum",
        "price": 593,
        "priceEst": "₹593",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-multi-peptide.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "4,100+",
        "reviewCount": "4,100+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 9,
            "evidence": 7.8,
            "userFeedback": 8.6,
            "value": 8.8,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Sensitive"
        ],
        "concerns": [
            "Fine Lines",
            "Firmness",
            "Dehydration"
        ],
        "keyActives": [
            "Matrixyl 3000 (7%)",
            "Bio-Placenta (plant peptides, 3%)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Matrixyl 3000 (7%)",
            "Bio-Placenta (plant peptides, 3%)",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Matrixyl 3000 (7%)",
            "Bio-Placenta (plant peptides, 3%)",
            "Hyaluronic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum",
        "finish": "Smooth, Slightly Tacky",
        "whiteCast": "Not Applicable",
        "bestFor": "Early fine lines in people who cannot tolerate retinoids, or as a gentle partner to one.",
        "avoidIf": "You expect retinoid-level results; peptide evidence is more modest.",
        "whyWeLikeIt": "7% Matrixyl 3000 is a well-known signal peptide, and the formula is fragrance-free and non-irritating.",
        "pros": [
            "Non-irritating, can be used daily",
            "Fragrance-free",
            "Under ₹600"
        ],
        "cons": [
            "Peptide evidence is weaker than for retinoids",
            "The Amazon listing shows only a short ingredient summary"
        ],
        "verdict": "An easy, gentle anti-ageing step. Use it alongside sunscreen and, if you can, a retinoid.",
        "alternatives": [
            {
                "label": "Premium Pick",
                "productId": "the-ordinary-multi-peptide-copper",
                "reason": "Adds copper peptides and more peptide types."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 9,
            "texture": 9,
            "value": 8.8,
            "overall": 8.6
        }
    },
    {
        "id": "the-ordinary-multi-peptide-copper",
        "name": "Multi-Peptide + Copper Peptides 1%",
        "title": "The Ordinary Multi-Peptide + Copper Peptides 1% Serum",
        "brand": "The Ordinary",
        "category": "anti-aging",
        "subcategory": "Peptide Serum",
        "asin": "B0C9DXGXZ3",
        "amazonUrl": "https://www.amazon.in/dp/B0C9DXGXZ3?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C9DXGXZ3?tag=oraeskin-21",
        "badge": "Best Premium Peptide Serum",
        "price": 2950,
        "priceEst": "₹2950",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/the-ordinary-multi-peptide-copper.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "3,700+",
        "reviewCount": "3,700+",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 8.6,
            "evidence": 8,
            "userFeedback": 9.2,
            "value": 6,
            "availability": 8.5
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Fine Lines",
            "Firmness",
            "Texture"
        ],
        "keyActives": [
            "Copper Tripeptide-1 (1%)",
            "Matrixyl peptides",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Copper Tripeptide-1 (1%)",
            "Matrixyl peptides",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Copper Tripeptide-1 (1%)",
            "Matrixyl peptides",
            "Hyaluronic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum (blue tint from copper)",
        "finish": "Smooth",
        "whiteCast": "Not Applicable",
        "bestFor": "Mature skin looking for a broad peptide serum without retinoid irritation.",
        "avoidIf": "You use strong acids or vitamin C (L-ascorbic acid) in the same routine; copper peptides are best kept apart from them.",
        "whyWeLikeIt": "One of the broadest peptide blends available, combining copper peptides with signal peptides, rated 4.6★.",
        "pros": [
            "Highest rating in this group (4.6★)",
            "Copper plus multiple signal peptides",
            "Fragrance-free"
        ],
        "cons": [
            "₹2,950 for 30ml, about five times the Minimalist price",
            "Should not be layered with direct acids or L-ascorbic acid"
        ],
        "verdict": "A premium peptide serum. Good, but most people will get similar value from Minimalist.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-multi-peptide",
                "reason": "7% Matrixyl for a fifth of the price."
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
            "value": 6,
            "overall": 8.3
        }
    },
    {
        "id": "eqqualberry-bakuchiol-serum",
        "name": "Bakuchiol Plumping Serum",
        "title": "EQQUALBERRY Bakuchiol Plumping Serum with Niacinamide, Ceramides & Peptides",
        "brand": "EQQUALBERRY",
        "category": "anti-aging",
        "subcategory": "Bakuchiol Serum",
        "asin": "B0D8W2W8C2",
        "amazonUrl": "https://www.amazon.in/dp/B0D8W2W8C2?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0D8W2W8C2?tag=oraeskin-21",
        "badge": "Best Bakuchiol Serum",
        "price": 2100,
        "priceEst": "₹2100",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/eqqualberry-bakuchiol-serum.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "3,900+",
        "reviewCount": "3,900+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.8,
            "evidence": 7.4,
            "userFeedback": 8.8,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Sensitive"
        ],
        "concerns": [
            "Fine Lines",
            "Texture",
            "Dehydration"
        ],
        "keyActives": [
            "Bakuchiol (0.5%)",
            "Niacinamide (4%)",
            "Peptides",
            "Ceramides"
        ],
        "keyIngredients": [
            "Bakuchiol (0.5%)",
            "Niacinamide (4%)",
            "Peptides",
            "Ceramides"
        ],
        "ingredients": [
            "Bakuchiol (0.5%)",
            "Niacinamide (4%)",
            "Peptides",
            "Ceramides"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Serum",
        "finish": "Plump, Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Sensitive skin that wants a retinol alternative with extra hydration.",
        "avoidIf": "You can tolerate retinoids and want the strongest results for the money.",
        "whyWeLikeIt": "Pairs bakuchiol (0.5%, a typical studied level) with niacinamide, peptides and ceramides in a gentle, well-rated serum.",
        "pros": [
            "Bakuchiol at a studied 0.5% level",
            "Niacinamide, peptides and ceramides in one",
            "Can be used morning and night"
        ],
        "cons": [
            "₹2,100 for 30ml",
            "Bakuchiol has far less research than retinol"
        ],
        "verdict": "A gentle, well-made bakuchiol serum, priced at the top end.",
        "alternatives": [
            {
                "label": "Gentle Retinoid",
                "productId": "minimalist-granactive-retinoid-2",
                "reason": "A low-irritation retinoid for much less."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 6.8,
            "overall": 8.2
        }
    },
    {
        "id": "blue-nectar-bakuchiol-serum",
        "name": "5% Bakuchiol Serum",
        "title": "Blue Nectar 5% Bakuchiol (Babchi) Serum",
        "brand": "Blue Nectar",
        "category": "anti-aging",
        "subcategory": "Bakuchiol Serum",
        "asin": "B0BW5KJGHT",
        "amazonUrl": "https://www.amazon.in/dp/B0BW5KJGHT?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BW5KJGHT?tag=oraeskin-21",
        "badge": "Ayurvedic Bakuchiol Option",
        "price": 657,
        "priceEst": "₹657",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/blue-nectar-bakuchiol-serum.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "650+",
        "reviewCount": "650+",
        "scoreBreakdown": {
            "formula": 7,
            "skinSuitability": 7.6,
            "evidence": 6.8,
            "userFeedback": 8.6,
            "value": 8,
            "availability": 8.5
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Fine Lines",
            "Dullness"
        ],
        "keyActives": [
            "Bakuchi (Babchi) Oil",
            "Ayurvedic Herb Blend"
        ],
        "keyIngredients": [
            "Bakuchi (Babchi) Oil",
            "Ayurvedic Herb Blend"
        ],
        "ingredients": [
            "Bakuchi (Babchi) Oil",
            "Ayurvedic Herb Blend"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Oil Serum",
        "finish": "Slightly Oily",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, non-sensitive skin that prefers Ayurvedic, oil-based products.",
        "avoidIf": "You have acne-prone or sensitive skin, or want a fully disclosed formula.",
        "whyWeLikeIt": "An affordable, oil-based babchi serum for people who prefer Ayurvedic skincare.",
        "pros": [
            "Much cheaper than other bakuchiol serums",
            "Oil base suits dry skin",
            "Ayurvedic formulation"
        ],
        "cons": [
            "The listing gives \"10 Ayurvedic herbs\" instead of a full ingredient list",
            "\"5%\" likely refers to babchi oil, not pure bakuchiol",
            "Oils and herbs may not suit acne-prone or sensitive skin"
        ],
        "verdict": "A budget, Ayurvedic option. If you want a measured bakuchiol dose, EQQUALBERRY is clearer.",
        "alternatives": [
            {
                "label": "Clearer Formula",
                "productId": "eqqualberry-bakuchiol-serum",
                "reason": "Discloses 0.5% bakuchiol."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.6,
        "scores": {
            "formula": 7,
            "weatherResilience": 7.6,
            "texture": 7.6,
            "value": 8,
            "overall": 7.6
        }
    },
    {
        "id": "skin1004-centella-soothing-cream",
        "name": "Madagascar Centella Soothing Cream",
        "title": "SKIN1004 Madagascar Centella Soothing Cream",
        "brand": "SKIN1004",
        "category": "moisturizers",
        "subcategory": "Cica Cream",
        "asin": "B09B221Q7K",
        "amazonUrl": "https://www.amazon.in/dp/B09B221Q7K?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09B221Q7K?tag=oraeskin-21",
        "badge": "Best Cica Cream",
        "price": 1125,
        "priceEst": "₹1125",
        "currency": "₹",
        "size": "75ml",
        "image": "/images/products/skin1004-centella-soothing-cream.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "3,400+",
        "reviewCount": "3,400+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8.2,
            "userFeedback": 8.8,
            "value": 7.6,
            "availability": 9
        },
        "skinType": [
            "Sensitive",
            "Combination",
            "Dry"
        ],
        "concerns": [
            "Redness",
            "Barrier Repair",
            "Irritation"
        ],
        "keyActives": [
            "Centella Asiatica Extract (72%)",
            "4 Ceramides",
            "Tranexamic Acid (<2%)"
        ],
        "keyIngredients": [
            "Centella Asiatica Extract",
            "Ceramide NP",
            "Ceramide AP",
            "Ceramide EOP",
            "Ceramide NS",
            "Sodium Hyaluronate",
            "Beta-Glucan"
        ],
        "ingredients": [
            "Centella Asiatica Extract (72%)",
            "Glycerin",
            "Propanediol",
            "Dipropylene Glycol",
            "Cyclomethicone",
            "Water",
            "1,2-Hexanediol",
            "Trehalose",
            "Caprylyl Methicone",
            "Carbomer",
            "Xanthan Gum",
            "Mentha Piperita (Peppermint) Leaf Extract",
            "Zingiber Officinale (Ginger) Root Extract",
            "Dipotassium Glycyrrhizate",
            "Tranexamic Acid",
            "Sodium Hyaluronate",
            "Beta-Glucan",
            "Ceramide EOP",
            "Ceramide NS",
            "Ceramide NP",
            "Ceramide AP"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Gel-Cream",
        "finish": "Soft, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Red, irritated or over-exfoliated skin that wants a light barrier cream.",
        "avoidIf": "You react to peppermint extract.",
        "whyWeLikeIt": "72% centella extract with four ceramides in a light cream that suits humid weather.",
        "pros": [
            "72% centella extract",
            "Four ceramides for barrier support",
            "Light enough for combination skin"
        ],
        "cons": [
            "Contains peppermint and ginger extracts, which can bother very sensitive skin",
            "₹1,125 for 75ml"
        ],
        "verdict": "A light, calming barrier cream. Patch test if your skin reacts to mint.",
        "alternatives": [
            {
                "label": "For Very Dry Skin",
                "productId": "bioderma-atoderm-baume",
                "reason": "A richer, fragrance-free balm."
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
            "value": 7.6,
            "overall": 8.5
        }
    },
    {
        "id": "skin1004-probio-cica-ampoule",
        "name": "Centella Probio-Cica Intensive Ampoule",
        "title": "SKIN1004 Centella Probio-Cica Intensive Ampoule",
        "brand": "SKIN1004",
        "category": "serums",
        "subcategory": "Soothing Ampoule",
        "asin": "B0BTRWGQNV",
        "amazonUrl": "https://www.amazon.in/dp/B0BTRWGQNV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BTRWGQNV?tag=oraeskin-21",
        "badge": "Best Cica Serum",
        "price": 1538,
        "priceEst": "₹1538",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/skin1004-probio-cica-ampoule.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "3,500+",
        "reviewCount": "3,500+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.8,
            "evidence": 7.8,
            "userFeedback": 9,
            "value": 7.2,
            "availability": 9
        },
        "skinType": [
            "Sensitive",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Redness",
            "Barrier Repair",
            "Dehydration"
        ],
        "keyActives": [
            "Fermented Centella Asiatica",
            "Probiotic Ferments",
            "Ceramides"
        ],
        "keyIngredients": [
            "Fermented Centella Asiatica",
            "Probiotic Ferments",
            "Ceramides"
        ],
        "ingredients": [
            "Fermented Centella Asiatica",
            "Probiotic Ferments",
            "Ceramides"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Ampoule",
        "finish": "Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Sensitive or post-procedure skin that wants a soothing serum layer.",
        "avoidIf": "You prefer to see a full ingredient list before buying.",
        "whyWeLikeIt": "Fermented centella and ceramides in a lightweight ampoule, rated 4.5★ by 3,500+ buyers.",
        "pros": [
            "4.5★ from 3,500+ ratings",
            "Light, layers well under moisturiser",
            "No added fragrance (brand claim)"
        ],
        "cons": [
            "₹1,538 for 50ml",
            "The Amazon listing does not show the full ingredient list"
        ],
        "verdict": "A calming serum for reactive skin. The cream is better value if you only buy one.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "skin1004-centella-soothing-cream",
                "reason": "Cica plus ceramides in a cream."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 7.2,
            "overall": 8.3
        }
    },
    {
        "id": "cosrx-snail-92-cream",
        "name": "Advanced Snail 92 All In One Cream",
        "title": "COSRX Advanced Snail 92 All In One Cream",
        "brand": "COSRX",
        "category": "moisturizers",
        "subcategory": "Snail Cream",
        "asin": "B01LEJ5MSK",
        "amazonUrl": "https://www.amazon.in/dp/B01LEJ5MSK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01LEJ5MSK?tag=oraeskin-21",
        "badge": "Best Snail Moisturiser",
        "price": 1400,
        "priceEst": "₹1400",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/cosrx-snail-92-cream.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "62,000+",
        "reviewCount": "62,000+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 7.8,
            "userFeedback": 8.6,
            "value": 7.8,
            "availability": 9.5
        },
        "skinType": [
            "Dry",
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Dehydration",
            "Barrier Repair",
            "Acne Marks"
        ],
        "keyActives": [
            "Snail Secretion Filtrate (92%)",
            "Betaine",
            "Sodium Hyaluronate",
            "Allantoin"
        ],
        "keyIngredients": [
            "Snail Secretion Filtrate (92%)",
            "Betaine",
            "Sodium Hyaluronate",
            "Allantoin"
        ],
        "ingredients": [
            "Snail Secretion Filtrate (92%)",
            "Betaine",
            "Sodium Hyaluronate",
            "Allantoin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Bouncy Gel-Cream",
        "finish": "Dewy, Slightly Tacky",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry or dehydrated skin that likes a cushiony, dewy moisturiser.",
        "avoidIf": "You are vegan, or have very oily skin that dislikes a tacky finish.",
        "whyWeLikeIt": "92% snail filtrate with allantoin and hyaluronic acid makes a soothing, hydrating cream, and it has 62,000+ ratings.",
        "pros": [
            "62,000+ Amazon India ratings",
            "Generous 100ml jar",
            "Fragrance-free"
        ],
        "cons": [
            "Can feel tacky in humid weather",
            "Not suitable for vegans"
        ],
        "verdict": "A comfortable, well-reviewed moisturiser. Oily skin may prefer the essence on its own.",
        "alternatives": [
            {
                "label": "Lighter Option",
                "productId": "cosrx-snail-96-essence",
                "reason": "The essence version for oily skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 7.8,
            "overall": 8.3
        }
    },
    {
        "id": "paulas-choice-2-bha-liquid",
        "name": "Skin Perfecting 2% BHA Liquid Exfoliant",
        "title": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant (30ml)",
        "brand": "Paula's Choice",
        "category": "toners",
        "subcategory": "BHA Exfoliant",
        "asin": "B07C5SS6YD",
        "amazonUrl": "https://www.amazon.in/dp/B07C5SS6YD?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07C5SS6YD?tag=oraeskin-21",
        "badge": "Best BHA Exfoliant",
        "price": 1200,
        "priceEst": "₹1200",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/paulas-choice-2-bha-liquid.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "1,09,000+",
        "reviewCount": "1,09,000+",
        "scoreBreakdown": {
            "formula": 9,
            "skinSuitability": 8.6,
            "evidence": 9,
            "userFeedback": 8.6,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blackheads",
            "Enlarged Pores",
            "Texture"
        ],
        "keyActives": [
            "Salicylic Acid (2%)",
            "Green Tea Extract"
        ],
        "keyIngredients": [
            "Salicylic Acid (2%)",
            "Green Tea Extract"
        ],
        "ingredients": [
            "Water (Aqua)",
            "Methylpropanediol",
            "Butylene Glycol",
            "Salicylic Acid",
            "Polysorbate 20",
            "Camellia Oleifera Leaf Extract",
            "Sodium Hydroxide",
            "Tetrasodium EDTA"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thin Liquid",
        "finish": "Weightless",
        "whiteCast": "Not Applicable",
        "bestFor": "Blackheads, clogged pores and rough texture on oily or combination skin.",
        "avoidIf": "Your skin is dry, sensitive or already irritated by other exfoliants.",
        "whyWeLikeIt": "A short, fragrance-free formula with 2% salicylic acid at an effective pH. It is one of the most-rated exfoliants on Amazon India.",
        "pros": [
            "2% salicylic acid in a short, fragrance-free formula",
            "1,09,000+ Amazon India ratings",
            "Leave-on, so it keeps working in pores"
        ],
        "cons": [
            "This listing is the 30ml travel size, so ₹40 per ml",
            "Can dry out skin if used daily from the start"
        ],
        "verdict": "The benchmark BHA exfoliant. Expensive per ml, so start with the travel size.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-salicylic-serum-2",
                "reason": "2% salicylic acid for a fraction of the price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 9,
            "weatherResilience": 8.6,
            "texture": 8.6,
            "value": 6.8,
            "overall": 8.6
        }
    },
    {
        "id": "nivea-derma-skin-clear-toner",
        "name": "Derma Skin Clear Toner",
        "title": "NIVEA Derma Skin Clear Face Toner with Salicylic Acid & Niacinamide",
        "brand": "NIVEA",
        "category": "toners",
        "subcategory": "BHA Toner",
        "asin": "B0B97B7GLK",
        "amazonUrl": "https://www.amazon.in/dp/B0B97B7GLK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B97B7GLK?tag=oraeskin-21",
        "badge": "Best Budget BHA Toner",
        "price": 316,
        "priceEst": "₹316",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/nivea-derma-skin-clear-toner.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "2,000+",
        "reviewCount": "2,000+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.4,
            "evidence": 7.6,
            "userFeedback": 9,
            "value": 9,
            "availability": 9.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blackheads",
            "Oiliness",
            "Acne"
        ],
        "keyActives": [
            "Salicylic Acid",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Salicylic Acid",
            "Niacinamide"
        ],
        "ingredients": [
            "Salicylic Acid",
            "Niacinamide"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery Toner",
        "finish": "Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily, blemish-prone skin that wants a gentle daily toner.",
        "avoidIf": "You need a strong exfoliant for stubborn blackheads.",
        "whyWeLikeIt": "A large, affordable bottle with salicylic acid and niacinamide, rated 4.5★.",
        "pros": [
            "200ml for ₹316",
            "Salicylic acid plus niacinamide",
            "4.5★ rating"
        ],
        "cons": [
            "The listing does not give the salicylic acid percentage or full ingredients",
            "Gentler than a dedicated 2% BHA"
        ],
        "verdict": "A good-value daily toner for oily skin, but not a replacement for a 2% BHA on stubborn blackheads.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "paulas-choice-2-bha-liquid",
                "reason": "A stated 2% BHA exfoliant."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 9,
            "overall": 8.3
        }
    },
    {
        "id": "hyphen-ceramide-milky-toner",
        "name": "7% Ceramides-NMF Milky Toner Essence",
        "title": "Hyphen 7% Ceramides-NMF Milky Face Toner Essence",
        "brand": "Hyphen",
        "category": "toners",
        "subcategory": "Milky Toner",
        "asin": "B0DMPDCBLH",
        "amazonUrl": "https://www.amazon.in/dp/B0DMPDCBLH?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DMPDCBLH?tag=oraeskin-21",
        "badge": "Best Milky Toner",
        "price": 446,
        "priceEst": "₹446",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/hyphen-ceramide-milky-toner.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "600+",
        "reviewCount": "600+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.8,
            "evidence": 8,
            "userFeedback": 8.8,
            "value": 8.8,
            "availability": 8.5
        },
        "skinType": [
            "Dry",
            "Normal",
            "Sensitive",
            "Combination"
        ],
        "concerns": [
            "Dehydration",
            "Barrier Repair",
            "Dullness"
        ],
        "keyActives": [
            "Ceramides (5 types)",
            "NMF (Urea, Sodium PCA, Sodium Lactate)",
            "Rice Water",
            "Oat Extract"
        ],
        "keyIngredients": [
            "Ceramide 1",
            "Ceramide 2",
            "Ceramide 3",
            "Ceramide 4",
            "Ceramide 6 II",
            "Urea",
            "Sodium PCA",
            "Sodium Hyaluronate",
            "Oryza Sativa (Rice) Water Extract",
            "Avena Sativa (Oat) Meal Extract",
            "Tremella Fuciformis Extract"
        ],
        "ingredients": [
            "Aqua",
            "Trehalose",
            "Oryza Sativa (Rice) Water Extract",
            "Glycerin",
            "Isododecane",
            "C12-15 Alkyl Benzoate",
            "Pentylene Glycol",
            "Glyceryl Stearate",
            "Urea",
            "Allantoin",
            "Sodium PCA",
            "Sodium Lactate",
            "Sodium Hyaluronate",
            "Ceramide 1",
            "Ceramide 2",
            "Ceramide 3",
            "Ceramide 4",
            "Ceramide 6 II",
            "Beta Glucan",
            "Avena Sativa (Oat) Meal Extract",
            "Tremella Fuciformis (Snow Mushroom) Extract"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Milky Essence",
        "finish": "Soft, Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry or dehydrated skin that wants a cushiony first layer of hydration.",
        "avoidIf": "You have very oily skin that dislikes any emollient feel.",
        "whyWeLikeIt": "Five ceramides with natural moisturising factors and rice water in a milky toner, with the full ingredient list on the listing.",
        "pros": [
            "Five ceramides plus NMFs",
            "Full ingredient list disclosed",
            "Alcohol-free"
        ],
        "cons": [
            "Only 100ml",
            "Emollients may feel heavy on very oily skin in summer"
        ],
        "verdict": "An excellent hydrating milky toner for dry and normal skin.",
        "alternatives": [
            {
                "label": "Lighter Option",
                "productId": "minimalist-b12-hyaluronic-toner",
                "reason": "A watery hydrating toner."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.8,
            "overall": 8.6
        }
    },
    {
        "id": "minimalist-b12-hyaluronic-toner",
        "name": "Vitamin B12 + Hyaluronic Toner",
        "title": "Minimalist Vitamin B12 + Hyaluronic Face Toner",
        "brand": "Minimalist",
        "category": "toners",
        "subcategory": "Hydrating Toner",
        "asin": "B0G5949WL1",
        "amazonUrl": "https://www.amazon.in/dp/B0G5949WL1?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0G5949WL1?tag=oraeskin-21",
        "badge": "Best Lightweight Hydrating Toner",
        "price": 379,
        "priceEst": "₹379",
        "currency": "₹",
        "size": "120ml",
        "image": "/images/products/minimalist-b12-hyaluronic-toner.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "290+",
        "reviewCount": "290+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.8,
            "evidence": 7.6,
            "userFeedback": 8.6,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Oily",
            "Sensitive"
        ],
        "concerns": [
            "Dehydration",
            "Barrier Repair",
            "Redness"
        ],
        "keyActives": [
            "Vitamin B12 (Cyanocobalamin)",
            "Hyaluronic Acid",
            "Panthenol",
            "NMF"
        ],
        "keyIngredients": [
            "Vitamin B12 (Cyanocobalamin)",
            "Hyaluronic Acid",
            "Panthenol",
            "NMF"
        ],
        "ingredients": [
            "Vitamin B12 (Cyanocobalamin)",
            "Hyaluronic Acid",
            "Panthenol",
            "NMF"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery Toner",
        "finish": "Fresh, Hydrated",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily or sensitive skin that wants hydration without a milky feel.",
        "avoidIf": "You have very dry skin that needs a richer toner.",
        "whyWeLikeIt": "A simple, fragrance-free hydrating toner with hyaluronic acid, panthenol and vitamin B12.",
        "pros": [
            "Light enough for oily skin",
            "Fragrance-free",
            "Good size for the price"
        ],
        "cons": [
            "Newer product with fewer than 300 ratings",
            "The Amazon listing does not show the full ingredient list"
        ],
        "verdict": "A light, gentle hydrating toner. Dry skin may prefer Hyphen.",
        "alternatives": [
            {
                "label": "Richer Option",
                "productId": "hyphen-ceramide-milky-toner",
                "reason": "A milky ceramide toner for dry skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 8.6,
            "overall": 8.4
        }
    },
    {
        "id": "dabur-gulabari-rose-water",
        "name": "Gulabari Premium Rose Water",
        "title": "Dabur Gulabari Premium Rose Water / Face Toner",
        "brand": "Dabur",
        "category": "toners",
        "subcategory": "Rose Water",
        "asin": "B085QMJ3TS",
        "amazonUrl": "https://www.amazon.in/dp/B085QMJ3TS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B085QMJ3TS?tag=oraeskin-21",
        "badge": "Cheapest Rose Water",
        "price": 99,
        "priceEst": "₹99",
        "currency": "₹",
        "size": "400ml",
        "image": "/images/products/dabur-gulabari-rose-water.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "29,000+",
        "reviewCount": "29,000+",
        "scoreBreakdown": {
            "formula": 6,
            "skinSuitability": 7.4,
            "evidence": 6,
            "userFeedback": 8.6,
            "value": 10,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Oily"
        ],
        "concerns": [
            "Refreshing",
            "Dullness"
        ],
        "keyActives": [
            "Rose Oil",
            "Fragrance (Rooh Gulab)"
        ],
        "keyIngredients": [
            "Rose Oil",
            "Fragrance (Rooh Gulab)"
        ],
        "ingredients": [
            "Water (Aqua)",
            "Rose Oil",
            "Fragrance (Rooh Gulab)",
            "Propylene Glycol"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery",
        "finish": "Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Mixing into face packs or a quick refresh on non-sensitive skin.",
        "avoidIf": "You want pure steam-distilled rose water, or have sensitive skin.",
        "whyWeLikeIt": "Very cheap and widely used, but it is water with rose oil and added fragrance, not distilled rose hydrosol.",
        "pros": [
            "₹99 for 400ml",
            "Alcohol-free",
            "29,000+ ratings"
        ],
        "cons": [
            "Contains added fragrance",
            "Not steam-distilled rose water: it is water plus rose oil and fragrance"
        ],
        "verdict": "Fine for face packs, but if you want true rose water, choose a steam-distilled one.",
        "alternatives": [
            {
                "label": "Pure Option",
                "productId": "urbanbotanics-rose-water",
                "reason": "100% steam-distilled rose water."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.4,
        "scores": {
            "formula": 6,
            "weatherResilience": 7.4,
            "texture": 7.4,
            "value": 10,
            "overall": 7.4
        }
    },
    {
        "id": "urbanbotanics-rose-water",
        "name": "Steam Distilled Rose Water Spray",
        "title": "UrbanBotanics 100% Pure Steam Distilled Rose Water Spray",
        "brand": "UrbanBotanics",
        "category": "toners",
        "subcategory": "Rose Water",
        "asin": "B07MW7CX3T",
        "amazonUrl": "https://www.amazon.in/dp/B07MW7CX3T?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07MW7CX3T?tag=oraeskin-21",
        "badge": "Best Value Pure Rose Water",
        "price": 279,
        "priceEst": "₹279",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/urbanbotanics-rose-water.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "13,600+",
        "reviewCount": "13,600+",
        "scoreBreakdown": {
            "formula": 7.2,
            "skinSuitability": 8,
            "evidence": 6.4,
            "userFeedback": 8.4,
            "value": 8.4,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Refreshing",
            "Hydration"
        ],
        "keyActives": [
            "Steam-Distilled Rose Water"
        ],
        "keyIngredients": [
            "Steam-Distilled Rose Water"
        ],
        "ingredients": [
            "Rosa Damascena (Rose) Flower Water"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Fine Mist",
        "finish": "Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "A simple refreshing mist or toner for most skin types.",
        "avoidIf": "You expect it to treat acne or pigmentation.",
        "whyWeLikeIt": "Lists only steam-distilled rose water, in a spray bottle, with 13,600+ ratings.",
        "pros": [
            "Single-ingredient formula",
            "Convenient spray",
            "13,600+ ratings"
        ],
        "cons": [
            "Rose water has limited evidence beyond soothing and hydration",
            "No preservative listed, so refrigerate and use within a few months"
        ],
        "verdict": "A good-value pure rose water for a refreshing step.",
        "alternatives": [
            {
                "label": "Cheapest Option",
                "productId": "dabur-gulabari-rose-water",
                "reason": "Cheaper, but with added fragrance."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.7,
        "scores": {
            "formula": 7.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.7
        }
    },
    {
        "id": "forest-essentials-rosewater-mist",
        "name": "Facial Tonic Mist Pure Rosewater",
        "title": "Forest Essentials Facial Tonic Mist with Pure Rosewater",
        "brand": "Forest Essentials",
        "category": "toners",
        "subcategory": "Rose Water",
        "asin": "B09ZVGH8MG",
        "amazonUrl": "https://www.amazon.in/dp/B09ZVGH8MG?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09ZVGH8MG?tag=oraeskin-21",
        "badge": "Best Premium Rose Water",
        "price": 595,
        "priceEst": "₹595",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/forest-essentials-rosewater-mist.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "800+",
        "reviewCount": "800+",
        "scoreBreakdown": {
            "formula": 7.2,
            "skinSuitability": 8.2,
            "evidence": 6.4,
            "userFeedback": 9,
            "value": 5.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Dry"
        ],
        "concerns": [
            "Refreshing",
            "Hydration"
        ],
        "keyActives": [
            "Steam-Distilled Rose Water"
        ],
        "keyIngredients": [
            "Steam-Distilled Rose Water"
        ],
        "ingredients": [
            "Pure Rose Water"
        ],
        "fragrance": "Subtle Natural Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Fine Mist",
        "finish": "Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "Gifting, or anyone who wants a premium Ayurvedic rose mist.",
        "avoidIf": "You are budget-conscious; cheaper pure rose waters do the same job.",
        "whyWeLikeIt": "A well-rated Ayurvedic rose mist with a very fine spray.",
        "pros": [
            "4.5★ rating",
            "Fine, even mist",
            "Pure rose water"
        ],
        "cons": [
            "₹595 for 50ml, about ₹12 per ml",
            "Same basic ingredient as much cheaper options"
        ],
        "verdict": "Lovely to use, but you are paying for the brand.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "urbanbotanics-rose-water",
                "reason": "Pure rose water for a fraction of the price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.5,
        "scores": {
            "formula": 7.2,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 5.6,
            "overall": 7.5
        }
    },
    {
        "id": "anua-heartleaf-77-clear-pad",
        "name": "Heartleaf 77 Clear Pad",
        "title": "Anua Heartleaf 77 Clear Pad (70 Sheets)",
        "brand": "Anua",
        "category": "toners",
        "subcategory": "Toner Pads",
        "asin": "B08JLMRTZS",
        "amazonUrl": "https://www.amazon.in/dp/B08JLMRTZS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08JLMRTZS?tag=oraeskin-21",
        "badge": "Best Gentle Exfoliating Pads",
        "price": 1600,
        "priceEst": "₹1600",
        "currency": "₹",
        "size": "70 pads",
        "image": "/images/products/anua-heartleaf-77-clear-pad.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "3,900+",
        "reviewCount": "3,900+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.8,
            "evidence": 7.8,
            "userFeedback": 8.8,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "Sensitive",
            "Combination",
            "Oily"
        ],
        "concerns": [
            "Texture",
            "Dullness",
            "Redness"
        ],
        "keyActives": [
            "Heartleaf (Houttuynia Cordata) Extract (77%)",
            "PHA (Gluconolactone)"
        ],
        "keyIngredients": [
            "Heartleaf (Houttuynia Cordata) Extract (77%)",
            "PHA (Gluconolactone)"
        ],
        "ingredients": [
            "Heartleaf (Houttuynia Cordata) Extract (77%)",
            "PHA (Gluconolactone)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Embossed Cotton Pads",
        "finish": "Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Sensitive or combination skin that wants gentle daily exfoliation in one swipe.",
        "avoidIf": "You need a strong exfoliant for heavy blackheads.",
        "whyWeLikeIt": "Soothing heartleaf extract with mild PHA exfoliation on dual-textured pads, rated 4.4★.",
        "pros": [
            "Gentle enough for daily use",
            "Soothing heartleaf base",
            "Convenient for travel and lazy days"
        ],
        "cons": [
            "₹1,600 for 70 pads, about ₹23 a pad",
            "The Amazon listing does not show the full ingredient list"
        ],
        "verdict": "Comfortable, gentle pads, but costly compared with a toner on a cotton pad.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "minimalist-pha-toner",
                "reason": "A PHA toner you can use with your own cotton pads."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.8,
            "texture": 8.8,
            "value": 6.8,
            "overall": 8.3
        }
    },
    {
        "id": "mcaffeine-salicylic-acne-pads",
        "name": "2% Salicylic Acid Acne Pads",
        "title": "mCaffeine 2% Salicylic Acid, Zinc PCA & Matcha Clear Skin Acne Pads",
        "brand": "mCaffeine",
        "category": "toners",
        "subcategory": "Toner Pads",
        "asin": "B0CS3KJZXF",
        "amazonUrl": "https://www.amazon.in/dp/B0CS3KJZXF?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CS3KJZXF?tag=oraeskin-21",
        "badge": "Best Budget BHA Pads",
        "price": 335,
        "priceEst": "₹335",
        "currency": "₹",
        "size": "40 pads",
        "image": "/images/products/mcaffeine-salicylic-acne-pads.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "180+",
        "reviewCount": "180+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8,
            "evidence": 7.8,
            "userFeedback": 8,
            "value": 8,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Acne-Prone"
        ],
        "concerns": [
            "Acne",
            "Blackheads",
            "Oiliness"
        ],
        "keyActives": [
            "Salicylic Acid (2%)",
            "Zinc PCA",
            "Matcha (Green Tea)"
        ],
        "keyIngredients": [
            "Salicylic Acid (2%)",
            "Zinc PCA",
            "Matcha (Green Tea)"
        ],
        "ingredients": [
            "Salicylic Acid (2%)",
            "Zinc PCA",
            "Matcha (Green Tea)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Soaked Cotton Pads",
        "finish": "Fresh",
        "whiteCast": "Not Applicable",
        "bestFor": "Oily, acne-prone skin that wants a quick BHA step.",
        "avoidIf": "Your skin is dry or sensitive.",
        "whyWeLikeIt": "2% salicylic acid with zinc PCA on pre-soaked pads, at about ₹8 a pad.",
        "pros": [
            "2% salicylic acid",
            "About ₹8 per pad",
            "Easy for spot areas like the nose and chin"
        ],
        "cons": [
            "Only 180+ ratings",
            "The listing does not give a full ingredient list"
        ],
        "verdict": "A convenient budget BHA pad for oily skin.",
        "alternatives": [
            {
                "label": "Proven Liquid",
                "productId": "paulas-choice-2-bha-liquid",
                "reason": "The best-known 2% BHA, used with your own pads."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 7.9
        }
    },
    {
        "id": "minimalist-ala-glycolic-facewash",
        "name": "7% ALA + Glycolic Brightening Face Wash",
        "title": "Minimalist 7% ALA + Glycolic Brightening Face Wash",
        "brand": "Minimalist",
        "category": "cleansers",
        "subcategory": "AHA Face Wash",
        "asin": "B09VLDY46B",
        "amazonUrl": "https://www.amazon.in/dp/B09VLDY46B?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09VLDY46B?tag=oraeskin-21",
        "badge": "Best AHA Face Wash",
        "price": 359,
        "priceEst": "₹359",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/minimalist-ala-glycolic-facewash.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "3,800+",
        "reviewCount": "3,800+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.4,
            "evidence": 7.6,
            "userFeedback": 8,
            "value": 8,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Uneven Tone",
            "Texture"
        ],
        "keyActives": [
            "Glycolic Acid",
            "Alpha Lipoic Acid",
            "Panthenol",
            "Allantoin"
        ],
        "keyIngredients": [
            "Glycolic Acid",
            "Alpha Lipoic Acid",
            "Panthenol",
            "Allantoin"
        ],
        "ingredients": [
            "Glycolic Acid",
            "Alpha Lipoic Acid",
            "Panthenol",
            "Allantoin"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Cleanser",
        "finish": "Clean, Non-Stripping",
        "whiteCast": "Not Applicable",
        "bestFor": "Dull skin that wants mild exfoliation as part of cleansing.",
        "avoidIf": "You already use a leave-on AHA or retinoid every night.",
        "whyWeLikeIt": "A sulphate-free, fragrance-free gel cleanser with glycolic acid, plus panthenol and allantoin to keep it gentle.",
        "pros": [
            "Sulphate-free and fragrance-free",
            "Adds panthenol and allantoin",
            "Good value"
        ],
        "cons": [
            "A wash-off acid has short contact time, so results are mild",
            "The listing does not state the glycolic acid percentage"
        ],
        "verdict": "A gentle way to add AHA to a routine. Expect a mild glow, not a peel.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "loreal-glycolic-bright-cleanser",
                "reason": "A cheap, small glycolic cleanser to try."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8.4,
            "texture": 8.4,
            "value": 8,
            "overall": 8.2
        }
    },
    {
        "id": "loreal-glycolic-bright-cleanser",
        "name": "Glycolic Bright Daily Foaming Cleanser",
        "title": "L'Oréal Paris Glycolic Bright Daily Foaming Face Cleanser",
        "brand": "L'Oréal Paris",
        "category": "cleansers",
        "subcategory": "AHA Face Wash",
        "asin": "B0B9RFCS5S",
        "amazonUrl": "https://www.amazon.in/dp/B0B9RFCS5S?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B9RFCS5S?tag=oraeskin-21",
        "badge": "Best Budget AHA Cleanser",
        "price": 119,
        "priceEst": "₹119",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/loreal-glycolic-bright-cleanser.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "6,100+",
        "reviewCount": "6,100+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8,
            "evidence": 7.2,
            "userFeedback": 8.4,
            "value": 8.8,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Uneven Tone"
        ],
        "keyActives": [
            "Glycolic Acid",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Glycolic Acid",
            "Niacinamide"
        ],
        "ingredients": [
            "Glycolic Acid",
            "Niacinamide"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Foaming Cream",
        "finish": "Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Trying an AHA cleanser at low cost.",
        "avoidIf": "You have sensitive skin or avoid fragrance.",
        "whyWeLikeIt": "A widely available glycolic and niacinamide cleanser with 6,100+ ratings.",
        "pros": [
            "Only ₹119 to try",
            "Glycolic acid and niacinamide",
            "Widely available"
        ],
        "cons": [
            "Small 50ml tube",
            "The listing does not show the full ingredient list or fragrance status"
        ],
        "verdict": "An easy, low-cost way to try an AHA wash.",
        "alternatives": [
            {
                "label": "Fragrance-Free Option",
                "productId": "minimalist-ala-glycolic-facewash",
                "reason": "A fragrance-free, sulphate-free AHA wash."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.8,
            "overall": 8
        }
    },
    {
        "id": "reequil-fruit-aha-facewash",
        "name": "Fruit AHA Face Wash",
        "title": "Re'equil Fruit AHA Face Wash with Glycolic & Lactic Acid",
        "brand": "Re'equil",
        "category": "cleansers",
        "subcategory": "AHA Face Wash",
        "asin": "B0GLGCTPRC",
        "amazonUrl": "https://www.amazon.in/dp/B0GLGCTPRC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GLGCTPRC?tag=oraeskin-21",
        "badge": "Best AHA Wash for Pigmentation",
        "price": 293,
        "priceEst": "₹293",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/reequil-fruit-aha-facewash.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "3,000+",
        "reviewCount": "3,000+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.2,
            "evidence": 7.2,
            "userFeedback": 8.2,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Uneven Tone",
            "Hyperpigmentation"
        ],
        "keyActives": [
            "Glycolic Acid (fruit-derived)",
            "Lactic Acid (fruit-derived)"
        ],
        "keyIngredients": [
            "Glycolic Acid (fruit-derived)",
            "Lactic Acid (fruit-derived)"
        ],
        "ingredients": [
            "Glycolic Acid (fruit-derived)",
            "Lactic Acid (fruit-derived)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Cleanser",
        "finish": "Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Dull, uneven skin that wants a daily AHA cleanser in a larger tube.",
        "avoidIf": "You want to check the full formula before buying.",
        "whyWeLikeIt": "Combines glycolic and lactic acid in a 150ml cleanser from a brand known for gentle formulas.",
        "pros": [
            "Glycolic plus lactic acid",
            "Larger 150ml tube",
            "Good price per ml"
        ],
        "cons": [
            "The listing gives no full ingredient list or acid percentage",
            "Fruit-extract acids are usually milder than pure acids"
        ],
        "verdict": "A decent daily AHA wash. Minimalist is more transparent about its formula.",
        "alternatives": [
            {
                "label": "More Transparent",
                "productId": "minimalist-ala-glycolic-facewash",
                "reason": "Lists its key actives clearly."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8.2,
            "texture": 8.2,
            "value": 8.6,
            "overall": 8
        }
    },
    {
        "id": "the-ordinary-glycolic-7-toner",
        "name": "Glycolic Acid 7% Exfoliating Toner",
        "title": "The Ordinary Glycolic Acid 7% Exfoliating Toner",
        "brand": "The Ordinary",
        "category": "toners",
        "subcategory": "AHA Toner",
        "asin": "B0DMTDN158",
        "amazonUrl": "https://www.amazon.in/dp/B0DMTDN158?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DMTDN158?tag=oraeskin-21",
        "badge": "Best Glycolic Toner for Body",
        "price": 900,
        "priceEst": "₹900",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/the-ordinary-glycolic-7-toner.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "16,000+",
        "reviewCount": "16,000+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8,
            "evidence": 8.6,
            "userFeedback": 8.8,
            "value": 7.6,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Dullness",
            "Texture",
            "Dark Underarms"
        ],
        "keyActives": [
            "Glycolic Acid (7%)",
            "Tasmanian Pepperberry",
            "Aloe Vera"
        ],
        "keyIngredients": [
            "Glycolic Acid (7%)",
            "Tasmanian Pepperberry",
            "Aloe Vera"
        ],
        "ingredients": [
            "Glycolic Acid (7%)",
            "Tasmanian Pepperberry",
            "Aloe Vera"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Watery Toner",
        "finish": "Slight Tingle",
        "whiteCast": "Not Applicable",
        "bestFor": "Texture and dullness on the face, and darkening on underarms, knees and elbows.",
        "avoidIf": "You have sensitive skin, eczema, or freshly shaved or waxed skin.",
        "whyWeLikeIt": "7% glycolic acid with soothing pepperberry and aloe, rated 4.4★ by 16,000+ buyers.",
        "pros": [
            "7% glycolic acid",
            "16,000+ ratings",
            "Works on face and body"
        ],
        "cons": [
            "Stings on broken or freshly shaved skin",
            "Increases sun sensitivity, so SPF is needed on exposed areas"
        ],
        "verdict": "The most popular glycolic toner, and a good choice for body use.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "minimalist-glycolic-toner",
                "reason": "A cheaper glycolic toner."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.6,
            "overall": 8.5
        }
    },
    {
        "id": "benzac-ac-2-5-gel",
        "name": "AC 2.5% Benzoyl Peroxide Gel",
        "title": "Benzac AC 2.5% Benzoyl Peroxide Gel (20g)",
        "brand": "Benzac",
        "category": "spot-treatments",
        "subcategory": "Benzoyl Peroxide Gel",
        "asin": "B08TBBDRYZ",
        "amazonUrl": "https://www.amazon.in/dp/B08TBBDRYZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08TBBDRYZ?tag=oraeskin-21",
        "badge": "Best Benzoyl Peroxide Gel",
        "price": 150,
        "priceEst": "₹150",
        "currency": "₹",
        "size": "20g",
        "image": "/images/products/benzac-ac-2-5-gel.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "144",
        "reviewCount": "144",
        "scoreBreakdown": {
            "formula": 8.8,
            "skinSuitability": 7.6,
            "evidence": 9.4,
            "userFeedback": 8.2,
            "value": 9.4,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Inflamed Acne",
            "Pimples",
            "Acne Bacteria"
        ],
        "keyActives": [
            "Benzoyl Peroxide (2.5%)"
        ],
        "keyIngredients": [
            "Benzoyl Peroxide (2.5%)"
        ],
        "ingredients": [
            "Hydrous Benzoyl Peroxide IP eq. to Anhydrous Benzoyl Peroxide 2.5% w/w",
            "Aqueous Gel Base",
            "Glycerol",
            "Acrylates Copolymer"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Water-Based Gel",
        "finish": "Dries Clear",
        "whiteCast": "Not Applicable",
        "bestFor": "Red, inflamed pimples on oily or combination skin.",
        "avoidIf": "You have very dry or eczema-prone skin, or are pregnant and have not checked with your doctor.",
        "whyWeLikeIt": "A plain 2.5% benzoyl peroxide gel in a glycerin base from Galderma, the lowest strength that still works well against acne bacteria.",
        "pros": [
            "2.5% benzoyl peroxide, the gentlest effective strength",
            "Short, fragrance-free formula",
            "Very cheap at ₹150"
        ],
        "cons": [
            "Bleaches towels, pillowcases and clothes",
            "Causes dryness and peeling in the first few weeks; the listing says to use it under medical supervision"
        ],
        "verdict": "The go-to benzoyl peroxide gel in India. Start every other night and moisturise well.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "persol-ac-2-5-gel",
                "reason": "Another 2.5% benzoyl peroxide gel, in a larger 30g tube."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.4,
            "overall": 8.6
        }
    },
    {
        "id": "persol-ac-2-5-gel",
        "name": "AC 2.5 Benzoyl Peroxide Gel",
        "title": "Persol AC 2.5% Benzoyl Peroxide Gel (30g)",
        "brand": "Persol",
        "category": "spot-treatments",
        "subcategory": "Benzoyl Peroxide Gel",
        "asin": "B0882D8J7J",
        "amazonUrl": "https://www.amazon.in/dp/B0882D8J7J?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0882D8J7J?tag=oraeskin-21",
        "badge": "Best Value Benzoyl Peroxide Gel",
        "price": 102,
        "priceEst": "₹102",
        "currency": "₹",
        "size": "30g",
        "image": "/images/products/persol-ac-2-5-gel.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "209",
        "reviewCount": "209",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 7.6,
            "evidence": 9.4,
            "userFeedback": 8,
            "value": 9.6,
            "availability": 8
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Inflamed Acne",
            "Pimples",
            "Acne Bacteria"
        ],
        "keyActives": [
            "Benzoyl Peroxide (2.5%)"
        ],
        "keyIngredients": [
            "Benzoyl Peroxide (2.5%)"
        ],
        "ingredients": [
            "Benzoyl Peroxide (2.5%)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel",
        "finish": "Dries Clear",
        "whiteCast": "Not Applicable",
        "bestFor": "A low-cost 2.5% benzoyl peroxide gel for inflamed pimples.",
        "avoidIf": "You have very dry or sensitive skin.",
        "whyWeLikeIt": "2.5% benzoyl peroxide in a 30g tube for about ₹100, the cheapest per gram of the options we found.",
        "pros": [
            "2.5% benzoyl peroxide",
            "About ₹3.4 per gram",
            "Widely stocked by Indian pharmacies"
        ],
        "cons": [
            "The listing gives only the active ingredient, not the full formula",
            "Sold by pharmacy sellers with the note \"as directed by the physician\""
        ],
        "verdict": "A cheap, effective benzoyl peroxide gel. Benzac lists its full formula; Persol does not.",
        "alternatives": [
            {
                "label": "Full Formula Listed",
                "productId": "benzac-ac-2-5-gel",
                "reason": "2.5% benzoyl peroxide with its base ingredients disclosed."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.6,
            "overall": 8.5
        }
    },
    {
        "id": "dermaco-bpo-facewash",
        "name": "2.5% Benzoyl Peroxide Gel Face Wash",
        "title": "The Derma Co 2.5% Benzoyl Peroxide Gel Face Wash with Ceramides",
        "brand": "The Derma Co",
        "category": "cleansers",
        "subcategory": "Benzoyl Peroxide Wash",
        "asin": "B0DZ7L2RD1",
        "amazonUrl": "https://www.amazon.in/dp/B0DZ7L2RD1?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DZ7L2RD1?tag=oraeskin-21",
        "badge": "Best Benzoyl Peroxide Face Wash",
        "price": 252,
        "priceEst": "₹252",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/dermaco-bpo-facewash.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "1,500+",
        "reviewCount": "1,500+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 8.6,
            "userFeedback": 8.2,
            "value": 9,
            "availability": 9.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Inflamed Acne",
            "Body Acne",
            "Oiliness"
        ],
        "keyActives": [
            "Benzoyl Peroxide (2.5%)",
            "Ceramides (5 types)",
            "Aloe Vera"
        ],
        "keyIngredients": [
            "Benzoyl Peroxide (2.5%)",
            "Ceramides (5 types)",
            "Aloe Vera"
        ],
        "ingredients": [
            "Aqua",
            "Decyl Glucoside",
            "Propylene Glycol",
            "Sodium Lauryl Sarcosinate",
            "Cocamidopropyl Betaine",
            "Aloe Barbadensis Leaf Extract",
            "Glycerin",
            "Coco-Glucoside",
            "Benzoyl Peroxide",
            "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
            "Cocamide MEA",
            "Saccharide Isomerate",
            "Laminaria Digitata Extract",
            "Ceramide 1",
            "Ceramide 2",
            "Ceramide 3",
            "Ceramide 4",
            "Ceramide 6 II",
            "Allantoin",
            "Zinc Oxide",
            "Sulphonated Shale Oil",
            "Phenoxyethanol"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Cleanser",
        "finish": "Clean, Non-Stripping",
        "whiteCast": "Not Applicable",
        "bestFor": "Inflamed acne on the face, chest or back, used as a short-contact wash.",
        "avoidIf": "You use white towels you care about, or your skin is very dry.",
        "whyWeLikeIt": "2.5% benzoyl peroxide in a mild glucoside-based cleanser with five ceramides, with the full ingredient list on the listing.",
        "pros": [
            "2.5% benzoyl peroxide with ceramides",
            "Full ingredient list disclosed",
            "1,500+ ratings at ₹252"
        ],
        "cons": [
            "Will bleach towels and clothing",
            "Contact time is short, so leave it on for 1–2 minutes before rinsing"
        ],
        "verdict": "The easiest way to use benzoyl peroxide without a leave-on gel.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "benzac-ac-5-wash",
                "reason": "A 5% benzoyl peroxide wash for the back and chest."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9,
            "overall": 8.5
        }
    },
    {
        "id": "benzac-ac-5-wash",
        "name": "AC 5% Gel Wash",
        "title": "Benzac AC 5% Benzoyl Peroxide Gel Wash (100ml)",
        "brand": "Benzac",
        "category": "cleansers",
        "subcategory": "Benzoyl Peroxide Wash",
        "asin": "B0CD1RSQLT",
        "amazonUrl": "https://www.amazon.in/dp/B0CD1RSQLT?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CD1RSQLT?tag=oraeskin-21",
        "badge": "Best Wash for Back & Chest Acne",
        "price": 503,
        "priceEst": "₹503",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/benzac-ac-5-wash.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "242",
        "reviewCount": "242",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 7.4,
            "evidence": 9,
            "userFeedback": 9,
            "value": 8,
            "availability": 8
        },
        "skinType": [
            "Oily",
            "Acne-Prone"
        ],
        "concerns": [
            "Body Acne",
            "Inflamed Acne"
        ],
        "keyActives": [
            "Benzoyl Peroxide (5%)"
        ],
        "keyIngredients": [
            "Benzoyl Peroxide (5%)"
        ],
        "ingredients": [
            "Benzoyl Peroxide (5%)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Wash",
        "finish": "Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Back, chest and shoulder acne, where skin is thicker and a stronger wash is tolerated.",
        "avoidIf": "You plan to use it daily on a sensitive face.",
        "whyWeLikeIt": "A 5% benzoyl peroxide wash from Galderma, rated 4.5★. On the body, a wash is easier than spreading gel over a large area.",
        "pros": [
            "5% benzoyl peroxide",
            "4.5★ rating",
            "Easy to use on large areas like the back"
        ],
        "cons": [
            "5% is drier than 2.5% and not needed for most facial acne",
            "The listing gives only the active ingredient and says to use it as directed by a physician"
        ],
        "verdict": "A strong option for body acne. For the face, start with a 2.5% wash.",
        "alternatives": [
            {
                "label": "Gentler Option",
                "productId": "dermaco-bpo-facewash",
                "reason": "A 2.5% benzoyl peroxide wash with ceramides."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8.3
        }
    },
    {
        "id": "mario-badescu-drying-lotion",
        "name": "Drying Lotion",
        "title": "Mario Badescu Drying Lotion for Acne-Prone Skin (29ml)",
        "brand": "Mario Badescu",
        "category": "spot-treatments",
        "subcategory": "Sulfur Drying Lotion",
        "asin": "B0017SWIU4",
        "amazonUrl": "https://www.amazon.in/dp/B0017SWIU4?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0017SWIU4?tag=oraeskin-21",
        "badge": "Best-Known Drying Lotion",
        "price": 2301,
        "priceEst": "₹2301",
        "currency": "₹",
        "size": "29ml",
        "image": "/images/products/mario-badescu-drying-lotion.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "30,500+",
        "reviewCount": "30,500+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 7.6,
            "evidence": 7.8,
            "userFeedback": 9,
            "value": 5.2,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Whiteheads",
            "Surface Pimples"
        ],
        "keyActives": [
            "Sulfur",
            "Salicylic Acid (1%)",
            "Calamine",
            "Zinc Oxide"
        ],
        "keyIngredients": [
            "Sulfur",
            "Salicylic Acid (1%)",
            "Calamine",
            "Zinc Oxide"
        ],
        "ingredients": [
            "Sulfur",
            "Salicylic Acid (1%)",
            "Calamine",
            "Zinc Oxide"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": false,
        "texture": "Two-Layer Liquid (pink sediment)",
        "finish": "Dries to a pink dot",
        "whiteCast": "Not Applicable",
        "bestFor": "Drying out a surface whitehead overnight.",
        "avoidIf": "You have deep, under-the-skin pimples or very dry skin.",
        "whyWeLikeIt": "Sulfur, 1% salicylic acid and zinc oxide in an alcohol base. It has over 30,000 ratings on Amazon India.",
        "pros": [
            "30,500+ ratings and a 4.5★ average",
            "A tiny amount lasts months",
            "Works fast on pimples that already have a white head"
        ],
        "cons": [
            "₹2,301 for an imported 29ml bottle",
            "The listing does not show the full ingredient list; the alcohol base can dry the skin around the spot"
        ],
        "verdict": "It works, but The Pink Foundry is a cheaper Indian version of the same idea.",
        "alternatives": [
            {
                "label": "Budget Alternative",
                "productId": "pink-foundry-spot-corrector",
                "reason": "A similar sulfur and calamine lotion for ₹411."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 5.2,
            "overall": 7.8
        }
    },
    {
        "id": "pink-foundry-spot-corrector",
        "name": "Acne Spot Corrector",
        "title": "The Pink Foundry Acne Spot Corrector with Salicylic Acid & Sulfur (15ml)",
        "brand": "The Pink Foundry",
        "category": "spot-treatments",
        "subcategory": "Sulfur Drying Lotion",
        "asin": "B09S6MJRTX",
        "amazonUrl": "https://www.amazon.in/dp/B09S6MJRTX?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09S6MJRTX?tag=oraeskin-21",
        "badge": "Best Budget Drying Lotion",
        "price": 411,
        "priceEst": "₹411",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/pink-foundry-spot-corrector.jpg",
        "amazonRating": 3.9,
        "rating": 3.9,
        "amazonReviews": "1,300+",
        "reviewCount": "1,300+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 7.2,
            "evidence": 7.6,
            "userFeedback": 7.8,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Whiteheads",
            "Surface Pimples"
        ],
        "keyActives": [
            "Sulfur",
            "Salicylic Acid",
            "Calamine",
            "Zinc Oxide"
        ],
        "keyIngredients": [
            "Sulfur",
            "Salicylic Acid",
            "Calamine",
            "Zinc Oxide"
        ],
        "ingredients": [
            "Isopropyl Alcohol",
            "Aqua",
            "Calamine",
            "Camphor",
            "Glycerin",
            "Sulphur",
            "Zinc Oxide",
            "Titanium Dioxide",
            "Salicylic Acid",
            "Talc"
        ],
        "fragrance": "No Added Fragrance (contains camphor)",
        "essentialOils": false,
        "alcoholFree": false,
        "texture": "Two-Layer Liquid (pink sediment)",
        "finish": "Dries to a pink dot",
        "whiteCast": "Not Applicable",
        "bestFor": "A low-cost overnight drying lotion for whiteheads.",
        "avoidIf": "You have sensitive or dry skin, as it is alcohol-based.",
        "whyWeLikeIt": "The same sulfur, calamine and salicylic acid approach as Mario Badescu, with its full ingredient list shown, at about a fifth of the price.",
        "pros": [
            "Full ingredient list on the listing",
            "About ₹27 per ml vs ₹79 for Mario Badescu",
            "1,300+ ratings"
        ],
        "cons": [
            "Isopropyl alcohol is the first ingredient, so it is drying",
            "Lower 3.9★ average than Mario Badescu"
        ],
        "verdict": "A good-value drying lotion. Use only on the spot, never all over.",
        "alternatives": [
            {
                "label": "Original",
                "productId": "mario-badescu-drying-lotion",
                "reason": "The best-known sulfur drying lotion."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.8
        }
    },
    {
        "id": "de-la-cruz-sulfur-ointment",
        "name": "10% Sulfur Ointment",
        "title": "De La Cruz 10% Sulfur Ointment Acne Medication (6g)",
        "brand": "De La Cruz",
        "category": "spot-treatments",
        "subcategory": "Sulfur Spot Treatment",
        "asin": "B07952C372",
        "amazonUrl": "https://www.amazon.in/dp/B07952C372?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07952C372?tag=oraeskin-21",
        "badge": "Best for Sensitive Skin",
        "price": 778,
        "priceEst": "₹778",
        "currency": "₹",
        "size": "6g",
        "image": "/images/products/de-la-cruz-sulfur-ointment.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "1,400+",
        "reviewCount": "1,400+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.2,
            "evidence": 7.6,
            "userFeedback": 8.2,
            "value": 6.4,
            "availability": 8
        },
        "skinType": [
            "Sensitive",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Whiteheads",
            "Inflamed Acne",
            "Redness"
        ],
        "keyActives": [
            "Sulfur (10%)"
        ],
        "keyIngredients": [
            "Sulfur (10%)"
        ],
        "ingredients": [
            "Sulfur (10%)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Ointment",
        "finish": "Matte, Yellowish",
        "whiteCast": "Not Applicable",
        "bestFor": "Spot-treating pimples on skin that reacts to alcohol-based lotions.",
        "avoidIf": "You dislike the smell of sulfur.",
        "whyWeLikeIt": "10% sulfur with no alcohol, fragrance, preservatives or dyes, according to the listing.",
        "pros": [
            "10% sulfur, no alcohol",
            "No fragrance, preservatives or dyes",
            "1,400+ ratings"
        ],
        "cons": [
            "Only 6g for ₹778, as it is imported",
            "Sulfur smell; the listing does not show the full ingredient list"
        ],
        "verdict": "A gentler sulfur option for sensitive skin, but expensive per gram.",
        "alternatives": [
            {
                "label": "Cheaper Option",
                "productId": "pink-foundry-spot-corrector",
                "reason": "A sulfur and calamine drying lotion."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.4,
            "overall": 7.8
        }
    },
    {
        "id": "body-shop-tea-tree-oil",
        "name": "Tea Tree Oil",
        "title": "The Body Shop Tea Tree Oil for Blemish-Prone Skin (10ml)",
        "brand": "The Body Shop",
        "category": "spot-treatments",
        "subcategory": "Tea Tree Spot Treatment",
        "asin": "B001N1SZF2",
        "amazonUrl": "https://www.amazon.in/dp/B001N1SZF2?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B001N1SZF2?tag=oraeskin-21",
        "badge": "Best Tea Tree Spot Oil",
        "price": 476,
        "priceEst": "₹476",
        "currency": "₹",
        "size": "10ml",
        "image": "/images/products/body-shop-tea-tree-oil.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "2,500+",
        "reviewCount": "2,500+",
        "scoreBreakdown": {
            "formula": 6.8,
            "skinSuitability": 7,
            "evidence": 6.6,
            "userFeedback": 8.6,
            "value": 7.2,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Small Pimples",
            "Blemishes"
        ],
        "keyActives": [
            "Tea Tree Oil"
        ],
        "keyIngredients": [
            "Tea Tree Oil"
        ],
        "ingredients": [
            "Tea Tree Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Thin Liquid",
        "finish": "Dries Quickly",
        "whiteCast": "Not Applicable",
        "bestFor": "Dabbing on small, early pimples if you prefer a botanical option.",
        "avoidIf": "You have sensitive skin or a known reaction to essential oils.",
        "whyWeLikeIt": "A ready-diluted tea tree spot oil with 2,500+ ratings, so you do not have to dilute pure oil yourself.",
        "pros": [
            "Ready to use, no dilution needed",
            "Tiny bottle lasts a long time",
            "4.3★ rating"
        ],
        "cons": [
            "The listing does not show the full ingredient list or tea tree percentage",
            "Tea tree works more slowly than benzoyl peroxide in studies"
        ],
        "verdict": "A convenient botanical spot treatment for mild spots, not for cystic acne.",
        "alternatives": [
            {
                "label": "Cheaper Gel",
                "productId": "indus-valley-calming-acne-gel",
                "reason": "A tea tree gel for ₹224."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.3,
        "scores": {
            "formula": 6.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.2,
            "overall": 7.3
        }
    },
    {
        "id": "indus-valley-calming-acne-gel",
        "name": "Calming Acne Gel",
        "title": "Indus Valley Calming Acne Gel with Tea Tree Oil & Seaweed (30ml)",
        "brand": "Indus Valley",
        "category": "spot-treatments",
        "subcategory": "Tea Tree Spot Treatment",
        "asin": "B0CVN1PF8Z",
        "amazonUrl": "https://www.amazon.in/dp/B0CVN1PF8Z?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CVN1PF8Z?tag=oraeskin-21",
        "badge": "Best Budget Tea Tree Gel",
        "price": 224,
        "priceEst": "₹224",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/indus-valley-calming-acne-gel.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "11,200+",
        "reviewCount": "11,200+",
        "scoreBreakdown": {
            "formula": 6.4,
            "skinSuitability": 7,
            "evidence": 6,
            "userFeedback": 8,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Small Pimples",
            "Oiliness"
        ],
        "keyActives": [
            "Tea Tree Oil",
            "Seaweed Extract",
            "Rose Water"
        ],
        "keyIngredients": [
            "Tea Tree Oil",
            "Seaweed Extract",
            "Rose Water"
        ],
        "ingredients": [
            "Rose Flower Water",
            "Tea Tree Oil",
            "Grapeseed Extract",
            "Wheat Germ Oil",
            "Seaweed Extract"
        ],
        "fragrance": "No Synthetic Fragrance (contains essential oil)",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Light Gel",
        "finish": "Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "A cheap, gentle botanical gel for mild spots on oily skin.",
        "avoidIf": "You have moderate or severe acne that needs a proven active.",
        "whyWeLikeIt": "A short botanical formula with tea tree oil and 11,200+ ratings at ₹224.",
        "pros": [
            "11,200+ ratings",
            "Short ingredient list on the listing",
            "Lightweight gel"
        ],
        "cons": [
            "The tea tree percentage is not given",
            "Wheat germ oil can feel heavy or clog pores for some people"
        ],
        "verdict": "Fine for mild spots, but do not expect it to match benzoyl peroxide.",
        "alternatives": [
            {
                "label": "Spot Oil",
                "productId": "body-shop-tea-tree-oil",
                "reason": "A ready-diluted tea tree oil for dabbing on spots."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.2,
        "scores": {
            "formula": 6.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 7.2
        }
    },
    {
        "id": "avarelle-clear-cover-patch",
        "name": "Clear Cover Patch with Tea Tree",
        "title": "Avarelle Clear Cover Hydrocolloid Pimple Patch with Tea Tree & Calendula (40 Count)",
        "brand": "Avarelle",
        "category": "spot-treatments",
        "subcategory": "Hydrocolloid Pimple Patch",
        "asin": "B075QNC39Q",
        "amazonUrl": "https://www.amazon.in/dp/B075QNC39Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B075QNC39Q?tag=oraeskin-21",
        "badge": "Most-Rated Pimple Patch",
        "price": 799,
        "priceEst": "₹799",
        "currency": "₹",
        "size": "40 patches",
        "image": "/images/products/avarelle-clear-cover-patch.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "70,000+",
        "reviewCount": "70,000+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.4,
            "evidence": 7.8,
            "userFeedback": 8.4,
            "value": 6.8,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Acne-Prone"
        ],
        "concerns": [
            "Surface Pimples",
            "Picking"
        ],
        "keyActives": [
            "Hydrocolloid",
            "Tea Tree Oil",
            "Calendula Oil"
        ],
        "keyIngredients": [
            "Hydrocolloid",
            "Tea Tree Oil",
            "Calendula Oil"
        ],
        "ingredients": [
            "Hydrocolloid",
            "Tea Tree Oil",
            "Calendula Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Thin Patch",
        "finish": "Clear",
        "whiteCast": "Not Applicable",
        "bestFor": "Covering a pimple that has come to a head, so you stop picking it.",
        "avoidIf": "Your pimple is deep with no white head; a plain patch will not reach it.",
        "whyWeLikeIt": "A hydrocolloid patch with tea tree and calendula, rated by 70,000+ buyers.",
        "pros": [
            "70,000+ ratings",
            "Thin enough to wear in the day",
            "Stops picking and absorbs fluid"
        ],
        "cons": [
            "About ₹20 a patch",
            "The tea tree amount is not given, and the listing does not show the full ingredients"
        ],
        "verdict": "A trusted patch for surface pimples. The tea tree is a small extra, not the main benefit.",
        "alternatives": [
            {
                "label": "Budget Patch",
                "productId": "nua-pimple-patch",
                "reason": "A hydrocolloid patch with salicylic acid for about ₹3 a patch."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.8,
            "overall": 8
        }
    },
    {
        "id": "conscious-chemist-microneedle-patch",
        "name": "Self-Dissolving Microneedle Acne Patches",
        "title": "Conscious Chemist Self-Dissolving Microneedle Acne Patches with 2% Salicylic Acid (8 Patches)",
        "brand": "Conscious Chemist",
        "category": "spot-treatments",
        "subcategory": "Microneedle Pimple Patch",
        "asin": "B0F2277MT8",
        "amazonUrl": "https://www.amazon.in/dp/B0F2277MT8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0F2277MT8?tag=oraeskin-21",
        "badge": "Best Microneedle Patch",
        "price": 297,
        "priceEst": "₹297",
        "currency": "₹",
        "size": "8 patches",
        "image": "/images/products/conscious-chemist-microneedle-patch.jpg",
        "amazonRating": 3.9,
        "rating": 3.9,
        "amazonReviews": "400+",
        "reviewCount": "400+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 7.8,
            "evidence": 7,
            "userFeedback": 7.8,
            "value": 7,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Combination",
            "Acne-Prone"
        ],
        "concerns": [
            "Blind Pimples",
            "Inflamed Acne"
        ],
        "keyActives": [
            "Salicylic Acid (2%)",
            "Azelaic Acid",
            "Niacinamide",
            "Gluconolactone",
            "Bisabolol"
        ],
        "keyIngredients": [
            "Salicylic Acid (2%)",
            "Azelaic Acid",
            "Niacinamide",
            "Gluconolactone",
            "Bisabolol"
        ],
        "ingredients": [
            "Cellulose Gum",
            "Gelatin",
            "Aqua",
            "Niacinamide",
            "Trehalose",
            "Salicylic Acid (2%)",
            "Azelaic Acid",
            "Gluconolactone",
            "Bisabolol",
            "Methylpropanediol",
            "Epilobium Angustifolium Flower Extract",
            "Ethylhexylglycerin"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Patch with Dissolving Microneedles",
        "finish": "Clear",
        "whiteCast": "Not Applicable",
        "bestFor": "An early, painful pimple under the skin that has not come to a head.",
        "avoidIf": "The pimple is already open or oozing; use a plain hydrocolloid patch instead.",
        "whyWeLikeIt": "Dissolving microneedles carrying 2% salicylic acid, azelaic acid and niacinamide, with the ingredient list on the listing.",
        "pros": [
            "Salicylic acid, azelaic acid and niacinamide",
            "Ingredients listed",
            "Needles dissolve, nothing to pull out"
        ],
        "cons": [
            "About ₹37 a patch",
            "3.9★; results on deep pimples vary and evidence is mostly brand testing"
        ],
        "verdict": "Worth trying on a blind pimple caught early. Persistent deep cysts need a dermatologist.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "dermaco-acne-patch",
                "reason": "Micro-tip patches with willow bark and glycolic acid, 24 per pack."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.7,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7,
            "overall": 7.7
        }
    },
    {
        "id": "the-ordinary-pha-lip-serum",
        "name": "PHA 5% Exfoliating Lip Serum",
        "title": "The Ordinary PHA 5% Exfoliating Lip Serum (15ml)",
        "brand": "The Ordinary",
        "category": "lip-care",
        "subcategory": "Lip Exfoliant",
        "asin": "B0FTZCWGSK",
        "amazonUrl": "https://www.amazon.in/dp/B0FTZCWGSK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FTZCWGSK?tag=oraeskin-21",
        "badge": "Best Chemical Lip Exfoliant",
        "price": 750,
        "priceEst": "₹750",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/the-ordinary-pha-lip-serum.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "2,000+",
        "reviewCount": "2,000+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.6,
            "evidence": 7.6,
            "userFeedback": 8.4,
            "value": 7.2,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Flaky Lips",
            "Rough Texture",
            "Dryness"
        ],
        "keyActives": [
            "Gluconolactone (PHA, 5%)"
        ],
        "keyIngredients": [
            "Gluconolactone (PHA, 5%)"
        ],
        "ingredients": [
            "Gluconolactone (PHA, 5%)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lip Serum",
        "finish": "Soft, Hydrated",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, flaky lips that need gentle exfoliation without scrubbing.",
        "avoidIf": "Your lips are cracked, bleeding or have cold sores.",
        "whyWeLikeIt": "5% gluconolactone, a gentle PHA, in a leave-on lip serum. PHAs are larger molecules than glycolic acid, so they are less likely to sting.",
        "pros": [
            "Gentle 5% PHA, no scrubbing",
            "Leave-on overnight treatment",
            "2,000+ ratings"
        ],
        "cons": [
            "The Amazon listing does not show the full ingredient list",
            "₹750, pricier than a simple balm"
        ],
        "verdict": "The best way to smooth flaky lips without rubbing them raw.",
        "alternatives": [
            {
                "label": "Scrub Option",
                "productId": "elf-lip-exfoliator",
                "reason": "A gentle sugar scrub if you prefer a physical exfoliant."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.2,
            "overall": 8.3
        }
    },
    {
        "id": "elf-lip-exfoliator",
        "name": "Lip Exfoliator",
        "title": "e.l.f. Lip Exfoliator Sugar Scrub with Jojoba Oil",
        "brand": "e.l.f.",
        "category": "lip-care",
        "subcategory": "Lip Scrub",
        "asin": "B0CB23VJNH",
        "amazonUrl": "https://www.amazon.in/dp/B0CB23VJNH?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CB23VJNH?tag=oraeskin-21",
        "badge": "Best Gentle Lip Scrub",
        "price": 637,
        "priceEst": "₹637",
        "currency": "₹",
        "size": "3g",
        "image": "/images/products/elf-lip-exfoliator.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "890+",
        "reviewCount": "890+",
        "scoreBreakdown": {
            "formula": 7,
            "skinSuitability": 7.6,
            "evidence": 6.6,
            "userFeedback": 9,
            "value": 7,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Flaky Lips",
            "Dryness"
        ],
        "keyActives": [
            "Sugar (Sucrose)",
            "Jojoba Oil",
            "Shea Butter",
            "Avocado Oil"
        ],
        "keyIngredients": [
            "Sugar (Sucrose)",
            "Jojoba Oil",
            "Shea Butter",
            "Avocado Oil"
        ],
        "ingredients": [
            "Hydrogenated Polyisobutene",
            "Sucrose",
            "Synthetic Wax",
            "Fragrance (Parfum)",
            "Microcrystalline Wax",
            "Tocopheryl Acetate",
            "Diethylhexyl Syringylidene Malonate",
            "Phenoxyethanol",
            "Caprylyl Glycol",
            "Caprylic/Capric Triglyceride",
            "Grape Seed Oil",
            "Jojoba Seed Oil",
            "Avocado Oil",
            "Shea Butter"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Sugar Scrub Stick",
        "finish": "Smooth",
        "whiteCast": "Not Applicable",
        "bestFor": "Buffing off dry flakes once or twice a week before lipstick.",
        "avoidIf": "Your lips are cracked or sensitive to fragrance.",
        "whyWeLikeIt": "Fine sugar in an oil and wax base, so it melts as you rub rather than scratching like walnut shell scrubs.",
        "pros": [
            "Sugar dissolves, so it is gentler than shell scrubs",
            "Easy stick format",
            "4.5★ rating"
        ],
        "cons": [
            "Contains added fragrance",
            "Physical scrubbing can irritate if overdone; once or twice a week is enough"
        ],
        "verdict": "A pleasant, gentle scrub. Use lightly and follow with a balm.",
        "alternatives": [
            {
                "label": "No-Scrub Option",
                "productId": "the-ordinary-pha-lip-serum",
                "reason": "A leave-on PHA serum that exfoliates without rubbing."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.5,
        "scores": {
            "formula": 7,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7,
            "overall": 7.5
        }
    },
    {
        "id": "aquaphor-lip-repair",
        "name": "Lip Repair",
        "title": "Aquaphor Lip Repair (10ml)",
        "brand": "Aquaphor",
        "category": "lip-care",
        "subcategory": "Repair Lip Balm",
        "asin": "B004FHZKOA",
        "amazonUrl": "https://www.amazon.in/dp/B004FHZKOA?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B004FHZKOA?tag=oraeskin-21",
        "badge": "Best for Cracked Lips",
        "price": 479,
        "priceEst": "₹479",
        "currency": "₹",
        "size": "10ml",
        "image": "/images/products/aquaphor-lip-repair.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "43,000+",
        "reviewCount": "43,000+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 9,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 7.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types",
            "Sensitive"
        ],
        "concerns": [
            "Cracked Lips",
            "Chapped Lips",
            "Dryness"
        ],
        "keyActives": [
            "Shea Butter",
            "Panthenol",
            "Glycerin",
            "Bisabolol",
            "Castor Oil"
        ],
        "keyIngredients": [
            "Shea Butter",
            "Panthenol",
            "Glycerin",
            "Bisabolol",
            "Castor Oil"
        ],
        "ingredients": [
            "Octyldodecanol",
            "C18-38 Alkyl Hydroxystearoyl Stearate",
            "Ricinus Communis (Castor) Seed Oil",
            "Caprylic/Capric Triglyceride",
            "Glycerin",
            "Panthenol",
            "Bis-Diglyceryl Polyacyladipate-2",
            "Water",
            "Polyglyceryl-3 Diisostearate",
            "Butyrospermum Parkii (Shea) Butter",
            "Hydrogenated Castor Oil",
            "Tocopherol",
            "Tocopheryl Acetate",
            "Sodium Ascorbyl Phosphate",
            "Bisabolol",
            "Beeswax",
            "C20-40 Alkyl Stearate",
            "Magnesium Stearate",
            "Magnesium Sulfate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Soft Balm (tube)",
        "finish": "Glossy, Cushioned",
        "whiteCast": "Not Applicable",
        "bestFor": "Painfully dry, cracked or peeling lips, and dry mouth corners.",
        "avoidIf": "You avoid beeswax.",
        "whyWeLikeIt": "A fragrance-free repair balm with panthenol, glycerin, shea butter and bisabolol, rated by 43,000+ buyers.",
        "pros": [
            "Fragrance-free, made for sensitive lips",
            "Panthenol and bisabolol to soothe",
            "43,000+ ratings"
        ],
        "cons": [
            "No SPF, so pair with an SPF balm in the day",
            "Contains beeswax, so not vegan"
        ],
        "verdict": "Our top pick for cracked, sore lips.",
        "alternatives": [
            {
                "label": "Daytime Option",
                "productId": "minimalist-spf30-lipbalm",
                "reason": "A ceramide lip balm with SPF 30."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.6,
            "overall": 8.5
        }
    },
    {
        "id": "elf-glow-reviver-lip-oil",
        "name": "Glow Reviver Lip Oil",
        "title": "e.l.f. Glow Reviver Tinted Lip Oil with Jojoba",
        "brand": "e.l.f.",
        "category": "lip-care",
        "subcategory": "Lip Oil",
        "asin": "B0CMJZ8G6Y",
        "amazonUrl": "https://www.amazon.in/dp/B0CMJZ8G6Y?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CMJZ8G6Y?tag=oraeskin-21",
        "badge": "Best Tinted Lip Oil",
        "price": 875,
        "priceEst": "₹875",
        "currency": "₹",
        "size": "7.6ml",
        "image": "/images/products/elf-glow-reviver-lip-oil.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "27,000+",
        "reviewCount": "27,000+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.2,
            "evidence": 6.6,
            "userFeedback": 9,
            "value": 7,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dryness",
            "Dull Lips"
        ],
        "keyActives": [
            "Jojoba Oil",
            "Apricot Oil",
            "Avocado Oil",
            "Pomegranate Oil"
        ],
        "keyIngredients": [
            "Jojoba Oil",
            "Apricot Oil",
            "Avocado Oil",
            "Pomegranate Oil"
        ],
        "ingredients": [
            "Jojoba Oil",
            "Apricot Oil",
            "Avocado Oil",
            "Pomegranate Oil"
        ],
        "fragrance": "Added Fragrance (mint)",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lip Oil",
        "finish": "High-Shine, Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "A glossy, sheer tint that does not feel sticky.",
        "avoidIf": "You react to mint or fragrance on lips.",
        "whyWeLikeIt": "A sheer tinted oil with jojoba, apricot and avocado oils and a big applicator, rated 4.5★ by 27,000+ buyers.",
        "pros": [
            "27,000+ ratings and 4.5★",
            "Non-sticky, high shine",
            "Sheer, buildable tint"
        ],
        "cons": [
            "Mint scent; the listing does not show the full ingredient list",
            "A gloss, not a treatment, so very dry lips still need a balm"
        ],
        "verdict": "The most-loved lip oil on Amazon India for shine without stickiness.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "swiss-beauty-dip-tint-lip-oil",
                "reason": "A ₹215 colour-changing lip oil."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7,
            "overall": 7.8
        }
    },
    {
        "id": "laneige-glaze-craze-lip-serum",
        "name": "Glaze Craze Tinted Lip Serum",
        "title": "Laneige Glaze Craze Tinted Lip Serum with Peptides & Ceramides",
        "brand": "Laneige",
        "category": "lip-care",
        "subcategory": "Lip Oil",
        "asin": "B0DSLX4G4Q",
        "amazonUrl": "https://www.amazon.in/dp/B0DSLX4G4Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DSLX4G4Q?tag=oraeskin-21",
        "badge": "Best Treatment Lip Gloss",
        "price": 977,
        "priceEst": "₹977",
        "currency": "₹",
        "size": "12g",
        "image": "/images/products/laneige-glaze-craze-lip-serum.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "6,100+",
        "reviewCount": "6,100+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.2,
            "evidence": 6.8,
            "userFeedback": 8.8,
            "value": 6.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dryness",
            "Dull Lips"
        ],
        "keyActives": [
            "Polypeptides",
            "Ceramides"
        ],
        "keyIngredients": [
            "Polypeptides",
            "Ceramides"
        ],
        "ingredients": [
            "Polypeptides",
            "Ceramides"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Glossy Serum",
        "finish": "High-Shine, Plush",
        "whiteCast": "Not Applicable",
        "bestFor": "A glossy tint that also feels conditioning.",
        "avoidIf": "You want a fragrance-free option or a budget pick.",
        "whyWeLikeIt": "A tinted lip serum with peptides and ceramides, rated 4.4★ by 6,100+ buyers.",
        "pros": [
            "Peptides and ceramides in a gloss",
            "Comfortable, plush feel",
            "4.4★ rating"
        ],
        "cons": [
            "₹977, the most expensive here",
            "The listing does not show the full ingredients or fragrance status"
        ],
        "verdict": "A treat-yourself gloss that is kinder to dry lips than most.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "elf-glow-reviver-lip-oil",
                "reason": "A cheaper, well-rated tinted lip oil."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.6,
            "overall": 7.9
        }
    },
    {
        "id": "swiss-beauty-dip-tint-lip-oil",
        "name": "Dip Tint Lip Oil",
        "title": "Swiss Beauty Dip Tint Colour-Changing Lip Oil (3ml)",
        "brand": "Swiss Beauty",
        "category": "lip-care",
        "subcategory": "Lip Oil",
        "asin": "B0CXXP862S",
        "amazonUrl": "https://www.amazon.in/dp/B0CXXP862S?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CXXP862S?tag=oraeskin-21",
        "badge": "Best Budget Lip Oil",
        "price": 215,
        "priceEst": "₹215",
        "currency": "₹",
        "size": "3ml",
        "image": "/images/products/swiss-beauty-dip-tint-lip-oil.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "900+",
        "reviewCount": "900+",
        "scoreBreakdown": {
            "formula": 6.4,
            "skinSuitability": 7.4,
            "evidence": 6,
            "userFeedback": 8.2,
            "value": 8.2,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dull Lips"
        ],
        "keyActives": [
            "Polyisobutene (gloss base)",
            "Caprylic/Capric Triglyceride",
            "pH-Reactive Dyes"
        ],
        "keyIngredients": [
            "Polyisobutene (gloss base)",
            "Caprylic/Capric Triglyceride",
            "pH-Reactive Dyes"
        ],
        "ingredients": [
            "Hydrogenated Polydecene",
            "Polyisobutene",
            "Caprylic/Capric Triglyceride",
            "Hydrogenated Styrene/Isoprene Copolymer",
            "Parfum (Fragrance)",
            "Pentaerythrityl Tetra-Di-t-Butyl Hydroxyhydrocinnamate",
            "Polyglyceryl-2 Triisostearate",
            "Diisostearyl Malate",
            "Polyglyceryl-2 Diisostearate",
            "CI 15850",
            "CI 45410",
            "CI 42090",
            "CI 19140",
            "CI 15985"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lip Oil",
        "finish": "Glossy",
        "whiteCast": "Not Applicable",
        "bestFor": "A cheap, glossy pink tint for everyday wear.",
        "avoidIf": "You want plant oils that condition the lips.",
        "whyWeLikeIt": "A ₹215 colour-changing gloss, with the full ingredient list on the listing.",
        "pros": [
            "Only ₹215",
            "Full ingredient list disclosed",
            "Sheer, natural-looking pink"
        ],
        "cons": [
            "Mostly synthetic gloss base, not nourishing plant oils",
            "Added fragrance and several dyes"
        ],
        "verdict": "Fine for shine on a budget, but it is a cosmetic gloss, not lip care.",
        "alternatives": [
            {
                "label": "Better Formula",
                "productId": "elf-glow-reviver-lip-oil",
                "reason": "A tinted oil with jojoba, apricot and avocado oils."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.2,
        "scores": {
            "formula": 6.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.2,
            "overall": 7.2
        }
    },
    {
        "id": "plum-candy-melts-lip-balm",
        "name": "Candy Melts Vegan Lip Balm",
        "title": "Plum Candy Melts Vegan Tinted Lip Balm (Red Velvet Love)",
        "brand": "Plum",
        "category": "lip-care",
        "subcategory": "Natural Lip Balm",
        "asin": "B08MC5MJ33",
        "amazonUrl": "https://www.amazon.in/dp/B08MC5MJ33?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08MC5MJ33?tag=oraeskin-21",
        "badge": "Best Vegan Lip Balm",
        "price": 250,
        "priceEst": "₹250",
        "currency": "₹",
        "size": "12g",
        "image": "/images/products/plum-candy-melts-lip-balm.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "7,200+",
        "reviewCount": "7,200+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8,
            "evidence": 6.6,
            "userFeedback": 8.4,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dryness",
            "Chapped Lips"
        ],
        "keyActives": [
            "Castor Oil",
            "Cocoa Butter",
            "Shea Butter",
            "Olive Oil",
            "Carnauba Wax"
        ],
        "keyIngredients": [
            "Castor Oil",
            "Cocoa Butter",
            "Shea Butter",
            "Olive Oil",
            "Carnauba Wax"
        ],
        "ingredients": [
            "Ricinus Communis (Castor) Seed Oil",
            "Hydrogenated Soy Polyglycerides",
            "C15-23 Alkane",
            "Sorbitan Olivate",
            "Polyamide-8",
            "Flavor",
            "Cetearyl Alcohol",
            "Olive Oil PEG-7 Esters",
            "Theobroma Cacao (Cocoa) Seed Butter",
            "Butyrospermum Parkii (Shea) Butter",
            "Olea Europaea (Olive) Oil",
            "Copernicia Cerifera (Carnauba) Wax",
            "Daucus Carota Sativa (Carrot) Seed Oil",
            "Tocopheryl Acetate"
        ],
        "fragrance": "Added Flavour",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Tinted Balm Stick",
        "finish": "Soft Tint",
        "whiteCast": "Not Applicable",
        "bestFor": "A vegan, petroleum-free everyday balm with a hint of colour.",
        "avoidIf": "You need sun protection; carrot seed oil is not an SPF.",
        "whyWeLikeIt": "Plant oils and butters with carnauba wax instead of beeswax or petroleum, rated by 7,200+ buyers.",
        "pros": [
            "Vegan: no beeswax or petroleum",
            "Full ingredient list disclosed",
            "7,200+ ratings"
        ],
        "cons": [
            "Contains added flavour",
            "The listing mentions natural UV protection from carrot seed oil, but there is no SPF rating"
        ],
        "verdict": "A good petroleum-free, vegan daily balm. Add an SPF balm when outdoors.",
        "alternatives": [
            {
                "label": "Organic Option",
                "productId": "juicy-chemistry-lip-balm",
                "reason": "A certified-organic balm, though it contains beeswax."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.8
        }
    },
    {
        "id": "juicy-chemistry-lip-balm",
        "name": "Organic Lip Balm with Blood Orange & Rosehip",
        "title": "Juicy Chemistry Organic Lip Balm with Blood Orange & Rosehip (5g)",
        "brand": "Juicy Chemistry",
        "category": "lip-care",
        "subcategory": "Natural Lip Balm",
        "asin": "B01N2LYRWX",
        "amazonUrl": "https://www.amazon.in/dp/B01N2LYRWX?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B01N2LYRWX?tag=oraeskin-21",
        "badge": "Best Organic Lip Balm",
        "price": 239,
        "priceEst": "₹239",
        "currency": "₹",
        "size": "5g",
        "image": "/images/products/juicy-chemistry-lip-balm.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "4,500+",
        "reviewCount": "4,500+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 7.6,
            "evidence": 6.4,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dryness",
            "Chapped Lips"
        ],
        "keyActives": [
            "Apricot Kernel Oil",
            "Castor Oil",
            "Rosehip Oil",
            "Jojoba Oil",
            "Cocoa Butter",
            "Shea Butter"
        ],
        "keyIngredients": [
            "Apricot Kernel Oil",
            "Castor Oil",
            "Beeswax",
            "Rosehip Oil",
            "Jojoba Oil",
            "Blood Orange Oil",
            "Cocoa Butter",
            "Shea Butter"
        ],
        "ingredients": [
            "Apricot Kernel Oil",
            "Castor Oil",
            "Beeswax",
            "Rosehip Oil",
            "Jojoba Oil",
            "Blood Orange Oil",
            "Cocoa Butter",
            "Shea Butter"
        ],
        "fragrance": "Essential Oil (blood orange)",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Balm",
        "finish": "Glossy",
        "whiteCast": "Not Applicable",
        "bestFor": "Anyone who wants a certified-organic, petroleum-free balm.",
        "avoidIf": "You are vegan (it has beeswax) or react to citrus oils.",
        "whyWeLikeIt": "Organic plant oils and butters with no petroleum or synthetic fragrance.",
        "pros": [
            "Petroleum-free, certified-organic oils",
            "4,500+ ratings",
            "Rich, buttery texture"
        ],
        "cons": [
            "Contains beeswax, so not vegan",
            "Blood orange essential oil can irritate sensitive lips"
        ],
        "verdict": "A good organic balm, but not vegan and not for citrus-sensitive lips.",
        "alternatives": [
            {
                "label": "Vegan Option",
                "productId": "plum-candy-melts-lip-balm",
                "reason": "A vegan balm with carnauba wax instead of beeswax."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.6,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.6
        }
    },
    {
        "id": "forest-essentials-rose-lip-balm",
        "name": "Rose Lip Balm",
        "title": "Forest Essentials Rose Lip Balm with Kokum Butter (4g)",
        "brand": "Forest Essentials",
        "category": "lip-care",
        "subcategory": "Natural Lip Balm",
        "asin": "B00V4JP4PM",
        "amazonUrl": "https://www.amazon.in/dp/B00V4JP4PM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00V4JP4PM?tag=oraeskin-21",
        "badge": "Best Premium Natural Lip Balm",
        "price": 850,
        "priceEst": "₹850",
        "currency": "₹",
        "size": "4g",
        "image": "/images/products/forest-essentials-rose-lip-balm.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "1,100+",
        "reviewCount": "1,100+",
        "scoreBreakdown": {
            "formula": 7,
            "skinSuitability": 7.6,
            "evidence": 6,
            "userFeedback": 8.4,
            "value": 5.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dryness",
            "Chapped Lips"
        ],
        "keyActives": [
            "Kokum Butter",
            "Rose Petal Concentrate",
            "Honey"
        ],
        "keyIngredients": [
            "Kokum Butter",
            "Rose Petal Concentrate",
            "Honey"
        ],
        "ingredients": [
            "Kokum Butter",
            "Rose Petal Concentrate",
            "Honey"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Balm (tin)",
        "finish": "Soft Sheen",
        "whiteCast": "Not Applicable",
        "bestFor": "Gifting, or a luxury Ayurvedic balm.",
        "avoidIf": "You are vegan (it contains honey) or on a budget.",
        "whyWeLikeIt": "A petroleum-free Ayurvedic balm with kokum butter and rose, from a well-known Indian brand.",
        "pros": [
            "Petroleum-free",
            "Kokum butter is a rich, non-greasy butter",
            "4.2★ from 1,100+ ratings"
        ],
        "cons": [
            "₹850 for 4g, over ₹200 per gram",
            "The listing does not show the full ingredient list"
        ],
        "verdict": "Lovely but expensive. Plum or Juicy Chemistry give similar results for much less.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "juicy-chemistry-lip-balm",
                "reason": "A petroleum-free organic balm for ₹239."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.2,
        "scores": {
            "formula": 7,
            "weatherResilience": 8,
            "texture": 8,
            "value": 5.6,
            "overall": 7.2
        }
    },
    {
        "id": "deconstruct-tinted-lip-balm-spf50",
        "name": "Brightening Tinted Lip Balm SPF 50",
        "title": "Deconstruct Brightening Tinted Lip Balm SPF 50",
        "brand": "Deconstruct",
        "category": "lip-care",
        "subcategory": "Tinted SPF Lip Balm",
        "asin": "B0F3XJ3JTV",
        "amazonUrl": "https://www.amazon.in/dp/B0F3XJ3JTV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0F3XJ3JTV?tag=oraeskin-21",
        "badge": "Best Tinted SPF Lip Balm",
        "price": 229,
        "priceEst": "₹229",
        "currency": "₹",
        "size": "4g",
        "image": "/images/products/deconstruct-tinted-lip-balm-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "1,500+",
        "reviewCount": "1,500+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 7.8,
            "userFeedback": 8.6,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Lip Pigmentation",
            "Sun Damage",
            "Dryness"
        ],
        "keyActives": [
            "SPF 50 (Octocrylene, Octinoxate, Avobenzone)",
            "Vitamin C (1%)",
            "Shea & Cocoa Butter"
        ],
        "keyIngredients": [
            "SPF 50 (Octocrylene, Octinoxate, Avobenzone)",
            "Vitamin C (1%)",
            "Shea & Cocoa Butter"
        ],
        "ingredients": [
            "Ricinus Communis Seed Oil",
            "Octocrylene",
            "Isopropyl Myristate",
            "Octyl Methoxycinnamate",
            "Caprylic/Capric Triglyceride",
            "Carnauba Wax",
            "Ozokerite",
            "Candelilla Wax",
            "Microcrystalline Wax",
            "Dicaprylyl Carbonate",
            "Butyl Methoxydibenzoylmethane",
            "Sunflower Seed Oil",
            "Cocoa Seed Butter",
            "Sweet Almond Oil",
            "Shea Butter",
            "Mango Butter"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Tinted Balm Stick",
        "finish": "Sheer Tint",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily sun protection with a light tint for college or office.",
        "avoidIf": "You want a strong colour payoff.",
        "whyWeLikeIt": "SPF 50 from three disclosed UV filters plus 1% vitamin C and plant butters, in a sheer tint.",
        "pros": [
            "SPF 50 with filters named on the listing",
            "Sheer tint suits most skin tones",
            "1,500+ ratings at ₹229"
        ],
        "cons": [
            "Sheer tint, so not a lipstick replacement",
            "Reapply after eating or drinking, like any lip SPF"
        ],
        "verdict": "A reliable tinted SPF lip balm for every day.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "wishcare-tinted-lip-balm-spf50",
                "reason": "Another tinted SPF 50 balm with 15,000+ ratings."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.4
        }
    },
    {
        "id": "dotkey-meltie-lip-balm-spf50",
        "name": "Meltie Lip Balm SPF 50+",
        "title": "Dot & Key Meltie Tinted Lip Balm SPF 50+ with Kojic & Vitamin C",
        "brand": "Dot & Key",
        "category": "lip-care",
        "subcategory": "Tinted SPF Lip Balm",
        "asin": "B0FNN8WXTM",
        "amazonUrl": "https://www.amazon.in/dp/B0FNN8WXTM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FNN8WXTM?tag=oraeskin-21",
        "badge": "Best Berry Tint with SPF",
        "price": 236,
        "priceEst": "₹236",
        "currency": "₹",
        "size": "4g",
        "image": "/images/products/dotkey-meltie-lip-balm-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "3,100+",
        "reviewCount": "3,100+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 7.8,
            "evidence": 7.2,
            "userFeedback": 8.6,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Lip Pigmentation",
            "Sun Damage",
            "Dryness"
        ],
        "keyActives": [
            "SPF 50+",
            "Kojic Acid (2%)",
            "Vitamin C"
        ],
        "keyIngredients": [
            "SPF 50+",
            "Kojic Acid (2%)",
            "Vitamin C"
        ],
        "ingredients": [
            "SPF 50+",
            "Kojic Acid (2%)",
            "Vitamin C"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Tinted Balm Stick",
        "finish": "Sheer Berry Tint",
        "whiteCast": "Not Applicable",
        "bestFor": "A berry-tinted SPF balm for daily wear.",
        "avoidIf": "You want to check the UV filters before buying.",
        "whyWeLikeIt": "SPF 50+ with kojic acid and vitamin C in a tinted balm, rated by 3,100+ buyers.",
        "pros": [
            "SPF 50+",
            "Tinted, with several shades",
            "3,100+ ratings"
        ],
        "cons": [
            "The listing does not show the ingredient list or UV filters",
            "Kojic acid can irritate sensitive lips"
        ],
        "verdict": "A popular tinted SPF balm, but Deconstruct is more transparent about its formula.",
        "alternatives": [
            {
                "label": "More Transparent",
                "productId": "deconstruct-tinted-lip-balm-spf50",
                "reason": "Lists its UV filters on the listing."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8
        }
    },
    {
        "id": "neutrogena-norwegian-hand-cream",
        "name": "Norwegian Formula Concentrated Hand Cream (Fragrance-Free)",
        "title": "Neutrogena Norwegian Formula Concentrated Hand Cream, Fragrance-Free (50ml)",
        "brand": "Neutrogena",
        "category": "body-care",
        "subcategory": "Hand Cream",
        "asin": "B0006SQ9CE",
        "amazonUrl": "https://www.amazon.in/dp/B0006SQ9CE?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0006SQ9CE?tag=oraeskin-21",
        "badge": "Best Hand Cream for Dry Hands",
        "price": 449,
        "priceEst": "₹449",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/neutrogena-norwegian-hand-cream.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "5,900+",
        "reviewCount": "5,900+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 9,
            "evidence": 8.4,
            "userFeedback": 9,
            "value": 8,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Sensitive",
            "All Skin Types"
        ],
        "concerns": [
            "Dry Hands",
            "Cracked Skin",
            "Frequent Washing"
        ],
        "keyActives": [
            "Glycerin (high concentration)"
        ],
        "keyIngredients": [
            "Glycerin (high concentration)"
        ],
        "ingredients": [
            "Glycerin (high concentration)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thick, Concentrated Cream",
        "finish": "Slightly Tacky, then Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Very dry hands from frequent washing, sanitiser or housework.",
        "avoidIf": "You dislike a slightly tacky feel right after applying.",
        "whyWeLikeIt": "A classic, fragrance-free, glycerin-rich hand cream. A small amount goes a long way.",
        "pros": [
            "Fragrance-free, suits sensitive and eczema-prone hands",
            "Very concentrated, a pea-sized amount is enough",
            "4.5★ from 5,900+ ratings"
        ],
        "cons": [
            "Feels tacky for a minute or two",
            "The listing only names glycerin, not the full ingredient list"
        ],
        "verdict": "The reliable classic for dry, washed-out hands.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "charmis-hand-cream",
                "reason": "A large 150g tube for ₹170."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.7,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8.7
        }
    },
    {
        "id": "okeeffes-working-hands",
        "name": "Working Hands Hand Cream",
        "title": "O'Keeffe's Working Hands Hand Cream for Extremely Dry, Cracked Hands (100ml)",
        "brand": "O'Keeffe's",
        "category": "body-care",
        "subcategory": "Hand Cream",
        "asin": "B00121UVU0",
        "amazonUrl": "https://www.amazon.in/dp/B00121UVU0?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00121UVU0?tag=oraeskin-21",
        "badge": "Best for Cracked Hands",
        "price": 1195,
        "priceEst": "₹1195",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/okeeffes-working-hands.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "79,000+",
        "reviewCount": "79,000+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.6,
            "evidence": 8,
            "userFeedback": 9.4,
            "value": 6.8,
            "availability": 8.5
        },
        "skinType": [
            "Dry",
            "All Skin Types"
        ],
        "concerns": [
            "Cracked Skin",
            "Dry Hands",
            "Rough Knuckles"
        ],
        "keyActives": [
            "Glycerin",
            "Protective Barrier Layer"
        ],
        "keyIngredients": [
            "Glycerin",
            "Protective Barrier Layer"
        ],
        "ingredients": [
            "Glycerin",
            "Protective Barrier Layer"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Thick Cream (jar)",
        "finish": "Non-Greasy Barrier",
        "whiteCast": "Not Applicable",
        "bestFor": "Split, cracked fingertips and knuckles from manual work or winter.",
        "avoidIf": "You want a budget option; it is imported.",
        "whyWeLikeIt": "A concentrated barrier cream made for cracked working hands, with 79,000+ ratings and a 4.7★ average.",
        "pros": [
            "4.7★ from 79,000+ ratings",
            "Forms a long-lasting protective layer",
            "Best applied at night for cracked skin"
        ],
        "cons": [
            "₹1,195 because it is imported",
            "The listing does not show the ingredient list"
        ],
        "verdict": "Excellent for cracked hands, but pricey in India.",
        "alternatives": [
            {
                "label": "Cheaper Option",
                "productId": "neutrogena-norwegian-hand-cream",
                "reason": "A fragrance-free concentrated hand cream for ₹449."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.8,
            "overall": 8.3
        }
    },
    {
        "id": "charmis-hand-cream",
        "name": "Vit C & Hyaluronic Hand Cream",
        "title": "Charmis Vitamin C & Hyaluronic Hand Cream (150g)",
        "brand": "Charmis",
        "category": "body-care",
        "subcategory": "Hand Cream",
        "asin": "B08PVDWT4Q",
        "amazonUrl": "https://www.amazon.in/dp/B08PVDWT4Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08PVDWT4Q?tag=oraeskin-21",
        "badge": "Best Budget Hand Cream",
        "price": 170,
        "priceEst": "₹170",
        "currency": "₹",
        "size": "150g",
        "image": "/images/products/charmis-hand-cream.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "2,100+",
        "reviewCount": "2,100+",
        "scoreBreakdown": {
            "formula": 6.8,
            "skinSuitability": 7.6,
            "evidence": 6.4,
            "userFeedback": 8.4,
            "value": 9.4,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dry Hands"
        ],
        "keyActives": [
            "Vitamin C",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Vitamin C",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Vitamin C",
            "Hyaluronic Acid"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Cream",
        "finish": "Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Everyday use after washing hands, on a budget.",
        "avoidIf": "Your hands are badly cracked; it is a light cream.",
        "whyWeLikeIt": "A large 150g tube of light, non-sticky hand cream for ₹170.",
        "pros": [
            "150g for ₹170",
            "Light and non-sticky",
            "2,100+ ratings"
        ],
        "cons": [
            "The listing names only vitamin C and hyaluronic acid, not the full formula",
            "Too light for cracked skin"
        ],
        "verdict": "Great value for everyday use, not a repair cream.",
        "alternatives": [
            {
                "label": "Richer Option",
                "productId": "neutrogena-norwegian-hand-cream",
                "reason": "A concentrated cream for very dry hands."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.6,
        "scores": {
            "formula": 6.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.4,
            "overall": 7.6
        }
    },
    {
        "id": "fixderma-hand-cream",
        "name": "Hand Cream with Cocoa Butter",
        "title": "Fixderma Hand Cream with Cocoa Butter & Sea Buckthorn (30g)",
        "brand": "Fixderma",
        "category": "body-care",
        "subcategory": "Hand Cream",
        "asin": "B0CG5L3VZG",
        "amazonUrl": "https://www.amazon.in/dp/B0CG5L3VZG?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CG5L3VZG?tag=oraeskin-21",
        "badge": "Best Hand Cream for Cuticles",
        "price": 192,
        "priceEst": "₹192",
        "currency": "₹",
        "size": "30g",
        "image": "/images/products/fixderma-hand-cream.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "1,000+",
        "reviewCount": "1,000+",
        "scoreBreakdown": {
            "formula": 7.2,
            "skinSuitability": 7.8,
            "evidence": 6.4,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dry Hands",
            "Dry Cuticles"
        ],
        "keyActives": [
            "Cocoa Butter",
            "Sea Buckthorn Oil",
            "Bakuchiol",
            "Biotin"
        ],
        "keyIngredients": [
            "Cocoa Butter",
            "Sea Buckthorn Oil",
            "Bakuchiol",
            "Biotin"
        ],
        "ingredients": [
            "Cocoa Butter",
            "Sea Buckthorn Oil",
            "Bakuchiol",
            "Biotin"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry knuckles and flaky cuticles.",
        "avoidIf": "You want a large tube; this is 30g.",
        "whyWeLikeIt": "Cocoa butter and sea buckthorn oil in a small, handbag-friendly tube.",
        "pros": [
            "Cocoa butter for richer moisture",
            "Good for massaging into cuticles",
            "Small, portable tube"
        ],
        "cons": [
            "Only 30g",
            "The listing names only four ingredients"
        ],
        "verdict": "A handy, budget cuticle and knuckle cream.",
        "alternatives": [
            {
                "label": "Bigger Tube",
                "productId": "charmis-hand-cream",
                "reason": "A 150g everyday hand cream."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.6,
        "scores": {
            "formula": 7.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.6
        }
    },
    {
        "id": "bebodywise-urea-foot-roll-on",
        "name": "20% Urea Foot Cream Roll-On",
        "title": "Be Bodywise 20% Urea Foot Cream Roll-On with 2% Lactic Acid (50ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Foot Cream",
        "asin": "B09W5Q9ZPZ",
        "amazonUrl": "https://www.amazon.in/dp/B09W5Q9ZPZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09W5Q9ZPZ?tag=oraeskin-21",
        "badge": "Best Urea Foot Cream",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/bebodywise-urea-foot-roll-on.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "2,900+",
        "reviewCount": "2,900+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 8.4,
            "evidence": 8.6,
            "userFeedback": 8.8,
            "value": 7.8,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "All Skin Types"
        ],
        "concerns": [
            "Cracked Heels",
            "Calluses",
            "Dry Feet"
        ],
        "keyActives": [
            "Urea (20%)",
            "Lactic Acid (2%)",
            "Salicylic Acid",
            "Olive Oil"
        ],
        "keyIngredients": [
            "Urea (20%)",
            "Lactic Acid (2%)",
            "Salicylic Acid",
            "Olive Oil"
        ],
        "ingredients": [
            "Aqua",
            "Urea",
            "Disodium EDTA",
            "Polyacrylate-13 (and) Polyisobutene (and) Polysorbate 20",
            "Glyceryl Stearate",
            "Cetostearyl Alcohol",
            "Cetyl Palmitate",
            "Stearic Acid",
            "PEG-100 Stearate",
            "Isopropyl Myristate",
            "Olea Europaea (Olive) Fruit Oil",
            "Caprylic/Capric Triglyceride",
            "Phenoxyethanol (and) Ethylhexylglycerin",
            "Lactic Acid",
            "Tocopheryl Acetate",
            "Glycerin",
            "Salicylic Acid",
            "Perfume",
            "Menthol"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Roll-On Cream",
        "finish": "Absorbs Quickly",
        "whiteCast": "Not Applicable",
        "bestFor": "Cracked heels and hard, thick skin on the feet.",
        "avoidIf": "Your heel cracks are deep and bleeding; let them heal first.",
        "whyWeLikeIt": "20% urea with lactic and salicylic acid softens hard heel skin, in a mess-free roll-on with its full ingredient list.",
        "pros": [
            "20% urea plus lactic acid",
            "Full ingredient list disclosed",
            "Mess-free roll-on"
        ],
        "cons": [
            "Contains perfume and menthol, which can sting open cracks",
            "50ml goes quickly if you have very cracked heels"
        ],
        "verdict": "The best urea foot cream we found for cracked heels.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "cureskin-urea-foot-cream",
                "reason": "A 10% urea foot cream for ₹145."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 8.6
        }
    },
    {
        "id": "fixderma-foobetik-cream",
        "name": "Foobetik Foot Cream",
        "title": "Fixderma Foobetik Foot Cream for Dry & Cracked Feet (50g)",
        "brand": "Fixderma",
        "category": "body-care",
        "subcategory": "Foot Cream",
        "asin": "B0BD4H29RJ",
        "amazonUrl": "https://www.amazon.in/dp/B0BD4H29RJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BD4H29RJ?tag=oraeskin-21",
        "badge": "Most-Rated Foot Cream",
        "price": 295,
        "priceEst": "₹295",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/fixderma-foobetik-cream.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "6,200+",
        "reviewCount": "6,200+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8,
            "evidence": 7,
            "userFeedback": 8.4,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "All Skin Types"
        ],
        "concerns": [
            "Cracked Heels",
            "Dry Feet"
        ],
        "keyActives": [
            "Lactic Acid",
            "L-Arginine",
            "Shea Butter",
            "Tea Tree Oil"
        ],
        "keyIngredients": [
            "Lactic Acid",
            "L-Arginine",
            "Shea Butter",
            "Tea Tree Oil"
        ],
        "ingredients": [
            "Lactic Acid",
            "L-Arginine",
            "Shea Butter",
            "Tea Tree Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": true,
        "alcoholFree": true,
        "texture": "Non-Greasy Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Daily care for dry, rough feet.",
        "avoidIf": "You have diabetes and open wounds or ulcers on the feet; see your doctor instead.",
        "whyWeLikeIt": "Lactic acid, L-arginine and shea butter for dry feet, with 6,200+ ratings.",
        "pros": [
            "6,200+ ratings",
            "Non-greasy, good for daytime",
            "Lactic acid for gentle softening"
        ],
        "cons": [
            "The listing names only four ingredients",
            "Gentler than a 20% urea cream on thick calluses"
        ],
        "verdict": "A popular everyday foot cream. Choose a urea cream for very thick heels.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "bebodywise-urea-foot-roll-on",
                "reason": "20% urea for hard, cracked heels."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.9
        }
    },
    {
        "id": "cureskin-urea-foot-cream",
        "name": "10% Urea Foot Cream",
        "title": "Cureskin 10% Urea Foot Cream for Cracked Heels (50g)",
        "brand": "Cureskin",
        "category": "body-care",
        "subcategory": "Foot Cream",
        "asin": "B0DTB638JZ",
        "amazonUrl": "https://www.amazon.in/dp/B0DTB638JZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DTB638JZ?tag=oraeskin-21",
        "badge": "Best Budget Foot Cream",
        "price": 145,
        "priceEst": "₹145",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/cureskin-urea-foot-cream.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "550+",
        "reviewCount": "550+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 8.6,
            "value": 9.2,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "All Skin Types"
        ],
        "concerns": [
            "Cracked Heels",
            "Dry Feet"
        ],
        "keyActives": [
            "Urea (10%)",
            "Lactic Acid",
            "Salicylic Acid",
            "Shea Butter"
        ],
        "keyIngredients": [
            "Urea (10%)",
            "Lactic Acid",
            "Salicylic Acid",
            "Shea Butter"
        ],
        "ingredients": [
            "Urea (10%)",
            "Lactic Acid",
            "Salicylic Acid",
            "Shea Butter"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Mildly dry or cracked heels on a budget.",
        "avoidIf": "You have very thick calluses that need a stronger urea cream.",
        "whyWeLikeIt": "10% urea with lactic and salicylic acid for ₹145.",
        "pros": [
            "Only ₹145",
            "Urea plus two exfoliating acids",
            "4.3★ rating"
        ],
        "cons": [
            "Only 550+ ratings",
            "The listing names only the key ingredients"
        ],
        "verdict": "A good-value starter foot cream.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "bebodywise-urea-foot-roll-on",
                "reason": "20% urea for thicker skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.2,
            "overall": 8.3
        }
    },
    {
        "id": "bebodywise-urea-10-lotion",
        "name": "10% Urea Body Lotion",
        "title": "Be Bodywise 10% Urea Body Lotion with Ceramides (200ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Urea Body Lotion",
        "asin": "B0B5ZBRDZ8",
        "amazonUrl": "https://www.amazon.in/dp/B0B5ZBRDZ8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B5ZBRDZ8?tag=oraeskin-21",
        "badge": "Best Urea Body Lotion",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/bebodywise-urea-10-lotion.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "1,100+",
        "reviewCount": "1,100+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.6,
            "evidence": 8.6,
            "userFeedback": 8.8,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Very Dry",
            "Normal"
        ],
        "concerns": [
            "Keratosis Pilaris",
            "Rough Skin",
            "Very Dry Skin"
        ],
        "keyActives": [
            "Urea (10%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "keyIngredients": [
            "Urea (10%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "ingredients": [
            "Urea (10%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Bumpy arms and legs (keratosis pilaris) and very dry, flaky skin.",
        "avoidIf": "You have broken skin or eczema flares, as urea can sting.",
        "whyWeLikeIt": "10% urea hydrates and softens the plugs of dead skin behind KP bumps, plus ceramides and plant butters.",
        "pros": [
            "10% urea, a well-studied level for dry skin and KP",
            "Ceramides and butters",
            "4.4★ from 1,100+ ratings"
        ],
        "cons": [
            "The listing names only the key ingredients",
            "Can sting on freshly shaved legs"
        ],
        "verdict": "Our top pick for strawberry legs and rough, dry skin.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "bebodywise-urea-20-lotion",
                "reason": "20% urea for very thick, rough patches."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 8.6
        }
    },
    {
        "id": "bebodywise-urea-20-lotion",
        "name": "20% Urea Body Lotion",
        "title": "Be Bodywise 20% Urea Body Lotion with Ceramides (300ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Urea Body Lotion",
        "asin": "B0FWRQ24KD",
        "amazonUrl": "https://www.amazon.in/dp/B0FWRQ24KD?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FWRQ24KD?tag=oraeskin-21",
        "badge": "Best for Very Rough Skin",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "300ml",
        "image": "/images/products/bebodywise-urea-20-lotion.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "320+",
        "reviewCount": "320+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 7.8,
            "evidence": 8.4,
            "userFeedback": 8.4,
            "value": 8.2,
            "availability": 9
        },
        "skinType": [
            "Very Dry"
        ],
        "concerns": [
            "Keratosis Pilaris",
            "Rough Elbows & Knees",
            "Very Dry Skin"
        ],
        "keyActives": [
            "Urea (20%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "keyIngredients": [
            "Urea (20%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "ingredients": [
            "Urea (20%)",
            "Ceramides",
            "Kokum Butter",
            "Mango Seed Butter"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Very rough, thick skin on elbows, knees and shins.",
        "avoidIf": "Your skin is sensitive; start with 10% urea.",
        "whyWeLikeIt": "A stronger 20% urea lotion that exfoliates as well as moisturises.",
        "pros": [
            "20% urea for stronger softening",
            "300ml bottle",
            "Ceramides and butters"
        ],
        "cons": [
            "Only 320+ ratings",
            "More likely to sting than 10%"
        ],
        "verdict": "Use it on stubborn rough patches; 10% is enough for most people.",
        "alternatives": [
            {
                "label": "Gentler Option",
                "productId": "bebodywise-urea-10-lotion",
                "reason": "10% urea for everyday use."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.2,
            "overall": 8.3
        }
    },
    {
        "id": "bebodywise-lactic-5-lotion",
        "name": "5% AHA Lactic Acid Body Lotion",
        "title": "Be Bodywise 5% AHA Lactic Acid Body Lotion (200ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Lactic Acid Body Lotion",
        "asin": "B0BFQX7MS9",
        "amazonUrl": "https://www.amazon.in/dp/B0BFQX7MS9?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BFQX7MS9?tag=oraeskin-21",
        "badge": "Best Lactic Acid Body Lotion",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/bebodywise-lactic-5-lotion.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "1,000+",
        "reviewCount": "1,000+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.4,
            "evidence": 8.4,
            "userFeedback": 8.6,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Normal"
        ],
        "concerns": [
            "Rough Skin",
            "Keratosis Pilaris",
            "Dull Skin"
        ],
        "keyActives": [
            "Lactic Acid (5%)",
            "Aloe Vera"
        ],
        "keyIngredients": [
            "Lactic Acid (5%)",
            "Aloe Vera"
        ],
        "ingredients": [
            "Lactic Acid (5%)",
            "Aloe Vera"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Light",
        "whiteCast": "Not Applicable",
        "bestFor": "Rough elbows, knees and bumpy arms that need gentle exfoliation.",
        "avoidIf": "You have just shaved or waxed, or have broken skin.",
        "whyWeLikeIt": "5% lactic acid exfoliates gently while also hydrating, as lactic acid is a humectant.",
        "pros": [
            "5% lactic acid, gentle enough for daily use",
            "Exfoliates and moisturises",
            "1,000+ ratings"
        ],
        "cons": [
            "The listing does not show the full ingredient list",
            "Increases sun sensitivity on exposed areas"
        ],
        "verdict": "A straightforward lactic acid lotion for rough skin.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "wishcare-aha-bha-body-lotion",
                "reason": "10% AHA plus 1% BHA."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 8.4
        }
    },
    {
        "id": "wishcare-aha-bha-body-lotion",
        "name": "AHA BHA Body Lotion",
        "title": "WishCare 10% AHA + 1% BHA Body Lotion (200ml)",
        "brand": "WishCare",
        "category": "body-care",
        "subcategory": "Exfoliating Body Lotion",
        "asin": "B0BG8X8XTC",
        "amazonUrl": "https://www.amazon.in/dp/B0BG8X8XTC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BG8X8XTC?tag=oraeskin-21",
        "badge": "Best Exfoliating Body Lotion",
        "price": 384,
        "priceEst": "₹384",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/wishcare-aha-bha-body-lotion.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "5,200+",
        "reviewCount": "5,200+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 7.8,
            "evidence": 8.4,
            "userFeedback": 8.6,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Oily",
            "Dry"
        ],
        "concerns": [
            "Rough Skin",
            "Keratosis Pilaris",
            "Body Acne",
            "Tan"
        ],
        "keyActives": [
            "Glycolic + Lactic Acid (10% AHA)",
            "Salicylic Acid (1%)",
            "Niacinamide",
            "Ceramide"
        ],
        "keyIngredients": [
            "Glycolic + Lactic Acid (10% AHA)",
            "Salicylic Acid (1%)",
            "Niacinamide",
            "Ceramide"
        ],
        "ingredients": [
            "Aqua",
            "Glycerine",
            "Glycolic Acid",
            "Lactic Acid",
            "Stearic Acid",
            "Cetyl Alcohol",
            "Glyceryl Monostearate",
            "Emulsifying Wax",
            "Niacinamide",
            "Salicylic Acid",
            "Cetostearyl Alcohol",
            "Blueberry Extract",
            "Grapefruit Extract",
            "Oats",
            "Olive Squalane",
            "Hyaluronic Acid",
            "Ceramide",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Carbomer",
            "Potassium Sorbate",
            "Sodium Benzoate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Light",
        "whiteCast": "Not Applicable",
        "bestFor": "Bumpy, rough or tanned skin on arms, legs and back.",
        "avoidIf": "You have sensitive skin or have just shaved.",
        "whyWeLikeIt": "10% glycolic and lactic acid plus 1% salicylic acid, with the full ingredient list on the listing and no added fragrance.",
        "pros": [
            "10% AHA plus 1% BHA",
            "Full ingredient list, no fragrance listed",
            "5,200+ ratings"
        ],
        "cons": [
            "Can sting on freshly shaved or broken skin",
            "Use at night and wear sunscreen on exposed areas"
        ],
        "verdict": "A strong, transparent exfoliating body lotion.",
        "alternatives": [
            {
                "label": "Gentler Option",
                "productId": "bebodywise-lactic-5-lotion",
                "reason": "5% lactic acid only."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.4
        }
    },
    {
        "id": "bebodywise-salicylic-bodywash",
        "name": "1% Salicylic Acid Body Wash",
        "title": "Be Bodywise 1% Salicylic Acid Body Wash (700ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Salicylic Body Wash",
        "asin": "B0CWPNGRR9",
        "amazonUrl": "https://www.amazon.in/dp/B0CWPNGRR9?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CWPNGRR9?tag=oraeskin-21",
        "badge": "Best Value Salicylic Body Wash",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "700ml",
        "image": "/images/products/bebodywise-salicylic-bodywash.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "11,800+",
        "reviewCount": "11,800+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 9,
            "availability": 9
        },
        "skinType": [
            "Oily",
            "Acne-Prone",
            "Normal"
        ],
        "concerns": [
            "Body Acne",
            "Keratosis Pilaris",
            "Clogged Pores"
        ],
        "keyActives": [
            "Salicylic Acid (1%)",
            "Chamomile Extract"
        ],
        "keyIngredients": [
            "Salicylic Acid (1%)",
            "Chamomile Extract"
        ],
        "ingredients": [
            "Purified Water",
            "Acrylate Copolymer",
            "Sodium Lauroyl Sarcosinate",
            "Coco-Glucoside",
            "Cocamidopropyl Betaine",
            "Triethanolamine",
            "Salicylic Acid",
            "Erythritol",
            "Phenoxyethanol & Ethylhexylglycerin",
            "Fragrance",
            "Saccharide Isomerate",
            "Citric Acid",
            "Chamomile Extract",
            "Encapsulated Salicylic Acid Beads",
            "Sodium Citrate",
            "Sodium EDTA",
            "CI 42090"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Wash",
        "finish": "Clean",
        "whiteCast": "Not Applicable",
        "bestFor": "Mild back and chest acne, and bumpy skin, at a low cost per wash.",
        "avoidIf": "You are sensitive to fragrance.",
        "whyWeLikeIt": "1% salicylic acid in a sulphate-free wash, in a large 700ml bottle with 11,800+ ratings.",
        "pros": [
            "700ml, very good value",
            "Sulphate-free cleansing base",
            "11,800+ ratings"
        ],
        "cons": [
            "Contains fragrance and blue dye",
            "1% is milder than a 2% wash"
        ],
        "verdict": "A good-value everyday body wash for mild bacne.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "minimalist-salicylic-bodywash",
                "reason": "2% salicylic acid and LHA."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9,
            "overall": 8.3
        }
    },
    {
        "id": "wishcare-body-sunscreen-spf50",
        "name": "Sunscreen Body Lotion SPF 50 PA++++",
        "title": "WishCare Sunscreen Body Lotion SPF 50 PA++++ (200ml)",
        "brand": "WishCare",
        "category": "sunscreens",
        "subcategory": "Body Sunscreen",
        "asin": "B0BG8W7PJ7",
        "amazonUrl": "https://www.amazon.in/dp/B0BG8W7PJ7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BG8W7PJ7?tag=oraeskin-21",
        "badge": "Best Body Sunscreen",
        "price": 381,
        "priceEst": "₹381",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/wishcare-body-sunscreen-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "11,000+",
        "reviewCount": "11,000+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.4,
            "evidence": 8.4,
            "userFeedback": 8.6,
            "value": 8.8,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Tanning",
            "Sun Damage"
        ],
        "keyActives": [
            "SPF 50 PA++++ (Octocrylene, Octisalate, Tinosorb M)",
            "Niacinamide",
            "Squalane"
        ],
        "keyIngredients": [
            "SPF 50 PA++++ (Octocrylene, Octisalate, Tinosorb M)",
            "Niacinamide",
            "Squalane"
        ],
        "ingredients": [
            "Aqua",
            "Octocrylene",
            "Octyl Salicylate",
            "Glycerine",
            "Glyceryl Monostearate",
            "Cetyl Alcohol",
            "Cetostearyl Alcohol",
            "Emulsifying Wax",
            "Acrylate Crosspolymer",
            "Tinosorb M",
            "Olive Squalane",
            "Black Sesame Seed Oil",
            "Safflower Oil",
            "Isopropyl Palmitate",
            "Niacinamide",
            "Green Tea Extract",
            "Xanthan Gum",
            "Hydroxyethyl Cellulose",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Potassium Sorbate",
            "Sodium Benzoate",
            "Citric Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "No White Cast",
        "whiteCast": "None",
        "bestFor": "Daily arms, neck and legs protection for commutes.",
        "avoidIf": "You need water resistance for swimming.",
        "whyWeLikeIt": "SPF 50 PA++++ with Tinosorb M for UVA, niacinamide and squalane, with the full ingredient list.",
        "pros": [
            "SPF 50 PA++++ with a modern UVA filter",
            "Full ingredient list, no fragrance listed",
            "11,000+ ratings"
        ],
        "cons": [
            "Not labelled water-resistant",
            "You need a lot for the whole body, so 200ml goes fast"
        ],
        "verdict": "Our top body sunscreen for everyday use.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "sunscoop-body-sunscreen-spf50",
                "reason": "SPF 50+ with 5% niacinamide."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.5,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.8,
            "overall": 8.5
        }
    },
    {
        "id": "sunscoop-body-sunscreen-spf50",
        "name": "5% Niacinamide Sunscreen Body Lotion SPF 50+",
        "title": "SunScoop 5% Niacinamide Sunscreen Body Lotion SPF 50+ PA++++ (200ml)",
        "brand": "SunScoop",
        "category": "sunscreens",
        "subcategory": "Body Sunscreen",
        "asin": "B0DYV56LD9",
        "amazonUrl": "https://www.amazon.in/dp/B0DYV56LD9?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DYV56LD9?tag=oraeskin-21",
        "badge": "Best Body Sunscreen with Niacinamide",
        "price": 396,
        "priceEst": "₹396",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/sunscoop-body-sunscreen-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "4,000+",
        "reviewCount": "4,000+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Tanning",
            "Sun Damage",
            "Uneven Tone"
        ],
        "keyActives": [
            "SPF 50+ PA++++ (Octocrylene, Octisalate, Avobenzone, Tinosorb M)",
            "Niacinamide (5%)",
            "Oat Extract"
        ],
        "keyIngredients": [
            "SPF 50+ PA++++ (Octocrylene, Octisalate, Avobenzone, Tinosorb M)",
            "Niacinamide (5%)",
            "Oat Extract"
        ],
        "ingredients": [
            "SPF 50+ PA++++ (Octocrylene, Octisalate, Avobenzone, Tinosorb M)",
            "Niacinamide (5%)",
            "Oat Extract"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Lotion",
        "finish": "No White Cast",
        "whiteCast": "None",
        "bestFor": "Daily body sun protection with a light feel.",
        "avoidIf": "You need water resistance.",
        "whyWeLikeIt": "Four UV filters including avobenzone and Tinosorb M, plus 5% niacinamide, with the ingredients listed.",
        "pros": [
            "Four named UV filters",
            "5% niacinamide",
            "4,000+ ratings"
        ],
        "cons": [
            "Not labelled water-resistant",
            "Fewer ratings than WishCare"
        ],
        "verdict": "A solid alternative to WishCare.",
        "alternatives": [
            {
                "label": "Most-Rated Option",
                "productId": "wishcare-body-sunscreen-spf50",
                "reason": "SPF 50 PA++++ with 11,000+ ratings."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.3
        }
    },
    {
        "id": "vaseline-sun-protect-spf50",
        "name": "Sun Protect SPF 50 PA++++ Lotion",
        "title": "Vaseline Sun Protect SPF 50 PA++++ Body Lotion (400ml)",
        "brand": "Vaseline",
        "category": "sunscreens",
        "subcategory": "Body Sunscreen",
        "asin": "B0GLZSD24R",
        "amazonUrl": "https://www.amazon.in/dp/B0GLZSD24R?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GLZSD24R?tag=oraeskin-21",
        "badge": "Best Value Body Sunscreen",
        "price": 479,
        "priceEst": "₹479",
        "currency": "₹",
        "size": "400ml",
        "image": "/images/products/vaseline-sun-protect-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "670+",
        "reviewCount": "670+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.2,
            "evidence": 7.4,
            "userFeedback": 8.6,
            "value": 9.2,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Tanning",
            "Sun Damage"
        ],
        "keyActives": [
            "SPF 50 PA++++",
            "Niacinamide",
            "Vitamin C & E"
        ],
        "keyIngredients": [
            "SPF 50 PA++++",
            "Niacinamide",
            "Vitamin C & E"
        ],
        "ingredients": [
            "SPF 50 PA++++",
            "Niacinamide",
            "Vitamin C & E"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Serum-Lotion",
        "finish": "Non-Sticky",
        "whiteCast": "None",
        "bestFor": "Covering the whole body daily without running out fast.",
        "avoidIf": "You want to check the UV filters before buying.",
        "whyWeLikeIt": "SPF 50 PA++++ in a 400ml bottle, the lowest cost per ml of the body sunscreens we found.",
        "pros": [
            "400ml for ₹479, about ₹1.2 per ml",
            "SPF 50 PA++++",
            "Widely available brand"
        ],
        "cons": [
            "The listing does not show the ingredient list or UV filters",
            "Only 670+ ratings so far"
        ],
        "verdict": "Best value for generous, everyday body application.",
        "alternatives": [
            {
                "label": "More Transparent",
                "productId": "wishcare-body-sunscreen-spf50",
                "reason": "Lists its UV filters and full ingredients."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.2,
            "overall": 8.2
        }
    },
    {
        "id": "bio-oil-skincare-oil",
        "name": "Skincare Oil",
        "title": "Bio-Oil Skincare Oil (60ml)",
        "brand": "Bio-Oil",
        "category": "body-care",
        "subcategory": "Body Oil",
        "asin": "B00GMC04BK",
        "amazonUrl": "https://www.amazon.in/dp/B00GMC04BK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00GMC04BK?tag=oraeskin-21",
        "badge": "Most-Rated Body Oil",
        "price": 400,
        "priceEst": "₹400",
        "currency": "₹",
        "size": "60ml",
        "image": "/images/products/bio-oil-skincare-oil.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "28,000+",
        "reviewCount": "28,000+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 7.8,
            "evidence": 7,
            "userFeedback": 8.2,
            "value": 7.4,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dryness",
            "Stretch Marks",
            "Scars"
        ],
        "keyActives": [
            "Vitamin A Oil",
            "Vitamin E",
            "Plant Oils"
        ],
        "keyIngredients": [
            "Vitamin A Oil",
            "Vitamin E",
            "Plant Oils"
        ],
        "ingredients": [
            "Vitamin A Oil",
            "Vitamin E",
            "Plant Oils"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Oil",
        "finish": "Absorbs Quickly",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry patches and softening the look of old scars or stretch marks.",
        "avoidIf": "You expect it to erase stretch marks; evidence for that is limited.",
        "whyWeLikeIt": "A light, fast-absorbing oil with 28,000+ ratings that does not feel greasy after a shower.",
        "pros": [
            "28,000+ ratings",
            "Light and fast-absorbing",
            "A little goes a long way"
        ],
        "cons": [
            "Evidence for fading stretch marks and scars is limited",
            "The Amazon listing does not show the full ingredient list"
        ],
        "verdict": "A pleasant, light body oil; treat scar and stretch-mark claims cautiously.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "plum-vanilla-body-oil",
                "reason": "A plant-oil body oil for half the price."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.7,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.4,
            "overall": 7.7
        }
    },
    {
        "id": "plum-vanilla-body-oil",
        "name": "BodyLovin' Vanilla Vibes Body Oil",
        "title": "Plum BodyLovin' Vanilla Vibes Body Oil (100ml)",
        "brand": "Plum",
        "category": "body-care",
        "subcategory": "Body Oil",
        "asin": "B09TL5SDW8",
        "amazonUrl": "https://www.amazon.in/dp/B09TL5SDW8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09TL5SDW8?tag=oraeskin-21",
        "badge": "Best Budget Body Oil",
        "price": 200,
        "priceEst": "₹200",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/plum-vanilla-body-oil.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "6,500+",
        "reviewCount": "6,500+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 7.8,
            "evidence": 6.6,
            "userFeedback": 8.6,
            "value": 9,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dryness",
            "Dull Skin"
        ],
        "keyActives": [
            "Sunflower Oil",
            "Avocado Oil",
            "Coconut Oil",
            "Sweet Almond Oil",
            "Vitamin E"
        ],
        "keyIngredients": [
            "Sunflower Oil",
            "Avocado Oil",
            "Coconut Oil",
            "Sweet Almond Oil",
            "Vitamin E"
        ],
        "ingredients": [
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Ethylhexyl Palmitate",
            "Isopropyl Myristate",
            "Fragrance",
            "Caprylic/Capric Triglycerides",
            "Persea Gratissima (Avocado) Oil",
            "Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate",
            "Cocos Nucifera (Coconut) Oil",
            "Olea Europaea (Olive) Fruit Oil",
            "Vitis Vinifera (Grape) Seed Oil",
            "Prunus Amygdalus Dulcis (Sweet Almond) Oil",
            "Daucus Carota Sativa (Carrot) Seed Oil",
            "Tocopheryl Acetate",
            "Vanilla Planifolia Fruit Oil"
        ],
        "fragrance": "Added Fragrance (vanilla)",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Oil",
        "finish": "Glowy, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "A glowy, vanilla-scented finish on damp skin after a shower.",
        "avoidIf": "You are sensitive to fragrance, or have body acne (coconut oil can clog pores).",
        "whyWeLikeIt": "A blend of plant oils with vitamin E and a warm vanilla scent, with the full ingredient list on the listing.",
        "pros": [
            "₹200 for 100ml",
            "Full ingredient list disclosed",
            "6,500+ ratings"
        ],
        "cons": [
            "Added fragrance",
            "Coconut oil and isopropyl myristate can clog pores on acne-prone backs"
        ],
        "verdict": "A great-value glow oil, especially if you love vanilla.",
        "alternatives": [
            {
                "label": "Lighter Option",
                "productId": "bio-oil-skincare-oil",
                "reason": "A well-known light, fast-absorbing body oil."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9,
            "overall": 7.9
        }
    },
    {
        "id": "forest-essentials-after-bath-oil",
        "name": "After Bath Oil Lime Saffron Oudh",
        "title": "Forest Essentials After Bath Oil Lime Saffron Oudh (50ml)",
        "brand": "Forest Essentials",
        "category": "body-care",
        "subcategory": "Body Oil",
        "asin": "B0CVX3RJ2V",
        "amazonUrl": "https://www.amazon.in/dp/B0CVX3RJ2V?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CVX3RJ2V?tag=oraeskin-21",
        "badge": "Best Premium Body Oil",
        "price": 825,
        "priceEst": "₹825",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/forest-essentials-after-bath-oil.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "160+",
        "reviewCount": "160+",
        "scoreBreakdown": {
            "formula": 7,
            "skinSuitability": 7.4,
            "evidence": 6,
            "userFeedback": 8.8,
            "value": 5.6,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dryness"
        ],
        "keyActives": [
            "Plant Oils",
            "Saffron",
            "Oudh Fragrance"
        ],
        "keyIngredients": [
            "Plant Oils",
            "Saffron",
            "Oudh Fragrance"
        ],
        "ingredients": [
            "Plant Oils",
            "Saffron",
            "Oudh Fragrance"
        ],
        "fragrance": "Added Fragrance (musky)",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Oil",
        "finish": "Scented Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "A luxurious, scented after-bath oil or gift.",
        "avoidIf": "You want value or a fragrance-free oil.",
        "whyWeLikeIt": "An Ayurvedic after-bath oil made to apply on wet skin, with a musky saffron and oudh scent.",
        "pros": [
            "Made to apply on wet skin",
            "Luxurious scent",
            "4.4★ rating"
        ],
        "cons": [
            "₹825 for 50ml",
            "The listing does not show the ingredient list"
        ],
        "verdict": "A treat, not a necessity.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "plum-vanilla-body-oil",
                "reason": "A plant-oil body oil for ₹200."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.2,
        "scores": {
            "formula": 7,
            "weatherResilience": 8,
            "texture": 8,
            "value": 5.6,
            "overall": 7.2
        }
    },
    {
        "id": "vaseline-cocoa-radiant-body-oil",
        "name": "Intensive Care Cocoa Radiant Body Oil",
        "title": "Vaseline Intensive Care Cocoa Radiant Body Oil (200ml)",
        "brand": "Vaseline",
        "category": "body-care",
        "subcategory": "Body Oil",
        "asin": "B0FQNVY42Q",
        "amazonUrl": "https://www.amazon.in/dp/B0FQNVY42Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FQNVY42Q?tag=oraeskin-21",
        "badge": "Best for Very Dry Skin",
        "price": 479,
        "priceEst": "₹479",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/vaseline-cocoa-radiant-body-oil.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "220+",
        "reviewCount": "220+",
        "scoreBreakdown": {
            "formula": 6.6,
            "skinSuitability": 7.4,
            "evidence": 6.6,
            "userFeedback": 8,
            "value": 7.6,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Very Dry"
        ],
        "concerns": [
            "Very Dry Skin"
        ],
        "keyActives": [
            "Mineral Oil",
            "Cocoa Butter",
            "Vitamin E"
        ],
        "keyIngredients": [
            "Mineral Oil",
            "Cocoa Butter",
            "Vitamin E"
        ],
        "ingredients": [
            "Mineral Oil",
            "Hydrogenated Styrene Copolymer",
            "Parfum",
            "Theobroma Cacao (Cocoa) Butter",
            "Tocopherol",
            "Benzyl Alcohol",
            "Citronellol",
            "Coumarin",
            "Hexyl Cinnamal",
            "Hydroxycitronellal",
            "Linalool"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Oil",
        "finish": "Smooth",
        "whiteCast": "Not Applicable",
        "bestFor": "Very dry legs and arms that need a strong moisture seal.",
        "avoidIf": "You want plant oils, or are sensitive to fragrance.",
        "whyWeLikeIt": "A mineral oil base, which is very good at sealing in moisture, with cocoa butter.",
        "pros": [
            "Mineral oil seals in moisture well",
            "Larger 200ml bottle",
            "Flip-top bottle"
        ],
        "cons": [
            "Fragrance and several fragrance allergens listed",
            "Only 220+ ratings"
        ],
        "verdict": "Effective for very dry skin, but heavily fragranced.",
        "alternatives": [
            {
                "label": "Plant-Oil Option",
                "productId": "plum-vanilla-body-oil",
                "reason": "A plant-oil blend for ₹200."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.3,
        "scores": {
            "formula": 6.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.6,
            "overall": 7.3
        }
    },
    {
        "id": "plum-vanilla-caramello-lotion",
        "name": "BodyLovin' Vanilla Caramello Body Lotion",
        "title": "Plum BodyLovin' Vanilla Caramello Body Lotion (200ml)",
        "brand": "Plum",
        "category": "body-care",
        "subcategory": "Gourmand Body Lotion",
        "asin": "B0FM7VYRPW",
        "amazonUrl": "https://www.amazon.in/dp/B0FM7VYRPW?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FM7VYRPW?tag=oraeskin-21",
        "badge": "Best Vanilla Caramel Lotion",
        "price": 204,
        "priceEst": "₹204",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/plum-vanilla-caramello-lotion.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "3,400+",
        "reviewCount": "3,400+",
        "scoreBreakdown": {
            "formula": 7.2,
            "skinSuitability": 7.8,
            "evidence": 6.6,
            "userFeedback": 8.8,
            "value": 9,
            "availability": 9.5
        },
        "skinType": [
            "Dry",
            "Normal"
        ],
        "concerns": [
            "Dryness"
        ],
        "keyActives": [
            "Cocoa Butter",
            "Panthenol",
            "Glycerin",
            "Sunflower Oil"
        ],
        "keyIngredients": [
            "Cocoa Butter",
            "Panthenol",
            "Glycerin",
            "Sunflower Oil"
        ],
        "ingredients": [
            "Aqua",
            "Paraffinum Liquidum",
            "Glycerin",
            "Helianthus Annuus (Sunflower) Seed Oil",
            "Cetearyl Alcohol",
            "Polysorbate 60",
            "Fragrance",
            "Theobroma Cacao (Cocoa) Seed Butter",
            "Polyacrylate-13",
            "Polyisobutene",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Dimethicone",
            "Xanthan Gum",
            "Carbomer",
            "Disodium EDTA",
            "Panthenol",
            "Polysorbate 20",
            "Sodium Hydroxide"
        ],
        "fragrance": "Added Fragrance (vanilla caramel)",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Everyday moisture with a sweet vanilla-caramel scent.",
        "avoidIf": "You are sensitive to fragrance.",
        "whyWeLikeIt": "A simple moisturising lotion with glycerin, mineral oil, cocoa butter and panthenol, with the full ingredient list.",
        "pros": [
            "₹204 for 200ml",
            "Full ingredient list disclosed",
            "4.4★ from 3,400+ ratings"
        ],
        "cons": [
            "Fragrance is high up the ingredient list",
            "The scent fades within a few hours, as with most lotions"
        ],
        "verdict": "A cheap, well-liked dessert-scented lotion.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "plum-bodylovin-vanilla-lotion",
                "reason": "Plum’s warm vanilla body lotion in a larger bottle."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9,
            "overall": 7.9
        }
    },
    {
        "id": "love-co-warm-vanilla-lotion",
        "name": "Warm Vanilla Body Lotion",
        "title": "The Love Co Warm Vanilla Body Lotion (250ml)",
        "brand": "The Love Co",
        "category": "body-care",
        "subcategory": "Gourmand Body Lotion",
        "asin": "B0BMLY5MYH",
        "amazonUrl": "https://www.amazon.in/dp/B0BMLY5MYH?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BMLY5MYH?tag=oraeskin-21",
        "badge": "Best Long-Lasting Vanilla Scent",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "250ml",
        "image": "/images/products/love-co-warm-vanilla-lotion.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "440+",
        "reviewCount": "440+",
        "scoreBreakdown": {
            "formula": 6.6,
            "skinSuitability": 7.6,
            "evidence": 6,
            "userFeedback": 8.6,
            "value": 7.8,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Dryness"
        ],
        "keyActives": [
            "Peach Flower Extract",
            "Red Algae Extract"
        ],
        "keyIngredients": [
            "Peach Flower Extract",
            "Red Algae Extract"
        ],
        "ingredients": [
            "Peach Flower Extract",
            "Red Algae Extract"
        ],
        "fragrance": "Added Fragrance (vanilla)",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Layering with a vanilla body wash or mist for a stronger scent.",
        "avoidIf": "You want to check the full formula first.",
        "whyWeLikeIt": "A fast-absorbing lotion focused on a warm vanilla fragrance.",
        "pros": [
            "Non-sticky, fast-absorbing",
            "Strong vanilla scent",
            "4.3★ rating"
        ],
        "cons": [
            "The listing names only two extracts, not the full formula",
            "Only 440+ ratings"
        ],
        "verdict": "Pick it for the scent; Plum is better value and more transparent.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "plum-vanilla-caramello-lotion",
                "reason": "A vanilla lotion with its full ingredient list for ₹204."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.3,
        "scores": {
            "formula": 6.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 7.3
        }
    },
    {
        "id": "wishcare-multivitamin-body-lotion",
        "name": "Multi-Vitamin Brightening Body Lotion",
        "title": "WishCare Multi-Vitamin Brightening Body Lotion with 5% Vitamin C & 5% Niacinamide (200ml)",
        "brand": "WishCare",
        "category": "body-care",
        "subcategory": "Brightening Body Lotion",
        "asin": "B0BG8XSTP8",
        "amazonUrl": "https://www.amazon.in/dp/B0BG8XSTP8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BG8XSTP8?tag=oraeskin-21",
        "badge": "Best Brightening Body Lotion",
        "price": 384,
        "priceEst": "₹384",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/wishcare-multivitamin-body-lotion.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "880+",
        "reviewCount": "880+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 8,
            "userFeedback": 8.2,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Tan",
            "Uneven Tone",
            "Dullness"
        ],
        "keyActives": [
            "Ethyl Ascorbic Acid (5% Vitamin C)",
            "Niacinamide (5%)",
            "Panthenol",
            "Vitamin E"
        ],
        "keyIngredients": [
            "Ethyl Ascorbic Acid (5% Vitamin C)",
            "Niacinamide (5%)",
            "Panthenol",
            "Vitamin E"
        ],
        "ingredients": [
            "Aqua",
            "Glycerine",
            "Ethyl Ascorbic Acid",
            "Niacinamide",
            "Stearic Acid",
            "Glyceryl Monostearate",
            "Emulsifying Wax",
            "Cetyl Alcohol",
            "Cetostearyl Alcohol",
            "Kakadu Plum Extract",
            "Peach Extract",
            "Turmeric",
            "Squalane",
            "Shea Butter",
            "Phenoxyethanol",
            "Ethylhexylglycerin",
            "Ceramide",
            "Vitamin E",
            "D-Panthenol",
            "Hyaluronic Acid",
            "Carbomer",
            "Potassium Sorbate",
            "Sodium Benzoate"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Light",
        "whiteCast": "Not Applicable",
        "bestFor": "Uneven tone and tan on arms and legs, alongside daily sunscreen.",
        "avoidIf": "You expect it to work without sun protection.",
        "whyWeLikeIt": "5% vitamin C and 5% niacinamide with panthenol and ceramide, with the full ingredient list and no fragrance listed.",
        "pros": [
            "5% vitamin C plus 5% niacinamide",
            "Full ingredient list, no fragrance listed",
            "Can be used day or night"
        ],
        "cons": [
            "Only 880+ ratings",
            "Results take 6–8 weeks and depend on sunscreen use"
        ],
        "verdict": "The most transparent brightening body lotion we found.",
        "alternatives": [
            {
                "label": "Most-Rated Option",
                "productId": "vaseline-gluta-hya-dewy-lotion",
                "reason": "A popular glow lotion with 10,000+ ratings."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.3
        }
    },
    {
        "id": "vaseline-gluta-hya-dewy-lotion",
        "name": "Gluta-Hya Dewy Radiance Body Lotion",
        "title": "Vaseline Gluta-Hya Dewy Radiance Body Lotion (330ml)",
        "brand": "Vaseline",
        "category": "body-care",
        "subcategory": "Brightening Body Lotion",
        "asin": "B0GSZ8DDJX",
        "amazonUrl": "https://www.amazon.in/dp/B0GSZ8DDJX?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GSZ8DDJX?tag=oraeskin-21",
        "badge": "Most-Rated Glow Lotion",
        "price": 389,
        "priceEst": "₹389",
        "currency": "₹",
        "size": "330ml",
        "image": "/images/products/vaseline-gluta-hya-dewy-lotion.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "10,200+",
        "reviewCount": "10,200+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8,
            "evidence": 6.8,
            "userFeedback": 8.6,
            "value": 8.6,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dullness",
            "Uneven Tone",
            "Dryness"
        ],
        "keyActives": [
            "Glutathione",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Glutathione",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Glutathione",
            "Niacinamide",
            "Hyaluronic Acid"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Serum-Lotion",
        "finish": "Dewy",
        "whiteCast": "Not Applicable",
        "bestFor": "A dewy, hydrated look on dull body skin.",
        "avoidIf": "You want proven tan-fading; topical glutathione has limited evidence.",
        "whyWeLikeIt": "A light serum-lotion with niacinamide and hyaluronic acid, rated by 10,200+ buyers.",
        "pros": [
            "10,200+ ratings",
            "Light, fast-absorbing serum-lotion",
            "Niacinamide and hyaluronic acid"
        ],
        "cons": [
            "Topical glutathione has little evidence for lightening skin",
            "The listing does not show the full ingredient list"
        ],
        "verdict": "A nice glow lotion. The niacinamide does more than the glutathione.",
        "alternatives": [
            {
                "label": "More Transparent",
                "productId": "wishcare-multivitamin-body-lotion",
                "reason": "5% vitamin C and 5% niacinamide with full ingredients."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 7.9
        }
    },
    {
        "id": "vaseline-daily-brightening-lotion",
        "name": "Daily Brightening Body Lotion",
        "title": "Vaseline Daily Brightening Body Lotion with Niacinamide (400ml)",
        "brand": "Vaseline",
        "category": "body-care",
        "subcategory": "Brightening Body Lotion",
        "asin": "B09ZL9QY3B",
        "amazonUrl": "https://www.amazon.in/dp/B09ZL9QY3B?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09ZL9QY3B?tag=oraeskin-21",
        "badge": "Best Budget Brightening Lotion",
        "price": 219,
        "priceEst": "₹219",
        "currency": "₹",
        "size": "400ml",
        "image": "/images/products/vaseline-daily-brightening-lotion.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "2,500+",
        "reviewCount": "2,500+",
        "scoreBreakdown": {
            "formula": 6.8,
            "skinSuitability": 7.8,
            "evidence": 6.6,
            "userFeedback": 8.4,
            "value": 9.4,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dullness",
            "Dryness"
        ],
        "keyActives": [
            "Niacinamide (Vitamin B3)",
            "UV Filters (no SPF rating)"
        ],
        "keyIngredients": [
            "Niacinamide (Vitamin B3)",
            "UV Filters (no SPF rating)"
        ],
        "ingredients": [
            "Niacinamide (Vitamin B3)",
            "UV Filters (no SPF rating)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Sticky",
        "whiteCast": "Not Applicable",
        "bestFor": "Cheap, everyday moisture with a little niacinamide.",
        "avoidIf": "You think it replaces sunscreen; it has no SPF rating.",
        "whyWeLikeIt": "A large 400ml bottle with niacinamide for ₹219.",
        "pros": [
            "400ml for ₹219",
            "Non-sticky",
            "2,500+ ratings"
        ],
        "cons": [
            "The listing mentions UV filters but gives no SPF, so it is not a sunscreen",
            "The listing names only niacinamide and sunscreens, not the full formula"
        ],
        "verdict": "Good value daily lotion, but use a real SPF on exposed skin.",
        "alternatives": [
            {
                "label": "Stronger Option",
                "productId": "wishcare-multivitamin-body-lotion",
                "reason": "5% vitamin C and 5% niacinamide."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.7,
        "scores": {
            "formula": 6.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 9.4,
            "overall": 7.7
        }
    },
    {
        "id": "bebodywise-niacinamide-body-lotion",
        "name": "10% Niacinamide Brightening Body Lotion",
        "title": "Be Bodywise 10% Niacinamide Brightening Body Lotion (200ml)",
        "brand": "Be Bodywise",
        "category": "body-care",
        "subcategory": "Brightening Body Lotion",
        "asin": "B0BBRF8P9L",
        "amazonUrl": "https://www.amazon.in/dp/B0BBRF8P9L?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BBRF8P9L?tag=oraeskin-21",
        "badge": "Best Niacinamide Body Lotion",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/bebodywise-niacinamide-body-lotion.jpg",
        "amazonRating": 4,
        "rating": 4,
        "amazonReviews": "720+",
        "reviewCount": "720+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 7.8,
            "evidence": 7.4,
            "userFeedback": 8,
            "value": 8.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Uneven Tone",
            "Body Acne Marks"
        ],
        "keyActives": [
            "Niacinamide (10%)",
            "Aloe Vera",
            "Almond Oil"
        ],
        "keyIngredients": [
            "Niacinamide (10%)",
            "Aloe Vera",
            "Almond Oil"
        ],
        "ingredients": [
            "Niacinamide (10%)",
            "Aloe Vera",
            "Almond Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Light",
        "whiteCast": "Not Applicable",
        "bestFor": "Uneven tone and leftover marks from body acne.",
        "avoidIf": "Your skin reacts to high-strength niacinamide.",
        "whyWeLikeIt": "A high 10% niacinamide body lotion with aloe and almond oil.",
        "pros": [
            "10% niacinamide",
            "Light texture",
            "Helps with marks left by body acne"
        ],
        "cons": [
            "The listing names only niacinamide and aloe",
            "4.0★ from 720+ ratings"
        ],
        "verdict": "A decent niacinamide option, but less transparent than WishCare.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "wishcare-multivitamin-body-lotion",
                "reason": "Vitamin C plus niacinamide with full ingredients."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.9
        }
    },
    {
        "id": "fixderma-sunscreen-stick",
        "name": "Shadow Invisible Sunscreen Stick SPF 50",
        "title": "Fixderma Shadow Invisible Sunscreen Stick SPF 50 PA+++ (15g)",
        "brand": "Fixderma",
        "category": "sunscreens",
        "subcategory": "Sunscreen Stick",
        "asin": "B0FQBCD9SV",
        "amazonUrl": "https://www.amazon.in/dp/B0FQBCD9SV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FQBCD9SV?tag=oraeskin-21",
        "badge": "Best Sunscreen Stick",
        "price": 319,
        "priceEst": "₹319",
        "currency": "₹",
        "size": "15g",
        "image": "/images/products/fixderma-sunscreen-stick.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "13,700+",
        "reviewCount": "13,700+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Reapplication",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50 PA+++ (Uvinul A Plus, Octocrylene)",
            "Vitamin E",
            "Avocado & Jojoba Oil"
        ],
        "keyIngredients": [
            "SPF 50 PA+++ (Uvinul A Plus, Octocrylene)",
            "Vitamin E",
            "Avocado & Jojoba Oil"
        ],
        "ingredients": [
            "SPF 50 PA+++ (Uvinul A Plus, Octocrylene)",
            "Vitamin E",
            "Avocado & Jojoba Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Clear Stick",
        "finish": "Natural, No White Cast",
        "whiteCast": "None",
        "bestFor": "Topping up sun protection during the day, including over makeup.",
        "avoidIf": "You plan to use it as your only morning sunscreen layer.",
        "whyWeLikeIt": "A clear SPF 50 stick with named UVA filters, rated by 13,700+ buyers.",
        "pros": [
            "13,700+ ratings",
            "Clear, no white cast",
            "Uvinul A Plus for UVA"
        ],
        "cons": [
            "The listing names only some ingredients",
            "Sticks need several passes to apply enough"
        ],
        "verdict": "Our top pick for easy reapplication.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "lakme-sunstick-spf50",
                "reason": "A smaller ₹259 SPF 50+ stick."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.2
        }
    },
    {
        "id": "beauty-of-joseon-matte-sun-stick",
        "name": "Matte Sun Stick Mugwort + Camellia",
        "title": "Beauty of Joseon Matte Sun Stick SPF 50 PA++++ (18g)",
        "brand": "Beauty of Joseon",
        "category": "sunscreens",
        "subcategory": "Sunscreen Stick",
        "asin": "B0BQVTM1BJ",
        "amazonUrl": "https://www.amazon.in/dp/B0BQVTM1BJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BQVTM1BJ?tag=oraeskin-21",
        "badge": "Best Matte Sunscreen Stick",
        "price": 1200,
        "priceEst": "₹1200",
        "currency": "₹",
        "size": "18g",
        "image": "/images/products/beauty-of-joseon-matte-sun-stick.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "6,400+",
        "reviewCount": "6,400+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.4,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 6.6,
            "availability": 8.5
        },
        "skinType": [
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Reapplication",
            "Oiliness",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50 PA++++",
            "Silica (oil control)",
            "Mugwort Extract",
            "Green Tea Extract"
        ],
        "keyIngredients": [
            "SPF 50 PA++++",
            "Silica (oil control)",
            "Mugwort Extract",
            "Green Tea Extract"
        ],
        "ingredients": [
            "SPF 50 PA++++",
            "Silica (oil control)",
            "Mugwort Extract",
            "Green Tea Extract"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Matte Stick",
        "finish": "Matte",
        "whiteCast": "None",
        "bestFor": "Oily skin that wants to reapply without adding shine.",
        "avoidIf": "You have dry skin, or want a budget option.",
        "whyWeLikeIt": "A popular Korean SPF 50 PA++++ stick with a matte, oil-controlling finish.",
        "pros": [
            "PA++++ UVA rating",
            "Matte finish over makeup",
            "6,400+ ratings"
        ],
        "cons": [
            "₹1,200 for 18g, as it is imported",
            "The listing does not show the ingredient list"
        ],
        "verdict": "The best matte stick for oily skin, at a premium.",
        "alternatives": [
            {
                "label": "Cheaper Option",
                "productId": "fixderma-sunscreen-stick",
                "reason": "A clear SPF 50 stick for ₹319."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.1,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.6,
            "overall": 8.1
        }
    },
    {
        "id": "earth-rhythm-vitc-sunstick",
        "name": "Glow Surge Vitamin C & E Sunstick SPF 50",
        "title": "Earth Rhythm Glow Surge Vitamin C & E Sunstick SPF 50 (20g)",
        "brand": "Earth Rhythm",
        "category": "sunscreens",
        "subcategory": "Sunscreen Stick",
        "asin": "B0CF5PYT2S",
        "amazonUrl": "https://www.amazon.in/dp/B0CF5PYT2S?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CF5PYT2S?tag=oraeskin-21",
        "badge": "Best Hybrid Sunscreen Stick",
        "price": 429,
        "priceEst": "₹429",
        "currency": "₹",
        "size": "20g",
        "image": "/images/products/earth-rhythm-vitc-sunstick.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "780+",
        "reviewCount": "780+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 7.8,
            "evidence": 7.6,
            "userFeedback": 8.2,
            "value": 8,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Reapplication",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50 (Zinc Oxide, Octinoxate, Homosalate, Bemotrizinol)",
            "Vitamin C",
            "Vitamin E"
        ],
        "keyIngredients": [
            "SPF 50 (Zinc Oxide, Octinoxate, Homosalate, Bemotrizinol)",
            "Vitamin C",
            "Vitamin E"
        ],
        "ingredients": [
            "SPF 50 (Zinc Oxide, Octinoxate, Homosalate, Bemotrizinol)",
            "Vitamin C",
            "Vitamin E"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Stick",
        "finish": "Natural",
        "whiteCast": "Minimal",
        "bestFor": "A larger stick for face, ears, neck and hands.",
        "avoidIf": "You want a PA rating on the label.",
        "whyWeLikeIt": "A hybrid stick with zinc oxide and Tinosorb S (bemotrizinol) among its filters, with ingredients listed.",
        "pros": [
            "Zinc oxide plus modern filters",
            "20g, larger than most sticks",
            "Ingredient list on the listing"
        ],
        "cons": [
            "No PA rating stated",
            "Slightly emollient, may feel heavy on very oily skin"
        ],
        "verdict": "A good hybrid stick for normal to dry skin.",
        "alternatives": [
            {
                "label": "Most-Rated Option",
                "productId": "fixderma-sunscreen-stick",
                "reason": "A clear SPF 50 PA+++ stick."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8
        }
    },
    {
        "id": "lakme-sunstick-spf50",
        "name": "Sun Expert Invisible Sunstick SPF 50+",
        "title": "Lakmé Sun Expert Invisible Sunstick SPF 50+ PA++++ (8g)",
        "brand": "Lakmé",
        "category": "sunscreens",
        "subcategory": "Sunscreen Stick",
        "asin": "B0F1MY7LZJ",
        "amazonUrl": "https://www.amazon.in/dp/B0F1MY7LZJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0F1MY7LZJ?tag=oraeskin-21",
        "badge": "Best Budget Sunscreen Stick",
        "price": 259,
        "priceEst": "₹259",
        "currency": "₹",
        "size": "8g",
        "image": "/images/products/lakme-sunstick-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "200+",
        "reviewCount": "200+",
        "scoreBreakdown": {
            "formula": 7.8,
            "skinSuitability": 7.8,
            "evidence": 7.8,
            "userFeedback": 8.6,
            "value": 7.8,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Reapplication",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Octisalate, Tinosorb S)"
        ],
        "keyIngredients": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Octisalate, Tinosorb S)"
        ],
        "ingredients": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Octisalate, Tinosorb S)"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Silicone Stick",
        "finish": "Invisible",
        "whiteCast": "None",
        "bestFor": "A pocket-sized stick for touch-ups.",
        "avoidIf": "You need enough to cover arms; 8g runs out fast.",
        "whyWeLikeIt": "SPF 50+ PA++++ with Uvinul A Plus and Tinosorb S in a silky stick, with the ingredients listed.",
        "pros": [
            "PA++++ UVA rating",
            "Modern UVA filters listed",
            "Cheap to try"
        ],
        "cons": [
            "Only 8g",
            "Only 200+ ratings"
        ],
        "verdict": "A good, cheap stick for face touch-ups.",
        "alternatives": [
            {
                "label": "Bigger Stick",
                "productId": "fixderma-sunscreen-stick",
                "reason": "A 15g SPF 50 stick with 13,700+ ratings."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.1,
        "scores": {
            "formula": 7.8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 8.1
        }
    },
    {
        "id": "dotkey-lime-rush-sports-spf50",
        "name": "Lime Rush Swim + Sports Sunscreen SPF 50+",
        "title": "Dot & Key Lime Rush Swim + Sports Sunscreen SPF 50+ PA++++ (50g)",
        "brand": "Dot & Key",
        "category": "sunscreens",
        "subcategory": "Water-Resistant Sunscreen",
        "asin": "B0CTT91H5J",
        "amazonUrl": "https://www.amazon.in/dp/B0CTT91H5J?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CTT91H5J?tag=oraeskin-21",
        "badge": "Best Water-Resistant Sunscreen",
        "price": 470,
        "priceEst": "₹470",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/dotkey-lime-rush-sports-spf50.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "640+",
        "reviewCount": "640+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.2,
            "evidence": 8.2,
            "userFeedback": 8.6,
            "value": 8,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Sweat",
            "Swimming",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Tinosorb M)",
            "180-Minute Water Resistance"
        ],
        "keyIngredients": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Tinosorb M)",
            "180-Minute Water Resistance"
        ],
        "ingredients": [
            "SPF 50+ PA++++ (Octinoxate, Uvinul A Plus, Tinosorb M)",
            "180-Minute Water Resistance"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Lotion",
        "finish": "Non-Greasy",
        "whiteCast": "None",
        "bestFor": "Swimming, sports and long sweaty days outdoors.",
        "avoidIf": "You only need light daily protection indoors.",
        "whyWeLikeIt": "A sport sunscreen claiming 180 minutes of water and sweat resistance, with modern UVA filters listed.",
        "pros": [
            "Labelled water- and sweat-resistant for 180 minutes",
            "PA++++ with Uvinul A Plus and Tinosorb M",
            "Ingredient list on the listing"
        ],
        "cons": [
            "Only 640+ ratings",
            "Still needs reapplying after towelling off"
        ],
        "verdict": "Our top pick for swimming and workouts.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "neutrogena-ultra-sheer-spf50",
                "reason": "A long-running water-resistant SPF 50+."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.4,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8.4
        }
    },
    {
        "id": "neutrogena-ultra-sheer-spf50",
        "name": "Ultra Sheer Sunscreen SPF 50+",
        "title": "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 50+ PA++++ (80ml)",
        "brand": "Neutrogena",
        "category": "sunscreens",
        "subcategory": "Water-Resistant Sunscreen",
        "asin": "B082PFY9S7",
        "amazonUrl": "https://www.amazon.in/dp/B082PFY9S7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B082PFY9S7?tag=oraeskin-21",
        "badge": "Most-Rated Water-Resistant Sunscreen",
        "price": 429,
        "priceEst": "₹429",
        "currency": "₹",
        "size": "80ml",
        "image": "/images/products/neutrogena-ultra-sheer-spf50.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "24,300+",
        "reviewCount": "24,300+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 7.6,
            "evidence": 8,
            "userFeedback": 8.4,
            "value": 8.6,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Oily",
            "Combination"
        ],
        "concerns": [
            "Sweat",
            "Sun Protection"
        ],
        "keyActives": [
            "SPF 50+ PA++++ (Homosalate, Octisalate, Oxybenzone, Octocrylene, Avobenzone)"
        ],
        "keyIngredients": [
            "SPF 50+ PA++++ (Homosalate, Octisalate, Oxybenzone, Octocrylene, Avobenzone)"
        ],
        "ingredients": [
            "Water",
            "Homosalate",
            "Ethylhexyl Salicylate",
            "Benzophenone-3",
            "Octocrylene",
            "Butyl Methoxydibenzoylmethane",
            "Silica",
            "Styrene/Acrylates Copolymer",
            "Potassium Cetyl Phosphate",
            "Beeswax",
            "Glyceryl Stearate",
            "PEG-100 Stearate",
            "Cetyl Dimethicone",
            "Caprylyl Methicone",
            "Dimethicone",
            "Ethylhexylglycerin",
            "Behenyl Alcohol",
            "Sodium Polyacrylate",
            "Xanthan Gum",
            "Fragrance",
            "Disodium EDTA"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Lotion",
        "finish": "Dry-Touch",
        "whiteCast": "Minimal",
        "bestFor": "Daily outdoor use when you sweat, at a good price.",
        "avoidIf": "You are sensitive to fragrance or prefer to avoid oxybenzone.",
        "whyWeLikeIt": "A long-running water-resistant SPF 50+ with a dry-touch finish and 24,300+ ratings.",
        "pros": [
            "Labelled water-resistant",
            "24,300+ ratings",
            "80ml for ₹429"
        ],
        "cons": [
            "Contains oxybenzone and fragrance",
            "Older filters; can sting if it runs into eyes with sweat"
        ],
        "verdict": "Reliable and affordable, but sensitive skin may prefer Dot & Key.",
        "alternatives": [
            {
                "label": "Newer Filters",
                "productId": "dotkey-lime-rush-sports-spf50",
                "reason": "Water-resistant with Tinosorb M and Uvinul A Plus."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.1,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.6,
            "overall": 8.1
        }
    },
    {
        "id": "mitchell-neck-therapy-cream",
        "name": "Anti-Aging Neck Therapy Cream",
        "title": "Mitchell USA Anti-Aging Neck Therapy Cream (50g)",
        "brand": "Mitchell USA",
        "category": "anti-aging",
        "subcategory": "Neck Cream",
        "asin": "B0736VCPPV",
        "amazonUrl": "https://www.amazon.in/dp/B0736VCPPV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0736VCPPV?tag=oraeskin-21",
        "badge": "Best Dedicated Neck Cream",
        "price": 1007,
        "priceEst": "₹1007",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/mitchell-neck-therapy-cream.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "240+",
        "reviewCount": "240+",
        "scoreBreakdown": {
            "formula": 6.4,
            "skinSuitability": 7.6,
            "evidence": 5.6,
            "userFeedback": 8.2,
            "value": 6.4,
            "availability": 8.5
        },
        "skinType": [
            "Normal",
            "Dry"
        ],
        "concerns": [
            "Neck Lines",
            "Crepey Skin",
            "Dryness"
        ],
        "keyActives": [
            "Lotus Seed Extract",
            "Grape Seed Oil"
        ],
        "keyIngredients": [
            "Lotus Seed Extract",
            "Grape Seed Oil"
        ],
        "ingredients": [
            "Lotus Seed Extract",
            "Grape Seed Oil"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Anyone who wants a separate, rich moisturiser for the neck.",
        "avoidIf": "You expect it to firm or lift skin; evidence for that is weak.",
        "whyWeLikeIt": "A rich neck moisturiser with plant extracts. Moisturising can soften the look of fine lines.",
        "pros": [
            "Rich, comfortable texture",
            "Made for the neck area",
            "4.1★ rating"
        ],
        "cons": [
            "₹1,007, and the listing names only grape seed oil",
            "No retinoid or peptide stated, so little evidence for firming"
        ],
        "verdict": "Pleasant, but a retinoid plus sunscreen will do more for neck lines.",
        "alternatives": [
            {
                "label": "Better Evidence",
                "productId": "minimalist-granactive-retinoid-2",
                "reason": "A gentle retinoid cream for face and neck."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7,
        "scores": {
            "formula": 6.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.4,
            "overall": 7
        }
    },
    {
        "id": "mizon-snail-gold-eye-patch",
        "name": "Snail Intensive Gold Eye Gel Patch",
        "title": "Mizon Snail Intensive Gold Eye Gel Patch (60 Patches)",
        "brand": "Mizon",
        "category": "eye-care",
        "subcategory": "Hydrogel Eye Patches",
        "asin": "B07KGMWBHM",
        "amazonUrl": "https://www.amazon.in/dp/B07KGMWBHM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07KGMWBHM?tag=oraeskin-21",
        "badge": "Most-Rated Eye Patches",
        "price": 899,
        "priceEst": "₹899",
        "currency": "₹",
        "size": "60 patches",
        "image": "/images/products/mizon-snail-gold-eye-patch.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "13,800+",
        "reviewCount": "13,800+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.2,
            "evidence": 6.6,
            "userFeedback": 8.4,
            "value": 7.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Puffiness",
            "Dehydration",
            "Tired Eyes"
        ],
        "keyActives": [
            "Snail Mucin",
            "Gold"
        ],
        "keyIngredients": [
            "Snail Mucin",
            "Gold"
        ],
        "ingredients": [
            "Snail Mucin",
            "Gold"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrogel Patch",
        "finish": "Hydrated, Cool",
        "whiteCast": "Not Applicable",
        "bestFor": "Quick hydration and de-puffing before an event or makeup.",
        "avoidIf": "You expect them to remove dark circles.",
        "whyWeLikeIt": "Hydrogel patches with snail mucin, rated by 13,800+ buyers, at about ₹30 a pair.",
        "pros": [
            "13,800+ ratings",
            "30 pairs per jar",
            "Cooling and hydrating"
        ],
        "cons": [
            "Effects are temporary, mainly hydration and cooling",
            "The listing does not show the full ingredient list"
        ],
        "verdict": "A popular, good-value jar of patches for quick prep.",
        "alternatives": [
            {
                "label": "Caffeine Option",
                "productId": "mcaffeine-coffee-eye-patches",
                "reason": "Caffeine hydrogel patches for puffiness."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.4,
            "overall": 7.8
        }
    },
    {
        "id": "dotkey-watermelon-eye-patches",
        "name": "Watermelon Cooling Hydrogel Under Eye Patches",
        "title": "Dot & Key Watermelon Cooling Hydrogel Under Eye Patches (60 Patches)",
        "brand": "Dot & Key",
        "category": "eye-care",
        "subcategory": "Hydrogel Eye Patches",
        "asin": "B0C5HPRVP7",
        "amazonUrl": "https://www.amazon.in/dp/B0C5HPRVP7?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C5HPRVP7?tag=oraeskin-21",
        "badge": "Best Cooling Eye Patches",
        "price": 623,
        "priceEst": "₹623",
        "currency": "₹",
        "size": "60 patches",
        "image": "/images/products/dotkey-watermelon-eye-patches.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "660+",
        "reviewCount": "660+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8.2,
            "evidence": 6.6,
            "userFeedback": 8.4,
            "value": 7.8,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Puffiness",
            "Dehydration"
        ],
        "keyActives": [
            "Watermelon Extract",
            "Hyaluronic Acid",
            "Niacinamide"
        ],
        "keyIngredients": [
            "Watermelon Extract",
            "Hyaluronic Acid",
            "Niacinamide"
        ],
        "ingredients": [
            "Watermelon Extract",
            "Hyaluronic Acid",
            "Niacinamide"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrogel Patch",
        "finish": "Cool, Hydrated",
        "whiteCast": "Not Applicable",
        "bestFor": "A cooling 15-minute de-puff before makeup.",
        "avoidIf": "You want a strong dark-circle treatment.",
        "whyWeLikeIt": "Hyaluronic acid and niacinamide in cooling hydrogel patches, about ₹21 a pair.",
        "pros": [
            "Hyaluronic acid and niacinamide",
            "About ₹21 a pair",
            "Quick 15-minute use"
        ],
        "cons": [
            "Only 660+ ratings",
            "The listing names only watermelon as an ingredient"
        ],
        "verdict": "A cheaper, cooling alternative to Mizon.",
        "alternatives": [
            {
                "label": "Most-Rated Option",
                "productId": "mizon-snail-gold-eye-patch",
                "reason": "Snail mucin patches with 13,800+ ratings."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.8,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 7.8
        }
    },
    {
        "id": "mcaffeine-coffee-eye-patches",
        "name": "Coffee Hydrogel Under Eye Patches",
        "title": "mCaffeine Coffee Hydrogel Under Eye Patches with Caffeine (15 Pairs)",
        "brand": "mCaffeine",
        "category": "eye-care",
        "subcategory": "Hydrogel Eye Patches",
        "asin": "B0CR44H3PC",
        "amazonUrl": "https://www.amazon.in/dp/B0CR44H3PC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CR44H3PC?tag=oraeskin-21",
        "badge": "Best Caffeine Eye Patches",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "30 patches",
        "image": "/images/products/mcaffeine-coffee-eye-patches.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "470+",
        "reviewCount": "470+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 8,
            "evidence": 6.8,
            "userFeedback": 8.2,
            "value": 7.4,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Puffiness",
            "Tired Eyes"
        ],
        "keyActives": [
            "Caffeine (Coffee)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Caffeine (Coffee)",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Caffeine (Coffee)",
            "Hyaluronic Acid"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Hydrogel Patch",
        "finish": "Cool",
        "whiteCast": "Not Applicable",
        "bestFor": "Morning puffiness after a short night.",
        "avoidIf": "You need many uses; 15 pairs go quickly.",
        "whyWeLikeIt": "Caffeine and hyaluronic acid in hydrogel patches. Caffeine may help reduce puffiness for a few hours.",
        "pros": [
            "Caffeine for puffiness",
            "Hyaluronic acid for hydration",
            "Biodegradable patches, per the listing"
        ],
        "cons": [
            "Only 15 pairs, about ₹27 a pair",
            "The listing names only coffee as an ingredient"
        ],
        "verdict": "A good pick when puffiness, not dryness, is the main issue.",
        "alternatives": [
            {
                "label": "More Pairs",
                "productId": "dotkey-watermelon-eye-patches",
                "reason": "60 patches with hyaluronic acid and niacinamide."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.7,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.4,
            "overall": 7.7
        }
    },
    {
        "id": "cetaphil-brightening-night-cream",
        "name": "Bright Healthy Radiance Night Comfort Cream",
        "title": "Cetaphil Brightening Night Comfort Cream with Niacinamide (50g)",
        "brand": "Cetaphil",
        "category": "moisturizers",
        "subcategory": "Night Cream",
        "asin": "B08L95888H",
        "amazonUrl": "https://www.amazon.in/dp/B08L95888H?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08L95888H?tag=oraeskin-21",
        "badge": "Best Night Cream for Glow",
        "price": 1149,
        "priceEst": "₹1149",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/cetaphil-brightening-night-cream.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "4,500+",
        "reviewCount": "4,500+",
        "scoreBreakdown": {
            "formula": 8.4,
            "skinSuitability": 8.8,
            "evidence": 8,
            "userFeedback": 8.2,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "Normal",
            "Dry",
            "Sensitive"
        ],
        "concerns": [
            "Dullness",
            "Uneven Tone",
            "Dryness"
        ],
        "keyActives": [
            "Niacinamide",
            "Hyaluronic Acid",
            "Glycerin"
        ],
        "keyIngredients": [
            "Niacinamide",
            "Hyaluronic Acid",
            "Glycerin"
        ],
        "ingredients": [
            "Aqua",
            "Glycerin",
            "Niacinamide",
            "Butylene Glycol",
            "Hydrogenated Polydecene",
            "1,2-Hexanediol",
            "Cetearyl Alcohol",
            "Cetearyl Olivate",
            "Cetyl Ethylhexanoate",
            "Sorbitan Olivate",
            "Beeswax",
            "Vinyl Dimethicone",
            "Anhydroxylitol",
            "Citric Acid",
            "Ethylhexylglycerin",
            "Glyceryl Stearate",
            "Hyaluronic Acid",
            "Hydrolyzed Cicer Seed Extract",
            "Hydrolyzed Hyaluronic Acid",
            "Pancratium Maritimum Extract"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Cream",
        "finish": "Comfortable, Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry or sensitive skin that wants a gentle glow-boosting night cream.",
        "avoidIf": "You have very oily skin, or are on a tight budget.",
        "whyWeLikeIt": "Niacinamide high in the ingredient list with glycerin and hyaluronic acid, in a fragrance-free cream.",
        "pros": [
            "Niacinamide is third on the ingredient list",
            "Fragrance-free",
            "Ingredient list on the listing"
        ],
        "cons": [
            "₹1,149 for 50g",
            "Rich texture may feel heavy on oily skin"
        ],
        "verdict": "The gentlest glow-focused night cream here.",
        "alternatives": [
            {
                "label": "Budget Pick",
                "productId": "loreal-glycolic-night-cream",
                "reason": "A small glycolic acid night cream to try."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.3,
        "scores": {
            "formula": 8.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.8,
            "overall": 8.3
        }
    },
    {
        "id": "loreal-glycolic-night-cream",
        "name": "Glycolic Bright Glowing Night Cream",
        "title": "L'Oréal Paris Glycolic Bright Glowing Night Cream (15ml)",
        "brand": "L'Oréal Paris",
        "category": "moisturizers",
        "subcategory": "Night Cream",
        "asin": "B0B9QY2YHQ",
        "amazonUrl": "https://www.amazon.in/dp/B0B9QY2YHQ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0B9QY2YHQ?tag=oraeskin-21",
        "badge": "Best Budget Glow Night Cream",
        "price": 279,
        "priceEst": "₹279",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/loreal-glycolic-night-cream.jpg",
        "amazonRating": 4.2,
        "rating": 4.2,
        "amazonReviews": "2,700+",
        "reviewCount": "2,700+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 7.8,
            "evidence": 7.4,
            "userFeedback": 8.4,
            "value": 7.8,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Combination",
            "Oily"
        ],
        "concerns": [
            "Dullness",
            "Dark Spots",
            "Texture"
        ],
        "keyActives": [
            "Glycolic Acid"
        ],
        "keyIngredients": [
            "Glycolic Acid"
        ],
        "ingredients": [
            "Glycolic Acid"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Light Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "Trying a mild glycolic acid night cream before committing.",
        "avoidIf": "You already use a retinoid or strong acid at night.",
        "whyWeLikeIt": "A light night cream with glycolic acid, rated by 2,700+ buyers.",
        "pros": [
            "Glycolic acid for gentle exfoliation",
            "2,700+ ratings",
            "Cheap to try"
        ],
        "cons": [
            "Only 15ml",
            "The listing names only glycolic acid, not the full formula or percentage"
        ],
        "verdict": "A low-cost way to add a little glow overnight.",
        "alternatives": [
            {
                "label": "Gentler Option",
                "productId": "cetaphil-brightening-night-cream",
                "reason": "A fragrance-free niacinamide night cream."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 7.9
        }
    },
    {
        "id": "pilgrim-retinol-night-cream",
        "name": "Korean Retinol Night Cream",
        "title": "Pilgrim Korean Retinol Night Cream with Hyaluronic Acid & Vitamin C (50g)",
        "brand": "Pilgrim",
        "category": "moisturizers",
        "subcategory": "Night Cream",
        "asin": "B08WLSGJFC",
        "amazonUrl": "https://www.amazon.in/dp/B08WLSGJFC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08WLSGJFC?tag=oraeskin-21",
        "badge": "Best Budget Retinol Night Cream",
        "price": 467,
        "priceEst": "₹467",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/pilgrim-retinol-night-cream.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "4,200+",
        "reviewCount": "4,200+",
        "scoreBreakdown": {
            "formula": 7.4,
            "skinSuitability": 7.6,
            "evidence": 7.4,
            "userFeedback": 8.2,
            "value": 8.4,
            "availability": 9.5
        },
        "skinType": [
            "Normal",
            "Combination"
        ],
        "concerns": [
            "Fine Lines",
            "Dullness",
            "Uneven Tone"
        ],
        "keyActives": [
            "Retinol",
            "Niacinamide",
            "Vitamin C (Sodium Ascorbyl Phosphate)",
            "Panthenol"
        ],
        "keyIngredients": [
            "Retinol",
            "Niacinamide",
            "Vitamin C (Sodium Ascorbyl Phosphate)",
            "Panthenol"
        ],
        "ingredients": [
            "Retinol",
            "Niacinamide",
            "Vitamin C (Sodium Ascorbyl Phosphate)",
            "Panthenol"
        ],
        "fragrance": "Added Fragrance",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Gel Cream",
        "finish": "Light",
        "whiteCast": "Not Applicable",
        "bestFor": "A light, budget night cream with a little retinol and niacinamide.",
        "avoidIf": "You have sensitive skin or avoid fragrance.",
        "whyWeLikeIt": "Retinol, niacinamide, panthenol and vitamin C in one 50g cream, with the ingredients listed.",
        "pros": [
            "Retinol plus niacinamide",
            "50g for ₹467",
            "4,200+ ratings"
        ],
        "cons": [
            "Contains parfum",
            "Retinol percentage is not stated"
        ],
        "verdict": "A decent all-in-one, but Minimalist is gentler and fragrance-free.",
        "alternatives": [
            {
                "label": "Fragrance-Free Option",
                "productId": "minimalist-granactive-retinoid-2",
                "reason": "A gentle 2% retinoid night cream."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 7.9,
        "scores": {
            "formula": 7.4,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.4,
            "overall": 7.9
        }
    },
    {
        "id": "aveeno-baby-soothing-cream",
        "name": "Baby Soothing Relief Moisture Cream",
        "title": "Aveeno Baby Soothing Relief Moisture Cream with Colloidal Oat (100g)",
        "brand": "Aveeno",
        "category": "moisturizers",
        "subcategory": "Colloidal Oat Cream",
        "asin": "B0DCVLFTVL",
        "amazonUrl": "https://www.amazon.in/dp/B0DCVLFTVL?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DCVLFTVL?tag=oraeskin-21",
        "badge": "Best Colloidal Oat Cream",
        "price": 440,
        "priceEst": "₹440",
        "currency": "₹",
        "size": "100g",
        "image": "/images/products/aveeno-baby-soothing-cream.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "1,300+",
        "reviewCount": "1,300+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 9.2,
            "evidence": 8.6,
            "userFeedback": 8.8,
            "value": 8.2,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Very Dry",
            "Sensitive"
        ],
        "concerns": [
            "Itching",
            "Eczema-Prone Skin",
            "Dryness"
        ],
        "keyActives": [
            "Colloidal Oat (Oat Kernel Flour)",
            "Petrolatum",
            "Glycerin",
            "Dimethicone"
        ],
        "keyIngredients": [
            "Colloidal Oat (Oat Kernel Flour)",
            "Petrolatum",
            "Glycerin",
            "Dimethicone"
        ],
        "ingredients": [
            "Water",
            "Glycerin",
            "Petrolatum",
            "Mineral Oil",
            "Cetyl Alcohol",
            "Dimethicone",
            "Beeswax",
            "Hydroxypropyl Starch Phosphate",
            "Avena Sativa (Oat) Kernel Flour",
            "Glyceryl Stearate SE",
            "Carbomer",
            "Caprylyl Glycol",
            "Sodium Hydroxide",
            "Butylene Glycol",
            "Ethylhexylglycerin",
            "Palmitic Acid",
            "Stearic Acid",
            "Chlorphenesin",
            "Sodium Citrate",
            "Tetrasodium EDTA",
            "Glycine Soja (Soybean) Oil",
            "Citric Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Rich Cream",
        "finish": "Protective",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry, itchy, eczema-prone skin on adults and children.",
        "avoidIf": "You dislike a rich, slightly occlusive feel.",
        "whyWeLikeIt": "Colloidal oat with glycerin, petrolatum and dimethicone in a fragrance-free cream, a well-supported combination for itchy, dry skin.",
        "pros": [
            "Colloidal oat plus occlusives",
            "Fragrance-free",
            "4.4★ from 1,300+ ratings"
        ],
        "cons": [
            "Rich, may feel heavy in humid weather",
            "Labelled for babies, though it suits adults too"
        ],
        "verdict": "Our top pick for itchy, dry, eczema-prone skin.",
        "alternatives": [
            {
                "label": "Alternative",
                "productId": "bioderma-atoderm-baume",
                "reason": "A restorative balm for very dry skin."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.8,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8.2,
            "overall": 8.8
        }
    },
    {
        "id": "aquaoat-moisturizing-cream",
        "name": "Aqua Oat Moisturizing Cream",
        "title": "Emcure Aquaoat Moisturizing Cream with Colloidal Oatmeal & Ceramides (100g)",
        "brand": "Aquaoat",
        "category": "moisturizers",
        "subcategory": "Colloidal Oat Cream",
        "asin": "B0BSLF2RXJ",
        "amazonUrl": "https://www.amazon.in/dp/B0BSLF2RXJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BSLF2RXJ?tag=oraeskin-21",
        "badge": "Best Budget Oat Cream",
        "price": 410,
        "priceEst": "₹410",
        "currency": "₹",
        "size": "100g",
        "image": "/images/products/aquaoat-moisturizing-cream.jpg",
        "amazonRating": 4.1,
        "rating": 4.1,
        "amazonReviews": "160+",
        "reviewCount": "160+",
        "scoreBreakdown": {
            "formula": 7.6,
            "skinSuitability": 8.4,
            "evidence": 7.6,
            "userFeedback": 8.2,
            "value": 8,
            "availability": 8.5
        },
        "skinType": [
            "Dry",
            "Sensitive"
        ],
        "concerns": [
            "Itching",
            "Dryness"
        ],
        "keyActives": [
            "Colloidal Oatmeal",
            "Ceramides",
            "Shea Butter",
            "Glycerin"
        ],
        "keyIngredients": [
            "Colloidal Oatmeal",
            "Ceramides",
            "Shea Butter",
            "Glycerin"
        ],
        "ingredients": [
            "Colloidal Oatmeal",
            "Ceramides",
            "Shea Butter",
            "Glycerin"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Cream",
        "finish": "Soft",
        "whiteCast": "Not Applicable",
        "bestFor": "A colloidal oat and ceramide cream for dry, itchy skin.",
        "avoidIf": "You want to read the full formula first.",
        "whyWeLikeIt": "Colloidal oatmeal with ceramides and shea butter from a pharmaceutical brand.",
        "pros": [
            "Colloidal oatmeal plus ceramides",
            "Shea butter for richness",
            "100g tube"
        ],
        "cons": [
            "Only 160+ ratings",
            "The listing names only four ingredients"
        ],
        "verdict": "A reasonable alternative to Aveeno.",
        "alternatives": [
            {
                "label": "Most Trusted Option",
                "productId": "aveeno-baby-soothing-cream",
                "reason": "A fragrance-free colloidal oat cream."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 7.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 8,
            "overall": 8
        }
    },
    {
        "id": "minimalist-squalane-oil",
        "name": "Squalane 100% (Plant Derived)",
        "title": "Minimalist 100% Plant-Derived Squalane Face Oil (30ml)",
        "brand": "Minimalist",
        "category": "serums",
        "subcategory": "Squalane Oil",
        "asin": "B08KSL2QNF",
        "amazonUrl": "https://www.amazon.in/dp/B08KSL2QNF?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08KSL2QNF?tag=oraeskin-21",
        "badge": "Best Squalane Oil",
        "price": 664,
        "priceEst": "₹664",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-squalane-oil.jpg",
        "amazonRating": 4.4,
        "rating": 4.4,
        "amazonReviews": "1,900+",
        "reviewCount": "1,900+",
        "scoreBreakdown": {
            "formula": 8.6,
            "skinSuitability": 9,
            "evidence": 8.2,
            "userFeedback": 8.8,
            "value": 7.8,
            "availability": 9.5
        },
        "skinType": [
            "All Skin Types",
            "Dry",
            "Sensitive"
        ],
        "concerns": [
            "Dryness",
            "Barrier Repair"
        ],
        "keyActives": [
            "Squalane (olive-derived)"
        ],
        "keyIngredients": [
            "Squalane (olive-derived)"
        ],
        "ingredients": [
            "Squalane (olive-derived)"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Weightless Oil",
        "finish": "Non-Greasy",
        "whiteCast": "Not Applicable",
        "bestFor": "Adding a few drops to moisturiser, or sealing in serums at night.",
        "avoidIf": "You have fungal acne and want to be cautious with any oil.",
        "whyWeLikeIt": "Olive-derived squalane, a light, stable oil that mimics a component of skin’s own oil and rarely irritates.",
        "pros": [
            "Light and non-greasy",
            "Suits most skin types",
            "4.4★ from 1,900+ ratings"
        ],
        "cons": [
            "₹664 for 30ml",
            "An oil only seals in water; it does not hydrate on its own"
        ],
        "verdict": "The easiest squalane to add to any routine.",
        "alternatives": [
            {
                "label": "Cleanser Option",
                "productId": "the-ordinary-squalane-cleanser",
                "reason": "A squalane balm cleanser."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.6,
        "scores": {
            "formula": 8.6,
            "weatherResilience": 8,
            "texture": 8,
            "value": 7.8,
            "overall": 8.6
        }
    },
    {
        "id": "the-ordinary-squalane-cleanser",
        "name": "Squalane Cleanser",
        "title": "The Ordinary Squalane Cleanser (50ml)",
        "brand": "The Ordinary",
        "category": "cleansers",
        "subcategory": "Balm Cleanser",
        "asin": "B07PSKR85S",
        "amazonUrl": "https://www.amazon.in/dp/B07PSKR85S?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07PSKR85S?tag=oraeskin-21",
        "badge": "Best Squalane Cleanser",
        "price": 1050,
        "priceEst": "₹1050",
        "currency": "₹",
        "size": "50ml",
        "image": "/images/products/the-ordinary-squalane-cleanser.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "3,800+",
        "reviewCount": "3,800+",
        "scoreBreakdown": {
            "formula": 8.2,
            "skinSuitability": 8.8,
            "evidence": 7.6,
            "userFeedback": 8.6,
            "value": 6.6,
            "availability": 9
        },
        "skinType": [
            "Dry",
            "Normal",
            "Sensitive"
        ],
        "concerns": [
            "Makeup Removal",
            "Dryness"
        ],
        "keyActives": [
            "Squalane"
        ],
        "keyIngredients": [
            "Squalane"
        ],
        "ingredients": [
            "Squalane"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Balm-to-Oil",
        "finish": "Soft, Non-Stripping",
        "whiteCast": "Not Applicable",
        "bestFor": "Removing makeup and sunscreen without stripping dry skin.",
        "avoidIf": "You want a foaming wash; this is a soft balm.",
        "whyWeLikeIt": "A soap-free squalane balm cleanser that melts off makeup and sunscreen.",
        "pros": [
            "Soap-free, gentle on dry skin",
            "Removes sunscreen and makeup",
            "3,800+ ratings"
        ],
        "cons": [
            "₹1,050 for 50ml",
            "The listing does not show the full ingredient list"
        ],
        "verdict": "A gentle first cleanse for dry or sensitive skin.",
        "alternatives": [
            {
                "label": "Leave-On Option",
                "productId": "minimalist-squalane-oil",
                "reason": "Pure squalane to use after cleansing."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8.2,
        "scores": {
            "formula": 8.2,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.6,
            "overall": 8.2
        }
    },
    {
        "id": "the-ordinary-squalane-lip-balm",
        "name": "Squalane + Amino Acids Lip Balm",
        "title": "The Ordinary Squalane + Amino Acids Hydrating Lip Balm (15ml)",
        "brand": "The Ordinary",
        "category": "lip-care",
        "subcategory": "Lip Balm",
        "asin": "B0D8CXZKF3",
        "amazonUrl": "https://www.amazon.in/dp/B0D8CXZKF3?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0D8CXZKF3?tag=oraeskin-21",
        "badge": "Best Squalane Lip Balm",
        "price": 950,
        "priceEst": "₹950",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/the-ordinary-squalane-lip-balm.jpg",
        "amazonRating": 4.3,
        "rating": 4.3,
        "amazonReviews": "2,200+",
        "reviewCount": "2,200+",
        "scoreBreakdown": {
            "formula": 8,
            "skinSuitability": 8.6,
            "evidence": 7.2,
            "userFeedback": 8.6,
            "value": 6.8,
            "availability": 9
        },
        "skinType": [
            "All Skin Types"
        ],
        "concerns": [
            "Dry Lips",
            "Dry Cuticles"
        ],
        "keyActives": [
            "Squalane",
            "Amino Acids"
        ],
        "keyIngredients": [
            "Squalane",
            "Amino Acids"
        ],
        "ingredients": [
            "Squalane",
            "Amino Acids"
        ],
        "fragrance": "Not Disclosed on Listing",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Balm",
        "finish": "Glossy",
        "whiteCast": "Not Applicable",
        "bestFor": "Dry lips, plus elbows and cuticles.",
        "avoidIf": "You want SPF in your lip balm.",
        "whyWeLikeIt": "Squalane with amino acids in a balm made for lips, elbows and cuticles.",
        "pros": [
            "Multi-use: lips, elbows, cuticles",
            "15ml lasts a long time",
            "2,200+ ratings"
        ],
        "cons": [
            "₹950, pricey for a balm",
            "No SPF; the listing does not show the full ingredients"
        ],
        "verdict": "A nice multi-use balm, but costly.",
        "alternatives": [
            {
                "label": "Better Value",
                "productId": "aquaphor-lip-repair",
                "reason": "A fragrance-free repair lip balm."
            }
        ],
        "lastPriceChecked": "October 2026",
        "lastEditorialReview": "October 2026",
        "inStock": true,
        "oraeSkinScore": 8,
        "scores": {
            "formula": 8,
            "weatherResilience": 8,
            "texture": 8,
            "value": 6.8,
            "overall": 8
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
