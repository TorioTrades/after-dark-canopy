# Night Shine Clean

# LOVABLE PROMPT — After Dark Canopy Cleaners (ADCC) Website

## CONTEXT
Building a complete, conversion-focused website for After Dark Canopy Cleaners PTY Ltd — a commercial kitchen cleaning company based in Melbourne, Australia. The brand operates at night (after business hours), cleaning commercial kitchen canopies, exhaust systems, and kitchen environments. The website must look premium, professional, and trustworthy — this is B2B targeting restaurant owners, hotel kitchens, aged care facilities, and food service operators who need to trust a team working unsupervised in their kitchen overnight.

---

## TECH STACK
- React + TypeScript + Tailwind CSS
- Vite build
- React Router for multi-page navigation
- Fully responsive (mobile-first)
- Google Fonts: Montserrat (import weights: 300, 400, 500, 600, 700, 800)

---

## BRAND SYSTEM

### Colors (use as Tailwind CSS custom theme or CSS variables)
```
--primary: #F58220        /* Orange — CTAs, highlights, energy accents */
--primary-dark: #1D1D1D   /* Near-black — hero backgrounds, headers, depth */
--secondary: #0877B9      /* Blue — trust badges, icons, secondary accents */
--background: #FFFFFF      /* White — clean content areas */
--neutral: #F2F2F2         /* Light gray — section alternation, card backgrounds */
--text-dark: #1D1D1D       /* Primary text on light backgrounds */
--text-light: #FFFFFF      /* Text on dark backgrounds */
--text-muted: #6B7280      /* Secondary/supporting text */
```

### Typography — Montserrat Only (Bold + Thin Contrast System)
The entire site uses Montserrat but creates visual depth through deliberate weight pairing:

| Element | Weight | Size (Desktop) | Size (Mobile) | Transform |
|---|---|---|---|---|
| Hero Headline | 800 (ExtraBold) | 56–64px | 36–40px | Uppercase |
| Hero Subtext | 300 (Light) | 20–22px | 16–18px | Normal |
| Section Heading | 700 (Bold) | 36–40px | 28–32px | Normal |
| Section Subheading | 300 (Light) | 16–18px | 14–16px | Normal |
| Service Card Title | 700 (Bold) | 20–22px | 18px | Normal |
| Body / Description | 400 (Regular) | 16px | 15px | Normal |
| CTA Button Text | 600 (SemiBold) | 16px | 15px | Uppercase, letter-spacing: 1px |
| Nav Links | 500 (Medium) | 15px | 14px | Uppercase, letter-spacing: 0.5px |
| Footer Text | 400 (Regular) | 14px | 13px | Normal |
| Badge / Label | 600 (SemiBold) | 13px | 12px | Uppercase, letter-spacing: 1.5px |

**Key Rule:** Headlines are always ExtraBold (800). Their supporting subtext directly below is always Light (300). This creates the professional bold/thin contrast throughout the site. Never use Light weight alone for headings. Never use ExtraBold for body text.

---

## DESIGN DIRECTION — "Professional Depth"

### Visual Style
- **3D depth through layered shadows and subtle gradients.** Cards should float above their background with `box-shadow: 0 10px 40px rgba(0,0,0,0.08)` on white sections and `box-shadow: 0 10px 40px rgba(0,0,0,0.3)` on dark sections.
- **Section layering:** Alternate between dark (#1D1D1D) and light (#FFFFFF / #F2F2F2) sections. The transition between them should feel dimensional — use subtle angled dividers (CSS clip-path or SVG) where appropriate, not just flat color changes.
- **Orange is surgical, not overwhelming.** Use #F58220 only for: CTA buttons, hover states, active nav indicators, accent borders/lines, and key statistics. It should "pop" against the dark and white sections. Never use it as a background fill for large areas.
- **Blue is for trust.** Use #0877B9 for: trust badges, certification icons, checkmarks, and secondary links. It conveys reliability.
- **Icon style:** Use Lucide React icons. Line-style, stroke-width 1.5. Color them #0877B9 on white backgrounds, #F58220 on dark backgrounds.
- **Hover effects on cards:** Subtle lift — `transform: translateY(-4px)` with shadow deepening. Smooth 0.3s ease transition.
- **Border radius:** Use `rounded-xl` (12px) for cards, `rounded-full` for CTA buttons, `rounded-lg` for input fields.

---

## BUSINESS INFORMATION

```
Company: After Dark Canopy Cleaners PTY Ltd
Tagline: Complete Kitchen Cleans
Hours: 8:00 AM – 5:00 PM (Mon–Fri, for bookings/inquiries)
Phone: +61 408 201 103
Email (public): info@afterdarkcanopycleaners.com
Email (admin): admin@afterdarkcanopycleaners.com
Address: 135 Banfield Road, Heidelberg West, VIC, Australia, 3081
Service Area: Melbourne, VIC, Australia

Facebook: https://www.facebook.com/afterdarkcanopycleaners
Instagram: https://www.instagram.com/afterdarkcanopycleaners/
LinkedIn: https://www.linkedin.com/company/afterdarkcanopycleaners
```

---

## SITE STRUCTURE & PAGE LAYOUTS

### NAVIGATION (Sticky Header)
- **Desktop:** Logo (left) → Nav links center (Home, Services, About, Gallery, Contact) → "Get a Free Quote" CTA button (right, orange #F58220 with rounded-full)
- **Mobile:** Logo (left) → Hamburger menu (right). Menu slides in from right as full-height overlay with dark background (#1D1D1D) and white text. Social icons at the bottom of mobile menu.
- **Scroll behavior:** Navbar starts transparent on hero, becomes solid white with subtle bottom shadow after scrolling 80px. Logo and nav text switch from white to dark on scroll.
- Active page indicator: Small orange underline bar below active nav link.

---

### PAGE 1: HOME

#### Section 1 — Hero
- **Full-viewport height** with dark gradient overlay on a placeholder background (use a subtle CSS gradient: linear-gradient(135deg, #1D1D1D 0%, #2a2a2a 50%, #1D1D1D 100%) with a faint radial glow of rgba(245,130,32,0.08) at center).
- **Left-aligned content (60% width on desktop, full-width on mobile):**
  - Small label/eyebrow above headline: "MELBOURNE'S TRUSTED KITCHEN CLEANING SPECIALISTS" — weight 600, font-size 13px, color #F58220, letter-spacing 2px, uppercase.
  - Headline: **"Commercial Kitchen Cleaning Done Right — Every Night."** — weight 800, 56px desktop / 36px mobile, color white. The word "Every Night" should be color #F58220 to emphasize the after-dark positioning.
  - Subtext: "We deep-clean canopies, exhaust systems, and commercial kitchens after hours — so your business opens spotless, safe, and fully compliant every morning." — weight 300, 20px, color rgba(255,255,255,0.8).
  - Two CTA buttons side by side:
    - Primary: "Get a Free Quote" → links to Contact page. Orange background, white text, rounded-full, px-8 py-4.
    - Secondary: "View Our Work" → links to Gallery page. Transparent with white border, white text, rounded-full. On hover: fill white, text goes dark.
- **Right side (desktop only):** Leave empty or use a subtle decorative element — a faint outline of a kitchen canopy icon or geometric lines in rgba(245,130,32,0.1). Do NOT use a stock photo placeholder. Keep it clean.

#### Section 2 — Trust Bar
- Light gray background (#F2F2F2). Horizontal row of 4–5 trust indicators.
- Each: Icon (Lucide, #0877B9) + short label below.
  - Shield icon → "Fully Insured"
  - ClipboardCheck icon → "OH&S Compliant"
  - Award icon → "15+ Years Experience"
  - Clock icon → "After-Hours Service"
  - Sparkles icon → "100% Satisfaction Guarantee"
- Weight 600, size 13px, uppercase, letter-spacing 1px, color #1D1D1D.

#### Section 3 — Services Overview
- White background (#FFFFFF).
- Section heading (centered): "Our Services" — 700 weight, 36px.
- Subheading: "Specialist cleaning solutions for commercial kitchens across Melbourne." — 300 weight, 18px, color #6B7280.
- **6 Service Cards in a 3×2 grid (desktop), 2×3 (tablet), 1×6 (mobile):**
  - Each card: White background, `rounded-xl`, shadow, padding 32px.
  - Top: Lucide icon inside a circle with light orange background (rgba(245,130,32,0.1)), icon color #F58220, size 40px.
  - Title: Service name, 700 weight, 20px, color #1D1D1D.
  - Description: 2–3 sentences, 400 weight, 15px, color #6B7280.
  - Bottom: "Learn More →" link in #0877B9, 500 weight.
  - Hover: Card lifts with translateY(-4px) + deeper shadow.

**Service Card Content:**

1. **Canopy & Range Hood Cleaning**
   Icon: Wind
   "Industrial-strength degreasing of kitchen canopies and range hoods. We strip away months of grease buildup to restore full airflow, eliminate fire hazards, and bring your extraction system back to peak performance."

2. **Filter & Baffle Cleaning**
   Icon: Filter
   "Professional removal, deep-cleaning, and reinstallation of your kitchen exhaust filters. Clean filters mean better extraction, lower energy costs, and a kitchen that stays cooler during service."

3. **Exhaust Fan & Ductwork Cleaning**
   Icon: Fan
   "Complete cleaning from canopy to rooftop — fans, motors, and every centimeter of ductwork in between. We eliminate the hidden grease deposits that are the leading cause of commercial kitchen fires."

4. **Deep Kitchen Cleaning**
   Icon: SprayBottle (or Droplets)
   "Floor-to-ceiling commercial kitchen cleaning — walls, floors, ceilings, benchtops, and equipment exteriors. When we're done, your kitchen is spotless and inspection-ready."

5. **Sanitisation & Disinfection**
   Icon: ShieldCheck
   "Hospital-grade antimicrobial treatment using TGA-approved solutions. We eliminate bacteria, mold, and viral contaminants across all surfaces and ventilation systems to keep your kitchen hygienically safe."

6. **Compliance & Certification**
   Icon: FileCheck
   "Cleaning services designed to meet AS 1851 fire safety standards and local council health regulations. Every job includes before-and-after photo documentation for your compliance records."

#### Section 4 — Why Choose Us
- Dark background (#1D1D1D).
- Section heading (centered, white): "Why Melbourne Kitchens Trust After Dark" — 700, 36px, white.
- Subheading: "We're not a general cleaning company. We're kitchen extraction specialists." — 300, 18px, rgba(255,255,255,0.7).
- **4 feature blocks in a 2×2 grid (desktop), stacked on mobile:**
  - Each block: Semi-transparent dark card (rgba(255,255,255,0.05)), rounded-xl, border 1px rgba(255,255,255,0.1).
  - Icon (Lucide, #F58220, 32px) at top.
  - Title: 700 weight, 20px, white.
  - Description: 400, 15px, rgba(255,255,255,0.7).

  Content:
  1. **Moon icon → "We Work While You Sleep"**
     "Our crews arrive after your kitchen closes and finish before your morning prep begins. Zero disruption to your business operations."

  2. **Flame icon → "Fire Risk Reduction"**
     "Grease buildup in exhaust systems is the #1 cause of commercial kitchen fires. Our deep-clean process eliminates that risk at the source."

  3. **Camera icon → "Documented Every Time"**
     "Every job comes with timestamped before-and-after photos sent directly to you. Full transparency, full accountability."

  4. **BadgeCheck icon → "Fully Insured & Compliant"**
     "We carry comprehensive public liability insurance and clean to AS 1851 standards. Your kitchen, your reputation — fully protected."

#### Section 5 — CTA Banner
- Orange background (#F58220), full-width.
- Centered text:
  - Headline: "Ready for a Cleaner, Safer Kitchen?" — 800, 36px, white.
  - Subtext: "Get a free, no-obligation quote within 24 hours." — 300, 18px, white with slight transparency.
  - CTA button: "Request Your Free Quote" — white background, #F58220 text, rounded-full, px-8 py-4. Hover: slight scale(1.02).

#### Section 6 — Testimonials (Optional — include if Lovable can render)
- Light gray background (#F2F2F2).
- Section heading: "What Our Clients Say" — centered, 700, 36px.
- 3 testimonial cards (horizontal scroll on mobile, grid on desktop).
- Each card: White, rounded-xl, shadow, quote icon at top (Quote Lucide icon in #F58220).
- Placeholder text: "Add real testimonials here." — italicized instruction text.
- Star rating: 5 filled stars in #F58220.
- Name and business name below.

---

### PAGE 2: SERVICES

#### Hero
- Shorter hero (50vh), dark background.
- Headline: "Our Cleaning Services" — 800, 48px, white.
- Subtext: "Every service designed to protect your kitchen, your staff, and your compliance." — 300, 18px, rgba(255,255,255,0.7).

#### Individual Service Sections
- Alternate between white (#FFFFFF) and light gray (#F2F2F2) backgrounds.
- Each service gets its own section with:
  - Left: Large icon (Lucide, 64px, inside a circular badge with orange tint).
  - Right: Title (700, 28px), full description paragraph (400, 16px, 4–5 sentences expanding on the card descriptions from the home page), and a bullet list of what's included (3–4 items with checkmark icons in #0877B9).
  - CTA at bottom: "Get a Quote for This Service" → orange button → links to Contact with a query parameter or anchor for the service name.
- On mobile: Stack vertically (icon on top, content below).

**Expanded Service Descriptions:**

1. **Canopy & Range Hood Cleaning**
   "Over time, commercial kitchen canopies accumulate thick layers of grease that restrict airflow, increase energy consumption, and create serious fire hazards. Our technicians use industrial-grade degreasing agents and high-pressure cleaning methods to strip every surface back to bare metal. We clean the interior and exterior of your canopy, including plenums and grease channels, ensuring your extraction system operates at full capacity. Every job is completed after hours with zero disruption to your kitchen operations."
   Includes: Full canopy interior & exterior clean · Grease channel flush · Plenum degreasing · Before & after photo report

2. **Filter & Baffle Cleaning**
   "Clogged or greasy filters don't just reduce extraction performance — they force your kitchen to work harder, running hotter and consuming more energy. We remove every filter and baffle, soak and degrease them using commercial-grade solutions, and reinstall them to factory-clean condition. For filters beyond saving, we can source and install replacements. Regular filter cleaning extends equipment life and keeps your kitchen running efficiently."
   Includes: Filter removal & soak cleaning · Baffle degreasing · Condition assessment · Replacement sourcing if needed

3. **Exhaust Fan & Ductwork Cleaning**
   "The ductwork connecting your canopy to the rooftop exhaust fan is where grease silently accumulates — out of sight and out of mind until it becomes a fire risk. Our team cleans every section of the duct system, including access panels, risers, and the rooftop fan unit itself. We inspect fan belts, bearings, and motors during every clean and flag any maintenance concerns before they become expensive breakdowns."
   Includes: Full duct system clean · Rooftop fan unit cleaning · Fan motor & belt inspection · Access panel cleaning

4. **Deep Kitchen Cleaning**
   "Sometimes your kitchen needs more than a surface wipe-down. Our deep cleaning service covers every square centimeter — ceilings, walls, behind equipment, under benches, drainage channels, and tile grout. We use food-safe, non-toxic cleaning agents that leave no residue. This service is ideal for end-of-lease, post-renovation, pre-inspection, or whenever your kitchen needs a complete reset to the highest hygiene standards."
   Includes: Floor-to-ceiling cleaning · Behind & under equipment access · Grout & drainage cleaning · Non-toxic, food-safe products

5. **Sanitisation & Disinfection**
   "Keeping your kitchen microbiologically safe isn't just good practice — it's a legal requirement. We apply hospital-grade antimicrobial treatments across all surfaces, including your ventilation system, to eliminate bacteria, mold spores, and viral contaminants. Our sanitisation process uses TGA-approved solutions that are effective against a broad spectrum of pathogens while remaining safe for food-contact surfaces."
   Includes: Surface & ventilation sanitisation · TGA-approved antimicrobial agents · Mold & bacteria elimination · Food-safe for immediate use after treatment

6. **Compliance & Certification**
   "Australian standards require commercial kitchens to maintain clean extraction systems to reduce fire risk and meet health regulations. Our cleaning processes are aligned with AS 1851 fire safety standards and local council requirements. After every job, we provide detailed documentation including timestamped before-and-after photographs, a cleaning scope summary, and a certificate of completion for your compliance files."
   Includes: AS 1851 aligned cleaning · Before & after photo documentation · Cleaning scope report · Completion certificate for records

#### Bottom CTA
- Same orange CTA banner as Home Page Section 5.

---

### PAGE 3: ABOUT

#### Hero
- Short hero (50vh), dark background.
- Headline: "About After Dark" — 800, 48px, white.
- Subtext: "Melbourne's specialist commercial kitchen cleaning team — working after hours so your kitchen is ready before dawn." — 300, 18px, rgba(255,255,255,0.7).

#### Our Story Section
- White background.
- Left column (50%): Heading "Our Story" (700, 28px) + 2–3 paragraphs of company narrative.
  Placeholder copy:
  "After Dark Canopy Cleaners was founded with a simple idea — commercial kitchens deserve specialist cleaning, not general-purpose crews who treat every job the same. Over the past 15 years, we've built a team of trained technicians who understand the unique demands of kitchen extraction systems, grease management, and hygiene compliance."
  "We work exclusively after business hours because we know that downtime costs you money. Our crews arrive when your kitchen closes and leave before your first prep cook walks in. No disruption, no compromise, no shortcuts."
  "Today, we serve restaurants, hotels, hospitals, aged care facilities, and food production sites across Melbourne. Every kitchen we clean is a kitchen we'd be proud to cook in ourselves."
- Right column (50%): Placeholder for a team photo or company image. Use a dark (#1D1D1D) placeholder box with text "Team Photo" centered in white — so the client knows to replace it.

#### Our Values Section
- Light gray background (#F2F2F2).
- Heading: "What We Stand For" — centered, 700, 36px.
- 3 value cards in a row:
  1. **Shield icon → "Safety First"** — "Every decision we make starts with safety — for your kitchen, your staff, and our crew."
  2. **Eye icon → "Full Transparency"** — "Before-and-after documentation on every job. You see exactly what we did and what we found."
  3. **Star icon → "No Shortcuts"** — "We clean to standard, not to speed. If it's not done right, it's not done."

#### Certifications/Insurance Section
- White background. Centered layout.
- Heading: "Fully Insured & Certified" — 700, 28px.
- Row of badge-style elements showing: "Public Liability Insured" / "OH&S Compliant" / "AS 1851 Aligned" / "COVID-Safe Certified"
- Each badge: Blue (#0877B9) outlined circle with Lucide icon + label below.

---

### PAGE 4: GALLERY

#### Hero
- Short hero (40vh), dark background.
- Headline: "Our Work" — 800, 48px, white.
- Subtext: "See the difference a professional clean makes." — 300, 18px, rgba(255,255,255,0.7).

#### Gallery Grid
- White background.
- Masonry-style or 3-column grid of image placeholders.
- Each placeholder: Dark (#1D1D1D) box with rounded-xl, aspect-ratio 4/3.
- Inside each: Text "Before / After Photo" in white, centered — so client knows to add real images.
- Create 9–12 placeholder slots.
- On hover: Subtle scale(1.02) with shadow deepening.
- Optional: Include a filter bar at top with categories — "All", "Canopy", "Ductwork", "Kitchen", "Before & After" — styled as horizontal pill buttons. Active pill: orange background. Inactive: light gray.

---

### PAGE 5: CONTACT

#### Hero
- Short hero (40vh), dark background.
- Headline: "Get In Touch" — 800, 48px, white.
- Subtext: "Request a free quote or ask us anything. We respond within 24 hours." — 300, 18px, rgba(255,255,255,0.7).

#### Contact Section (two-column layout on desktop)
- White background.

**Left Column — Contact Form (60% width):**
- Heading: "Request a Free Quote" — 700, 28px.
- Form fields (stacked, full-width within column):
  - Full Name (text input)
  - Email Address (email input)
  - Phone Number (tel input)
  - Business Name (text input)
  - Service Needed (dropdown select: Canopy Cleaning, Filter Cleaning, Exhaust & Ductwork, Deep Kitchen Clean, Sanitisation, Compliance, Other)
  - Preferred Contact Method (radio: Phone, Email)
  - Message (textarea, 4 rows)
  - Submit button: "Send My Quote Request" — orange, rounded-full, full-width on mobile.
- All inputs: `rounded-lg`, border 1px #E5E7EB, padding 14px 16px, font-weight 400, focus ring #F58220.
- Form should have a `method="POST"` action placeholder (for Zoho CRM webhook or Zapier integration). Add a comment in code: `// TODO: Connect form submission to Zoho CRM webhook endpoint and email notification`
- On successful submit: Show a green success message — "Thank you! We'll be in touch within 24 hours."

**Right Column — Contact Details (40% width):**
- Card with light gray background (#F2F2F2), rounded-xl, padding 32px.
- **Phone:** +61 408 201 103 (with Phone icon, clickable tel: link)
- **Email:** info@afterdarkcanopycleaners.com (with Mail icon, clickable mailto: link)
- **Address:** 135 Banfield Road, Heidelberg West, VIC 3081 (with MapPin icon)
- **Hours:** Monday – Friday, 8:00 AM – 5:00 PM (with Clock icon)
- **Service Area:** Melbourne, VIC, Australia (with Map icon)
- Each line: Icon (#0877B9) + label (600 weight, 13px, uppercase, muted) + value (400 weight, 16px, dark).
- Social links at the bottom of the card: Facebook, Instagram, LinkedIn — icon buttons in circular containers, #1D1D1D background, white icons. Hover: background turns #F58220.

#### Google Map Embed
- Below the contact section. Full-width.
- Embed placeholder for Google Maps centered on: 135 Banfield Road, Heidelberg West, VIC 3081.
- Use an iframe embed or a dark placeholder box with text "Google Map — Heidelberg West, VIC" if embed is not feasible.
- rounded-xl with overflow-hidden.

---

## FOOTER (All Pages)

- Dark background (#1D1D1D), generous padding (64px top/bottom).
- **3-column layout on desktop, stacked on mobile:**

**Column 1 — Brand:**
- Company name "After Dark Canopy Cleaners" — 700, 18px, white.
- Tagline: "Complete Kitchen Cleans" — 300, 14px, rgba(255,255,255,0.6).
- Brief: "Melbourne's specialist commercial kitchen cleaning team. Fully insured. After-hours service. No shortcuts." — 400, 14px, rgba(255,255,255,0.5).

**Column 2 — Quick Links:**
- Heading: "Quick Links" — 600, 14px, white, uppercase, letter-spacing 1.5px.
- Links: Home, Services, About, Gallery, Contact — 400, 14px, rgba(255,255,255,0.6). Hover: white.

**Column 3 — Contact:**
- Heading: "Contact Us" — same styling as Quick Links heading.
- Phone, Email, Address — same styling as footer links.
- Social icons row: FB, IG, LinkedIn — small circular icons, rgba(255,255,255,0.3) border, white icons. Hover: border #F58220, icon #F58220.

**Bottom bar:**
- Thin top border: 1px rgba(255,255,255,0.1).
- Left: "© 2024 After Dark Canopy Cleaners PTY Ltd. All rights reserved." — 400, 13px, rgba(255,255,255,0.4).
- Right: "Website by Stallion Graphics" — 400, 13px, rgba(255,255,255,0.4) with link.

---

## FLOATING ELEMENTS (All Pages)

1. **Floating "Call Now" button (mobile only):** Fixed bottom-right corner, circular orange button (#F58220) with Phone icon, shadow, z-50. Links to tel:+61408201103. Slight pulse animation every 5 seconds to draw attention.
2. **Scroll-to-top button:** Appears after scrolling 400px. Bottom-right (above the Call Now button on mobile). Small circle, #1D1D1D background, ChevronUp icon white. Smooth scroll.

---

## META PIXEL SETUP

Add the following Meta Pixel base code in the `<head>` of the HTML (index.html):

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID_HERE');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=PIXEL_ID_HERE&ev=PageView&noscript=1"/></noscript>
<!-- End Meta Pixel Code -->
```

**IMPORTANT:** Replace `PIXEL_ID_HERE` with the actual Meta Pixel ID provided by the client.

Add event tracking on the Contact form submit button:
```javascript
// Fire Lead event on form submission
fbq('track', 'Lead', {
  content_name: 'Quote Request',
  content_category: selectedService
});
```

---

## SEO REQUIREMENTS

### Per-Page Meta Tags
Each page must have unique:
- `<title>` — Format: "Page Name | After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning"
- `<meta name="description">` — Unique 150-160 character description per page.
- `<meta name="keywords">` — Relevant keywords per page.
- Open Graph tags (og:title, og:description, og:image, og:url) for social sharing.

### Titles & Descriptions:
- **Home:** "After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" / "Melbourne's trusted commercial kitchen cleaning specialists. Canopy cleaning, exhaust systems, and deep kitchen cleans done after hours. Fully insured. Get a free quote."
- **Services:** "Our Services | After Dark Canopy Cleaners" / "Specialist canopy cleaning, filter cleaning, exhaust ductwork cleaning, deep kitchen cleaning, and sanitisation services for commercial kitchens across Melbourne."
- **About:** "About Us | After Dark Canopy Cleaners" / "15+ years of experience cleaning Melbourne's commercial kitchens. Fully insured, OH&S compliant, and committed to safety and transparency."
- **Gallery:** "Our Work | After Dark Canopy Cleaners" / "See before-and-after results of our commercial kitchen cleaning services in Melbourne. Canopy, ductwork, and deep kitchen clean galleries."
- **Contact:** "Contact Us | After Dark Canopy Cleaners" / "Get a free quote for commercial kitchen cleaning in Melbourne. Call +61 408 201 103 or fill out our online form. We respond within 24 hours."

### Technical SEO:
- Semantic HTML: Use proper `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>` tags.
- All images must have `alt` attributes.
- Heading hierarchy: Only one `<h1>` per page (the hero headline), then `<h2>` for sections, `<h3>` for subsections.
- Lazy-load images below the fold.
- Add structured data (JSON-LD) for LocalBusiness schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "After Dark Canopy Cleaners",
  "description": "Commercial kitchen cleaning and canopy cleaning specialists in Melbourne, VIC.",
  "url": "https://afterdarkcanopycleaners.com",
  "telephone": "+61408201103",
  "email": "info@afterdarkcanopycleaners.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "135 Banfield Road",
    "addressLocality": "Heidelberg West",
    "addressRegion": "VIC",
    "postalCode": "3081",
    "addressCountry": "AU"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "areaServed": "Melbourne, VIC, Australia",
  "sameAs": [
    "https://www.facebook.com/afterdarkcanopycleaners",
    "https://www.instagram.com/afterdarkcanopycleaners/",
    "https://www.linkedin.com/company/afterdarkcanopycleaners"
  ]
}
```

---

## RESPONSIVE BREAKPOINTS
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px
- Max content width: 1200px, centered with auto margins.

---

## ANIMATIONS (Subtle, Professional)
- **Scroll-triggered fade-in:** Sections and cards fade in + slide up (20px) as they enter viewport. Use Intersection Observer. Duration 0.6s, ease-out. Stagger cards by 100ms each.
- **No parallax scrolling** — keep it clean and fast-loading.
- **Button hover:** Scale(1.02) + shadow deepening. Transition 0.2s ease.
- **Page transitions:** None needed. Clean instant routing.

---

## VERIFICATION CHECKLIST
After building, verify:
- [ ] All 5 pages render correctly and are navigable.
- [ ] Navbar sticky behavior works (transparent → white on scroll).
- [ ] Mobile hamburger menu opens/closes properly.
- [ ] All links and CTAs navigate to correct pages.
- [ ] Contact form validates fields and shows success state.
- [ ] Floating Call Now button appears on mobile only.
- [ ] Typography weights match the spec (check 800/300 contrast pairs).
- [ ] Colors match brand palette exactly (check hex values).
- [ ] All social links open in new tabs.
- [ ] Meta tags and structured data are present in page source.
- [ ] Site is fully responsive at 375px, 768px, 1024px, and 1440px widths.
- [ ] Phone number and email are clickable (tel: and mailto: links).
- [ ] Scroll animations fire correctly on first viewport entry only.
- [ ] No horizontal scroll on any breakpoint.
- [ ] Footer appears on all pages with consistent content.

---

## DO NOT
- Do NOT use generic stock-photo-style hero backgrounds. Use CSS gradients and geometric patterns.
- Do NOT use more than 2 font families. Montserrat only.
- Do NOT make the orange overwhelming. It's an accent, not a theme.
- Do NOT skip the mobile floating Call Now button — it's critical for conversions.
- Do NOT use auto-playing videos or heavy animations that slow load time.
- Do NOT hardcode the Meta Pixel ID — leave it as a replaceable placeholder.
- Do NOT use Lorem ipsum anywhere — all copy is provided above. Use "Placeholder" labels only for images/photos.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://after-dark-canopy-cleaners.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/343969c0-dd00-4ab8-9fc3-0e41a0919e9a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
