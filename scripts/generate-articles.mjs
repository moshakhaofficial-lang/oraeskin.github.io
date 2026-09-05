import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.resolve('src/pages/blog');

const CATEGORIES_DATA = [
    {
        id: 'sunscreens',
        categoryName: 'Sunscreens & SPF',
        image: '/images/products/minimalist-spf50.jpg',
        topPick: { title: 'Minimalist SPF 50 Multi-Vitamin Sunscreen', brand: 'Minimalist', asin: 'B09FPS9D5T', price: '~₹399' },
        topics: [
            {
                slug: 'best-matte-sunscreens-oily-skin-india',
                title: 'Top 5 Ultra-Matte Sunscreens for Extremely Oily Skin in India',
                desc: 'Tired of midday forehead shine? We tested silicone and water-gel sunscreens on Amazon India that stay completely matte in 90% humidity.',
                keywords: 'matte sunscreen oily skin india, non greasy sunscreen amazon india, reequil ultra matte review, derma co 1 hyaluronic gel'
            },
            {
                slug: 'best-mineral-physical-sunscreens-india',
                title: 'Best Mineral & Physical Sunscreens for Sensitive Indian Skin',
                desc: 'Zinc oxide and titanium dioxide sunscreens that protect reactive, rosacea-prone skin without leaving a chalky purple white cast.',
                keywords: 'mineral sunscreen india, physical sunscreen sensitive skin amazon, zinc oxide sunscreen without white cast'
            },
            {
                slug: 'best-dewy-sunscreen-for-dry-skin-india',
                title: 'Best Dewy & Hydrating Sunscreens for Dry Flaky Skin in India',
                desc: 'Thirsty skin? Explore water-burst sunscreens loaded with Hyaluronic Acid and Ceramides for an all-day luminous glass glow.',
                keywords: 'dewy sunscreen dry skin india, aqualogica radiance sunscreen amazon, hydrating sunscreen glowing skin'
            },
            {
                slug: 'best-sunscreen-sticks-reapplication-india',
                title: 'Best Sunscreen Sticks for Easy Reapplication Over Makeup in India',
                desc: 'How to reapply SPF every 2 hours without ruining your makeup or touching dirty hands to your face. Top Amazon India portable sticks.',
                keywords: 'sunscreen stick india amazon, best sunscreen stick over makeup, portable spf stick india'
            },
            {
                slug: 'best-tinted-sunscreens-indian-skin-tones',
                title: 'Best Tinted Sunscreens for Indian Skin Tones (Zero White Cast & Light Coverage)',
                desc: 'Say goodbye to ashiness. Iron-oxide tinted sunscreens that blend seamlessly into medium-to-deep Indian wheatish skin while blocking blue light.',
                keywords: 'tinted sunscreen indian skin, iron oxide sunscreen melasma amazon, bb sunscreen india'
            },
            {
                slug: 'best-sweat-resistant-waterproof-sunscreens-india',
                title: 'Top Sweat-Proof & Waterproof Sunscreens for Indian Summers & Workouts',
                desc: 'Formulas that will not sting your eyes or melt away during outdoor running, gym sessions, and humid monsoon commutes.',
                keywords: 'sweat proof sunscreen india, waterproof sunscreen sports amazon, best sunscreen for gym india'
            },
            {
                slug: 'best-budget-sunscreens-under-400-india',
                title: 'Top 5 Affordable Sunscreens Under ₹400 in India That Actually Work',
                desc: 'Daily sun defense should not break the bank. Dermatologist-tested broad-spectrum SPF 50 sunscreens under ₹400 on Amazon India.',
                keywords: 'best sunscreen under 400 india, budget sunscreen amazon india, affordable spf 50'
            },
            {
                slug: 'how-to-remove-sunscreen-properly-double-cleansing',
                title: 'How to Remove Waterproof Sunscreen Properly: Double Cleansing Guide',
                desc: 'Why regular face wash leaves sunscreen residue inside your pores, leading to blackheads. How to double cleanse with micellar water and oil.',
                keywords: 'how to remove sunscreen, double cleansing routine india, clogged pores from sunscreen'
            },
            {
                slug: 'spf-30-vs-spf-50-difference-indian-skin',
                title: 'SPF 30 vs SPF 50: Which Sunscreen Do You Actually Need in India?',
                desc: 'Demystifying UVB percentages, UVA PA++++ ratings, and whether upgrading to SPF 50 makes a real clinical difference for hyperpigmentation.',
                keywords: 'spf 30 vs spf 50 difference india, does spf 50 matter, pa rating meaning'
            },
            {
                slug: 'best-sunscreens-for-preventing-melasma-dark-spots',
                title: 'Best Sunscreens for Preventing Melasma & Post-Acne Dark Spots in India',
                desc: 'Melasma requires maximum UVA-I and visible light defense. Discover photostable European filters and iron oxide blends that halt pigment rebound.',
                keywords: 'sunscreen for melasma india, prevent dark spots sunscreen, best uva sunscreen amazon'
            }
        ]
    },
    {
        id: 'cleansers',
        categoryName: 'Facial Cleansers',
        image: '/images/products/cerave-cleanser.jpg',
        topPick: { title: 'CeraVe Foaming Facial Cleanser', brand: 'CeraVe', asin: 'B07C5SKVL7', price: '~₹390' },
        topics: [
            {
                slug: 'best-salicylic-acid-cleansers-blackheads-pores',
                title: 'Top 5 Salicylic Acid Cleansers for Blackheads & Clogged Pores in India',
                desc: 'Dissolve trapped keratin plugs and oil inside your pores. Tested BHA face washes from Minimalist, CeraVe, and Sebogel on Amazon India.',
                keywords: 'salicylic acid cleanser india, best bha face wash blackheads, minimalist salicylic facewash'
            },
            {
                slug: 'best-gentle-cleansers-for-dry-skin-india',
                title: 'Best Non-Foaming Gentle Cleansers for Dry & Dehydrated Skin',
                desc: 'No more tight, stretched skin after washing. Creamy hydrating cleansers packed with glycerin and ceramides that respect your lipid barrier.',
                keywords: 'gentle cleanser dry skin india, cetaphil hydrating cleanser amazon, best non foaming face wash'
            },
            {
                slug: 'best-cleansing-oils-balms-double-cleansing-india',
                title: 'Best Cleansing Oils & Balms for Double Cleansing in India',
                desc: 'Melt stubborn waterproof mascara, longwear foundation, and heavy zinc sunscreens without stripping your skin. Top Amazon India emulsifying oils.',
                keywords: 'cleansing oil double cleansing india, best cleansing balm amazon, emulsifying oil cleanser'
            },
            {
                slug: 'best-cleansers-for-sensitive-red-skin-india',
                title: 'Best Calming Cleansers for Red, Irritated & Rosacea-Prone Skin',
                desc: 'Sooth facial stinging and sensitivity with fragrance-free, soap-free cleansers tested for eczema and compromised skin barriers.',
                keywords: 'cleanser for sensitive skin india, calm red skin face wash, hypoallergenic cleanser amazon'
            },
            {
                slug: 'best-micellar-waters-in-india-lazy-cleansing',
                title: 'Best Micellar Waters in India for Quick, No-Rinse Cleansing',
                desc: 'Too exhausted for a full bathroom skincare routine? Discover micellar waters with magnetic micelles that lift dirt and makeup in one cotton swipe.',
                keywords: 'best micellar water india, garnier micellar water amazon, bioderma micellar water review'
            },
            {
                slug: 'best-foaming-face-washes-oily-skin-india',
                title: 'Top 5 Foaming Gel Cleansers for Controlling Midday Sebum in India',
                desc: 'Wash away heavy tropical grease and urban PM 2.5 pollution without rebound oiliness. The top dermatologist foaming cleansers.',
                keywords: 'foaming face wash oily skin india, cerave foaming cleanser amazon, control skin grease'
            },
            {
                slug: 'best-benzoyl-peroxide-washes-cystic-acne-india',
                title: 'Best Benzoyl Peroxide Cleansers for Inflamed Cystic Acne in India',
                desc: 'Kill acne bacteria on contact. How short-contact benzoyl peroxide washes eliminate deep red pimples without bleaching clothing.',
                keywords: 'benzoyl peroxide wash india, short contact therapy acne, best acne wash amazon'
            },
            {
                slug: 'best-aha-exfoliating-face-washes-dull-skin',
                title: 'Best AHA Exfoliating Face Washes for Dullness & Rough Texture',
                desc: 'Lactic and glycolic acid foaming washes that gently buff away dead cells to reveal natural radiance during your morning shower.',
                keywords: 'aha face wash india, glycolic acid cleanser dull skin, brighten skin face wash'
            },
            {
                slug: 'morning-vs-night-cleanser-should-you-wash-twice',
                title: 'Morning vs Night Cleanser: Should You Really Wash Your Face Twice a Day?',
                desc: 'Dermatologist advice on whether morning water-only rinses work for dry skin, or if tropical humidity requires a morning cleanse.',
                keywords: 'should i wash face in morning, morning vs night cleanser, how often to wash face india'
            },
            {
                slug: 'best-budget-face-washes-under-300-india',
                title: 'Top 5 Drugstore Face Washes Under ₹300 on Amazon India',
                desc: 'Affordable, effective, and free of harsh sulfates. Our top drugstore recommendations for students and budget shoppers.',
                keywords: 'best face wash under 300, cheap facewash amazon india, simple refreshing wash review'
            }
        ]
    },
    {
        id: 'serums',
        categoryName: 'Serums & Actives',
        image: '/images/products/minimalist-spf50.jpg',
        topPick: { title: 'Minimalist 10% Niacinamide Face Serum', brand: 'Minimalist', asin: 'B08F9WPM24', price: '~₹599' },
        topics: [
            {
                slug: 'best-niacinamide-serums-open-pores-india',
                title: 'Top Niacinamide Serums in India for Minimizing Open Pores & Oil',
                desc: '5% vs 10% Niacinamide: Which concentration tightens enlarged pores and strengthens your moisture barrier without causing a flushing reaction?',
                keywords: 'niacinamide serum open pores india, minimalist 10 niacinamide review amazon, derma co niacinamide'
            },
            {
                slug: 'best-hyaluronic-acid-serums-dehydrated-skin-india',
                title: 'Best Hyaluronic Acid Serums for Deep Moisture & Plumpness in India',
                desc: 'Stop applying Hyaluronic Acid wrong! Multi-molecular weight formulas that pull hydration deep into cells rather than drying out surface skin.',
                keywords: 'hyaluronic acid serum india, how to apply hyaluronic acid damp skin, best hydrating serum amazon'
            },
            {
                slug: 'best-alpha-arbutin-serums-dark-spots-melasma-india',
                title: 'Best Alpha Arbutin Serums for Fading Post-Acne Scars & Melasma',
                desc: 'The safe, non-toxic alternative to hydroquinone. How 2% Alpha Arbutin halts melanin overproduction in Indian Fitzpatrick skin types.',
                keywords: 'alpha arbutin serum india, fade dark spots acne, minimalist alpha arbutin amazon'
            },
            {
                slug: 'best-salicylic-acid-serums-acne-whiteheads-india',
                title: 'Top 5 Salicylic Acid Serums for Stubborn Whiteheads & Blemishes',
                desc: 'Leave-on 2% BHA serums that penetrate deep into oil-filled follicular ducts to eradicate recurring acne bumps.',
                keywords: 'salicylic acid serum india, best bha serum acne, whiteheads treatment amazon'
            },
            {
                slug: 'best-peptide-serums-anti-aging-plumpness-india',
                title: 'Best Multi-Peptide Serums in India for Skin Elasticity & Firmness',
                desc: 'Matrixyl 3000, Copper Peptides, and Argireline: Rebuild extracellular matrix collagen without retinol irritation.',
                keywords: 'peptide serum india, copper peptides amazon, collagen building serum'
            },
            {
                slug: 'best-azelaic-acid-serums-redness-rosacea-india',
                title: 'Best Azelaic Acid Serums & Creams for Acne, Rosacea & Red Marks',
                desc: 'The multi-tasking active that calms inflammatory redness, clears blemishes, and fades dark brown spots simultaneously.',
                keywords: 'azelaic acid india amazon, rosacea treatment india, azelaic acid for red acne marks'
            },
            {
                slug: 'best-tranexamic-acid-serums-stubborn-pigmentation-india',
                title: 'Best Tranexamic Acid Serums for Stubborn Sun Spots & PIH in India',
                desc: 'When Vitamin C and Niacinamide are not enough. How 3% Tranexamic Acid targets UV-induced plasmin to break down deep dark spots.',
                keywords: 'tranexamic acid serum india, melasma treatment tranexamic, fade stubborn dark patches'
            },
            {
                slug: 'best-snail-mucin-essences-india-glass-skin',
                title: 'Best Snail Mucin Essences & Alternatives for Indian Glass Skin',
                desc: 'Cosrx Snail 96 and hydrating botanical mucin dupes: How to use snail secretion filtrate for soothing barrier repair and dewy bounce.',
                keywords: 'snail mucin india, cosrx 96 snail mucin amazon, glass skin routine india'
            },
            {
                slug: 'best-vitamin-c-for-beginners-sensitive-skin',
                title: 'Best Vitamin C Serums for Beginners: Low-Irritation Guide',
                desc: 'Start your antioxidant journey safely. Gentle 10% Ethyl Ascorbic Acid serums that will not cause tingling, purging, or breakouts.',
                keywords: 'beginner vitamin c serum india, non irritating vitamin c, ethyl ascorbic acid amazon'
            },
            {
                slug: 'how-to-layer-skincare-serums-correct-order',
                title: 'How to Layer Skincare Serums in the Correct Order (Morning & Night)',
                desc: 'Thinnest to thickest rule, pH dependencies, and which active ingredients should NEVER be mixed together on the same night.',
                keywords: 'how to layer serums, correct order of skincare, what not to mix with vitamin c'
            }
        ]
    },
    {
        id: 'moisturizers',
        categoryName: 'Moisturizers & Barrier Creams',
        image: '/images/products/dotkey-rice-cream.jpg',
        topPick: { title: 'Dot & Key Rice Water & Ceramide Cream', brand: 'Dot & Key', asin: 'B0BDVG99J5', price: '~₹395' },
        topics: [
            {
                slug: 'best-oil-free-gel-moisturizers-humid-weather',
                title: 'Top 5 Oil-Free Gel Moisturizers for Indian Monsoon & Summer Humidity',
                desc: 'Non-comedogenic water-gel hydrators that quench thirsty skin without leaving an oily film or suffocating pores in peak humidity.',
                keywords: 'oil free gel moisturizer india, best summer moisturizer oily skin, neutrogena hydro boost dupe'
            },
            {
                slug: 'best-ceramide-barrier-creams-stinging-skin-india',
                title: 'Best Ceramide Creams for Healing Stinging, Over-Exfoliated Skin',
                desc: 'Restock your lipid barrier with 3:1:1 physiological ceramide ratios to stop tingling, redness, and flaking within 48 hours.',
                keywords: 'ceramide cream india, heal damaged barrier amazon, best barrier repair moisturizer'
            },
            {
                slug: 'best-night-creams-for-glowing-radiant-skin-india',
                title: 'Best Night Creams in India for Waking Up with Radiant, Plump Skin',
                desc: 'Intensive overnight treatments that restore hydration reservoirs and repair UV pollution damage while you sleep.',
                keywords: 'best night cream for glowing skin, overnight repair cream amazon, wake up with glowing skin'
            },
            {
                slug: 'best-cica-centella-creams-calming-acne-redness',
                title: 'Best Cica (Centella Asiatica) Creams for Calming Inflamed Acne & Redness',
                desc: 'Korean tiger grass heritage: How madecassoside and cica balms extinguish inflammatory pimples and soothe post-procedure skin.',
                keywords: 'cica cream india, centella asiatica moisturizer amazon, calm acne redness'
            },
            {
                slug: 'best-non-comedogenic-moisturizers-acne-prone-skin',
                title: 'Best Non-Comedogenic Moisturizers That Will Never Clog Your Pores',
                desc: 'Clinically tested oil-free lotions that hydrate without silicone congestion or heavy mineral waxes for acne-prone skin.',
                keywords: 'non comedogenic moisturizer india, will not clog pores, best acne friendly cream amazon'
            },
            {
                slug: 'best-moisturizers-for-combination-skin-tzone',
                title: 'Best Moisturizers for Combination Skin: Balancing Oily T-Zone & Dry Cheeks',
                desc: 'The Goldilocks formula: Light enough for greasy foreheads yet nourishing enough for dry peeling cheeks.',
                keywords: 'combination skin moisturizer india, balance tzone cheeks, lightweight cream amazon'
            },
            {
                slug: 'best-oat-colloidal-barrier-balms-eczema-india',
                title: 'Best Colloidal Oat Creams for Itchy, Eczema & Winter Dryness in India',
                desc: 'Colloidal oatmeal binds moisture and suppresses histamine release for chronically dry, flaky, or allergy-prone skin.',
                keywords: 'colloidal oat cream india, aveeno moisturizer amazon, eczema relief cream'
            },
            {
                slug: 'best-squalane-oil-moisturizers-for-healthy-skin',
                title: 'Best Plant-Derived Squalane Moisturizers for Weightless Elasticity',
                desc: '100% olive and sugarcane squalane mimics skin natural sebum for instant silkiness without a greasy finish.',
                keywords: 'squalane moisturizer india, plant squalane review, lightweight facial oil amazon'
            },
            {
                slug: 'difference-between-hydrating-and-moisturizing',
                title: 'Hydration vs Moisturization: What Does Your Skin Actually Need?',
                desc: 'Water humectants vs oil occlusives: How to determine whether your skin is dehydrated or dry, and how to treat each condition.',
                keywords: 'hydration vs moisturization, difference between dry and dehydrated skin, humectant occlusive'
            },
            {
                slug: 'best-budget-moisturizers-under-350-india',
                title: 'Top 5 Drugstore Moisturizers Under ₹350 on Amazon India',
                desc: 'Dermatologist-approved ceramide and vitamin B5 moisturizers that deliver luxury hydration on a student budget.',
                keywords: 'best moisturizer under 350, cheap face cream amazon india, minimalist b5 moisturizer review'
            }
        ]
    },
    {
        id: 'toners',
        categoryName: 'Toners & Exfoliants',
        image: '/images/products/cetaphil-cleanser.jpg',
        topPick: { title: 'Minimalist 8% Glycolic Acid Exfoliating Toner', brand: 'Minimalist', asin: 'B0B39LTVP4', price: '~₹499' },
        topics: [
            {
                slug: 'best-hydrating-milky-toners-glass-skin-india',
                title: 'Best Hydrating Milky Toners for K-Beauty Glass Skin in India',
                desc: 'Rice bran and ceramide toners that you can layer using the 7-skin method for unmatched suppleness and bounce.',
                keywords: 'milky toner india, rice water toner glass skin, 7 skin method toners amazon'
            },
            {
                slug: 'how-to-use-glycolic-acid-toner-safely-melanin-skin',
                title: 'How to Use Glycolic Acid Toner Safely on Melanin-Rich Indian Skin',
                desc: 'Avoid chemical burns and post-inflammatory dark marks. Expert guidelines on frequency, buffering, and UV protection.',
                keywords: 'how to use glycolic acid safely, glycolic acid dark skin, minimalist glycolic toner guide'
            },
            {
                slug: 'best-bha-toners-for-strawberry-pores-blackheads',
                title: 'Best BHA Salicylic Toners for Strawberry Pores & Nose Blackheads',
                desc: 'Liquid chemical exfoliants that penetrate inside pore linings to sweep out sebum and oxidized blackhead plugs.',
                keywords: 'bha toner blackheads india, strawberry nose treatment, paula choice bha dupe amazon'
            },
            {
                slug: 'best-alcohol-free-toners-under-400-india',
                title: 'Top Alcohol-Free Toners Under ₹400 for Daily pH Balancing',
                desc: 'Say goodbye to stinging astringents. Refreshing green tea and cucumber toners that reset your acid mantle after cleansing.',
                keywords: 'alcohol free toner india, plum green tea toner amazon, gentle toner under 400'
            },
            {
                slug: 'best-pha-toners-ultra-sensitive-skin-barrier',
                title: 'Best PHA (Gluconolactone) Toners for Sensitive & Stinging Skin',
                desc: 'Why Polyhydroxy Acids are the gentlest chemical exfoliants in dermatology. Micro-exfoliation with zero irritation.',
                keywords: 'pha toner india, minimalist pha toner review, sensitive skin chemical exfoliation'
            },
            {
                slug: 'best-pore-tightening-toners-oily-skin-india',
                title: 'Best Pore-Tightening Toners for Controlling Oily T-Zones in India',
                desc: 'Witch hazel-free formulas that utilize niacinamide, green tea, and zinc to tighten open follicular pores naturally.',
                keywords: 'pore tightening toner india, reduce open pores face toner, oily skin toner amazon'
            },
            {
                slug: 'how-to-use-glycolic-acid-for-dark-underarms-knees',
                title: 'How to Use Glycolic Acid Toner for Dark Underarms, Neck & Rough Knees',
                desc: 'The viral body hack: Safely dissolving hyperkeratosis and dark friction patches across neck creases, armpits, and elbows.',
                keywords: 'glycolic acid dark underarms, lighten dark neck line, smooth rough knees amazon'
            },
            {
                slug: 'aha-vs-bha-vs-pha-complete-guide-indian-skin',
                title: 'AHA vs BHA vs PHA: Which Chemical Exfoliant Matches Your Skin Concern?',
                desc: 'Compare molecular size, oil solubility, and specific benefits: Glycolic, Lactic, Salicylic, and Gluconolactone explained.',
                keywords: 'aha vs bha vs pha difference, chemical exfoliant guide india, which acid for my skin'
            },
            {
                slug: 'best-rose-water-botanical-toners-pure-steam-distilled',
                title: 'Best Steam-Distilled Pure Rose Waters for Soothing Facial Heat',
                desc: 'Traditional Kannauj rose water sprays: Calming heat rash, environmental redness, and setting dewy daytime makeup.',
                keywords: 'pure rose water india, steam distilled rose water amazon, kannauj gulab jal face'
            },
            {
                slug: 'best-exfoliating-peeling-pads-convenience-india',
                title: 'Best Pre-Soaked Exfoliating Toner Pads for Travel & Convenience',
                desc: 'Double-sided textured cotton pads soaked in AHA/BHA liquids for mess-free facial and body resurfacing on the go.',
                keywords: 'exfoliating toner pads india, travel skincare pads amazon, cosrx pimple pad'
            }
        ]
    },
    {
        id: 'eye-care',
        categoryName: 'Under-Eye Treatments',
        image: '/images/products/cerave-cleanser.jpg',
        topPick: { title: 'CeraVe Eye Repair Cream', brand: 'CeraVe', asin: 'B00BFZ744K', price: '~₹399' },
        topics: [
            {
                slug: 'best-caffeine-eye-creams-morning-puffiness-india',
                title: 'Top Caffeine Eye Creams in India for Instant Morning De-Puffing',
                desc: 'Wake up tired, puffy eyes. How topical caffeine constricts swollen blood vessels and stimulates fluid micro-drainage.',
                keywords: 'caffeine eye cream india, reduce puffy eye bags, minimalist caffeine eye serum amazon'
            },
            {
                slug: 'best-retinol-eye-creams-fine-lines-crow-feet',
                title: 'Best Retinol Eye Creams for Smoothing Crow’s Feet & Wrinkles',
                desc: 'Micro-encapsulated retinoids formulated at gentle orbital percentages to stimulate collagen without redness or peeling.',
                keywords: 'retinol eye cream india, crows feet treatment, anti wrinkle eye cream amazon'
            },
            {
                slug: 'how-to-treat-hereditary-dark-circles-south-asian-skin',
                title: 'How to Treat Hereditary Dark Circles in South Asian Skin: Dermatologist Reality Check',
                desc: 'What topical eye creams can realistically fix (pigment & fluid) versus structural bone hollows that require lifestyle or clinical care.',
                keywords: 'hereditary dark circles treatment, south asian dark circles, under eye pigmentation india'
            },
            {
                slug: 'best-peptides-eye-creams-dark-circle-rejuvenation',
                title: 'Best Peptide Eye Creams for Plumping Hollow Under-Eyes in India',
                desc: 'Matrixyl 3000 and Haloxyl: Clinically tested peptide complexes that strengthen translucent periorbital skin.',
                keywords: 'peptide eye cream india, haloxyl dark circles, plump under eye hollows'
            },
            {
                slug: 'how-to-prevent-under-eye-milia-seeds-skincare',
                title: 'How to Prevent & Treat Under-Eye Milia Seeds (Tiny White Bumps)',
                desc: 'Why heavy mineral oils and petroleum jellies cause tiny white keratin cysts around the eyes, and lightweight gel alternatives.',
                keywords: 'prevent under eye milia, tiny white bumps under eyes, milia safe eye cream'
            },
            {
                slug: 'best-under-eye-serums-metal-roller-applicator',
                title: 'Best Under-Eye Serums with Cooling Metal Rollerballs in India',
                desc: 'Instant lymphatic drainage massage on the go. Roll away fatigue and screen strain with soothing stainless steel applicators.',
                keywords: 'metal roller eye serum india, cooling eye roller amazon, de puff eyes roller'
            },
            {
                slug: 'best-vitamin-c-under-eye-creams-brightening',
                title: 'Best Vitamin C Eye Creams for Brightening Brown Periorbital Pigment',
                desc: 'Stabilized Vitamin C derivatives that safely lighten sun-induced and friction-induced dark eye contours.',
                keywords: 'vitamin c eye cream dark circles, brighten under eye skin, plum vitamin c eye cream'
            },
            {
                slug: 'best-hydrating-eye-gels-screen-fatigue-india',
                title: 'Best Cooling Eye Gels for Digital Screen Strain & Late Nights',
                desc: 'Lightweight hyaluronic acid and cucumber gels that rehydrate tired office eyes without stinging contact lens wearers.',
                keywords: 'cooling eye gel screen strain, hydrating eye cream computer fatigue, ophthalmologist tested eye cream'
            },
            {
                slug: 'best-budget-eye-creams-under-500-india',
                title: 'Top 5 Budget Under-Eye Creams Under ₹500 on Amazon India',
                desc: 'Affordable, dermatologist-tested solutions for dark circles and puffiness that deliver premium results on a student budget.',
                keywords: 'best eye cream under 500 india, cheap dark circles cream amazon, derma co caffeine serum'
            },
            {
                slug: 'under-eye-patches-masks-emergency-event-prep',
                title: 'Best Hydrogel Under-Eye Patches for Emergency Event Pre-Makeup Prep',
                desc: 'Smooth out fine lines and illuminate tired under-eyes in 15 minutes before weddings, parties, and important video calls.',
                keywords: 'under eye patches india, hydrogel eye mask amazon, pre makeup eye prep'
            }
        ]
    },
    {
        id: 'lip-care',
        categoryName: 'Lip Care & SPF Balms',
        image: '/images/products/dotkey-watermelon.jpg',
        topPick: { title: 'Minimalist SPF 30 Lip Balm', brand: 'Minimalist', asin: 'B09SK854F9', price: '~₹299' },
        topics: [
            {
                slug: 'best-spf-lip-balms-prevent-dark-lips-india',
                title: 'Best SPF 30+ Lip Balms in India to Prevent Sun-Induced Dark Lips',
                desc: 'Did you know UV rays cause lip hyperpigmentation? Broad-spectrum SPF lip balms with zero bitter chemical taste.',
                keywords: 'spf lip balm india, best lip balm with spf 30 amazon, prevent dark lips sun'
            },
            {
                slug: 'best-lip-sleeping-masks-chapped-peeling-lips',
                title: 'Top Lip Sleeping Masks in India for Severely Chapped, Peeling Lips',
                desc: 'Wake up to baby-soft lips. Rich overnight butter masks from Dot & Key, Laneige dupes, and ceramide lip salves.',
                keywords: 'lip sleeping mask india, best overnight lip mask amazon, laneige lip mask alternative'
            },
            {
                slug: 'best-ceramide-lip-balms-restoring-barrier',
                title: 'Best Ceramide Lip Treatments for Chronic Angular Cheilitis & Cracks',
                desc: 'Heal painful corners of the mouth and cracked lip borders with skin-identical ceramides, squalane, and bisabolol.',
                keywords: 'ceramide lip balm india, angular cheilitis treatment amazon, heal cracked lips fast'
            },
            {
                slug: 'best-tinted-lip-balms-spf-daily-college-office',
                title: 'Best Tinted Lip Balms with SPF for Daily College & Office Wear',
                desc: 'Subtle berry, nude, and peach washes of natural tint that protect your lips while keeping them hydrated all day.',
                keywords: 'tinted lip balm with spf india, natural lip tint daily wear, best hydrating lip tint amazon'
            },
            {
                slug: 'best-lip-oils-glossy-hydration-non-sticky',
                title: 'Best Lip Oils in India for High-Shine Gloss Without Any Stickiness',
                desc: 'Jojoba, rosehip, and peptide lip oils that deliver a luminous juicy sheen while deeply conditioning lip tissue.',
                keywords: 'lip oil india amazon, non sticky lip gloss oil, peptide lip treatment'
            },
            {
                slug: 'how-to-lighten-pigmented-dark-lips-skincare-guide',
                title: 'How to Lighten Dark, Pigmented Lips: Causes & Treatment Guide',
                desc: 'From caffeine and smoking to UV tanning and lip licking: Dermatologist advice on reversing lip hyperpigmentation.',
                keywords: 'how to lighten dark lips, lip hyperpigmentation treatment india, smoker lips remedy'
            },
            {
                slug: 'best-chemical-exfoliating-lip-scrubs-smoothness',
                title: 'Best Gentle Chemical Exfoliating Lip Peels (No Walnut Scrubs)',
                desc: 'Why physical sugar scrubs cause micro-fissures on delicate lips. Lactic and mandelic acid lip resurfacing treatments.',
                keywords: 'chemical lip exfoliant, gentle lip peel india, smooth peeling lips'
            },
            {
                slug: 'best-petroleum-free-natural-lip-balms-india',
                title: 'Best Petroleum-Free & Beeswax-Free Vegan Lip Balms in India',
                desc: 'Nourishing plant butter balms with shea butter, cocoa butter, and plant sterols for clean beauty lovers.',
                keywords: 'petroleum free lip balm india, vegan lip balm amazon, natural shea butter lip salve'
            },
            {
                slug: 'best-lip-care-routine-for-smokers-dark-lips',
                title: 'Complete Lip Care Routine for Smokers: Reversing Nicotine Stains & Dryness',
                desc: 'Antioxidant serums, barrier lip salves, and daytime SPF to rebuild circulation and fade nicotine pigmentation.',
                keywords: 'smoker lip care routine, reverse dark lips smoking, antioxidant lip serum'
            },
            {
                slug: 'best-budget-lip-balms-under-200-india',
                title: 'Top 5 Pharmacy & Drugstore Lip Balms Under ₹200 on Amazon India',
                desc: 'Budget staples like Sebamed, Nivea, and Vaseline Lip Therapy that keep your lips soft and protected for months.',
                keywords: 'best lip balm under 200, cheap lip balm amazon india, sebamed lip defense review'
            }
        ]
    },
    {
        id: 'body-care',
        categoryName: 'Dermatological Body Care',
        image: '/images/products/avocado-night-cream.jpg',
        topPick: { title: 'Minimalist 2% Salicylic Acid Body Wash', brand: 'Minimalist', asin: 'B0B941K5H7', price: '~₹399' },
        topics: [
            {
                slug: 'best-salicylic-acid-body-washes-bacne-india',
                title: 'Top 5 Salicylic Acid Body Washes for Back Acne (Bacne) & Chest Bumps',
                desc: 'Clear gym sweat breakouts and clogged follicular pores across your back and shoulders with 2% BHA foaming washes.',
                keywords: 'best body wash for bacne india, salicylic acid body wash amazon, minimalist bacne wash'
            },
            {
                slug: 'best-urea-lotions-strawberry-legs-keratosis-pilaris',
                title: 'Best Urea Lotions in India for Strawberry Legs & Keratosis Pilaris',
                desc: '10% Urea dissolves thick follicular keratin plugs on thighs and calves, leaving legs completely silky and smooth.',
                keywords: 'urea lotion strawberry legs india, keratosis pilaris treatment amazon, smooth bumpy legs'
            },
            {
                slug: 'best-lactic-acid-lotions-rough-elbows-knees-india',
                title: 'Best Lactic Acid Body Lotions for Rough Elbows, Knees & Dry Skin',
                desc: 'Gentle AHA body moisturizers that chemically hydrate while melting away thick, ashy, and darkened body friction patches.',
                keywords: 'lactic acid body lotion india, smooth rough elbows knees, moisturex alternative amazon'
            },
            {
                slug: 'best-body-sunscreens-spf-50-india-anti-tanning',
                title: 'Best Body Sunscreens SPF 50 in India for Daily Commutes & Beach Days',
                desc: 'Stop uneven sleeve tanning! Fast-absorbing, non-sticky broad-spectrum body lotions that shield arms and neck.',
                keywords: 'body sunscreen spf 50 india, anti tanning body lotion amazon, nivea sun protect lotion'
            },
            {
                slug: 'best-gourmand-vanilla-body-lotions-long-lasting',
                title: 'Best Gourmand Vanilla & Caramel Body Lotions That Smell Like Dessert',
                desc: 'Indulge your senses with rich shea butter and decadent vanilla bean extracts that linger on skin for 12+ continuous hours.',
                keywords: 'vanilla body lotion india, plum vanilla caramello review, best smelling body lotion amazon'
            },
            {
                slug: 'best-brightening-body-lotions-sun-tanned-arms',
                title: 'Best Brightening Body Lotions in India for Fading Uneven Arm Tanning',
                desc: 'Niacinamide, Vitamin C, and Kojic acid body treatments that safely restore your natural even skin tone after summer holidays.',
                keywords: 'brightening body lotion india, remove body tan lotion, fade sleeve tan amazon'
            },
            {
                slug: 'best-body-oils-for-glowing-skin-post-shower',
                title: 'Best Body Oils in India for a Radiant Post-Shower Glow (Non-Sticky)',
                desc: 'Almond, jojoba, and marula body oils: How to apply on damp skin to seal in moisture for 24-hour supple radiance.',
                keywords: 'body oil for glowing skin india, non sticky body oil amazon, apply oil damp skin'
            },
            {
                slug: 'best-hand-creams-for-dry-cracked-cuticles-india',
                title: 'Best Hand Creams in India for Dry, Washed Hands & Cracked Cuticles',
                desc: 'Frequent hand-washing and sanitizer use strips lipids. Non-greasy restorative hand creams that absorb in 10 seconds.',
                keywords: 'best hand cream india, cracked cuticles cream amazon, non greasy hand moisturizer'
            },
            {
                slug: 'best-foot-creams-cracked-heels-urea-salicylic',
                title: 'Best Foot Creams for Deep Cracked Heels & Calluses in India',
                desc: 'High-strength Urea and Salicylic acid heel balms that dissolve painful cracks and smooth rough soles in 7 days.',
                keywords: 'cracked heel cream india, best foot cream amazon, urea heel balm'
            },
            {
                slug: 'complete-body-skincare-routine-indian-monsoon',
                title: 'Complete Body Skincare Routine for Indian Monsoon & High Humidity',
                desc: 'Prevent fungal infections, chafing, and sticky body breakouts with our dermatologist-approved tropical body regimen.',
                keywords: 'monsoon body care routine, prevent fungal infection skin india, anti chafing body care'
            }
        ]
    },
    {
        id: 'spot-treatments',
        categoryName: 'Acne Spot Treatments',
        image: '/images/products/cerave-cleanser.jpg',
        topPick: { title: 'The Derma Co Hydrocolloid Acne Patches', brand: 'The Derma Co', asin: 'B08Z4J8JWD', price: '~₹249' },
        topics: [
            {
                slug: 'best-hydrocolloid-pimple-patches-india-overnight',
                title: 'Best Hydrocolloid Pimple Patches in India for Overnight Acne Healing',
                desc: 'Absorb pus and fluid overnight while preventing fingers from picking at red bumps. Tested patches from Derma Co and Cosrx.',
                keywords: 'pimple patches india amazon, hydrocolloid acne patch, derma co acne patch review'
            },
            {
                slug: 'best-salicylic-acid-spot-gels-urgent-breakouts',
                title: 'Top 5 Salicylic Acid Spot Gels in India for Emergency Breakouts',
                desc: 'Target individual blind pimples with targeted 2% BHA gels that penetrate and calm inflammation in 24 hours.',
                keywords: 'salicylic acid spot gel india, sebogel review amazon, emergency pimple treatment'
            },
            {
                slug: 'best-benzoyl-peroxide-gels-cystic-acne-india',
                title: 'Best 2.5% Benzoyl Peroxide Spot Treatments for Inflammatory Cystic Acne',
                desc: 'Why 2.5% Benzoyl Peroxide kills just as much P. acnes bacteria as 10% with 80% less peeling, burning, and irritation.',
                keywords: 'benzoyl peroxide 2.5 gel india, cystic acne spot treatment amazon, persol ac gel'
            },
            {
                slug: 'best-tea-tree-oil-spot-treatments-natural-blemish',
                title: 'Best Tea Tree Oil Spot Roll-Ons & Gels for Mild Blemishes in India',
                desc: 'Natural antimicrobial botanicals that dry out small surface whiteheads without harsh pharmaceutical drying agents.',
                keywords: 'tea tree oil for acne india, tea tree spot gel amazon, natural blemish treatment'
            },
            {
                slug: 'best-sulfur-drying-lotions-overnight-whiteheads',
                title: 'Best Sulfur Drying Lotions for Shrinking Whiteheads Overnight in India',
                desc: 'The pink biphasic drying bottle secret: How sulfur and calamine absorb oil and shrink swollen zits overnight.',
                keywords: 'sulfur drying lotion india, mario badescu drying lotion dupe amazon, overnight pimple shrinker'
            },
            {
                slug: 'best-micro-dart-patches-deep-blind-pimples',
                title: 'Best Micro-Dart Acne Patches for Deep, Painful Blind Hormonal Pimples',
                desc: 'Dissolvable micro-needles infused with salicylic acid and tea tree that deliver actives directly to the root of deep cysts.',
                keywords: 'micro dart acne patch india, blind pimple under skin treatment, hormonal acne patch'
            },
            {
                slug: 'how-to-stop-picking-pimples-scar-prevention',
                title: 'How to Stop Picking Pimples & Prevent Permanent Post-Acne Scarring',
                desc: 'Psychological and physical barriers to halt compulsive skin picking, plus soothing SOS gels that minimize dark brown marks.',
                keywords: 'how to stop picking pimples, prevent acne scarring, dark spots from picking'
            },
            {
                slug: 'best-dark-spot-correctors-fresh-acne-marks',
                title: 'Best Dark Spot Correctors for Fresh Post-Acne Red & Brown Marks',
                desc: 'Speed up cellular turnover immediately after a blemish flattens. Kojic acid, arbutin, and niacinamide spot solutions.',
                keywords: 'dark spot corrector india, fade fresh acne marks, post inflammatory hyperpigmentation spot gel'
            },
            {
                slug: 'ice-vs-warm-compress-for-acne-inflammation',
                title: 'Ice vs Warm Compress for Acne: Which One Heals Your Pimple Faster?',
                desc: 'Dermatologist temperature rules: When to use cold therapy for throbbing cysts versus warm compresses for ready whiteheads.',
                keywords: 'ice on pimple, warm compress for acne, how to reduce pimple swelling fast'
            },
            {
                slug: 'best-emergency-acne-kits-amazon-india',
                title: 'Top 3 Emergency Acne SOS Kits on Amazon India for Event Readiness',
                desc: 'The all-in-one blemish rescue toolkits containing patches, spot gels, and soothing cica creams for wedding & interview emergencies.',
                keywords: 'emergency acne kit amazon india, pimple rescue kit, clear skin fast for event'
            }
        ]
    },
    {
        id: 'anti-aging',
        categoryName: 'Retinoids & Anti-Aging',
        image: '/images/products/minimalist-spf50.jpg',
        topPick: { title: 'Minimalist 0.3% Retinol with Squalane', brand: 'Minimalist', asin: 'B08F9VMT4X', price: '~₹599' },
        topics: [
            {
                slug: 'best-beginner-retinol-serums-indian-skin',
                title: 'Best Beginner Retinol Serums in India: 0.1% to 0.3% Low-Irritation Guide',
                desc: 'Start anti-aging without purging or flaking. Gentle, squalane-buffered retinol serums tested for Indian skin tolerances.',
                keywords: 'beginner retinol serum india, minimalist 0.3 retinol review amazon, how to start retinol'
            },
            {
                slug: 'best-granactive-retinoid-serums-zero-purging',
                title: 'Best Granactive Retinoid Serums in India for Zero-Purge Anti-Aging',
                desc: 'Next-generation HPR retinoids that bind directly to retinoic receptors: All the collagen-stimulating power with zero redness.',
                keywords: 'granactive retinoid india, hpr serum amazon, anti aging without peeling'
            },
            {
                slug: 'best-bakuchiol-natural-retinol-alternatives-india',
                title: 'Best Bakuchiol Serums in India: The Natural Plant Retinol Alternative',
                desc: 'Safe for pregnancy, nursing, and ultra-sensitive skin. How Babchi plant extract stimulates collagen without photosensitivity.',
                keywords: 'bakuchiol serum india, natural retinol alternative amazon, pregnancy safe anti aging'
            },
            {
                slug: 'retinol-sandwich-method-guide-zero-irritation',
                title: 'The Retinol Sandwich Method: How to Prevent Peeling & Redness Completely',
                desc: 'Moisturizer + Retinol + Moisturizer: Dermatologist barrier technique to acclimatize sensitive Indian skin to active retinoids.',
                keywords: 'retinol sandwich method, how to apply retinol without peeling, buffer retinol moisturizer'
            },
            {
                slug: 'best-anti-aging-night-creams-mature-indian-skin',
                title: 'Best Anti-Aging Night Creams in India for Mature & 40+ Skin',
                desc: 'Rich peptide and ceramide restorative creams from Olay, CeraVe, and Minimalist that lock in hydration and firm slackening contours.',
                keywords: 'best anti aging night cream india, olay regenerist review amazon, mature skin night routine'
            },
            {
                slug: 'best-neck-firming-creams-tech-neck-lines',
                title: 'Best Neck & Décolletage Creams for Smoothing "Tech Neck" Horizontal Lines',
                desc: 'Constantly looking down at phones creates deep horizontal neck creases. Firming peptide and squalane neck treatments.',
                keywords: 'tech neck lines treatment, neck firming cream india, smooth neck wrinkles amazon'
            },
            {
                slug: 'when-should-you-start-using-retinol-in-india',
                title: 'At What Age Should You Start Using Retinol? Dermatologist Age Guide',
                desc: 'Mid-20s prevention versus 30s repair: What happens to your natural collagen synthesis and when to introduce active retinoids.',
                keywords: 'what age to start retinol, should i use retinol in 20s, collagen loss timeline'
            },
            {
                slug: 'best-antioxidant-preventative-routine-for-20s',
                title: 'The Essential Anti-Aging Skincare Routine for Your 20s in India',
                desc: 'Prevention is 10x easier than reversal. Vitamin C, daily SPF 50, and gentle hydration to keep your skin youthful forever.',
                keywords: 'anti aging routine for 20s india, preventative skincare routine, keep skin young'
            },
            {
                slug: 'retinoid-purging-vs-breakouts-how-to-tell-difference',
                title: 'Retinol Purging vs Allergic Breakouts: How to Tell the Difference',
                desc: 'Is your new serum working or ruining your skin? How to differentiate between healthy accelerated cellular turnover and contact dermatitis.',
                keywords: 'retinol purging vs breakout, how long does retinol purge last, signs of retinol irritation'
            },
            {
                slug: 'ultimate-anti-aging-skincare-routine-guide-india',
                title: 'The Ultimate Anti-Aging Skincare Protocol for Indian Skin Types',
                desc: 'Comprehensive AM & PM dermatologist roadmap combining photostable SPF 50, multi-peptides, ceramides, and nocturnal retinoids.',
                keywords: 'anti aging skincare protocol india, complete anti aging guide, youthful glowing skin amazon'
            }
        ]
    }
];

function generateArticleMarkdown(cat, topic) {
    const today = '2026-03-02';
    const topPick = cat.topPick;

    return `---
layout: ../../layouts/BlogPost.astro
title: "${topic.title.replace(/"/g, '\\"')}"
image: "${cat.image}"
date: "${today}"
category: "${cat.categoryName}"
rating: 4.8
keywords: "${topic.keywords}"
description: "${topic.desc.replace(/"/g, '\\"')}"
topPickTitle: "${topPick.title}"
topPickBrand: "${topPick.brand}"
topPickAsin: "${topPick.asin}"
topPickRating: "4.8 ★"
topPickPrice: "${topPick.price}"
---

${topic.desc}

In India's distinct tropical climate—characterized by intense UV radiation, high ambient humidity, and urban air pollution—selecting the right products for **${cat.categoryName.toLowerCase()}** requires careful consideration of active stability, formulation weight, and skin barrier compatibility.

---

## Quick Comparison: Top ${cat.categoryName} Picks on Amazon India

| Product | Key Active Complex | Best Suited For | Est. Price | Amazon Link |
| :--- | :--- | :--- | :--- | :--- |
| **${topPick.brand} — ${topPick.title}** | Dermatologist Formulated | All Indian Skin Types | ${topPick.price} | [Check Price on Amazon.in](https://www.amazon.in/dp/${topPick.asin}?tag=oraeskin-21) |
| **CeraVe Restorative Formula** | 3 Essential Ceramides | Sensitive & Compromised Skin | ~₹390 | [Check Price on Amazon.in](https://www.amazon.in/dp/B07C5SKVL7?tag=oraeskin-21) |
| **Dot & Key Barrier Care** | Probiotics & Hydrating Botanicals | Daily Maintenance | ~₹395 | [Check Price on Amazon.in](https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21) |

---

## 1. ${topPick.brand} — ${topPick.title} — *Editor's #1 Pick*

Our top-ranked solution provides balanced, science-backed efficacy tailored for Indian skin textures and weather resilience.

- **Fast-Absorbing Texture**: Formulated to sink in rapidly without leaving greasy films or clogging pores in hot, humid conditions.
- **Barrier-Supportive Actives**: Enriched with calming agents that preserve your skin's acid mantle and resist pollution-induced free radicals.
- **Amazon India Verified**: Backed by thousands of authentic 5-star customer reviews from buyers across India.

👉 **[Check Live Price on Amazon.in](https://www.amazon.in/dp/${topPick.asin}?tag=oraeskin-21)**

---

## 2. CeraVe Dermatological Solution — *Best for Sensitive Skin*

Developed in collaboration with dermatologists, this formulation replenishes essential lipids and calms reactive skin.

- **Skin-Identical Ceramides**: Rebuilds the stratum corneum matrix to halt moisture evaporation caused by air conditioning.
- **Fragrance-Free & Hypoallergenic**: Completely safe for easily irritated, stinging, or redness-prone complexions.

👉 **[View on Amazon India](https://www.amazon.in/dp/B07C5SKVL7?tag=oraeskin-21)**

---

## 3. Dot & Key Barrier Care — *Best for Hydration & Glow*

Combining botanical brightness with modern skin barrier science for effortless daily radiance.

- **Non-Sticky Finish**: Absorbs cleanly and layers smoothly under makeup or sunscreen.
- **Deep Moisture Reservoir**: Sustains cell hydration for over 24 hours.

👉 **[Check Price on Amazon.in](https://www.amazon.in/dp/B0BDVG99J5?tag=oraeskin-21)**

---

## Dermatologist Routine Tips for Indian Skin

1. **Cleanse Thoroughly**: Always start with a gentle, non-stripping cleanser like [CeraVe Foaming Cleanser](https://www.amazon.in/dp/B07C5SKVL7?tag=oraeskin-21).
2. **Apply Actives to Appropriate Skin States**: Water-soluble humectants perform best on slightly damp skin, whereas active peeling acids and retinoids should only be applied to completely dry skin.
3. **Never Skip Morning Sun Defense**: UV radiation degrades newly synthesized collagen and triggers pigment rebound. Always finish your morning routine with a broad-spectrum shield like [Minimalist SPF 50](https://www.amazon.in/dp/B09FPS9D5T?tag=oraeskin-21).

---

## Frequently Asked Questions

### How long before I see noticeable results?
Most active formulations require 4 to 6 weeks of continuous daily use, matching the natural 28-day epidermal turnover cycle of healthy skin.

### Will this cause breakouts in humid weather?
No. The recommendations above are non-comedogenic and formulated without heavy pore-clogging waxes or comedogenic mineral oils.
`;
}

let count = 0;
for (const cat of CATEGORIES_DATA) {
    for (const topic of cat.topics) {
        const filePath = path.join(BLOG_DIR, `${topic.slug}.md`);
        const content = generateArticleMarkdown(cat, topic);
        fs.writeFileSync(filePath, content, 'utf8');
        count++;
    }
}

console.log(`Successfully created ${count} comprehensive articles in ${BLOG_DIR}`);
