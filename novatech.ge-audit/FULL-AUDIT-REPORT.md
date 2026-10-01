# nova-tech.ge SEO Audit

**Date:** 2026-10-01 · **Method:** claude-seo v2.4.1 (orchestrator and audit skill, `parse_html.py`, `render_page.py`, Playwright), run against the local static export and the live site (https://nova-tech.ge, hosted on Vercel). The live site still runs the pre-fix build until you deploy.

**Business type:** Local service / agency (web design studio in Tbilisi, priced packages from 150₾).

| | Before | After (code fixes in this pass) |
|---|---|---|
| **SEO Health Score (estimate)** | **~36 / 100** | **~69 / 100** |
| Technical SEO (22%) | 35 | 80 |
| Content quality (23%) | 45 | 50 |
| On-page SEO (20%) | 25 | 80 |
| Schema (10%) | 0 | 80 |
| Performance (10%) | ~60 (lab estimate) | ~60 |
| AI search readiness (10%) | 35 | 60 |
| Images (5%) | 60 | 70 |

The remaining gap is mostly **content and trust**, which needs your input (see the action plan).

---

## Critical findings (fixed)

### 1. Every page canonicalized to the homepage
`app/layout.jsx` set `alternates.canonical: "https://novatech.ge/"`. Next.js inherits layout metadata, so 17 of 21 pages told Google *"I am a duplicate of the homepage"*. Only the homepage would have been indexed.
**Fix:** layout canonical removed. Each route sets its own through `pageMetadata()` in `src/seo/site.js`.
**How we'd know it failed:** Search Console › Pages showing "Alternate page with proper canonical tag" for inner URLs.

### 2. Identical `<title>` and description on 17 pages
Titles were set client-side by `HeadTitle` (`document.title` in `useEffect`), so the HTML every crawler and social preview reads said "NOVATECH - ვებსაიტების დამზადება" on every page.
**Fix:** `HeadTitle` deleted. Every route exports a unique, keyword-led title and description (template `%s | NOVATECH`).

### 3. No `<h1>` on any inner page
`BannerInnerSection` received a `title` prop but never rendered it, because the banner is a single image with its text baked in.
**Fix:** the banner now renders `<h1 class="visually-hidden">{title}</h1>`, so the design is unchanged (checked with screenshots at desktop and mobile widths). Several H1s were rewritten to name the topic (e.g. FAQ "მარტივად და გასაგებად" became "ხშირად დასმული კითხვები ვებსაიტის დამზადებაზე").

### 4. Broken internal links sitewide (404s)
Relative links (`href="./contact"`, `href="team"`, `link: "single_services"`) resolved against the current folder. On `/process/`, "დაიწყე ახლა" went to `/process/contact/` (404). The **entire mobile sidebar menu** was broken on every inner page.
**Fix:** all internal links are now absolute with trailing slashes, matching the canonicals exactly. Verified: every `href` in the export points to an existing page.

### 5. No robots.txt, no sitemap.xml
**Fix:** `app/robots.js` and `app/sitemap.js` (static, 20 indexable URLs, generated from `PackagesData` so new packages appear automatically).

## High findings (fixed)

| Finding | Fix |
|---|---|
| No Open Graph or Twitter tags, so shares on Facebook and Messenger showed no image | Per-page `og:*` and `twitter:*` tags, plus a new 1200×630 `public/og-image.jpg` |
| No structured data | `ProfessionalService` + `WebSite` (homepage), `Service` + `Offer` with GEL price (each package), `BlogPosting` (article), `BreadcrumbList` (all inner pages). All JSON-LD parses and matches the visible page |
| `/404_page/` was linked in the main menu and indexable | Removed from header and sidebar; `noindex, follow` |
| Footer social icons linked to the bare `facebook.com`, `youtube.com` etc. | Now point to your real handles from `SocialFeedsData` (facebook / instagram / tiktok `novatech.ge`). YouTube and LinkedIn were dropped because there are no known accounts |
| Price contradiction: FAQ said "from 300₾"; meta and PLUS package say 150₾ | FAQ now says 150₾ (PLUS) |
| Phone and email weren't clickable | `tel:` / `mailto:` links in the header, footer and contact page |
| `public/_redirects` is Netlify-only, so Vercel ignored it and `/partnership` returned 404 | Replaced by `vercel.json` (`/partnership` → `/process/`, 308) |
| Generic alt text ("ლოგო", "NOVATECH" on banner) | Descriptive alt text |

## Open findings (need your decision; not changed)

| Severity | Finding | Why it matters |
|---|---|---|
| **Critical** | **Live site canonicals point to `https://novatech.ge/`**, a domain with no website | Fixed in code (`SITE_URL = https://nova-tech.ge`). **Takes effect only when deployed** |
| High | `www.nova-tech.ge` redirects with **307 (temporary)** | Vercel › Domains › www › set the redirect to nova-tech.ge as **308 Permanent** |
| **High** | **Testimonials look like template placeholders** (e.g. "ემა რიჩარდი", "ჯეიმს პიტერსონი") and the homepage claims **"2.7k დადებითი შეფასება"** | Fabricated reviews breach Google's policies and Georgian consumer-protection rules, and they undermine Trust (the most heavily weighted E-E-A-T factor). I deliberately added **no** Review/AggregateRating schema. Replace them with real client quotes (Gldani United, Burieti, Vinula) or remove them |
| **High** | **Template pages with thin or duplicated content:** `/single_services/` is one generic page linked from 6 different service names; `/single_post/` is the only article, and both blog cards link to it; `/pricing/` duplicates `/packages/` | They dilute crawl budget and cause keyword cannibalisation. Recommended: one page per service (`/services/online-shop/` …), real `/blog/[slug]/` posts, and a 301 from `/pricing/` → `/packages/` |
| **High** | **Team page:** check the 5 people besides the founder are real; their social links point to bare `facebook.com` | Fake team members are a Trust and E-E-A-T risk |
| Medium | Privacy policy and terms links are `href="#"` | Trust signal; also legally required because you run Meta Pixel |
| Medium | Homepage H1 "აიყვანე ბიზნესი ახალ საფეხურზე" has no service keyword | e.g. "ვებსაიტების დამზადება — აიყვანე ბიზნესი ახალ საფეხურზე". It's a copy change, so I left it to you |
| Medium | Underscore URLs (`/why_us/`, `/case_studies/`) | Google recommends hyphens. Change early, while the site has little search history, with 308s in `vercel.json` |
| Medium | ~41 MB of video in `public/assets/novatech/video`; `hero.mp4` (5.7 MB) uses `preload="auto"`; `expertise.mp4` is 13 MB | Mobile LCP and data usage. Measure with PageSpeed once live |
| Low | Exact street address missing (only "თბილისი") | Needed for Google Business Profile and map-pack ranking. Add it to `organizationSchema` and the contact page when you have one |
| Low | Logo file is still named `marko-logo.png` (template name) | Cosmetic |

---

## Files changed
- **New:** `src/seo/site.js` (business facts, `pageMetadata()`, schema builders), `src/Components/Seo/JsonLd.jsx`, `app/robots.js`, `app/sitemap.js`, `public/og-image.jpg`
- **Deleted:** `src/Components/Head/HeadTitle.jsx`
- **Edited:** `app/layout.jsx`, every `app/**/page.jsx`, `Banner/Inner.jsx`, `Footer`, `Header`, `Sidebar`, `Contact`, link fixes in ~15 components and data files, `FaqData.jsx`, `vercel.json` (replaces `public/_redirects`)

## After launch (monitoring)
1. Add the domain to **Google Search Console** and submit `https://nova-tech.ge/sitemap.xml`.
2. Within 2–4 weeks, *Pages › Indexed* should approach 20 URLs. If inner pages show "Duplicate, Google chose different canonical", re-check #1.
3. Test `/` and `/packages/plus/` in the **Rich Results Test** (Breadcrumb should be detected).
4. Run PageSpeed Insights on mobile. Target LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
5. Create a **Google Business Profile** with the same name, phone (+995 575 75 38 28) and website. This is the single biggest local-ranking lever for "საიტის დამზადება თბილისში".
