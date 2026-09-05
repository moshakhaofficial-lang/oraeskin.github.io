#!/usr/bin/env python3
"""
OraeSkin Instagram Automation Engine
------------------------------------
1. Generates high-converting Instagram captions, carousel text, and hashtags
   from OraeSkin products and blog guides.
2. Publishes to Instagram via Buffer API (Recommended - No Meta App approval required!)
3. Publishes directly via Meta Graph API if preferred.

Usage:
  # View all catalog products
  python3 scripts/instagram_publisher.py --list

  # Generate a draft caption & image for manual posting
  python3 scripts/instagram_publisher.py --draft <product_id>

  # Check connected Buffer channels (Instagram, etc.)
  python3 scripts/instagram_publisher.py --buffer-channels

  # Schedule/Post to Instagram via Buffer
  python3 scripts/instagram_publisher.py --buffer <product_id>

  # Post immediately via Buffer
  python3 scripts/instagram_publisher.py --buffer-now <product_id>

  # Queue a random product to Buffer
  python3 scripts/instagram_publisher.py --buffer-random
"""

import os, sys, re, glob, json, random, urllib.request, urllib.parse

def load_dotenv():
    # Automatically load .env file from project root if it exists
    env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    k = k.strip()
                    v = v.strip().strip("'").strip('"')
                    if k and k not in os.environ:
                        os.environ[k] = v

load_dotenv()

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
    review_link = f"{site_url}/reviews/{p['id']}/"
    
    caption = f"""✨ PRODUCT SPOTLIGHT: {p['name']}
🏆 Badge: {p['badge']}

Dermat-approved & tested for Indian skin & humid climate conditions 🇮🇳

🔍 Why we rate it on OraeSkin:
• {p['summary']}

💡 Verdict:
{p['verdict']}

🔗 Detailed clinical breakdown & verified Amazon India link:
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

# ==============================================================================
# BUFFER GRAPHQL API ENGINE
# ==============================================================================

import ssl
try:
    import certifi
    SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CONTEXT = ssl._create_unverified_context()

def buffer_graphql_query(token, query, variables=None):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f"Bearer {token}",
        'User-Agent': 'OraeSkin-Publisher/1.0'
    }
    payload = {'query': query}
    if variables:
        payload['variables'] = variables
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request('https://api.buffer.com', data=data, headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req, context=SSL_CONTEXT) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        print(f"❌ Buffer API Error ({e.code}): {err_body}")
        return None
    except Exception as e:
        print(f"❌ Buffer Request Error: {e}")
        return None

def get_buffer_channels(token):
    # Fetch organizations first
    org_query = """
    query GetOrganizations {
      account {
        organizations {
          id
          name
        }
      }
    }
    """
    res = buffer_graphql_query(token, org_query)
    if not res or 'data' not in res or not res['data'].get('account'):
        print('❌ Could not retrieve Buffer account organizations. Please check your BUFFER_API_KEY.')
        return []
    
    orgs = res['data']['account'].get('organizations', [])
    all_channels = []
    for org in orgs:
        ch_query = """
        query GetChannels($orgId: OrganizationId!) {
          channels(input: { organizationId: $orgId }) {
            id
            name
            service
          }
        }
        """
        ch_res = buffer_graphql_query(token, ch_query, {'orgId': org['id']})
        if ch_res and 'data' in ch_res and ch_res['data'].get('channels'):
            for ch in ch_res['data']['channels']:
                ch['organizationId'] = org['id']
                all_channels.append(ch)
    return all_channels

def post_to_buffer(token, channel_id, caption, image_url, mode='addToQueue'):
    mutation = """
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        ... on PostActionSuccess {
          post {
            id
            status
          }
        }
        ... on MutationError {
          message
        }
      }
    }
    """
    variables = {
        'input': {
            'channelId': channel_id,
            'text': caption,
            'schedulingType': 'automatic',
            'mode': mode,
            'assets': [
                {
                    'image': {
                        'url': image_url
                    }
                }
            ],
            'metadata': {
                'instagram': {
                    'type': 'post',
                    'shouldShareToFeed': True
                }
            }
        }
    }
    res = buffer_graphql_query(token, mutation, variables)
    return res

# ==============================================================================
# CLI HANDLER
# ==============================================================================

if __name__ == '__main__':
    products = load_products()
    buffer_key = os.environ.get('BUFFER_API_KEY')

    if len(sys.argv) < 2 or sys.argv[1] == '--list':
        print(f"Available products ({len(products)} total):")
        for idx, p in enumerate(products):
            print(f"{idx+1:2d}. {p['id']:30} | {p['brand']:15} | {p['badge']}")
        print('\nUsage:')
        print('  python3 scripts/instagram_publisher.py --draft <product_id>')
        print('  python3 scripts/instagram_publisher.py --buffer-channels')
        print('  python3 scripts/instagram_publisher.py --buffer <product_id>')
        print('  python3 scripts/instagram_publisher.py --buffer-now <product_id>')
        print('  python3 scripts/instagram_publisher.py --buffer-random')

    elif sys.argv[1] == '--draft':
        pid = sys.argv[2] if len(sys.argv) > 2 else products[0]['id']
        match = next((p for p in products if p['id'] == pid), None)
        if not match:
            print(f"Product '{pid}' not found.")
            sys.exit(1)
        post = generate_product_post(match)
        print('=' * 60)
        print('📸 IMAGE URL:')
        print(post['image_url'])
        print('=' * 60)
        print('📝 CAPTION:')
        print(post['caption'])
        print('=' * 60)

    elif sys.argv[1] == '--buffer-channels':
        if not buffer_key:
            print('❌ Error: BUFFER_API_KEY environment variable is not set.')
            print('1. Go to https://publish.buffer.com/settings/api')
            print('2. Copy your API Key')
            print('3. Run: export BUFFER_API_KEY="your_key_here"')
            sys.exit(1)
        print('Fetching connected Buffer channels...')
        channels = get_buffer_channels(buffer_key)
        if not channels:
            print('No channels found or error querying API.')
        else:
            print(f"Connected Buffer Channels ({len(channels)}):")
            for ch in channels:
                print(f"  • ID: {ch['id']:35} | Service: {ch.get('service','unknown'):12} | Name: {ch.get('name','')}")

    elif sys.argv[1] in ['--buffer', '--buffer-now', '--buffer-random']:
        if not buffer_key:
            print('❌ Error: BUFFER_API_KEY environment variable is not set.')
            print('1. Go to https://publish.buffer.com/settings/api')
            print('2. Copy your API Key')
            print('3. Run: export BUFFER_API_KEY="your_key_here"')
            sys.exit(1)
        
        mode = 'shareNow' if sys.argv[1] == '--buffer-now' else 'addToQueue'
        
        if sys.argv[1] == '--buffer-random':
            match = random.choice(products)
        else:
            pid = sys.argv[2] if len(sys.argv) > 2 else products[0]['id']
            match = next((p for p in products if p['id'] == pid), None)
            if not match:
                print(f"Product '{pid}' not found.")
                sys.exit(1)

        channels = get_buffer_channels(buffer_key)
        # Find Instagram channel
        ig_channel = next((c for c in channels if c.get('service') == 'instagram'), None)
        if not ig_channel:
            if channels:
                ig_channel = channels[0]
                print(f"⚠️ Warning: No channel explicitly labeled 'instagram' found. Using first channel: {ig_channel['name']} ({ig_channel['id']})")
            else:
                print('❌ No channels found in your Buffer account. Please connect your Instagram channel in Buffer first.')
                sys.exit(1)

        print(f"Sending '{match['name']}' to Buffer for {ig_channel['name']} ({mode})...")
        post = generate_product_post(match)
        res = post_to_buffer(buffer_key, ig_channel['id'], post['caption'], post['image_url'], mode=mode)
        print('Response from Buffer:')
        print(json.dumps(res, indent=2))
