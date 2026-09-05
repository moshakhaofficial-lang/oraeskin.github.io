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
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/minimalist-spf50.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "24,300+",
        "reviewCount": "24,300+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 449,
        "priceEst": "₹449",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/dermaco-hyaluronic-spf50.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "19,500+",
        "reviewCount": "19,500+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 395,
        "priceEst": "₹395",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/dotkey-watermelon-spf50.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "14,200+",
        "reviewCount": "14,200+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B09SLF5ZH8",
        "amazonUrl": "https://www.amazon.in/dp/B09SLF5ZH8?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09SLF5ZH8?tag=oraeskin-21",
        "badge": "Best Luminous Glow for Dry Skin",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/aqualogica-radiance-spf50.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "16,800+",
        "reviewCount": "16,800+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 499,
        "priceEst": "₹499",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/drsheths-ceramide-vitc-spf50.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "18,400+",
        "reviewCount": "18,400+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B08F9V7T7S",
        "amazonUrl": "https://www.amazon.in/dp/B08F9V7T7S?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B08F9V7T7S?tag=oraeskin-21",
        "badge": "Best Sweat & Humidity Proof",
        "price": 780,
        "priceEst": "₹780",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/reequil-ultra-matte-spf50.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "21,100+",
        "reviewCount": "21,100+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B003YMJJSK",
        "amazonUrl": "https://www.amazon.in/dp/B003YMJJSK?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B003YMJJSK?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Daily Wash",
        "price": 650,
        "priceEst": "₹650",
        "currency": "₹",
        "size": "236ml",
        "image": "/images/products/cerave-foaming-cleanser.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "32,400+",
        "reviewCount": "32,400+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 299,
        "priceEst": "₹299",
        "currency": "₹",
        "size": "100ml",
        "image": "/images/products/minimalist-salicylic-cleanser.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "28,100+",
        "reviewCount": "28,100+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 335,
        "priceEst": "₹335",
        "currency": "₹",
        "size": "125ml",
        "image": "/images/products/cetaphil-gentle-cleanser.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "38,900+",
        "reviewCount": "38,900+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0DFPZVTWZ",
        "amazonUrl": "https://www.amazon.in/dp/B0DFPZVTWZ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DFPZVTWZ?tag=oraeskin-21",
        "badge": "Best Korean Brightening Foam",
        "price": 649,
        "priceEst": "₹649",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/faceshop-rice-cleanser.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "12,800+",
        "reviewCount": "12,800+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 249,
        "priceEst": "₹249",
        "currency": "₹",
        "size": "150ml",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0HFRS79JS",
        "amazonUrl": "https://www.amazon.in/dp/B0HFRS79JS?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0HFRS79JS?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Vitamin C",
        "price": 699,
        "priceEst": "₹699",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-vitc-10.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "17,200+",
        "reviewCount": "17,200+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0HG9T9T28",
        "amazonUrl": "https://www.amazon.in/dp/B0HG9T9T28?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0HG9T9T28?tag=oraeskin-21",
        "badge": "Best High-Potency Vitamin C",
        "price": 550,
        "priceEst": "₹550",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/plum-vitc-mandarin.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "14,800+",
        "reviewCount": "14,800+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0FYHFR32Q",
        "amazonUrl": "https://www.amazon.in/dp/B0FYHFR32Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0FYHFR32Q?tag=oraeskin-21",
        "badge": "Best for Open Pores & Oil Control",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-niacinamide-10.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "31,500+",
        "reviewCount": "31,500+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0GWN2JFFM",
        "amazonUrl": "https://www.amazon.in/dp/B0GWN2JFFM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0GWN2JFFM?tag=oraeskin-21",
        "badge": "Best for Stubborn Dark Marks & Melasma",
        "price": 549,
        "priceEst": "₹549",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-alpha-arbutin.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "16,700+",
        "reviewCount": "16,700+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0DMTDN158",
        "amazonUrl": "https://www.amazon.in/dp/B0DMTDN158?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0DMTDN158?tag=oraeskin-21",
        "badge": "Best Soothing Texture Serum",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/dermaco-10-niacinamide.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "15,300+",
        "reviewCount": "15,300+",
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
        "lastPriceChecked": "September 2026",
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
        "name": "Rice Water & Ceramide Hydrating Cream",
        "title": "Dot & Key Rice Water & Ceramide Deep Hydrating Moisturizer",
        "brand": "Dot & Key",
        "category": "moisturizers",
        "subcategory": "Barrier Repair Gel-Cream",
        "asin": "B0BDVG99J5",
        "amazonUrl": "https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21",
        "badge": "Best for Indian Glass Skin",
        "price": 395,
        "priceEst": "₹395",
        "currency": "₹",
        "size": "100g",
        "image": "/images/products/dotkey-rice-ceramide-cream.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "18,600+",
        "reviewCount": "18,600+",
        "scoreBreakdown": {
            "formula": 9.4,
            "skinSuitability": 9.6,
            "evidence": 9.3,
            "userFeedback": 9.5,
            "value": 9.8,
            "availability": 9.8
        },
        "skinType": [
            "Normal",
            "Dry",
            "Combination"
        ],
        "concerns": [
            "Barrier Damage",
            "Rough Texture",
            "Dehydration",
            "Flakiness"
        ],
        "keyActives": [
            "Fermented Japanese Rice Water",
            "Ceramides (NP, AP, EOP)",
            "Hyaluronic Acid"
        ],
        "keyIngredients": [
            "Oryza Sativa (Rice) Bran Water",
            "Ceramide Complex",
            "Sodium Hyaluronate",
            "Probiotic Ferment"
        ],
        "ingredients": [
            "Aqua",
            "Rice Bran Water",
            "Glycerin",
            "Ceramide NP",
            "Hyaluronic Acid",
            "Shea Butter"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Pudding Gel-Cream",
        "finish": "Luminous Plump Glow",
        "whiteCast": "Not Applicable",
        "bestFor": "Rebuilding a damaged, compromised barrier while achieving a luminous dewy radiance.",
        "avoidIf": "You have extremely oily skin in humid monsoons and prefer an oil-free water gel.",
        "whyWeLikeIt": "Combines ancient Asian rice fermentation with cutting-edge ceramides at a high-value ₹395 price point.",
        "pros": [
            "Ceramides rebuild the stratum corneum lipid barrier in 7 days",
            "Fermented rice water tightens skin elasticity and softens rough texture",
            "Decent 100g tub offers superior value per gram compared to competitors"
        ],
        "cons": [
            "Tub packaging requires using clean fingertips or a cosmetic spatula"
        ],
        "verdict": "An incredible barrier-strengthening moisturizer that provides salon-level glass skin hydration.",
        "alternatives": [
            {
                "label": "Oil-Free Alternative for Oily Skin",
                "productId": "minimalist-b5-moisturizer",
                "reason": "Ultra-lightweight oil-free formula with 10% Vitamin B5."
            },
            {
                "label": "Ultra-Rich Medical Alternative",
                "productId": "cerave-moisturizing-cream",
                "reason": "Deeper occlusion for severely flaking skin."
            }
        ],
        "lastPriceChecked": "September 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.5,
        "scores": {
            "formula": 9.4,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 9.8,
            "overall": 9.5
        }
    },
    {
        "id": "cerave-moisturizing-cream",
        "name": "Moisturizing Cream with Ceramides",
        "title": "CeraVe Moisturizing Cream with 3 Essential Ceramides & MVE Tech",
        "brand": "CeraVe",
        "category": "moisturizers",
        "subcategory": "Intensive Barrier Cream",
        "asin": "B00TTD9BRC",
        "amazonUrl": "https://www.amazon.in/dp/B00TTD9BRC?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00TTD9BRC?tag=oraeskin-21",
        "badge": "Best for Severely Dry & Compromised Skin",
        "price": 420,
        "priceEst": "₹420",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/cerave-moisturizing-cream.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "45,200+",
        "reviewCount": "45,200+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 349,
        "priceEst": "₹349",
        "currency": "₹",
        "size": "50g",
        "image": "/images/products/minimalist-b5-moisturizer.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "19,400+",
        "reviewCount": "19,400+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B07CH8F17Q",
        "amazonUrl": "https://www.amazon.in/dp/B07CH8F17Q?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B07CH8F17Q?tag=oraeskin-21",
        "badge": "Best Medical Grade Barrier Rescue",
        "price": 790,
        "priceEst": "₹790",
        "currency": "₹",
        "size": "75ml",
        "image": "/images/products/bioderma-atoderm-baume.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "11,200+",
        "reviewCount": "11,200+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0D4K7R9S5",
        "amazonUrl": "https://www.amazon.in/dp/B0D4K7R9S5?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0D4K7R9S5?tag=oraeskin-21",
        "badge": "Best for Brightening & Rough Texture",
        "price": 499,
        "priceEst": "₹499",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/minimalist-glycolic-toner.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "13,500+",
        "reviewCount": "13,500+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B00OCJ5MVM",
        "amazonUrl": "https://www.amazon.in/dp/B00OCJ5MVM?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B00OCJ5MVM?tag=oraeskin-21",
        "badge": "Best Gentle Daily Pore Refiner",
        "price": 390,
        "priceEst": "₹390",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/plum-greentea-toner.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "24,100+",
        "reviewCount": "24,100+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0H9RYLKZJ",
        "amazonUrl": "https://www.amazon.in/dp/B0H9RYLKZJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0H9RYLKZJ?tag=oraeskin-21",
        "badge": "Best for Sensitive Skin Exfoliation",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "150ml",
        "image": "/images/products/minimalist-pha-toner.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "11,400+",
        "reviewCount": "11,400+",
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
        "lastPriceChecked": "September 2026",
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
        "inStock": true,
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
        "inStock": true,
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
        "name": "5% Caffeine Under-Eye Serum",
        "title": "Minimalist 5% Caffeine Under-Eye Serum with EGCG & Peptides",
        "brand": "Minimalist",
        "category": "eye-care",
        "subcategory": "De-Puffing Eye Serum",
        "asin": "B0CHYR58VF",
        "amazonUrl": "https://www.amazon.in/dp/B0CHYR58VF?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0CHYR58VF?tag=oraeskin-21",
        "badge": "Best for Morning Puffiness & Screen Fatigue",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-caffeine-eye-serum.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "14,300+",
        "reviewCount": "14,300+",
        "scoreBreakdown": {
            "formula": 9.6,
            "skinSuitability": 9.6,
            "evidence": 9.7,
            "userFeedback": 9.3,
            "value": 9.5,
            "availability": 9.8
        },
        "skinType": [
            "All",
            "Combination",
            "Oily"
        ],
        "concerns": [
            "Puffy Eyes",
            "Late Night Fatigue",
            "Vascular Dark Circles"
        ],
        "keyActives": [
            "5% High-Grade Caffeine",
            "Green Tea EGCG",
            "Matrixyl 3000 Peptide Complex"
        ],
        "keyIngredients": [
            "Caffeine",
            "Epigallocatechin Gallatyl Glucoside",
            "Palmitoyl Tripeptide-1",
            "Hyaluronic Acid"
        ],
        "ingredients": [
            "Aqua",
            "Caffeine",
            "Glycerin",
            "Propanediol",
            "Palmitoyl Tripeptide-1",
            "EGCG"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Cooling Water Serum",
        "finish": "Instantly Absorbed",
        "whiteCast": "Not Applicable",
        "bestFor": "De-puffing swollen eyelids from late screen nights and draining stagnant under-eye fluids.",
        "avoidIf": "You need heavy occlusive hydration for severe flaky dryness around the orbital bone.",
        "whyWeLikeIt": "Caffeine constricts dilated under-eye blood vessels within minutes, instantly reducing bluish vascular shadows.",
        "pros": [
            "High 5% Caffeine acts as a vasoconstrictor to visibly reduce puffiness",
            "Matrixyl 3000 peptides stimulate collagen to thicken thinning under-eye skin",
            "Generous 30ml dropper bottle lasts over 6 months of daily use"
        ],
        "cons": [
            "Does not provide heavy moisture; dry skin should layer a moisturizer on top"
        ],
        "verdict": "The best targeted fluid serum for morning eye bags and digital eye strain in India.",
        "alternatives": [
            {
                "label": "Moisturizing Cream Alternative",
                "productId": "cerave-eye-repair",
                "reason": "Adds deep ceramide lipids for dry orbital skin."
            }
        ],
        "lastPriceChecked": "September 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.6,
        "scores": {
            "formula": 9.6,
            "weatherResilience": 9.6,
            "texture": 9.6,
            "value": 9.5,
            "overall": 9.6
        }
    },
    {
        "id": "dermaco-5-caffeine-serum",
        "name": "5% Caffeine Under-Eye Serum with Roller",
        "title": "The Derma Co 5% Caffeine Under-Eye Serum with 1% Hyaluronic Acid",
        "brand": "The Derma Co",
        "category": "eye-care",
        "subcategory": "Cooling Roller Eye Serum",
        "asin": "B0G6KTR337",
        "amazonUrl": "https://www.amazon.in/dp/B0G6KTR337?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0G6KTR337?tag=oraeskin-21",
        "badge": "Best Cooling Metal Roller Applicator",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "15ml",
        "image": "/images/products/dermaco-5-caffeine-serum.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "11,100+",
        "reviewCount": "11,100+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 299,
        "priceEst": "₹299",
        "currency": "₹",
        "size": "8g",
        "image": "/images/products/minimalist-spf30-lipbalm.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "15,600+",
        "reviewCount": "15,600+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 345,
        "priceEst": "₹345",
        "currency": "₹",
        "size": "20g",
        "image": "/images/products/dotkey-lip-mask.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "13,400+",
        "reviewCount": "13,400+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0C7VQNQ4B",
        "amazonUrl": "https://www.amazon.in/dp/B0C7VQNQ4B?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0C7VQNQ4B?tag=oraeskin-21",
        "badge": "Editor's Choice — Best for Bacne",
        "price": 399,
        "priceEst": "₹399",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/minimalist-salicylic-bodywash.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "17,800+",
        "reviewCount": "17,800+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 380,
        "priceEst": "₹380",
        "currency": "₹",
        "size": "200ml",
        "image": "/images/products/plum-bodylovin-vanilla-lotion.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "19,200+",
        "reviewCount": "19,200+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 215,
        "priceEst": "₹215",
        "currency": "₹",
        "size": "190ml",
        "image": "/images/products/biotique-morning-nectar-lotion.jpg",
        "amazonRating": 4.5,
        "rating": 4.5,
        "amazonReviews": "34,500+",
        "reviewCount": "34,500+",
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
        "lastPriceChecked": "September 2026",
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
        "name": "100% Hydrocolloid Invisible Acne Patches",
        "title": "The Derma Co 100% Hydrocolloid Invisible Acne Spot Patches",
        "brand": "The Derma Co",
        "category": "spot-treatments",
        "subcategory": "Hydrocolloid Pimple Patch",
        "asin": "B09B3CPDSJ",
        "amazonUrl": "https://www.amazon.in/dp/B09B3CPDSJ?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B09B3CPDSJ?tag=oraeskin-21",
        "badge": "Best Overnight Emergency Patch",
        "price": 349,
        "priceEst": "₹349",
        "currency": "₹",
        "size": "24 Patches",
        "image": "/images/products/dermaco-acne-patch.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "16,200+",
        "reviewCount": "16,200+",
        "scoreBreakdown": {
            "formula": 9.8,
            "skinSuitability": 9.9,
            "evidence": 9.9,
            "userFeedback": 9.7,
            "value": 9.6,
            "availability": 9.9
        },
        "skinType": [
            "All"
        ],
        "concerns": [
            "Pus-Filled Pimples",
            "Whiteheads",
            "Skin Picking Urges"
        ],
        "keyActives": [
            "Medical-Grade Hydrocolloid",
            "Salicylic Acid Infusion"
        ],
        "keyIngredients": [
            "Hydrocolloid Polymer",
            "Salicylic Acid"
        ],
        "ingredients": [
            "Hydrocolloid Gel Matrix",
            "Salicylic Acid"
        ],
        "fragrance": "Fragrance-Free",
        "essentialOils": false,
        "alcoholFree": true,
        "texture": "Ultra-Thin Hydrocolloid Film",
        "finish": "Invisible Matte Discretion",
        "whiteCast": "Not Applicable",
        "bestFor": "Flattening ripe, pus-filled whiteheads overnight and preventing fingernail picking scars.",
        "avoidIf": "You are treating deep blind hormonal cystic bumps with no visible head (use Sebogel instead).",
        "whyWeLikeIt": "Absorbs pus, oil, and wound exudate into a white gel matrix overnight while preventing bacterial contamination.",
        "pros": [
            "Flattens ripe pimples overnight without drying surrounding skin",
            "Ultra-thin beveled edge makes the patch virtually invisible on video calls",
            "Physically blocks fingers from picking and causing permanent post-acne indentations"
        ],
        "cons": [
            "Not effective on deep, blind, non-pus cysts without a visible surface head"
        ],
        "verdict": "An indispensable medicine cabinet essential that eliminates whiteheads cleanly without scarring.",
        "alternatives": [
            {
                "label": "Deep Cystic Gel Alternative",
                "productId": "sebogel-spot-gel",
                "reason": "Penetrates blind under-the-skin bumps with 2% Salicylic & Nicotinamide."
            }
        ],
        "lastPriceChecked": "September 2026",
        "lastEditorialReview": "September 2026",
        "inStock": true,
        "oraeSkinScore": 9.8,
        "scores": {
            "formula": 9.8,
            "weatherResilience": 9.9,
            "texture": 9.9,
            "value": 9.6,
            "overall": 9.8
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
        "price": 240,
        "priceEst": "₹240",
        "currency": "₹",
        "size": "30g",
        "image": "/images/products/sebogel-spot-gel.jpg",
        "amazonRating": 4.6,
        "rating": 4.6,
        "amazonReviews": "26,400+",
        "reviewCount": "26,400+",
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
        "lastPriceChecked": "September 2026",
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
        "asin": "B0789NX2ZV",
        "amazonUrl": "https://www.amazon.in/dp/B0789NX2ZV?tag=oraeskin-21",
        "affiliateUrl": "https://www.amazon.in/dp/B0789NX2ZV?tag=oraeskin-21",
        "badge": "Editor's Choice — Best Beginner Retinol",
        "price": 599,
        "priceEst": "₹599",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-retinol-03.jpg",
        "amazonRating": 4.7,
        "rating": 4.7,
        "amazonReviews": "15,800+",
        "reviewCount": "15,800+",
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
        "lastPriceChecked": "September 2026",
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
        "price": 699,
        "priceEst": "₹699",
        "currency": "₹",
        "size": "30ml",
        "image": "/images/products/minimalist-granactive-retinoid-2.jpg",
        "amazonRating": 4.8,
        "rating": 4.8,
        "amazonReviews": "12,900+",
        "reviewCount": "12,900+",
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
        "lastPriceChecked": "September 2026",
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
    }
];

// Helper Query Functions
export function getAllProducts(): SkincareProduct[] {
    return PRODUCTS;
}

export function getProductById(id: string): SkincareProduct | undefined {
    return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): SkincareProduct[] {
    return PRODUCTS.filter(p => p.category === category);
}

export function getProductsByConcern(concern: string): SkincareProduct[] {
    const lower = concern.toLowerCase();
    return PRODUCTS.filter(p => p.concerns.some(c => c.toLowerCase().includes(lower)));
}

export function getProductsBySkinType(skinType: SkinType): SkincareProduct[] {
    if (skinType === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.skinType.includes(skinType) || p.skinType.includes('All'));
}

export function getTopPicks(limit = 6): SkincareProduct[] {
    return [...PRODUCTS].sort((a, b) => b.oraeSkinScore - a.oraeSkinScore).slice(0, limit);
}

export function getAlternativeProducts(productId: string): { product: SkincareProduct; label: string; reason: string }[] {
    const p = getProductById(productId);
    if (!p || !p.alternatives) return [];
    return p.alternatives
        .map(alt => {
            const target = getProductById(alt.productId);
            if (!target) return null;
            return { product: target, label: alt.label, reason: alt.reason };
        })
        .filter((item): item is { product: SkincareProduct; label: string; reason: string } => item !== null);
}
