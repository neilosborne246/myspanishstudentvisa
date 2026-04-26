# SEO Audit — Live Homepage Analysis
**myspanishstudentvisa.com** | Launched: April 25, 2026 | Audited: April 26, 2026

---

## Executive Summary

The good news first: the technical SEO foundations are well above average for a site that went live yesterday. You have comprehensive structured data (JSON-LD), correct robots directives, solid Open Graph tags, nationality-specific landing pages already built, and a clean URL structure. Someone clearly thought about SEO during the build.

However, there are **5 specific issues that will cost you rankings** until fixed, and **one critical brand error** in the footer that needs to go today. Beyond those, this audit identifies a clear content and authority-building roadmap to get you competing for the top positions.

**Overall assessment: Strong technical foundation, 5 targeted fixes needed, then execute the content plan.**

---

## 🔴 Issues to Fix Immediately

### 1. Footer says "© 2026 My Spanish NLV" — wrong brand name
**Severity: Critical (trust & brand)**

The footer copyright line reads: *"© 2026 My Spanish NLV. Operated by Retail Consulting UK Ltd..."*

This is clearly a copy-paste from your sister site myspanishnlv.com. On a student visa site, visitors and Google both read the footer — this undermines trust and looks like the site wasn't finished. Fix it today:

> © 2026 My Spanish Student Visa. Operated by Retail Consulting UK Ltd (Company No. 06711242). Legal services delivered in partnership with Platinum Legal Spain.

---

### 2. Title tag is ~82 characters — will be truncated in Google
**Severity: High**

Current title:
> `Spain Student Visa 2026 — Apply Online with Legal Experts | My Spanish Student Visa`

That's approximately 82 characters. Google displays roughly 60 characters (or ~600px of pixel width). Search users will see something like:
> *Spain Student Visa 2026 — Apply Online with Legal Expe...*

The brand name at the end — the part that differentiates you — gets cut off entirely.

**Recommended fix (55 chars):**
> `Spain Student Visa 2026 | Legal Experts | My Spanish`

Or keep the differentiation upfront:
> `Spain Student Visa 2026 — Expert Help Online | €300 to Start`

The year "2026" is a smart inclusion for CTR — keep it. But shorten the middle.

---

### 3. Meta description is ~176 characters — over limit
**Severity: High**

Current description:
> *"Apply for your Spain student visa with our experienced immigration specialists, through a 24/7 online dashboard. €300 to start, €499 on approval. Official translations included."*

That's ~176 characters. Google truncates at ~155–160. The last line "Official translations included" — your best differentiator — gets cut.

**Recommended fix (154 chars):**
> `Spain student visa handled by immigration specialists. €300 to start, €499 on visa approval — official translations included. 24/7 online dashboard.`

---

### 4. Canonical URL is non-www but site loads on www
**Severity: High (duplicate content risk)**

Your canonical tag points to:
```
https://myspanishstudentvisa.com/
```
But the site loads on:
```
https://www.myspanishstudentvisa.com
```

If both versions are accessible without a 301 redirect, Google sees two versions of every page. This splits your "link equity" in half and can cause indexation confusion. You need either:

- A 301 redirect from `myspanishstudentvisa.com` → `www.myspanishstudentvisa.com` (and update canonical to www), OR
- A 301 redirect from `www.myspanishstudentvisa.com` → `myspanishstudentvisa.com` (keep canonical as non-www)

Pick one, be consistent across every page. Most hosting providers let you set this in one click.

---

### 5. H1 doesn't contain "Spain student visa"
**Severity: Medium-High**

Current H1:
> *"Study in Spain. Do it right. We handle the legal side."*

This is great marketing copy — but the H1 is the single strongest on-page SEO signal for what a page is about. Google reads it to understand the topic. Your primary keyword ("Spain student visa") is missing entirely from the H1.

The hero label `<p>` above says "Spain Student Visa · 2026" but that's a paragraph tag, not a heading — Google doesn't weight it the same way.

**Recommended fix** — keep the tone but weave in the keyword:
> *"Your Spain Student Visa. Done right. By legal experts."*

Or keep the original copy but add a visually subtle subtitle as an H2 directly below:
> H1: "Study in Spain. Do it right."
> H2 (styled smaller): "Spain student visa preparation, handled end-to-end by our immigration specialists."

---

### 6. Logo filename has double extension
**Severity: Low-Medium (technical)**

Both the nav and footer load the logo from:
```
/assets/logo-horizontal-light.png.png
```

The `.png.png` double extension is a bug. While browsers may still load it, it looks unfinished and could cause issues with some crawlers and image indexing. Rename the file or fix the path reference.

---

## ✅ What's Actually Excellent (don't change these)

### Structured Data — genuinely impressive for a new site

Your JSON-LD schema graph is well-built:
- **Organization** schema with sameAs LinkedIn/Facebook links ✅
- **WebSite** schema ✅
- **WebPage** schema ✅
- **Service** schema with two-stage **Offer** pricing (€300 / €499) ✅
- **BreadcrumbList** ✅
- **FAQPage** with 7 questions and full answers ✅

The FAQPage schema is particularly strong — Google uses this to generate the expandable FAQ boxes in search results, which can nearly double the visual space your result takes up. This is a real competitive advantage. Keep every FAQ answer detailed and up to date.

### Meta robots — correct
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
```
`max-image-preview:large` allows Google to use full-size images in rich results. `max-snippet:-1` means Google can use as much of your text as it wants for descriptions. Both are correct.

### Nationality strip — SEO goldmine
The nationality strip links directly to 7 country-specific landing pages:
- `/by-nationality/spain-student-visa-usa/`
- `/by-nationality/spain-student-visa-uk/`
- `/by-nationality/spain-student-visa-canada/`
- `/by-nationality/spain-student-visa-australia/`
- `/by-nationality/spain-student-visa-ireland/`
- `/by-nationality/spain-student-visa-south-africa/`
- `/by-nationality/spain-student-visa-new-zealand/`

This is exactly right. These country-specific pages will likely become your best-ranking pages — "spain student visa from uk", "spain student visa for american citizens" etc. are high-intent, medium-competition keywords your competitors don't all cover. Make sure each page has unique, detailed content (not just a template swap).

### Internal link structure — clean
Nav links to: What Is It / Requirements / Pricing / Process / FAQ / Guides — all logical, keyword-relevant anchors. The work-rights section links to `/work-rights/`. The footer has a structured sitemap. No orphan pages visible from the homepage.

### Open Graph & Twitter cards — properly implemented
Both sets of social sharing tags are present with images, correct dimensions declared, and relevant copy. The `og:locale` is `en_GB` which is appropriate.

### Mobile experience — well considered
Fixed nav, mobile menu, sticky bottom CTA bar with "Start Application" and "Contact Us" — this is good UX and Google's mobile-first indexing will reward it.

### Skip link for accessibility
`<a href="#main" class="skip-link">Skip to content</a>` — small detail, but it matters for accessibility scores and Google's page experience signals.

### prefers-reduced-motion
CSS media query properly disables animations for users who have reduced motion enabled. Shows care in the build.

---

## 🟡 Medium Priority Issues

### Google Analytics / GA4 not visible in homepage HTML
No GA4 snippet in the `<head>`. You may have it loaded via Google Tag Manager elsewhere, but it's not visible in the source. Without it, you're flying blind — you won't know where traffic comes from, which pages convert, or what keywords are sending visitors. Set this up immediately via GTM or direct snippet if it's not already running.

### CookieYes script is render-blocking
```html
<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/..."></script>
```
This is loaded synchronously in `<head>` without `async` or `defer`. It will block page rendering until it loads. Add `async` to improve First Contentful Paint:
```html
<script async id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/..."></script>
```
Note: test after changing, as some cookie scripts need to run before the page renders for compliance reasons.

### OG image is a square logo (500×500)
The `og:image` is `logo-square-white.png` at 500×500. For Facebook and LinkedIn previews, the recommended size is **1200×630** (1.91:1 ratio). Your Twitter card uses `og-home.jpg` which is better, but the main OG image will display poorly on most social platforms. Create a proper 1200×630 hero image for social sharing.

### inline `#nav-fix-2` style block — technical debt
There's a `<style id="nav-fix-2">` block with `!important` overrides and a `body { padding-top: 145px !important; }` hack. This suggests last-minute layout fixes. The large top padding (145px) could affect Cumulative Layout Shift (CLS) scores. Clean this up when you have time.

### No testimonials or reviews on homepage
The homepage has strong trust signals from brand affiliation (Platinum Legal Spain) but no social proof from customers. No star ratings, no review count, no quotes. Competitors like myspainvisa.com prominently display Trustpilot scores. A single well-designed testimonial section above the pricing card would meaningfully improve conversion rate and dwell time.

### Stats section — verify accuracy
The hero shows: "7 Nationalities", "30h work/week", "4-8w processing", "2 payments". These are accurate and good. But "7 Nationalities we specialise in" is a weak stat — consider replacing with something more powerful like approval rate, years experience, or number of applications handled.

---

## 📝 On-Page Issues Summary Table

| Element | Current | Issue | Fix |
|---------|---------|-------|-----|
| Title tag | 82 chars | Too long — truncated in SERPs | Shorten to ~55 chars |
| Meta description | ~176 chars | Over 155 limit — key USPs cut off | Rewrite to 150-155 chars |
| H1 | "Study in Spain. Do it right." | No primary keyword present | Add "Spain student visa" to H1 |
| Canonical | non-www | Mismatch with www domain | Verify 301 redirect, align canonical |
| Footer copyright | "My Spanish NLV" | Wrong brand name | Change to "My Spanish Student Visa" |
| Logo filename | `.png.png` | Double extension bug | Fix filename or path |
| OG image | 500×500 square | Wrong ratio for social previews | Replace with 1200×630 image |
| CookieYes script | Blocking | Render-blocking in `<head>` | Add `async` attribute |
| GA4 | Not visible | No analytics tracking apparent | Install GA4 |
| Testimonials | None | No social proof on homepage | Add reviews section |

---

## 🧱 Content Plan — What to Build Next

The homepage is a good start but the site's long-term ranking power will come from the content hub. Based on the nav structure, you have pages for: what-is-student-visa, requirements, pricing, process, faq, blog, work-rights, renewal, about, contact, and 7 nationality pages.

### Priority order for content creation:

**Week 1 — Quick wins (highest ROI per hour):**

1. **Blog post: "Spain Student Visa 2026 — What Changed This Year"**
   - Target keyword: `spain student visa 2026`
   - Cover: medical certificate requirement (May 2025), 30hr work rights, language school renewal restriction, DELE/SIELE exam requirement
   - This is the most timely, searchable, low-competition piece you can publish right now

2. **Blog post: "Spain Student Visa Document Checklist (2026)"**
   - Target keyword: `spain student visa checklist` / `spain student visa requirements`
   - Include a downloadable/printable PDF checklist — this earns backlinks naturally
   - Embed the same content on your /requirements/ page if not already there

3. **FAQ page (`/faq/`)** — expand to 20+ questions
   - Your homepage FAQ has 8 questions. A standalone FAQ page targeting 20+ questions will capture a massive amount of People Also Ask traffic
   - Each answer should be 2-4 sentences, factual, directly answering the question

**Week 2-4 — Medium priority:**

4. **Blog post: "How Much Does a Spain Student Visa Cost? (2026 Full Breakdown)"**
   - Target: `spain student visa cost`
   - Cover: government fee by nationality, your service fee, translations, health insurance, flights, total budget estimate

5. **Blog post: "Spain Student Visa Processing Time — By Consulate"**
   - Target: `spain student visa processing time`
   - Cover processing times at: London, New York, LA, Sydney, Toronto, Dublin — this is highly specific and almost no competitor has it

6. **Blog post: "Spain Student Visa Health Insurance — What You Actually Need"**
   - Target: `spain student visa health insurance`
   - Natural internal link to spanish-healthinsurance.com (good for SEO and revenue)

7. **Work rights page (`/work-rights/`)** — if not already detailed
   - Target: `can I work on spain student visa` / `spain student visa work rights`
   - This is already linked from the homepage — make sure it's substantial

**This quarter — strategic investments:**

8. **Nationality pages** — each `/by-nationality/` page should have 800+ words of unique content
   - Don't just change the country name — include consulate location, specific processing quirks, country-specific document requirements, local success stories
   - These pages will rank fast because competitors rarely build this granularly

9. **Pillar page: "The Complete Spain Student Visa Guide (2026)"**
   - 3,000+ words, comprehensive, updated annually
   - Links to every other page on the site
   - This becomes your #1 organic landing page over time

10. **Renewal page (`/renewal/`)** — already in nav/footer
    - Target: `spain student visa renewal` / `prorroga estancia estudios`
    - Good long-tail, low competition

---

## 🔗 Link Building Starting Points

You have built-in link-building assets already:

- **Parent company backlink**: platinumlegalspain.com should link to myspanishstudentvisa.com with anchor text "Spain student visa" — if this isn't in place, add it today
- **Sister sites**: myspainvisa.com, myspanishnlv.com, myspanishdnv.com should all cross-link
- **Partner sites**: spanish-healthinsurance.com, 247expatinsurance.com — mutual cross-linking
- **Spanish language schools**: Reach out to UK/US/AUS-facing language schools in Spain — offer to write a guest post or be listed as their "visa help" resource
- **Study abroad directories**: Get listed on Expatica, InterNations, Expat Focus, the Local Spain
- **University international offices**: Some post resource lists for incoming international students

---

## 📋 Complete Action Checklist

### Do today:
- [ ] Fix footer copyright: "My Spanish NLV" → "My Spanish Student Visa"
- [ ] Shorten title tag to ~55 chars
- [ ] Rewrite meta description to ~150 chars
- [ ] Fix H1 to include "Spain student visa"
- [ ] Verify canonical/www redirect alignment
- [ ] Fix logo double extension: `.png.png` → `.png`
- [ ] Set up Google Search Console + submit sitemap
- [ ] Set up Bing Webmaster Tools + submit sitemap
- [ ] Verify GA4 is tracking

### Do this week:
- [ ] Create 1200×630 OG social sharing image
- [ ] Add `async` to CookieYes script
- [ ] Add `async` attribute to CookieYes
- [ ] Publish "2026 Changes" blog post
- [ ] Publish "Document Checklist" blog post
- [ ] Make sure platinumlegalspain.com links to this site
- [ ] Make sure sister sites cross-link

### Do this month:
- [ ] Add testimonials/reviews section to homepage
- [ ] Build out all 7 nationality pages with unique content (800+ words each)
- [ ] Expand FAQ page to 20+ questions
- [ ] Publish cost, processing time, and health insurance blog posts
- [ ] Set up Trustpilot profile and start collecting reviews
- [ ] Begin link outreach to Spanish language schools and study abroad directories

---

## 🏆 Competitive Advantage Summary

You have three things your main competitors (myspainvisa.com, spainstudyadvisors.com) either don't have or don't do as well:

1. **The payment structure** — "Pay €300 now, €499 on approval" is a powerful differentiator. No competitor leads with this as clearly as you do. Make it more prominent in the title tag and meta description.

2. **Nationality-specific pages** — You've already built 7. Competitors don't have this level of granularity. With good content on each, these pages will rank faster than generic terms.

3. **The brand connection** — Platinum Legal Spain is an established entity with a real backlink profile. Make sure that backlink and brand connection is front and centre for Google's trust evaluation.

---

*Audit based on full homepage HTML analysis, April 26, 2026. For precise keyword volume data, connect Ahrefs or Semrush.*
