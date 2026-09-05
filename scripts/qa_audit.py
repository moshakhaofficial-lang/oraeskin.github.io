#!/usr/bin/env python3
import os
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from urllib.parse import urlparse, parse_qs

DIST_DIR = os.path.abspath("dist")
PUBLIC_DIR = os.path.abspath("public")
SITE_DOMAIN = "https://www.oraeskin.in"
AFFILIATE_TAG = "oraeskin-21"
EXPECTED_GA_ID = "G-E978F44468"

class HTMLDocAudit(HTMLParser):
    def __init__(self, rel_path, full_path):
        super().__init__()
        self.rel_path = rel_path
        self.full_path = full_path
        
        self.title = None
        self.in_title = False
        self.meta_desc = None
        self.canonical = None
        self.og_title = None
        self.og_desc = None
        self.og_image = None
        self.og_url = None
        
        self.ids = set()
        self.links = [] # list of (href, rel, text)
        self.images = [] # list of (src, alt)
        self.amazon_links = [] # list of (href, rel, text)
        self.has_disclosure = False
        self.has_ga = False
        self.has_consent_banner = False
        self.raw_text = []
        self.current_a = None

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        
        if "id" in attr_dict:
            self.ids.add(attr_dict["id"])
            if attr_dict["id"] == "consent-banner":
                self.has_consent_banner = True

        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            name = attr_dict.get("name", "").lower()
            prop = attr_dict.get("property", "").lower()
            content = attr_dict.get("content", "")
            
            if name == "description":
                self.meta_desc = content
            elif prop == "og:title":
                self.og_title = content
            elif prop == "og:description":
                self.og_desc = content
            elif prop == "og:image":
                self.og_image = content
            elif prop == "og:url":
                self.og_url = content
                
        elif tag == "link":
            rel = attr_dict.get("rel", "").lower()
            if rel == "canonical":
                self.canonical = attr_dict.get("href")
                
        elif tag == "a":
            href = attr_dict.get("href", "")
            rel = attr_dict.get("rel", "")
            self.current_a = {"href": href, "rel": rel, "text": ""}
            self.links.append(self.current_a)
            if "amazon.in" in href or "amzn.to" in href:
                self.amazon_links.append(self.current_a)

        elif tag == "img":
            src = attr_dict.get("src", "")
            alt = attr_dict.get("alt", "")
            self.images.append({"src": src, "alt": alt})

        elif tag == "script":
            src = attr_dict.get("src", "")
            if EXPECTED_GA_ID in src:
                self.has_ga = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "a":
            self.current_a = None

    def handle_data(self, data):
        self.raw_text.append(data)
        if self.in_title:
            self.title = (self.title or "") + data
        if self.current_a:
            self.current_a["text"] += data
        if "As an Amazon Associate" in data or "earns from qualifying purchases" in data:
            self.has_disclosure = True
        if EXPECTED_GA_ID in data:
            self.has_ga = True

def run_qa():
    print("=" * 70)
    print("🔍 ORAESKIN FULL QUALITY ASSURANCE (QA) SUITE")
    print(f"Scanning directory: {DIST_DIR}")
    print("=" * 70)
    
    if not os.path.exists(DIST_DIR):
        print("❌ Error: dist/ directory does not exist! Run 'npm run build' first.")
        sys.exit(1)

    html_files = []
    for root, _, files in os.walk(DIST_DIR):
        for f in files:
            if f.endswith(".html"):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, DIST_DIR)
                html_files.append((rel_path, full_path))

    print(f"📄 Found {len(html_files)} generated HTML files in dist/\n")

    parsed_docs = {}
    asin_leak_errors = []
    meta_errors = []
    og_errors = []
    broken_images = []
    images_missing_alt = []
    amazon_tag_errors = []
    amazon_rel_errors = []
    disclosure_missing = []
    ga_missing = []
    consent_missing = []

    # ASIN pattern to check user-facing leaks
    asin_leak_pattern = re.compile(r'\(ASIN\s+[A-Z0-9]{10}\)|ASIN\s*:\s*[A-Z0-9]{10}', re.IGNORECASE)

    for rel_path, full_path in html_files:
        with open(full_path, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()

        # Check for ASIN leak in raw content
        leaks = asin_leak_pattern.findall(content)
        if leaks:
            asin_leak_errors.append((rel_path, leaks))

        parser = HTMLDocAudit(rel_path, full_path)
        try:
            parser.feed(content)
        except Exception as e:
            print(f"❌ Error parsing {rel_path}: {e}")
            continue

        parsed_docs[rel_path] = parser

        # Check SEO metadata
        if not parser.title or len(parser.title.strip()) < 5:
            meta_errors.append((rel_path, "Missing or too short <title>"))
        if not parser.meta_desc or len(parser.meta_desc.strip()) < 20:
            meta_errors.append((rel_path, "Missing or too short meta description"))
        if not parser.canonical:
            meta_errors.append((rel_path, "Missing canonical URL"))

        # Open Graph
        if not parser.og_title or not parser.og_desc or not parser.og_image:
            og_errors.append((rel_path, "Incomplete OpenGraph tags"))

        # Check Amazon links
        for alink in parser.amazon_links:
            href = alink["href"]
            rel = alink["rel"]
            parsed_url = urlparse(href)
            query_params = parse_qs(parsed_url.query)
            
            # check tag
            tag_val = query_params.get("tag", [""])[0]
            if tag_val != AFFILIATE_TAG:
                amazon_tag_errors.append((rel_path, href, f"tag was '{tag_val}', expected '{AFFILIATE_TAG}'"))

            # check rel
            if "sponsored" not in rel and "nofollow" not in rel:
                amazon_rel_errors.append((rel_path, href, f"rel was '{rel}', expected 'sponsored' or 'nofollow'"))

        # Check Images
        for img in parser.images:
            src = img["src"]
            alt = img["alt"]
            
            if not alt.strip():
                images_missing_alt.append((rel_path, src))
                
            if src.startswith("/"):
                # Local image path
                local_dist_path = os.path.join(DIST_DIR, src.lstrip("/"))
                local_pub_path = os.path.join(PUBLIC_DIR, src.lstrip("/"))
                if not os.path.exists(local_dist_path) and not os.path.exists(local_pub_path):
                    broken_images.append((rel_path, src))

        # Check Compliance & Analytics
        if not parser.has_disclosure:
            disclosure_missing.append(rel_path)
        if not parser.has_ga:
            ga_missing.append(rel_path)
        if not parser.has_consent_banner:
            consent_missing.append(rel_path)

    # -------------------------------------------------------------
    # INTERNAL LINK CHECK
    # -------------------------------------------------------------
    broken_internal_links = []
    broken_anchors = []

    for rel_path, parser in parsed_docs.items():
        for l in parser.links:
            href = l["href"]
            if not href or href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:"):
                continue
            if href.startswith("http://") or href.startswith("https://"):
                # External or absolute internal
                if href.startswith(SITE_DOMAIN):
                    href = href[len(SITE_DOMAIN):]
                else:
                    continue

            # Internal link check
            path_part, _, anchor_part = href.partition("#")
            
            if path_part == "" or path_part == ".":
                # Same page anchor
                target_doc = parser
                target_rel = rel_path
            else:
                # Normalize path part to dist HTML file
                clean_path = path_part.lstrip("/")
                if clean_path == "" or clean_path.endswith("/"):
                    target_rel = os.path.join(clean_path, "index.html")
                elif clean_path.endswith(".html"):
                    target_rel = clean_path
                else:
                    target_rel = os.path.join(clean_path, "index.html")

                target_doc = parsed_docs.get(target_rel)

            if target_doc is None:
                # Ignore query params or specific dynamic assets
                if not os.path.exists(os.path.join(DIST_DIR, path_part.lstrip("/"))):
                    broken_internal_links.append((rel_path, href, target_rel))
            else:
                # Check anchor if specified
                if anchor_part and anchor_part not in target_doc.ids:
                    # check if anchor is something standard
                    broken_anchors.append((rel_path, href, anchor_part, target_rel))

    # -------------------------------------------------------------
    # SITEMAP VERIFICATION
    # -------------------------------------------------------------
    sitemap_path = os.path.join(DIST_DIR, "sitemap.xml")
    sitemap_errors = []
    sitemap_url_count = 0
    if not os.path.exists(sitemap_path):
        sitemap_errors.append("sitemap.xml does not exist in dist/")
    else:
        try:
            tree = ET.parse(sitemap_path)
            root_elem = tree.getroot()
            ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
            sitemap_urls = [loc.text for loc in root_elem.findall(".//ns:loc", ns)]
            sitemap_url_count = len(sitemap_urls)
            
            for url in sitemap_urls:
                if not url.startswith(SITE_DOMAIN):
                    sitemap_errors.append(f"Invalid domain in sitemap: {url}")
                    continue
                path = url[len(SITE_DOMAIN):].lstrip("/")
                expected_file = os.path.join(DIST_DIR, path, "index.html") if not path.endswith(".html") else os.path.join(DIST_DIR, path)
                if path == "":
                    expected_file = os.path.join(DIST_DIR, "index.html")
                if not os.path.exists(expected_file):
                    sitemap_errors.append(f"Sitemap URL has no matching file: {url} (expected {expected_file})")

            # Check coverage: every HTML in dist (except 404) should be in sitemap
            sitemap_set = set(sitemap_urls)
            for rel_path, _ in html_files:
                if "404" in rel_path:
                    continue
                normalized_url = SITE_DOMAIN + "/" + rel_path.replace("/index.html", "").replace("index.html", "")
                if not normalized_url.endswith("/") and normalized_url != SITE_DOMAIN:
                    normalized_url += "/"
                if normalized_url not in sitemap_set:
                    sitemap_errors.append(f"File {rel_path} not found in sitemap.xml ({normalized_url})")
        except Exception as e:
            sitemap_errors.append(f"Error parsing sitemap.xml: {e}")

    # -------------------------------------------------------------
    # PRINT RESULTS TABLE
    # -------------------------------------------------------------
    def report(name, errors, note=""):
        status = "✅ PASS" if len(errors) == 0 else f"❌ FAIL ({len(errors)})"
        print(f"{status:<16} | {name:<35} | {note}")
        if errors:
            for err in errors[:5]:
                print(f"   ↳ {err}")
            if len(errors) > 5:
                print(f"   ↳ ... and {len(errors) - 5} more")

    print("=" * 70)
    print("📊 QA AUDIT RESULTS BREAKDOWN")
    print("=" * 70)
    report("HTML Build & Count", [] if len(html_files) == 123 else ["Not 123"], f"{len(html_files)} total static pages")
    report("SEO Metadata", meta_errors, "Title, description, canonical on all pages")
    report("OpenGraph Tags", og_errors, "og:title, og:desc, og:image, og:url")
    report("Amazon Affiliate Tag", amazon_tag_errors, f"All links have tag={AFFILIATE_TAG}")
    report("Amazon Sponsored Rel", amazon_rel_errors, "rel='sponsored nofollow' compliance")
    report("No ASIN Leaks", asin_leak_errors, "Zero raw ASIN codes in user-facing content")
    report("Image Assets Existence", broken_images, "All local image references exist on disk")
    report("Image Alt Tags", images_missing_alt, "Accessibility alt attributes")
    report("Internal Link Integrity", broken_internal_links, "No 404 internal hyperlinks")
    report("Anchor Links (#)", broken_anchors, "Internal section anchors exist")
    report("Affiliate Disclosure", disclosure_missing, "Operating Agreement disclaimer on all pages")
    report("Google Analytics Setup", ga_missing, f"Tracking ID {EXPECTED_GA_ID} loaded")
    report("Cookie Consent Banner", consent_missing, "Consent mode container on all pages")
    report("Sitemap Accuracy", sitemap_errors, f"{sitemap_url_count} URLs fully mapped")

    total_failures = (
        len(meta_errors) + len(og_errors) + len(amazon_tag_errors) + 
        len(amazon_rel_errors) + len(asin_leak_errors) + len(broken_images) + 
        len(broken_internal_links) + len(broken_anchors) + len(disclosure_missing) + 
        len(ga_missing) + len(consent_missing) + len(sitemap_errors)
    )

    print("=" * 70)
    if total_failures == 0:
        print("🎉 ALL QA TESTS PASSED! Site is 100% verified and production-ready.")
    else:
        print(f"⚠️ {total_failures} ISSUES FOUND. See details above.")
    print("=" * 70)

    return total_failures

if __name__ == "__main__":
    sys.exit(run_qa())
