# Problems Report — Straits Geriatrics Website

**Date:** 2026-02-19
**Live Site:** https://www.straitsgeriatrics.com.sg/
**Spec Document:** content.pdf (prepared by sklentr.com, 13 Jan 2026)

---

## 1. Current Website Platform Issues (Live Wix Site)

### 1.1 Performance & Technical Debt
- **Wix Platform Lock-in:** The current site is built on Wix (Thunderbolt renderer), which severely limits customization, code-level SEO control, and performance optimization.
- **Heavy JavaScript Bundle:** The Wix framework ships massive JS bundles (security overrides, rendering engine, dynamic content loaders) resulting in slow initial page loads.
- **No Server-Side Rendering (SSR) of Content:** All page content loads dynamically via JavaScript. Web crawlers, accessibility tools, and social media link previews get empty or minimal markup.
- **Render-Blocking Resources:** Extensive CSS and JS initialization blocks before meaningful content is painted.

### 1.2 SEO Problems
- **Content Not in Static HTML:** Search engine crawlers relying on HTML parsing (not full JS execution) will miss the majority of page content.
- **No Structured Data / Schema Markup:** No JSON-LD or microdata for `MedicalClinic`, `Physician`, `MedicalOrganization`, or `LocalBusiness` schema — critical for a healthcare provider.
- **Missing or Weak Meta Descriptions:** Wix auto-generates meta tags that may not reflect the actual page content accurately.
- **No Sitemap Control:** The `/sitemap.xml` returned a 404, meaning search engines have limited guidance for crawling.
- **URL Structure:** Some URLs are acceptable (`/geriatric-assessments`, `/therapy-and-support`) but others are unclear (`/vcard`, `/search`).

### 1.3 Accessibility Issues
- **WCAG Compliance Unknown:** The Wix platform does not guarantee WCAG 2.1 AA compliance, and the JS-rendered content makes it harder for screen readers.
- **No Visible Alt Text Implementation:** Cannot verify alt attributes on images since content is JS-rendered.
- **Color Contrast:** Without access to rendered CSS variables, contrast ratios cannot be validated.
- **Keyboard Navigation:** Wix's custom components may not properly support keyboard-only navigation.

### 1.4 Content & Navigation Problems
- **Many Pages Return 404:**
  - `/services` — 404
  - `/contact` — 404
  - `/contact-us` — 404
  - `/about-us` — 404
  - `/our-services` — 404
  - `/our-team` — 404
  - `/blog` — 404
  These are all common URLs users and search engines would attempt.
- **No Blog/Articles Section Exists Yet:** The spec calls for an articles/blog page with 5 content categories, but no such section exists on the live site.
- **Fragmented Service Pages:** Services are split across many separate pages (`/geriatric-care`, `/nursing-care`, `/geriatric-assessments`, `/screenings`, `/vaccinations`, `/therapy-and-support`, `/legal-and-care-planning`, `/geriatric-health-screening`) without a clear services overview/hub page.

---

## 2. Repository / Project State Problems

### 2.1 No Implementation Exists
- The repository contains **only 2 files**: `README.md` (one line) and `content.pdf` (specification).
- **Zero HTML, CSS, or JavaScript files** have been created.
- **No images or assets** are present.
- **No build configuration** (no `package.json`, no bundler config, no deployment pipeline).

### 2.2 Incomplete README
- `README.md` contains only `# straitsgeriatrics` — no setup instructions, tech stack decisions, or development guidelines.

---

## 3. Spec-vs-Live-Site Gaps

| Spec Requirement | Live Site Status |
|---|---|
| Home page with hero, value props, services overview, how-it-works | Partially exists but content verification impossible (JS-rendered) |
| About page with philosophy, leadership, who we serve | Page at `/about` exists but content unverifiable |
| Services overview page (6 core services) | No single overview page; fragmented across 7+ individual pages |
| Geriatric Assessments detail page | `/geriatric-assessments` exists |
| Home & Telehealth Services page | No clear dedicated page found |
| Community Clinic page | `/toa-payoh-community` exists |
| Articles/Blog page with 5 categories | Does not exist |
| Contact/Appointment page | `/booking` exists but no `/contact` page |

---

## 4. Business-Critical Problems

### 4.1 Trust & Credibility
- **No visible doctor credentials on many pages:** Dr. Melanie Tan's profile info (MRCP, FAMS, FRCP) is not prominently displayed across the site.
- **No patient testimonials or reviews** visible on the live site.
- **No accreditation badges** (MOH, SMA, etc.) visible.

### 4.2 Conversion Issues
- **Booking flow unclear:** The `/booking` page exists but the user journey from service pages to booking is not well-defined.
- **No click-to-call prominently visible:** Phone number `(65) 6341 5218` not prominently featured.
- **No WhatsApp integration:** Common expectation for Singapore healthcare clinics.

### 4.3 Mobile Experience
- Wix provides responsive design, but the heavy JS payload creates poor mobile performance.
- Mobile-first experience cannot be validated without rendering.

---

## 5. Summary of Critical Issues

| Priority | Issue | Impact |
|---|---|---|
| **P0** | No implementation in repo — site cannot be built/deployed | Blocks all development |
| **P0** | Live Wix site has poor SEO (no SSR, no structured data, no sitemap) | Low search visibility |
| **P1** | Multiple expected URLs return 404 | Lost traffic, poor UX |
| **P1** | No blog/articles section | Missing content marketing opportunity |
| **P1** | No services overview hub page | Confusing navigation |
| **P2** | No structured data for healthcare | Missing rich search results |
| **P2** | Accessibility unverifiable/likely poor | Compliance risk |
| **P2** | Missing trust signals (credentials, reviews) | Lower conversion |
| **P3** | Heavy JS bundles on Wix | Slow page loads |
| **P3** | No WhatsApp or prominent click-to-call | Missed engagement |
