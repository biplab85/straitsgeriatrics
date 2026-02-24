# Improvements Plan — Straits Geriatrics Website

**Date:** 2026-02-19
**Objective:** Rebuild straitsgeriatrics.com.sg as a high-performance, SEO-optimized, conversion-focused healthcare website based on the content spec (content.pdf).

---

## 0. Brand Color Palette & Design Tokens

> Colors extracted from the live site via API. Full SCSS implementation in `scss/_variables.scss`.

### 0.1 Brand Colors (From Live Site)

| Swatch | Hex | Name | Usage |
|---|---|---|---|
| ![#3CA8F0](https://via.placeholder.com/16/3CA8F0/3CA8F0.png) | `#3CA8F0` | **Brand Primary** | Main accent, links, interactive elements |
| ![#34BDEC](https://via.placeholder.com/16/34BDEC/34BDEC.png) | `#34BDEC` | **Primary Light** | Sky blue, lighter variant, hover states |
| ![#4464AC](https://via.placeholder.com/16/4464AC/4464AC.png) | `#4464AC` | **Primary Dark** | Royal blue, deeper accent |
| ![#073B5E](https://via.placeholder.com/16/073B5E/073B5E.png) | `#073B5E` | **Secondary / Navy** | Headings, hero backgrounds, strong text |
| ![#2A3D69](https://via.placeholder.com/16/2A3D69/2A3D69.png) | `#2A3D69` | **Secondary Alt** | Muted navy, alternate dark |

### 0.2 Extended Palette

**Primary Scale (Blue):**
`#EBF6FE` → `#C8E7FC` → `#94D1F9` → `#5FBCF5` → `#3CA8F0` → `#2B8FD4` → `#1F76B8` → `#155D9B` → `#0E4478` → `#073B5E`

**Secondary Scale (Navy):**
`#E8ECF3` → `#C5CCE0` → `#9EA9CA` → `#7686B4` → `#576BA4` → `#4464AC` → `#3A5493` → `#2A3D69` → `#1C2A4A` → `#0F1A30`

**Neutral / Gray Scale:**
`#F8F9FA` → `#F1F3F5` → `#E2E6EA` → `#CED4DA` → `#ADB5BD` → `#868E96` → `#656D78` → `#495057` → `#343A40` → `#1A1E23`

### 0.3 Accent Colors

| Swatch | Hex | Name | Usage |
|---|---|---|---|
| ![#0FA3B1](https://via.placeholder.com/16/0FA3B1/0FA3B1.png) | `#0FA3B1` | **Teal** | Alternative accent, wellness sections |
| ![#C8962E](https://via.placeholder.com/16/C8962E/C8962E.png) | `#C8962E` | **Gold** | Premium CTAs, trust badges |
| ![#E86F51](https://via.placeholder.com/16/E86F51/E86F51.png) | `#E86F51` | **Coral** | Urgent CTAs, phone/booking buttons |

### 0.4 Semantic Colors

| Swatch | Hex | Name | Usage |
|---|---|---|---|
| ![#2E9E5A](https://via.placeholder.com/16/2E9E5A/2E9E5A.png) | `#2E9E5A` | **Success** | Confirmations, availability |
| ![#E6A817](https://via.placeholder.com/16/E6A817/E6A817.png) | `#E6A817` | **Warning** | Alerts, important notices |
| ![#DC3545](https://via.placeholder.com/16/DC3545/DC3545.png) | `#DC3545` | **Error** | Form errors, validation |
| ![#3CA8F0](https://via.placeholder.com/16/3CA8F0/3CA8F0.png) | `#3CA8F0` | **Info** | Informational (reuses primary) |

### 0.5 SCSS Files Created

```
scss/
├── _variables.scss    → All color tokens, typography, spacing, layout, shadows, transitions
├── _mixins.scss       → Responsive breakpoints, typography, layout, button, card, form mixins
└── main.scss          → Entry point with reset, base styles, and utility classes
```

---

## 1. Platform & Architecture

### 1.1 Migrate Off Wix
- **Action:** Build a custom static/SSR website instead of remaining on Wix
- **Recommended Stack:**
  - **Framework:** Next.js (App Router) or Astro for static-first with SSR capability
  - **Styling:** Tailwind CSS for rapid, consistent design
  - **CMS:** Headless CMS (Sanity, Strapi, or Contentful) for blog/articles management
  - **Hosting:** Vercel, Netlify, or Cloudflare Pages for edge delivery in Singapore
- **Impact:** 3-5x faster load times, full SEO control, complete customization

### 1.2 Implement Proper Site Architecture
```
/                           → Home
/about                      → About (Philosophy, Leadership, Who We Serve)
/services                   → Services Overview Hub
  /services/geriatric-assessment  → Comprehensive Geriatric Assessment
  /services/memory-cognitive      → Memory & Cognitive Health
  /services/medication-review     → Medication Review & Optimization
  /services/falls-frailty         → Falls, Frailty & Mobility Care
  /services/chronic-disease       → Chronic Disease Management
  /services/preventive-screening  → Preventive Health & Screening
/home-telehealth            → Home & Telehealth Services
/community-clinic           → Toa Payoh Community Clinic
/articles                   → Blog/Articles Hub
  /articles/[category]      → Category Pages
  /articles/[slug]          → Individual Articles
/contact                    → Contact & Appointment
/booking                    → Online Booking Form
```

### 1.3 Setup Development Environment
- Initialize `package.json` with proper dependencies
- Configure ESLint, Prettier, TypeScript
- Set up CI/CD pipeline (GitHub Actions → auto-deploy)
- Create component library with design tokens

---

## 2. SEO Improvements

### 2.1 Technical SEO
| Action | Priority | Details |
|---|---|---|
| Generate XML Sitemap | P0 | Auto-generate `/sitemap.xml` with all pages |
| Add robots.txt | P0 | Allow all crawling, reference sitemap |
| Implement SSR/SSG | P0 | All content in static HTML, not JS-rendered |
| Add Canonical Tags | P0 | Prevent duplicate content issues |
| Implement Structured Data | P0 | JSON-LD for every page type |
| Optimize Core Web Vitals | P1 | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Implement Breadcrumbs | P1 | Schema-marked breadcrumbs on all sub-pages |
| Create 301 Redirects | P1 | Redirect old Wix URLs to new structure |

### 2.2 Structured Data (JSON-LD)
Implement the following schema types:
- **`MedicalClinic`** — for both Gleneagles and Toa Payoh locations
- **`Physician`** — for Dr. Melanie Tan with credentials
- **`MedicalOrganization`** — for Straits Geriatrics overall
- **`LocalBusiness`** — with operating hours, address, phone
- **`BreadcrumbList`** — on all pages
- **`FAQPage`** — on service pages (add FAQ sections)
- **`Article`** — on blog posts
- **`MedicalWebPage`** — on service detail pages

### 2.3 On-Page SEO
- Write unique, keyword-optimized meta titles (< 60 chars) and descriptions (< 160 chars) for every page
- Ensure single H1 per page matching spec headlines
- Implement proper heading hierarchy (H1 → H2 → H3)
- Add descriptive alt text to all images
- Internal linking strategy connecting service pages, blog posts, and CTAs

### 2.4 Local SEO
- Optimize Google Business Profile for both locations
- Ensure NAP (Name, Address, Phone) consistency across the site
- Add embedded Google Maps for both locations
- Target keywords: "geriatrician Singapore", "geriatric care Singapore", "elderly care specialist Gleneagles", "senior health screening Singapore"

---

## 3. Content Improvements

### 3.1 New Pages to Create
| Page | Priority | Content Source |
|---|---|---|
| Services Overview Hub (`/services`) | P0 | Spec Section 3 |
| Home & Telehealth (`/home-telehealth`) | P0 | Spec Section 5 |
| Contact Page (`/contact`) | P0 | Spec Section 8 |
| Blog/Articles Hub (`/articles`) | P1 | Spec Section 7 |
| Individual Service Pages (6) | P1 | Spec Sections 3-4 |

### 3.2 Content Enhancements
- **Add FAQ sections** to each service page (improves SEO and user clarity)
- **Add Dr. Melanie Tan's full credentials** prominently: Monash University (MBBS), MRCP (UK), FAMS (Singapore), FRCP (UK), Graduate Diploma in Palliative Care
- **Add professional roles:** Vice-President of Society for Geriatric Medicine Singapore, Visiting Consultant at NUH and NTFGH
- **Add patient testimonials/reviews** (with consent)
- **Add case studies** (anonymized) demonstrating care outcomes
- **Create initial blog articles** for each of the 5 categories

### 3.3 Blog Content Strategy
Launch with 5 seed articles (one per category):
1. **Ageing & Wellness:** "Understanding Healthy Ageing: What Every Singaporean Senior Should Know"
2. **Memory & Cognitive Health:** "Early Signs of Dementia: When to Seek a Specialist Assessment"
3. **Falls & Mobility:** "Fall Prevention for Seniors: A Practical Guide"
4. **Caregiving Guidance:** "Supporting Your Ageing Parent: A Caregiver's Guide to Medical Decisions"
5. **Preventive Health:** "Essential Health Screenings for Adults Over 65 in Singapore"

---

## 4. Design & UX Improvements

### 4.1 Navigation Redesign
- **Group services** under a "Services" mega-menu or dropdown
- **Add breadcrumbs** on all inner pages
- **Sticky header** with prominent phone number and "Book Now" CTA
- **Footer** with full contact info, operating hours, quick links, and location map

### 4.2 Conversion Optimization
| Element | Action |
|---|---|
| Sticky CTA Bar | Add floating "Book a Consultation" bar on mobile |
| Click-to-Call | Prominent phone number `(65) 6341 5218` in header |
| WhatsApp Button | Add WhatsApp chat widget (standard in SG healthcare) |
| Exit Intent | Consider exit-intent popup for first-time visitors |
| Service Page CTAs | Each service page ends with clear booking CTA |
| Trust Bar | Display credentials, affiliations, insurance logos on every page |

### 4.3 Trust & Credibility Design
- **Doctor profile section** on homepage with photo, credentials, affiliations
- **Insurance logos bar:** Prudential, Singlife (known accepted insurers)
- **Professional badges:** FAMS, FRCP, Society for Geriatric Medicine
- **Clinic photos:** Professional images of both locations
- **Awards:** Silver Ambassador Award prominently displayed

### 4.4 Accessibility (WCAG 2.1 AA)
- Semantic HTML throughout (proper heading hierarchy, landmarks, lists)
- ARIA labels on interactive elements
- Color contrast ratio minimum 4.5:1 for text
- Focus indicators for keyboard navigation
- Alt text on all images
- Skip-to-content link
- Responsive text sizing (no fixed px for body text)
- Touch targets minimum 44x44px

---

## 5. Performance Improvements

### 5.1 Target Metrics
| Metric | Target | Current (Estimated) |
|---|---|---|
| Lighthouse Performance | > 90 | ~40-50 (Wix) |
| First Contentful Paint | < 1.5s | ~3-4s |
| Largest Contentful Paint | < 2.5s | ~5-6s |
| Total Blocking Time | < 200ms | ~800ms+ |
| Cumulative Layout Shift | < 0.1 | Unknown |

### 5.2 Performance Actions
- Static HTML generation for all pages (SSG/SSR)
- Image optimization: WebP/AVIF with responsive `srcset`
- Font optimization: Subset fonts, `font-display: swap`
- Lazy loading for below-fold images
- Minimal JavaScript (no framework overhead for static pages)
- CDN delivery with Singapore edge location
- Gzip/Brotli compression
- Preconnect to external resources

---

## 6. Compliance & Legal

### 6.1 Required Pages/Elements
| Item | Action |
|---|---|
| Privacy Policy | Create PDPA-compliant privacy policy page |
| Terms of Service | Create terms of service page |
| Cookie Consent | Implement cookie consent banner |
| MOH Compliance | Review all content against MOH advertising guidelines |
| PDPA Compliance | Ensure booking forms comply with data protection requirements |

---

## 7. Implementation Roadmap

### Phase 1 — Foundation (Week 1-2)
- [ ] Set up project with chosen framework (Next.js/Astro)
- [ ] Design system: typography, colors, components
- [ ] Create responsive layout templates
- [ ] Build reusable components (Header, Footer, CTA, Cards)

### Phase 2 — Core Pages (Week 3-4)
- [ ] Home page (all sections from spec)
- [ ] About page
- [ ] Services overview hub
- [ ] Individual service pages (6 pages)
- [ ] Contact page
- [ ] Booking integration

### Phase 3 — Extended Features (Week 5-6)
- [ ] Home & Telehealth page
- [ ] Community Clinic page
- [ ] Blog/Articles system with CMS
- [ ] 5 seed articles
- [ ] Search functionality

### Phase 4 — Optimization (Week 7-8)
- [ ] SEO implementation (structured data, meta tags, sitemap)
- [ ] Performance optimization (images, fonts, caching)
- [ ] Accessibility audit and fixes
- [ ] Cross-browser and device testing
- [ ] Analytics setup (GA4, Search Console)
- [ ] 301 redirects from old Wix URLs

### Phase 5 — Launch & Post-Launch
- [ ] Final QA and client review
- [ ] DNS migration
- [ ] Post-launch monitoring
- [ ] Submit sitemap to Google Search Console
- [ ] Begin ongoing blog content creation
