#!/usr/bin/env python3
"""
OraeSkin Social Media & Instagram Automation Engine
---------------------------------------------------
Automates posting to Instagram, Twitter/X, and Pinterest via Buffer's GraphQL API.
Pulls products and 100+ clinical skincare guides from OraeSkin.

Usage:
  # View all products & blog guides
  python3 scripts/instagram_publisher.py --list
  python3 scripts/instagram_publisher.py --list-blogs

  # View connected Buffer channels (Instagram, Twitter, Pinterest)
  python3 scripts/instagram_publisher.py --buffer-channels

  # Schedule a product post to Instagram queue
  python3 scripts/instagram_publisher.py --buffer <product_id>

  # Schedule a blog guide post to Instagram queue
  python3 scripts/instagram_publisher.py --buffer-blog <blog_slug>

  # Queue a random product or blog guide to Instagram
  python3 scripts/instagram_publisher.py --buffer-random
  python3 scripts/instagram_publisher.py --buffer-random-blog

  # Post immediately to Instagram (skip queue)
  python3 scripts/instagram_publisher.py --buffer-now <product_id>

  # Cross-post to Twitter as well
  python3 scripts/instagram_publisher.py --buffer-twitter <product_id>
"""

import os, sys, re, glob, json, random, ssl, urllib.request, urllib.parse

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

try:
    import certifi
    SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CONTEXT = ssl._create_unverified_context()

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

def load_blog_posts():
    posts = []
    for f in glob.glob('src/pages/blog/*.md'):
        slug = os.path.basename(f).replace('.md', '')
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
        title = re.search(r'title:\s*"([^"]+)"', text)
        desc = re.search(r'description:\s*"([^"]+)"', text)
        img = re.search(r'image:\s*"([^"]+)"', text)
        cat = re.search(r'category:\s*"([^"]+)"', text)
        posts.append({
            'slug': slug,
            'title': title.group(1) if title else slug,
            'description': desc.group(1) if desc else '',
            'image': img.group(1) if img else '/images/products/minimalist-spf50.jpg',
            'category': cat.group(1) if cat else 'general'
        })
    return posts

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

def generate_blog_post(b):
    site_url = 'https://www.oraeskin.in'
    full_image_url = site_url + b['image']
    blog_link = f"{site_url}/blog/{b['slug']}/"
    
    caption = f"""📖 SKINCARE GUIDE: {b['title']}

{b['description']}

✨ Tested & verified for Indian climate conditions 🇮🇳

🔗 Read the full guide on OraeSkin:
👉 Check the link in bio or visit: oraeskin.in/blog/{b['slug']}/

---
{HASHTAG_SETS['general']}
"""
    return {
        'id': b['slug'],
        'title': b['title'],
        'image_url': full_image_url,
        'caption': caption.strip()
    }

# ==============================================================================
# BUFFER GRAPHQL API ENGINE
# ==============================================================================

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

def post_to_buffer(token, channel, caption, image_url, mode='addToQueue'):
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
    post_input = {
        'channelId': channel['id'],
        'text': caption,
        'schedulingType': 'automatic',
        'mode': mode,
        'assets': [
            {
                'image': {
                    'url': image_url
                }
            }
        ]
    }
    
    if channel.get('service') == 'instagram':
        post_input['metadata'] = {
            'instagram': {
                'type': 'post',
                'shouldShareToFeed': True
            }
        }
        
    variables = {'input': post_input}
    res = buffer_graphql_query(token, mutation, variables)
    return res

# ==============================================================================
# CLI HANDLER
# ==============================================================================

if __name__ == '__main__':
    products = load_products()
    blogs = load_blog_posts()
    buffer_key = os.environ.get('BUFFER_API_KEY')

    if len(sys.argv) < 2 or sys.argv[1] == '--list':
        print(f"Available Products ({len(products)} total):")
        for idx, p in enumerate(products):
            print(f"{idx+1:2d}. {p['id']:30} | {p['brand']:15} | {p['badge']}")
        print('\nAvailable Commands:')
        print('  python3 scripts/instagram_publisher.py --list-blogs')
        print('  python3 scripts/instagram_publisher.py --buffer-channels')
        print('  python3 scripts/instagram_publisher.py --buffer <product_id>')
        print('  python3 scripts/instagram_publisher.py --buffer-blog <blog_slug>')
        print('  python3 scripts/instagram_publisher.py --buffer-random')
        print('  python3 scripts/instagram_publisher.py --buffer-random-blog')

    elif sys.argv[1] == '--list-blogs':
        print(f"Available Blog Guides ({len(blogs)} total):")
        for idx, b in enumerate(sorted(blogs, key=lambda x: x['slug'])):
            print(f"{idx+1:3d}. {b['slug']:55} | {b['title'][:45]}...")

    elif sys.argv[1] == '--buffer-channels':
        if not buffer_key:
            print('❌ Error: BUFFER_API_KEY environment variable is not set in .env')
            sys.exit(1)
        print('Fetching connected Buffer channels...')
        channels = get_buffer_channels(buffer_key)
        if not channels:
            print('No channels found or error querying API.')
        else:
            print(f"Connected Buffer Channels ({len(channels)}):")
            for ch in channels:
                print(f"  • ID: {ch['id']:35} | Service: {ch.get('service','unknown'):12} | Name: {ch.get('name','')}")

    elif sys.argv[1] in ['--buffer', '--buffer-now', '--buffer-random', '--buffer-twitter', '--buffer-blog', '--buffer-random-blog']:
        if not buffer_key:
            print('❌ Error: BUFFER_API_KEY environment variable is not set in .env')
            sys.exit(1)

        channels = get_buffer_channels(buffer_key)
        target_service = 'twitter' if sys.argv[1] == '--buffer-twitter' else 'instagram'
        target_channel = next((c for c in channels if c.get('service') == target_service), None)
        if not target_channel:
            target_channel = channels[0]

        mode = 'shareNow' if sys.argv[1] == '--buffer-now' else 'addToQueue'

        if sys.argv[1] == '--buffer-random-blog':
            b_match = random.choice(blogs)
            post = generate_blog_post(b_match)
        elif sys.argv[1] == '--buffer-blog':
            slug = sys.argv[2] if len(sys.argv) > 2 else blogs[0]['slug']
            b_match = next((b for b in blogs if b['slug'] == slug), None)
            if not b_match:
                print(f"Blog '{slug}' not found.")
                sys.exit(1)
            post = generate_blog_post(b_match)
        elif sys.argv[1] == '--buffer-random':
            p_match = random.choice(products)
            post = generate_product_post(p_match)
        else:
            pid = sys.argv[2] if len(sys.argv) > 2 else products[0]['id']
            p_match = next((p for p in products if p['id'] == pid), None)
            if not p_match:
                print(f"Product '{pid}' not found.")
                sys.exit(1)
            post = generate_product_post(p_match)

        if target_service == 'twitter':
            short_caption = f"✨ {post['title']}\n\nClinical test & Amazon India buying guide: https://www.oraeskin.in\n\n#IndianSkincare #SkincareIndia"
            post['caption'] = short_caption[:275]

        print(f"🚀 Queuing to {target_channel['service'].capitalize()} ({target_channel['name']}): '{post['title']}'...")
        res = post_to_buffer(buffer_key, target_channel, post['caption'], post['image_url'], mode=mode)
        if res and 'data' in res and res['data'].get('createPost', {}).get('post'):
            p_info = res['data']['createPost']['post']
            print(f"✅ Successfully scheduled! (Post ID: {p_info['id']}, Status: {p_info['status']})")
        else:
            print("Response:", json.dumps(res, indent=2))
