# Site Audit — Straits Geriatrics

**Date:** 2026-02-19
**Live Site:** https://www.straitsgeriatrics.com.sg/
**Platform:** Wix (Thunderbolt Renderer)
**Spec Document:** content.pdf by sklentr.com (13 Jan 2026)

---

## 1. Site Architecture Audit

### 1.1 Current Page Inventory (Live Site)

| Page URL | Status | Title |
|---|---|---|
| `/` (Home) | 200 OK | The Straits Geriatrics Centre - Comprehensive Geriatric Care |
| `/about` | 200 OK | About - StraitsGeriatrics |
| `/geriatric-care` | 200 OK | Geriatrics Care |
| `/nursing-care` | 200 OK | Nursing Care |
| `/geriatric-assessments` | 200 OK | Geriatrics Assessments |
| `/screenings` | 200 OK | Screenings |
| `/geriatric-health-screening` | 200 OK | Screening Services |
| `/vaccinations` | 200 OK | Vaccinations |
| `/therapy-and-support` | 200 OK | Therapy & Support |
| `/legal-and-care-planning` | 200 OK | Legal & Care Planning |
| `/toa-payoh-community` | 200 OK | Community Clinic |
| `/booking` | 200 OK | Booking |
| `/vcard` | 200 OK | vCard Dr Melanie Tan |
| `/search` | 200 OK | Search |
| `/404` | 200 OK | 404 Page |

### 1.2 Missing Pages (Expected but Not Found)

| Expected URL | Status | Notes |
|---|---|---|
| `/services` | 404 | No services overview/hub page |
| `/contact` | 404 | No contact page (only `/booking`) |
| `/blog` or `/articles` | 404 | No content marketing section |
| `/home-telehealth` | N/A | No dedicated home & telehealth page |
| `/sitemap.xml` | 404 | No XML sitemap for search engines |

### 1.3 Information Architecture Assessment

**Current Structure (Flat):**
```
Home
About
Geriatric Care
Nursing Care
Geriatric Assessments
Screenings
Geriatric Health Screening  ← overlaps with /screenings
Vaccinations
Therapy & Support
Legal & Care Planning
Community Clinic (Toa Payoh)
Booking
```

**Issues:**
- Two screening pages (`/screenings` and `/geriatric-health-screening`) — confusing duplication
- No parent "Services" page to group service sub-pages
- No clear hierarchy — all pages sit at root level
- No breadcrumb navigation expected

---

## 2. Content Audit

### 2.1 Homepage
- **Hero Section:** Should contain H1 headline, subheading, and dual CTAs per spec
- **Value Propositions:** 5 key differentiators specified
- **Who We Help:** 3 audience segments (Older Adults, Families, Healthcare Partners)
- **Services Overview:** 6 core services listed
- **Authority Section:** Specialist credibility block
- **How It Works:** 4-step process
- **Final CTA:** Booking prompt
- **Status:** Cannot verify content completeness due to JS rendering

### 2.2 About Page
- Spec calls for: Philosophy of care, clinical leadership, who we serve
- Dr. Melanie Tan credentials should be featured prominently
- **Status:** Page exists at `/about` but content unverifiable

### 2.3 Service Pages
- **Geriatric Assessments:** Spec includes when helpful (5 scenarios), what's included (5 items), outcomes (4 items)
- **Home & Telehealth:** Spec includes home visits, telehealth consultations, how-it-works flow — **no dedicated page exists**
- **Community Clinic:** Page exists for Toa Payoh location
- **Status:** Individual pages exist but lack a unifying services overview page

### 2.4 Blog/Articles
- Spec defines 5 categories: Ageing & Wellness, Memory & Cognitive Health, Falls & Mobility, Caregiving Guidance, Preventive Health
- **Status:** Completely missing from live site

### 2.5 Contact/Appointment
- Spec calls for: Phone (click-to-call), email, clinic locations, appointment flow explanation
- **Status:** Only `/booking` exists; no dedicated contact page

---

## 3. Technical SEO Audit

### 3.1 Crawlability
| Factor | Status | Notes |
|---|---|---|
| XML Sitemap | Missing | `/sitemap.xml` returns 404 |
| Robots.txt | Unknown | Cannot verify on Wix |
| Canonical Tags | Unknown | JS-rendered, cannot verify |
| Internal Linking | Poor | No services hub, fragmented navigation |
| URL Structure | Mixed | Some good (`/geriatric-assessments`), some confusing (`/vcard`) |

### 3.2 On-Page SEO
| Factor | Status | Notes |
|---|---|---|
| H1 Tags | Unknown | Cannot verify due to JS rendering |
| Meta Descriptions | Auto-generated | Wix auto-generates, likely not optimized |
| Open Graph Tags | Unknown | Cannot verify |
| Structured Data | Missing | No JSON-LD for MedicalClinic, Physician, etc. |
| Image Alt Text | Unknown | Cannot verify |

### 3.3 Page Speed (Estimated)
| Factor | Impact | Notes |
|---|---|---|
| JavaScript Bundle Size | High | Wix ships ~500KB+ of framework JS |
| First Contentful Paint | Slow | Content requires JS execution |
| Largest Contentful Paint | Slow | Dynamic content loading |
| Cumulative Layout Shift | Risk | Dynamic component injection |
| Core Web Vitals | Likely Failing | Wix sites commonly underperform on CWV |

---

## 4. User Experience Audit

### 4.1 Navigation
- **Primary Nav:** Exists (hamburger on mobile, standard menu on desktop)
- **Issue:** Too many top-level items without grouping
- **Issue:** No breadcrumbs for deep pages
- **Issue:** No clear "Services" dropdown grouping sub-services

### 4.2 Conversion Paths
| Path | Status | Issue |
|---|---|---|
| Homepage → Book Consultation | Exists | CTA placement unknown |
| Service Page → Booking | Unknown | No clear flow verified |
| Phone Call | Partially | Number exists but not prominent |
| Email Contact | Exists | contact@straitsgeriatrics.com.sg |
| WhatsApp | Missing | No WhatsApp integration |

### 4.3 Trust Signals
| Signal | Status |
|---|---|
| Doctor Credentials | On `/about` and `/vcard` only |
| Professional Affiliations | Not prominently displayed |
| Clinic Photos | Unknown |
| Patient Testimonials | Not found |
| Awards/Recognition | Not displayed |
| MOH/SMA Accreditation | Not displayed |

### 4.4 Mobile Experience
- Wix provides responsive layout
- Hamburger menu on mobile
- Heavy JS affects mobile load times significantly
- Touch targets may not meet 44x44px minimum

---

## 5. Competitive Positioning

### 5.1 Locations
| Location | Address | Details |
|---|---|---|
| Gleneagles Medical Centre | 6 Napier Road, #03-14, Singapore 258499 | Main clinic |
| Toa Payoh Community Clinic | Blk 185, Toa Payoh Central, #01-320, Singapore 310185 | Community access point |

### 5.2 Operating Hours
| Day | Hours |
|---|---|
| Monday–Friday | 08:30–17:30 |
| Saturday | 08:30–12:30 |
| Sunday | Closed |

### 5.3 Key Differentiators
- Consultant geriatrician-led (Dr. Melanie Tan — MRCP, FAMS, FRCP)
- Dual-location model (specialist + community)
- Home visit and telehealth options
- Holistic whole-person assessments
- Vice-president of Society for Geriatric Medicine Singapore

---

## 6. Compliance & Legal

| Requirement | Status |
|---|---|
| PDPA (Singapore Data Protection) | Unknown — no privacy policy link found |
| MOH Advertising Guidelines | Unknown — cannot verify content claims |
| Cookie Consent | Wix has built-in cookie banner — status unknown |
| Terms of Service | Not found |
| Accessibility (WCAG 2.1 AA) | Unverifiable, likely non-compliant |

---

## 7. Audit Summary Scorecard

| Category | Score | Notes |
|---|---|---|
| Content Completeness | 5/10 | Missing blog, contact, services hub, telehealth page |
| Technical SEO | 3/10 | No sitemap, no structured data, JS-rendered content |
| Performance | 3/10 | Wix framework overhead, heavy JS |
| User Experience | 5/10 | Functional but disorganized navigation |
| Mobile Experience | 4/10 | Responsive but slow |
| Accessibility | 3/10 | Cannot verify, likely insufficient |
| Trust & Credibility | 5/10 | Doctor info exists but not leveraged well |
| Conversion Optimization | 4/10 | Basic booking exists but path is unclear |
| **Overall** | **4/10** | Significant room for improvement |
