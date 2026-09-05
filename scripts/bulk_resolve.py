import urllib.request
import ssl
import re
import gzip
import urllib.parse
import json
import time

ctx = ssl._create_unverified_context()
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
}

def verify_asin_and_get_title(asin):
    url = f"https://www.amazon.in/dp/{asin}?tag=oraeskin-21"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=8)
        if resp.getcode() != 200:
            return False, f"HTTP {resp.getcode()}"
        data = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            html = gzip.decompress(data).decode("utf-8", errors="ignore")
        else:
            html = data.decode("utf-8", errors="ignore")
        if "Looking for something?" in html or "cs_404_link" in html or "Page Not Found" in html:
            return False, "404 page"
        m = re.search(r"<title>(.*?)</title>", html, re.I)
        title = m.group(1).strip() if m else "No Title"
        return True, title
    except Exception as e:
        return False, str(e)

def search_amazon_asins(query):
    url = f"https://www.amazon.in/s?k={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=8)
        data = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            html = gzip.decompress(data).decode("utf-8", errors="ignore")
        else:
            html = data.decode("utf-8", errors="ignore")
        
        found = []
        # Find all data-asin="XXXXXXXXXX"
        for a in re.findall(r'data-asin="([A-Z0-9]{10})"', html):
            if a not in found:
                found.append(a)
        return found
    except Exception as e:
        print(f"Error searching {query}: {e}")
        return []

products_to_resolve = [
    ("drsheths-ceramide-vitc-spf50", "Dr. Sheth's", "Ceramide & Vitamin C Sunscreen", ["B0DVB9CGDS"]),
    ("reequil-ultra-matte-spf50", "Re'equil", "Ultra Matte Dry Touch Sunscreen Gel", ["Reequil Ultra Matte Dry Touch Sunscreen Gel SPF 50"]),
    ("minimalist-salicylic-cleanser", "Minimalist", "2% Salicylic Acid Face Wash", ["Minimalist 2% Salicylic Acid Face Cleanser"]),
    ("cetaphil-gentle-cleanser", "Cetaphil", "Gentle Skin Hydrating Cleanser", ["Cetaphil Gentle Skin Cleanser"]),
    ("faceshop-rice-cleanser", "The Face Shop", "Rice Water Bright Foaming Cleanser", ["The Face Shop Rice Water Bright Foaming Cleanser"]),
    ("simple-refreshing-wash", "Simple", "Kind to Skin Refreshing Facial Wash", ["Simple Kind to Skin Refreshing Facial Wash"]),
    ("minimalist-vitc-10", "Minimalist", "10% Vitamin C Face Serum", ["Minimalist 10% Vitamin C Face Serum"]),
    ("plum-vitc-mandarin", "Plum", "15% Vitamin C Face Serum", ["Plum 15% Vitamin C Face Serum"]),
    ("minimalist-niacinamide-10", "Minimalist", "10% Niacinamide Face Serum", ["Minimalist 10% Niacinamide Face Serum"]),
    ("minimalist-alpha-arbutin", "Minimalist", "2% Alpha Arbutin Face Serum", ["Minimalist 2% Alpha Arbutin Face Serum"]),
    ("dermaco-10-niacinamide", "The Derma Co", "10% Niacinamide Serum with Zinc", ["The Derma Co 10% Niacinamide Face Serum"]),
    ("minimalist-b5-moisturizer", "Minimalist", "Vitamin B5 10% Moisturizer", ["Minimalist 10% Vitamin B5 Moisturizer"]),
    ("bioderma-atoderm-baume", "Bioderma", "Atoderm Intensive Baume", ["Bioderma Atoderm Intensive Baume"]),
    ("minimalist-glycolic-toner", "Minimalist", "8% Glycolic Acid Exfoliating Liquid", ["Minimalist 8% Glycolic Acid Toner"]),
    ("plum-greentea-toner", "Plum", "Green Tea Alcohol-Free Toner", ["Plum Green Tea Alcohol-Free Toner"]),
    ("minimalist-pha-toner", "Minimalist", "PHA 3% Alcohol-Free Face Toner", ["Minimalist PHA 3% Face Toner"]),
    ("cerave-eye-repair", "CeraVe", "Eye Repair Cream", ["CeraVe Eye Repair Cream"]),
    ("minimalist-caffeine-eye-serum", "Minimalist", "5% Caffeine Under-Eye Serum", ["Minimalist 5% Caffeine Eye Serum"]),
    ("dermaco-5-caffeine-serum", "The Derma Co", "5% Caffeine Under-Eye Serum with Roller", ["The Derma Co 5% Caffeine Under-Eye Serum"]),
    ("minimalist-spf30-lipbalm", "Minimalist", "SPF 30 Lip Balm with Ceramides", ["Minimalist SPF 30 Lip Balm"]),
    ("dotkey-lip-mask", "Dot & Key", "Vitamin C+E Lip Sleeping Mask", ["Dot & Key Lip Sleeping Mask Vitamin C"]),
    ("minimalist-salicylic-bodywash", "Minimalist", "2% Salicylic Acid Body Wash", ["Minimalist 2% Salicylic Acid Body Wash"]),
    ("plum-bodylovin-vanilla-lotion", "Plum BodyLovin", "BodyLovin Vanilla Caramello Body Lotion", ["Plum BodyLovin Vanilla Vibes Body Lotion", "Plum BodyLovin Vanilla Caramello Body Lotion"]),
    ("biotique-morning-nectar-lotion", "Biotique", "Morning Nectar Nourishing Lotion", ["Biotique Morning Nectar Nourish & Hydrate Moisturizer"]),
    ("dermaco-acne-patch", "The Derma Co", "100% Hydrocolloid Invisible Acne Patches", ["The Derma Co Hydrocolloid Acne Patch"]),
    ("sebogel-spot-gel", "Sebogel", "Salicylic Acid & Nicotinamide Blemish Gel", ["Sebogel Salicylic Acid & Nicotinamide Gel"]),
    ("minimalist-retinol-03", "Minimalist", "0.3% Retinol Face Serum in Squalane", ["Minimalist 0.3% Retinol Face Serum"]),
    ("minimalist-granactive-retinoid-2", "Minimalist", "Granactive Retinoid 2% (0.2% HPR)", ["Minimalist Granactive Retinoid 2% Serum"]),
]

results = {}

for pid, brand, name, queries in products_to_resolve:
    print(f"\nProcessing {pid} ({brand} - {name})...", flush=True)
    resolved_asin = None
    resolved_title = None

    # Check if first query is directly an ASIN
    if len(queries[0]) == 10 and queries[0].isalnum():
        ok, title = verify_asin_and_get_title(queries[0])
        if ok:
            resolved_asin = queries[0]
            resolved_title = title

    if not resolved_asin:
        for q in queries:
            print(f"  Searching Amazon for: {q}", flush=True)
            asins = search_amazon_asins(q)
            for a in asins[:8]:
                ok, title = verify_asin_and_get_title(a)
                if ok:
                    # Check if brand or key words are in title
                    brand_match = brand.lower().split()[0] in title.lower() or brand.lower() in title.lower()
                    if brand_match or len(asins) == 1:
                        print(f"  MATCH: {a} -> {title[:60]}", flush=True)
                        resolved_asin = a
                        resolved_title = title
                        break
                    else:
                        print(f"  Candidate {a} title did not match brand: {title[:50]}", flush=True)
                time.sleep(0.3)
            if resolved_asin:
                break
            time.sleep(0.5)

    if resolved_asin:
        results[pid] = {
            "asin": resolved_asin,
            "title": resolved_title,
            "brand": brand,
            "name": name
        }
        print(f"SUCCESS: {pid} => {resolved_asin}", flush=True)
    else:
        print(f"FAILED to resolve: {pid}", flush=True)

with open("resolved_asins.json", "w") as f:
    json.dump(results, f, indent=2)

print(f"\nFINISHED: Resolved {len(results)} / {len(products_to_resolve)}", flush=True)
