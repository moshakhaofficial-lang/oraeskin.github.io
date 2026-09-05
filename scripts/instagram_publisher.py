#!/usr/bin/env python3
"""
OraeSkin Instagram Automation Engine
------------------------------------
1. Generates high-converting Instagram captions, carousel text, and hashtags
   from OraeSkin products and blog guides.
2. Publishes automatically to Instagram via Meta Graph API when credentials are provided.

Usage:
  python3 scripts/instagram_publisher.py --list
  python3 scripts/instagram_publisher.py --draft [product_id or blog_slug]
  python3 scripts/instagram_publisher.py --post [product_id or blog_slug]
"""

import os, sys, re, glob, json, urllib.request, urllib.parse

HASHTAG_SETS = {
    'general': '#IndianSkincare #SkincareRoutineIndia #OraeSkin #SkincareIndia #AffordableSkincareIndia #IndianBeautyBlogger',
    'sunscreens': '#IndianSunscreen #NoWhiteCast #SunscreenAlways #OilySkinSunscreen #SunscreenIndia #SPF50',
    'serums': '#NiacinamideIndia #VitaminCSerum #SalicylicAcid #AcneProneSkinIndia #DarkSpotsIndia #Hyperpigmentation',
    'acne': '#AcnePatch #PimpleEmergency #SalicylicAcidIndia #FungalAcneSafe #CloggedPores #ClearSkinIndia',
    'anti-aging': '#RetinolIndia #BeginnerRetinol #GranactiveRetinoid #AntiAgingRoutine #HealthySkinBarrier'
}

def load_products():
    with open('src/data/products.ts', 'r', encoding='utf-8') as f:
        text = f.read()
    products = []
    blocks = text.split('"id": "')
    for b in blocks[1:]:
        pid = b.split('"')[0]
        name = re.search(r'"name":\s*"([^"]+)"', b)
        brand = re.search(r'"brand":\s*"([^"]+)"', b)
        cat = re.search(r'"category":\s*"([^"]+)"', b)
        asin = re.search(r'"asin":\s*"([^"]+)"', b)
        img = re.search(r'"image":\s*"([^"]+)"', b)
        badge = re.search(r'"badge":\s*"([^"]+)"', b)
        summary = re.search(r'"summary":\s*"([^"]+)"', b)
        verdict = re.search(r'"verdict":\s*"([^"]+)"', b)
        products.append({
            'id': pid,
            'name': name.group(1) if name else '',
            'brand': brand.group(1) if brand else '',
            'category': cat.group(1) if cat else 'general',
            'asin': asin.group(1) if asin else '',
            'image': img.group(1) if img else '',
            'badge': badge.group(1) if badge else 'Top Pick',
            'summary': summary.group(1) if summary else '',
            'verdict': verdict.group(1) if verdict else ''
        })
    return products

def generate_product_post(p):
    site_url = 'https://www.oraeskin.in'
    cat_tag = HASHTAG_SETS.get(p['category'], HASHTAG_SETS['general'])
    full_image_url = site_url + p['image']
    review_link = f'{site_url}/reviews/{p["id"]}/'
    
    caption = f"""✨ PRODUCT SPOTLIGHT: {p['name']}
🏆 Badge: {p['badge']}

Dermat-approved & tested for Indian skin & humid climate conditions 🇮🇳

🔍 Why we rate it on OraeSkin:
• {p['summary']}

💡 Verdict:
{p['verdict']}

🔗 Detailed score breakdown, clinical evidence & direct Amazon India link:
👉 Check the link in bio or visit: oraeskin.in/reviews/{p['id']}/

---
{HASHTAG_SETS['general']} {cat_tag}
"""
    return {
        'id': p['id'],
        'title': p['name'],
        'image_url': full_image_url,
        'caption': caption.strip()
    }

def publish_to_instagram(image_url, caption):
    token = os.environ.get('INSTAGRAM_ACCESS_TOKEN')
    account_id = os.environ.get('INSTAGRAM_ACCOUNT_ID')
    if not token or not account_id:
        print('❌ Error: INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_ACCOUNT_ID environment variables are not set.')
        print('Set them with:')
        print('  export INSTAGRAM_ACCESS_TOKEN="your_meta_token"')
        print('  export INSTAGRAM_ACCOUNT_ID="your_instagram_business_id"')
        return False

    # Step 1: Create media container
    media_endpoint = f'https://graph.facebook.com/v19.0/{account_id}/media'
    data = urllib.parse.urlencode({
        'image_url': image_url,
        'caption': caption,
        'access_token': token
    }).encode('utf-8')

    req = urllib.request.Request(media_endpoint, data=data, method='POST')
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode())
            creation_id = res.get('id')
            print(f'✅ Media container created: {creation_id}')
    except Exception as e:
        print(f'❌ Failed to create media container: {e}')
        return False

    # Step 2: Publish container
    publish_endpoint = f'https://graph.facebook.com/v19.0/{account_id}/media_publish'
    pub_data = urllib.parse.urlencode({
        'creation_id': creation_id,
        'access_token': token
    }).encode('utf-8')

    pub_req = urllib.request.Request(publish_endpoint, data=pub_data, method='POST')
    try:
        with urllib.request.urlopen(pub_req) as response:
            pub_res = json.loads(response.read().decode())
            print(f'🎉 Post published successfully to Instagram! Post ID: {pub_res.get("id")}')
            return True
    except Exception as e:
        print(f'❌ Failed to publish post: {e}')
        return False

if __name__ == '__main__':
    products = load_products()
    if len(sys.argv) < 2 or sys.argv[1] == '--list':
        print(f'Available products ({len(products)} total):')
        for idx, p in enumerate(products):
            print(f'{idx+1:2d}. {p["id"]:30} | {p["brand"]:15} | {p["badge"]}')
        print('\nUsage:')
        print('  python3 scripts/instagram_publisher.py --draft <product_id>')
        print('  python3 scripts/instagram_publisher.py --post <product_id>')
    elif sys.argv[1] == '--draft':
        pid = sys.argv[2] if len(sys.argv) > 2 else products[0]['id']
        match = next((p for p in products if p['id'] == pid), None)
        if not match:
            print(f'Product {pid} not found.')
            sys.exit(1)
        post = generate_product_post(match)
        print('=' * 60)
        print('📸 IMAGE URL:')
        print(post['image_url'])
        print('=' * 60)
        print('📝 CAPTION:')
        print(post['caption'])
        print('=' * 60)
    elif sys.argv[1] == '--post':
        pid = sys.argv[2] if len(sys.argv) > 2 else products[0]['id']
        match = next((p for p in products if p['id'] == pid), None)
        if not match:
            print(f'Product {pid} not found.')
            sys.exit(1)
        post = generate_product_post(match)
        print(f'Publishing {match["name"]} to Instagram...')
        publish_to_instagram(post['image_url'], post['caption'])
