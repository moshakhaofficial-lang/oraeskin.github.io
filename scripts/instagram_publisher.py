#!/usr/bin/env python3
"""
OraeSkin Multi-Channel Social Automation Engine (Buffer API)
------------------------------------------------------------
Automatically queues products and clinical guides to:
  📸 Instagram (@oraeskincosmetics)
  🐦 Twitter / X (@OraeSkin)
  📌 Pinterest (@OraeSkinCosmetics)

Usage:
  # Post a random product to ALL connected social channels
  python3 scripts/instagram_publisher.py --buffer-random

  # Post a random blog guide to ALL connected social channels
  python3 scripts/instagram_publisher.py --buffer-random-blog

  # Post a specific product to ALL channels
  python3 scripts/instagram_publisher.py --buffer <product_id>

  # Post a specific blog to ALL channels
  python3 scripts/instagram_publisher.py --buffer-blog <blog_slug>

  # Post to a single specific channel only
  python3 scripts/instagram_publisher.py --buffer <product_id> --channel instagram
  python3 scripts/instagram_publisher.py --buffer <product_id> --channel twitter

  # List products, blogs, and channels
  python3 scripts/instagram_publisher.py --list
  python3 scripts/instagram_publisher.py --list-blogs
  python3 scripts/instagram_publisher.py --buffer-channels
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
        'caption': caption.strip(),
        'link': review_link
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
        'caption': caption.strip(),
        'link': blog_link
    }

# ==============================================================================
# BUFFER GRAPHQL API ENGINE
# ==============================================================================

def buffer_graphql_query(token, query, variables=None):
    clean_token = "".join(str(token).split()).strip("'\"") if token else ""
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f"Bearer {clean_token}",
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

def get_pinterest_boards(token, channel_id):
    q = """
    query GetBoards($id: ChannelId!) {
      channel(input: { id: $id }) {
        metadata {
          ... on PinterestMetadata {
            boards {
              serviceId
              name
            }
          }
        }
      }
    }
    """
    res = buffer_graphql_query(token, q, {'id': channel_id})
    if res and 'data' in res and res['data'].get('channel', {}).get('metadata', {}).get('boards'):
        return res['data']['channel']['metadata']['boards']
    return []

def post_to_buffer(token, channel, post_data, mode='addToQueue'):
    caption = post_data['caption']
    title = post_data['title']
    image_url = post_data['image_url']
    link = post_data.get('link', 'https://www.oraeskin.in')
    service = channel.get('service')

    post_input = {
        'channelId': channel['id'],
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
    
    if service == 'instagram':
        post_input['text'] = caption
        post_input['metadata'] = {
            'instagram': {
                'type': 'post',
                'shouldShareToFeed': True
            }
        }
    elif service == 'twitter':
        # 280-char limit for Twitter/X
        tweet_text = f"✨ {title}\n\nClinical test & Amazon India guide: {link}\n\n#IndianSkincare #SkincareIndia"
        if len(tweet_text) > 275:
            tweet_text = tweet_text[:270] + "..."
        post_input['text'] = tweet_text
    elif service == 'pinterest':
        boards = get_pinterest_boards(token, channel['id'])
        if not boards:
            print(f"⚠️ Skipping Pinterest ({channel['name']}): No boards created on Pinterest yet. Create a board on Pinterest to enable.")
            return None
        post_input['text'] = caption[:480]
        post_input['metadata'] = {
            'pinterest': {
                'boardServiceId': boards[0]['serviceId'],
                'title': title[:95],
                'url': link
            }
        }
    else:
        post_input['text'] = caption
        
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
    variables = {'input': post_input}
    return buffer_graphql_query(token, mutation, variables)

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
        print('  python3 scripts/instagram_publisher.py --buffer-random          # Posts to ALL channels!')
        print('  python3 scripts/instagram_publisher.py --buffer-random-blog     # Posts to ALL channels!')
        print('  python3 scripts/instagram_publisher.py --buffer <product_id>     # Posts to ALL channels!')
        print('  python3 scripts/instagram_publisher.py --buffer-blog <blog_slug> # Posts to ALL channels!')

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

    elif sys.argv[1] in ['--buffer', '--buffer-now', '--buffer-random', '--buffer-blog', '--buffer-random-blog']:
        if not buffer_key:
            print('❌ Error: BUFFER_API_KEY environment variable is not set in .env')
            sys.exit(1)

        channels = get_buffer_channels(buffer_key)
        if not channels:
            print('❌ Error: Could not connect to Buffer or no channels found. Please verify your BUFFER_API_KEY.')
            sys.exit(1)

        # Check if user specified a single channel flag: --channel <instagram|twitter|pinterest>
        target_channel_arg = None
        if '--channel' in sys.argv:
            idx = sys.argv.index('--channel')
            if len(sys.argv) > idx + 1:
                target_channel_arg = sys.argv[idx + 1].lower()

        if target_channel_arg:
            target_channels = [c for c in channels if c.get('service') == target_channel_arg]
            if not target_channels:
                print(f"❌ Channel '{target_channel_arg}' not found among connected channels.")
                sys.exit(1)
        else:
            # Default: post to ALL connected channels!
            target_channels = channels

        mode = 'shareNow' if sys.argv[1] == '--buffer-now' else 'addToQueue'

        if sys.argv[1] == '--buffer-random-blog':
            b_match = random.choice(blogs)
            post = generate_blog_post(b_match)
        elif sys.argv[1] == '--buffer-blog':
            slug = sys.argv[2] if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else blogs[0]['slug']
            b_match = next((b for b in blogs if b['slug'] == slug), None)
            if not b_match:
                print(f"Blog '{slug}' not found.")
                sys.exit(1)
            post = generate_blog_post(b_match)
        elif sys.argv[1] == '--buffer-random':
            p_match = random.choice(products)
            post = generate_product_post(p_match)
        else:
            pid = sys.argv[2] if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else products[0]['id']
            p_match = next((p for p in products if p['id'] == pid), None)
            if not p_match:
                print(f"Product '{pid}' not found.")
                sys.exit(1)
            post = generate_product_post(p_match)

        print(f"📢 Publishing '{post['title']}' to {len(target_channels)} channel(s)...")
        for ch in target_channels:
            srv = ch.get('service', 'unknown').capitalize()
            ch_name = ch.get('name', '')
            print(f"  → Queuing to {srv} ({ch_name})...")
            res = post_to_buffer(buffer_key, ch, post, mode=mode)
            if res and 'data' in res and res['data'].get('createPost', {}).get('post'):
                p_info = res['data']['createPost']['post']
                print(f"    ✅ Success! (ID: {p_info['id']}, Status: {p_info['status']})")
            elif res:
                err_msg = res.get('data', {}).get('createPost', {}).get('message') or res.get('errors')
                print(f"    ⚠️ Notice: {err_msg}")
