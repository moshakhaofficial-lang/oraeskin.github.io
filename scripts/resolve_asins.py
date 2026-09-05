import urllib.request
import ssl
import re
import gzip
import urllib.parse
import time
import json

ctx = ssl._create_unverified_context()
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
}

def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=10)
        data = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            html = gzip.decompress(data).decode("utf-8", errors="ignore")
        else:
            html = data.decode("utf-8", errors="ignore")
        return html, resp.getcode()
    except urllib.error.HTTPError as e:
        return "", e.code
    except Exception as e:
        return str(e), 500

def verify_asin(asin):
    url = f"https://www.amazon.in/dp/{asin}?tag=oraeskin-21"
    html, code = fetch_url(url)
    if code != 200:
        return False, f"HTTP {code}"
    if "Looking for something?" in html or "cs_404_link" in html or "Page Not Found" in html:
        return False, "404 page content"
    m = re.search(r"<title>(.*?)</title>", html, re.I)
    title = m.group(1).strip() if m else "No Title"
    return True, title

def search_amazon(query):
    url = f"https://www.amazon.in/s?k={urllib.parse.quote(query)}"
    html, code = fetch_url(url)
    if code != 200:
        return []
    
    # Extract search result items: ASINs and their titles
    # Amazon search result blocks often have data-asin="B0..." and h2 with a-link-normal
    results = []
    # Find all divs with data-asin
    items = re.findall(r'<div[^>]*data-asin="([A-Z0-9]{10})"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
    for asin, block in items:
        if not asin:
            continue
        # Extract title
        title_m = re.search(r'<h2[^>]*>.*?<span[^>]*>(.*?)</span>', block, re.DOTALL)
        title = ""
        if title_m:
            title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip()
        if not title:
            title_m = re.search(r'title="([^"]+)"', block)
            if title_m:
                title = title_m.group(1).strip()
        results.append((asin, title))
    
    # Deduplicate while preserving order
    seen = set()
    dedup = []
    for asin, t in results:
        if asin not in seen:
            seen.add(asin)
            dedup.append((asin, t))
    return dedup

if __name__ == "__main__":
    test_queries = [
        ("drsheths-ceramide-vitc-spf50", "Dr Sheth Ceramide Vitamin C Sunscreen 50g"),
        ("reequil-ultra-matte-spf50", "Reequil Ultra Matte Dry Touch Sunscreen Gel 50g"),
        ("minimalist-salicylic-cleanser", "Minimalist 2% Salicylic Acid Face Cleanser 100ml"),
        ("cetaphil-gentle-cleanser", "Cetaphil Gentle Skin Cleanser 125ml"),
        ("faceshop-rice-cleanser", "The Face Shop Rice Water Bright Foaming Cleanser 150ml"),
        ("simple-refreshing-wash", "Simple Kind to Skin Refreshing Facial Wash 150ml"),
        ("minimalist-vitc-10", "Minimalist 10% Vitamin C Face Serum 30ml"),
        ("plum-vitc-mandarin", "Plum 15% Vitamin C Face Serum Mandarin 30ml"),
        ("minimalist-niacinamide-10", "Minimalist 10% Niacinamide Face Serum 30ml"),
        ("minimalist-alpha-arbutin", "Minimalist 2% Alpha Arbutin Face Serum 30ml"),
        ("dermaco-10-niacinamide", "The Derma Co 10% Niacinamide Face Serum 30ml"),
        ("minimalist-b5-moisturizer", "Minimalist 10% Vitamin B5 Moisturizer 50g"),
        ("bioderma-atoderm-baume", "Bioderma Atoderm Intensive Baume 75ml"),
        ("minimalist-glycolic-toner", "Minimalist 8% Glycolic Acid Toner 150ml"),
        ("plum-greentea-toner", "Plum Green Tea Alcohol-Free Toner 200ml"),
        ("minimalist-pha-toner", "Minimalist PHA 3% Alcohol-Free Face Toner 150ml"),
        ("cerave-eye-repair", "CeraVe Eye Repair Cream 14g"),
        ("minimalist-caffeine-eye-serum", "Minimalist 5% Caffeine Under-Eye Serum 30ml"),
        ("dermaco-5-caffeine-serum", "The Derma Co 5% Caffeine Under-Eye Serum 15ml"),
        ("minimalist-spf30-lipbalm", "Minimalist SPF 30 Lip Balm Ceramides 8g"),
        ("dotkey-lip-mask", "Dot & Key Vitamin C+E Lip Sleeping Mask 12g"),
        ("minimalist-salicylic-bodywash", "Minimalist 2% Salicylic Acid Body Wash 200ml"),
        ("plum-bodylovin-vanilla-lotion", "Plum BodyLovin Vanilla Vibes Body Lotion 200ml"),
        ("biotique-morning-nectar-lotion", "Biotique Morning Nectar Nourishing Lotion 190ml"),
        ("dermaco-acne-patch", "The Derma Co 100% Hydrocolloid Invisible Acne Patches"),
        ("sebogel-spot-gel", "Sebogel Salicylic Acid & Nicotinamide Gel 30g"),
        ("minimalist-retinol-03", "Minimalist 0.3% Retinol Face Serum 30ml"),
        ("minimalist-granactive-retinoid-2", "Minimalist Granactive Retinoid 2% Serum 30ml"),
    ]

    resolved = {}
    for pid, q in test_queries:
        print(f"\n[Searching for {pid}]: {q}...")
        results = search_amazon(q)
        found = False
        for asin, title in results[:6]:
            ok, page_title = verify_asin(asin)
            if ok:
                print(f"  FOUND -> ASIN: {asin} | {page_title[:60]}")
                resolved[pid] = {
                    "asin": asin,
                    "title": page_title
                }
                found = True
                break
            else:
                print(f"  Skipping {asin}: {page_title}")
            time.sleep(0.3)
        if not found:
            print(f"  FAILED to find live ASIN for {pid}")
        time.sleep(0.5)

    with open("resolved_asins.json", "w") as f:
        json.dump(resolved, f, indent=2)
    print(f"\nResolved {len(resolved)} / {len(test_queries)} items!")
