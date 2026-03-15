# Global Printers — Portfolio Website

## Project Brief for Claude Code

---

## Business Identity

- **Business Name:** Global Printers
- **Founded:** 1996 (Est. 1996)
- **Tagline:** "Delivering exceptional prints, on time, every time"
- **Location:** Bhilwara, Rajasthan — serving Delhi NCR and pan-India

---

## Project Overview

A professional portfolio website for **Global Printers**, a full-service offset printing business established in 1996. The goal is to communicate **craft, precision, heritage, and trustworthiness** while showcasing the quality of work and converting visitors into customers. The brand should feel established, capable, and premium — on par with large printing companies.

**Primary Goal:** Generate quote requests and WhatsApp leads from D2C brands, e-commerce businesses, and corporates.
**Secondary Goal:** Build credibility through portfolio, testimonials, and 30 years of expertise.

---

## Design Principles

1. **Craft over flash** — every element should feel considered and intentional, like fine print work itself.
2. **Trust through substance** — real portfolio samples, real numbers, real testimonials. No stock-photo feel.
3. **Clarity first** — visitors should know what the business does within 3 seconds of landing.
4. **Heritage with modernity** — honor the legacy of offset printing while feeling contemporary.
5. **Mobile-first** — local business owners browse on phones; every section must work perfectly on mobile.
6. **Conversion-focused** — every section should funnel toward "Get a Quote" or a phone call.
7. **Performance** — fast load times; optimize all images. Target < 3s load on 4G.

---

## Visual Identity & Aesthetic

### Overall Aesthetic Direction

**Refined Industrial** — the feel of a premium print studio. Think ink, paper texture, mechanical precision. Not generic SaaS. Not flashy agency. Serious craft.

Reference moods: Letterpress studio, heritage print house, Bauhaus industrial, editorial magazine.

### Color Palette

```
--color-bg:           #0F0F0F    /* Near-black background */
--color-surface:      #1A1A1A    /* Card / section backgrounds */
--color-surface-alt:  #242424    /* Alternate surface */
--color-border:       #2E2E2E    /* Subtle dividers */
--color-accent:       #C8922A    /* Warm gold — primary accent */
--color-accent-light: #E8B84B    /* Lighter gold for hover states */
--color-text-primary: #F0EDE8    /* Warm off-white — main body text */
--color-text-secondary:#A09A92   /* Muted warm grey — captions, meta */
--color-text-muted:   #5C5752    /* Very subtle — labels, placeholders */
--color-cta:          #C8922A    /* CTA buttons — same as accent */
--color-cta-hover:    #E8B84B
--color-error:        #C0392B
--color-success:      #27AE60
```

Use the dark background as the dominant theme. Sections can alternate between `--color-bg` and `--color-surface` for visual rhythm.

### Typography

#### Font Pairing

- **Display / Headings:** `Playfair Display` (Google Fonts) — serif with high contrast strokes, evokes quality print tradition
- **Body / UI:** `DM Sans` (Google Fonts) — clean, readable, modern without being sterile
- **Accent / Labels:** `DM Mono` (Google Fonts) — for small caps labels, stat numbers, technical details

#### Font Scale (rem-based, 16px root)

```
--text-xs:    0.75rem   /* 12px — fine print, labels */
--text-sm:    0.875rem  /* 14px — captions, meta */
--text-base:  1rem      /* 16px — body */
--text-lg:    1.125rem  /* 18px — lead paragraph */
--text-xl:    1.25rem   /* 20px — card titles */
--text-2xl:   1.5rem    /* 24px — section subtitles */
--text-3xl:   1.875rem  /* 30px — section headings */
--text-4xl:   2.25rem   /* 36px — large headings */
--text-5xl:   3rem      /* 48px — hero subtitle */
--text-6xl:   3.75rem   /* 60px — hero headline */
--text-7xl:   5rem      /* 80px — oversized display (desktop only) */
```

#### Typography Rules

- Headings use `Playfair Display`, normal or italic weight
- Body text uses `DM Sans` at 400 weight, 1.6 line-height
- All-caps labels use `DM Mono` at `--text-xs`, letter-spacing: 0.15em
- Max line length: 70 characters for body text (use `max-width: 65ch`)
- Avoid centered text for body copy; reserve centering for headlines only

---

## Layout & Spacing

### Grid

- Max content width: `1280px`, centered
- Section padding: `120px 0` on desktop, `64px 0` on mobile
- Gutter: `24px` on mobile, `32px` on desktop

### Spacing Scale

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

### Layout Principles

- Use asymmetric layouts where possible (e.g., 60/40 splits instead of 50/50)
- Let images bleed to the edge on mobile
- Generous whitespace between sections — do not crowd
- Use horizontal rules (`border-top: 1px solid var(--color-border)`) to separate sections subtly

---

## Motion & Animation

- Page load: staggered fade-up on hero elements (delay: 0ms, 150ms, 300ms, 450ms)
- Scroll reveal: elements fade up 24px as they enter viewport (use IntersectionObserver)
- Hover on cards: subtle `translateY(-4px)` + border-color transition (200ms ease)
- CTA button hover: background lightens, slight scale(1.02) (150ms ease)
- Image hover in portfolio: slight zoom (scale 1.05, 400ms ease) with overlay reveal
- No animations on reduced-motion (`@media (prefers-reduced-motion: reduce)`)
- Keep all transitions under 400ms; nothing should feel sluggish

---

## Sections — Full Specification

---

### 1. Navigation (Sticky)

**Purpose:** Wayfinding + persistent CTA

**Content:**

- Logo (left)
- Nav links: Services | Portfolio | About | Process | Contact
- CTA button: "Get a Quote" (right, accent colored)
- Hamburger menu on mobile

**Behavior:**

- Transparent on hero, becomes `--color-surface` with backdrop-blur on scroll
- Active link indicator: thin gold underline
- Mobile: full-screen overlay menu

---

### 2. Hero Section

**Purpose:** Immediate impact — state who you are, what you do, and prompt action

**Layout:** Full viewport height. Background: dark with a subtle paper/grain texture overlay at 8% opacity. Large headline left-aligned, image right side.

**Content:**

- Eyebrow label: `OFFSET PRINTING • EST. 1996` (DM Mono, uppercase, gold)
- H1 Headline: _"Delivering Exceptional Prints, On Time, Every Time"_
- Subheadline: _"From Bhilwara's industrial roots to Delhi NCR's D2C ecosystem — premium, high-GSM print assets at scale."_
- Two CTAs: Primary — "Get a Quote on WhatsApp" | Secondary — "View Our Work" (ghost button)
- Trust bar below CTAs: `30 Years` in Business | `50+` Industries Served | `72hr` Turnaround

**Assets Required:**
| Asset | Spec |
|---|---|
| Hero image — styled product flat lay | 1920×1080px minimum, JPG, < 400KB. A beautifully arranged spread of finished print samples (brochures, cards, catalogues) on a dark surface. AI-generated studio shot is perfect here. |
| Logo SVG | SVG preferred, white/light version for dark bg |

> ⚠️ Do NOT use press/machinery imagery in the hero. The hero should lead with the **finished product quality**, not production equipment.

---

### 3. Services Section

**Purpose:** Tell visitors exactly what you offer

**Layout:** Section heading + subtitle, then a 3-column grid of service cards (2-col on tablet, 1-col on mobile)

**Each Card Contains:**

- Icon (SVG line icon, gold colored)
- Service name (H3)
- 2–3 sentence description
- Optional: "Learn more" text link

**Services to Include:**

1. Brochures & Pamphlets
2. Visiting Cards
3. Catalogues
4. Stickers & Labels
5. Posters & Banners
6. Books & Reports
7. Sticker Bands
8. billbooks
9. Letterheads
10. Garment Tags
11. Food Menus
12. Wedding Cards

**Assets Required:**
| Asset | Spec |
|---|---|
| Service icons | SVG, line style, 48×48px viewBox, single color (will be tinted gold via CSS) |
| No photography needed for this section | — |

---

### 4. Portfolio / Work Showcase

**Purpose:** Prove quality visually — the most important section for conversion

**Layout:** Filterable masonry or uniform grid. Filter tabs at top by category. Lightbox on click for full-size view.

**Filter Categories:** All | Brochures & Pamphlets | Visiting Cards | Catalogues | Stickers & Labels | Posters & Banners | Books & Reports | Sticker Bands | billbooks | Letterheads | Garment Tags | Food Menus | Wedding Cards
**Each Portfolio Item:**

- Image thumbnail (see specs below)
- On hover: overlay with project name + category
- On click: lightbox with larger image + optional caption

**Assets Required:**
| Asset | Spec |
|---|---|
| Portfolio thumbnails | 800×600px, JPG, < 150KB each. Minimum 12 images. |
| Lightbox full images | 1600×1200px, JPG, < 500KB each |
| Alt text for each | Short description for accessibility e.g. "Tri-fold brochure for a real estate company" |

**Photography Tips for Print Work:**

- Shoot on clean, dark or neutral surfaces
- Use natural light or softbox — no harsh shadows
- Show texture and detail — close-up shots work well
- Fan out multi-page pieces to show volume
- Include lifestyle context where possible (e.g., brochure in hand)

---

### About Us

**Purpose:** The story behind the brand — builds trust and communicates experience

**Layout:** 2-column. Left: owner portrait. Right: story, values, and credentials.

**Content (use verbatim, copy-edit for flow):**

> In 1996, we started in the industrial heart of Bhilwara, providing high-durability print solutions for the region's largest textile and transport giants. While the industry has moved from traditional looms to digital storefronts, our core remains the same: high-volume precision and absolute reliability.
>
> Today, we've bridged the gap between our manufacturing roots and the high-speed demands of Delhi NCR's D2C ecosystem. By combining decades of technical expertise with a tech-enabled supply chain, we deliver premium, high-GSM print assets at scale. We don't just take orders; we manage the print infrastructure that keeps your warehouse moving.

**Assets Required:**
| Asset | Spec |
|---|---|
| Owner portrait | 800×1000px, JPG — professional and warm, reviewing print samples or at a desk |
| Optional: office photo | 1200×800px, JPG — only if it looks clean and professional |

**Purpose:** Address objections and build confidence

**Layout:** 2-column. Left: large heading + paragraph. Right: 4–6 feature points as icon + text rows.

**Confirmed Differentiators:**

- ✓ 30 years of offset printing expertise
- ✓ End-to-end service: brief, design, proof, print, deliver
- ✓ Startup-friendly MOQs with corporate-grade capacity
- ✓ Premium high-GSM stocks with consistent color quality
- ✓ Standard 72-hour turnaround
- ✓ Matte, Gloss Lamination, Spot UV & Embossing finishes
- ✓ Pan-India delivery for bulk orders
- ✓ Digital proofing before every full print run

**Assets Required:**
| Asset | Spec |
|---|---|
| Feature/differentiator icons | Same SVG icon set as services |

---

### 6. Process Section

**Purpose:** Reduce anxiety for new customers — show it's easy to work with you

**Layout:** Horizontal step flow on desktop, vertical timeline on mobile. 4–5 steps.

**Steps:**

1. **Brief** — You tell us what you need (quantity, size, finish)
2. **Design** — Provide artwork or use our design service
3. **Proof** — Review a digital or physical proof
4. **Print** — We run the press with precision
5. **Deliver** — Packaged and dispatched on time

**Each Step:**

- Step number (oversized, gold, DM Mono)
- Step title
- 1-sentence description

**Assets Required:**

- None (icon-based, no photos needed)

---

### 7. Testimonials

**Purpose:** Social proof from real customers — without exposing who they are

**Privacy Rule:** Do NOT display client names, company names, logos, or any identifying information. Competitors could use this to poach clients. Attribution should be anonymous but still feel credible.

**Attribution format:** Initials + Role + Industry only.

**Testimonials (confirmed, anonymised):**

1. _"Switching to Global Printers saved us nearly 30% in annual procurement costs. The 350 GSM stock is heavy, premium, and consistently better than what we were getting from local distributors."_
   — A.S., Head of Procurement — D2C Fashion

2. _"Handling our peak sale volumes — over 1,500+ orders daily — requires a partner who doesn't miss a deadline. The inventory management is seamless, and we haven't faced a stock-out since the transition."_
   — V.B., Operations Manager — E-commerce Logistics

3. _"The matte finish is industrial grade. Even with complex, high-volume runs, the color consistency and edge-cutting are perfect. It's rare to find this level of quality at this price point."_
   — S.M., Creative Lead — Apparel Brand

4. _"We started with a small trial run for our accessories line and quickly moved our entire footwear catalog over. They are startup-friendly but have the capacity to scale with us as our numbers grow."_
   — R.K., Founder — Footwear Startup

5. _"Reliability is the biggest factor for us. The digital proofing process is quick, and the delivery timeline for bulk orders is fixed and dependable. It has simplified our entire supply chain."_
   — N.J., Director — Textile House

**Layout:** 3-column card grid (carousel on mobile). Quote-forward design — large italic quote text is the hero, attribution is small and subtle below.

**Each Testimonial Card:**

- Large opening quote mark (decorative, gold)
- Quote text (italic, Playfair Display)
- Thin divider line
- Initials avatar (text-based, gold monogram on dark circle — no photos)
- Attribution: Initials, Role, Industry

**Assets Required:**

- None — no headshots, no logos, no external assets needed
- Initials avatars are CSS/text-based

**Content Needed:**

- Minimum 3 testimonials (5 preferred)
- Collect real quotes from clients, then anonymise before publishing
- Written permission from each client still recommended

---

### 8. Stats / Numbers Bar

**Purpose:** Quick trust-building at a glance — without revealing client identities

**Layout:** Full-width dark band, 4 stats in a row

**Stats (confirmed):**

- `30+` Years in Business
- `50+` Industries Served
- `72hr` Standard Turnaround
- `500+` Paper & Finish Combinations

> ⚠️ Do NOT use "X+ Clients Served" or "X+ Happy Customers" — this signals the size of the client base to competitors. Use industries, years, and capabilities instead.

**Assets Required:**

- None (text only)

---

### 9. FAQ Section

**Purpose:** Answer common questions, reduce friction before quote request

**Layout:** Accordion (expand/collapse), 2 columns on desktop

**FAQs (confirmed):**

1. **What file formats do you accept?**
   We accept high-resolution PDF, PNG, and JPG files.

2. **Do you offer design services?**
   Yes. We provide professional design support to ensure your artwork is print-ready.

3. **What are your minimum order quantities?**
   MOQs vary by product, but we are startup-friendly. We cater to both small-scale entities and high-volume corporate orders.

4. **How long does printing take?**
   Standard turnaround is 72 hours to 1 week, depending on the order complexity and volume.

5. **Do you offer proofs before printing?**
   Yes. We provide a final digital or physical proof for your approval before starting the full print run.

6. **What finishing options are available?**
   We offer all popular finishes, including Matte/Gloss Lamination, Spot UV, and Embossing.

7. **Do you deliver, or is it pickup only?**
   We offer doorstep delivery for bulk orders. Small-scale orders are currently available for pickup only.

8. **How do I get a quote?**
   Simply message us on WhatsApp with your requirements for a quick estimate.

**Assets Required:**

- None

---

### 10. Contact / Get a Quote Section

**Purpose:** Primary conversion point — make it dead easy to reach out

**Layout:** 2-column. Left: contact info + map embed. Right: quote request form.

**Contact Info (confirmed):**

- **Phone:** +91 94142 59587 (clickable `tel:` link)
- **Email:** globalprinter76@gmail.com (clickable `mailto:` link)
- **Address:** Shop No. 16, Arihant Complex, Rajendra Marg, Opp. Hotel La Abode, Bhopal Ganj, Bhilwara, Rajasthan 311001
- **Hours:** 11:00 AM – 7:00 PM (confirm days — Mon–Sat assumed)
- **WhatsApp:** https://wa.me/+919414259587 (primary CTA — make this prominent)

**Google Maps Embed (confirmed):**

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.852059940484!2d74.63089127609986!3d25.342744877617605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c34842319287%3A0xdf798b024d28502c!2sGlobal%20Printers!5e0!3m2!1sen!2sin!4v1773337668175!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

**Quote Form Fields:**

- Name (required)
- Company Name (optional)
- Email (required)
- Phone (required)
- Service Type (dropdown: Brochures & Pamphlets ,Visiting Cards ,Catalogues , Stickers & Labels ,Posters & Banners ,Books & Reports ,Sticker Bands ,billbooks ,Letterheads , Garment Tags , Food Menus , Wedding Cards, Other)
- Quantity (number input)
- Message / Additional Details (textarea)
- File Upload (optional — for artwork: accept PDF, JPG, PNG)
- Submit Button: "Send My Request"

> 💡 WhatsApp is the primary conversion channel. Add a sticky WhatsApp floating button on mobile throughout the site linking to https://wa.me/+919414259587

---

### 11. Footer

**Purpose:** Secondary navigation + legal

**Layout:** 3-column on desktop, stacked on mobile

**Columns:**

1. **Brand** — Global Printers logo, tagline "Delivering exceptional prints, on time, every time", WhatsApp icon link
2. **Quick Links** — Services, Portfolio, About, Process, Contact
3. **Contact** — Shop No. 16, Arihant Complex, Bhilwara, Rajasthan | +91 94142 59587 | globalprinter76@gmail.com | 11AM–7PM

**Bottom bar:** `© 2025 Global Printers. All rights reserved.`

**Assets Required:**
| Asset | Spec |
|---|---|
| Logo | SVG, white version |

---

## Complete Assets Checklist

### Must-Have (Required for Launch)

| #   | Asset                         | Format       | Size                           | Notes                                                                |
| --- | ----------------------------- | ------------ | ------------------------------ | -------------------------------------------------------------------- |
| 1   | Logo                          | SVG          | —                              | Light/white version for dark bg                                      |
| 2   | Hero image — product flat lay | JPG          | 1920×1080, <400KB              | Studio shot of finished print samples arranged on a dark surface     |
| 3   | Portfolio images (min 12)     | JPG          | 800×600 thumb / 1600×1200 full | Finished print samples — AI studio shots from real samples           |
| 4   | Owner portrait                | JPG          | 800×1000, <200KB               | Professional and warm                                                |
| 5   | Testimonial quotes (min 3)    | Text         | —                              | Anonymised to initials + role + industry. No names or company names. |
| 6   | Business contact info         | Text         | —                              | Address, phone, email, hours                                         |
| 7   | Business founding year        | Text         | —                              | For "Est. [year]"                                                    |
| 8   | Stats/numbers                 | Text         | —                              | Years in business, industries served, etc.                           |
| 9   | FAQ answers                   | Text         | —                              | Based on questions in FAQ section                                    |
| 10  | Google Maps embed             | HTML snippet | —                              | From maps.google.com → Share → Embed                                 |

### Nice-to-Have (Enhances Quality)

| #   | Asset                            | Format | Size             | Notes                                                                   |
| --- | -------------------------------- | ------ | ---------------- | ----------------------------------------------------------------------- |
| 11  | Lifestyle shots (product in use) | JPG    | 1200×900, <250KB | Brochure in hand, cards on desk, catalogue being flipped — AI generated |
| 12  | Office / front desk photo        | JPG    | 1200×800, <250KB | Only if it looks clean and professional                                 |
| 13  | Service icons                    | SVG    | 48×48 viewBox    | Line-style, single color — or use Lucide/Phosphor icon library          |
| 14  | Certifications/badges            | PNG    | ~200px wide      | Any print trade certifications if applicable                            |

> ⚠️ **Do not include** client logos, client headshots, or any named client references anywhere on the website. Competitors could use this information to poach clients.

---

## SEO & Meta

- **Title tag:** `Global Printers — Offset Printing in Bhilwara | Premium Print Solutions Since 1996`
- **Meta description:** `Global Printers is a Bhilwara-based offset printing company with 30+ years of experience. Brochures, business cards, catalogues, packaging, labels and more. Serving D2C brands and corporates pan-India. Get a quote on WhatsApp.`
- **OG image:** 1200×630px JPG — hero image with Global Printers logo overlaid
- **Favicon:** SVG + 32×32 PNG fallback
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Every image must have meaningful `alt` text
- H1 only once per page; H2 for section headings; H3 for cards

---

## Tech Stack (Recommended)

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Playfair Display, DM Sans, DM Mono) via `next/font`
- **Animations:** Framer Motion
- **Form handling:** React Hook Form + server action or Resend/Nodemailer
- **Image optimization:** `next/image` with WebP conversion
- **Deployment:** Vercel

---

## Responsive Breakpoints

```
mobile:  < 640px
tablet:  640px – 1024px
desktop: > 1024px
```

All sections must be fully functional and visually polished at all three breakpoints.

---

## File & Image Prep Instructions

Before sending images to Claude Code for implementation:

1. **Photos:** Export as JPG at 80% quality. Match size specs above.
2. **Logos:** Export as SVG if possible. Otherwise PNG with transparent background.
3. **Portfolio shots:** Use AI image generation (Midjourney, Adobe Firefly, etc.) with real print samples as reference. Keep backgrounds dark/neutral to match the website theme.
4. **AI generation prompt style:** _"professional product photography, [item] on dark textured surface, soft studio lighting, shallow depth of field, premium print quality"_
5. **File naming convention:** Use lowercase-with-dashes. Examples:
   - `hero-product-spread.jpg`
   - `portfolio-brochure-real-estate.jpg`
   - `client-logo-acme-corp.svg`
   - `owner-portrait.jpg`
6. **Artwork files:** Keep originals in AI/PSD for future updates.

---

_This document is the single source of truth for design and development decisions. Update it as the project evolves._
