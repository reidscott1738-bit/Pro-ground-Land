# ProGround Design System

A brand + UI design system for **ProGround Land Management**, a locally owned landscaping and
property-maintenance company in Denham Springs, Louisiana, serving Greater Baton Rouge. ProGround
renovates and installs landscapes, solves drainage and grading problems, and maintains residential
and commercial properties year-round.

The system exists to make one experience possible: a property owner with standing water in the
backyard lands on a page that explains *why* it happens in clay soil, what each fix costs, shows the
same problem solved on a street they recognize, and lets them send three photos and get a real answer
the same day. Everything here serves that.

**Positioning in three words: Professional. Trustworthy. Premium.** ProGround does not compete on
price. The design has to look more expensive than the competition.

---

## Sources

This system was built from materials supplied by the client's studio (Flower Bloom Studios). If you
have access, explore them to build more faithfully:

- **`uploads/ProGround-Brand-Guide.pdf`** — the visual system (color + type). Text is subset-encoded;
  exact brand colors here were sampled directly from the logo pixels, cross-checked against the
  Build Manual §08.
- **`uploads/ProGround-Website-Build-Manual.pdf`** — the full design + content + SEO brief. Its
  Section 08 ("The design system") is the primary spec this project encodes. Sections 01–10 cover
  the business, voice, architecture, page briefs, signature features and the lead engine.
- **`uploads/TEMPORARY png logo.png`** — logo (faint/outline version, transparent). See `assets/`.
- **`uploads/670961560_...jpg`** — the solid logo lockup on Deep Field. See `assets/logo-on-dark.jpg`.
- **GitHub: `reidscott1738-bit/Pro-ground-Land`** (https://github.com/reidscott1738-bit/Pro-ground-Land)
  — the intended production repo. **Currently empty (no commits)** at time of build; the site had not
  been built yet. Once it has code, read it as the source of truth and sync this system to it.

### Verified business facts (use exactly; fabricate nothing)
- Name: **ProGround Land Management** · Owner: **Andrew Lee**, owner-operator
- Phone (one format sitewide): **(225) 324-8252** — texting accepted
- Public email: **info@progroundland.com** · Base: **Denham Springs, LA** (address hidden — service-area business)
- Proof: **100+ homes served**, **5+ years experience**, opened **October 2025**, **locally owned**
- No licenses, certifications, insurance claims, awards, or memberships may be implied. No street address anywhere.

---

## CONTENT FUNDAMENTALS

**Voice = the company ("we"), calm and declarative.** Andrew speaks in first person only on the About
page and in quote blocks; everywhere else it is "we".

- **Second person, about the reader's property.** "Standing water in your backyard after every rain is
  a grading problem, not a grass problem."
- **Short declarative sentences. No stacked adjectives.** Never "quality workmanship and exceptional
  customer service you can trust."
- **Numbers wherever one is true.** 100+ homes served, 5+ years, from $145/mo, same-day response,
  45-minute radius. Prices are stated plainly: "Landscape renovations start at $750."
- **Reframe price with process and evidence, never discounts.** "We are not the cheapest. We plan the
  job properly, use quality materials and build something that lasts."
- **No exclamation points anywhere. Not one.** No urgency, no "affordable," no "unbeatable prices."
- **Casing:** sentence case for headlines and buttons; UPPERCASE only for eyebrows (12px, tracked
  +18%, mirroring the logo lockup) and mono data labels (Before / After).
- **No emoji.** Ever.
- **Mandatory pricing footnote**, verbatim under every price block: *"Pricing varies based on property
  size, materials, accessibility, service frequency, and project scope. Free consultations and
  customized estimates are available."*

**Banned words/claims:** Licensed, Certified, Insured, BBB, Award-winning, Family/Veteran/Woman-owned,
"decades," "#1 in Baton Rouge," "financing available," and the phrase **"quality and service"** (ruled
out explicitly). Never invent reviews, counts, or local facts.

**The three differentiators** (spine of the site, quote verbatim, never genericize):
1. **Simple and predictable** — recurring agreements, scheduled service, automatic billing, clear scopes.
2. **Maintain it and improve it** — routine maintenance plus renovation, drainage, grading, installation. One company.
3. **A professional process** — written estimates, defined scopes, organized scheduling, digital approvals, follow-up.

---

## VISUAL FOUNDATIONS

**Design thesis — "Land, measured."** The visual language comes from survey and grading drawings:
contour intervals, grade marks, elevation callouts, plan-view line work. A **thin contour-line motif**
is the one signature device — it marks section breaks, frames images, and labels data. Everything
around it stays quiet.

**It is NOT a dark site.** The logo sits on near-black, but the site is a **light editorial base with
dark bands used as punctuation** (four to five per page max: header, proof strip, conversion blocks,
footer, one image feature). A full dark site with a neon-green accent is the predictable template look
and is explicitly rejected.

- **Color** — Page background is **Bone** (`#F4F1E9`, warm off-white), never pure white at scale;
  cards sit on pure white so they lift. **Deep Field** (`#0B0E15`) for dark bands. **Growth Green**
  (`#10E016`) only on dark surfaces at small sizes (eyebrows, active states, contour accents, slider
  handle) — on light, green text uses **Turf** (`#0D5B2B`). **Survey Blue** (`#1863B8`) is the water
  color, reserved *exclusively* for drainage/grading content and water-flow diagrams — never a general
  link color. Max 1–2 background colors per surface. **No gradients anywhere.**
- **Type** — **Archivo** display (heavy 800, tracking −2%, echoes the compressed wordmark),
  **IBM Plex Sans** body (17–18px, line-height 1.65, never below 16px), **IBM Plex Mono** for prices,
  measurements, contour labels and captions (the survey-drawing reference — the detail that makes it
  look considered). Eyebrows are Archivo 12px, uppercase, +18% tracking.
- **Spacing** — 8px base unit. 12-col grid, 1280px max width, 72px desktop gutters / 24px mobile.
  Section padding 128px desktop / 72px mobile. Consistency here is most of what reads as "expensive."
- **Layout** — Asymmetry on purpose: 7 columns of text against 5 of image, alternating sides each
  section. One idea per screen. Full-bleed breaks the grid only for photography and dark bands.
- **Backgrounds** — Flat Bone / Deep Field. No textures, no blobs, no glassmorphism. The only pattern
  is the contour motif, used as a divider or a subtle framing element.
- **Photography** — Real ProGround work only, never stock. Wide curbside establishing shots,
  before/after pairs from the identical position, detail shots (clean bed edge, catch basin set flush),
  process shots with equipment. Warm late-afternoon light; never harsh midday. (No assets yet — use
  clearly-labeled placeholders until Andrew supplies photos; see Build Manual §15.)
- **Corner radii** — Small and disciplined: **4px** on cards, buttons and inputs; nothing above 4px
  except pill tags. No large rounded "friendly" cards.
- **Cards** — White on bone, **1px border** (`#C6C2B6`), soft low warm shadow. Hover lifts the border
  to Deep Field; nothing else moves.
- **Borders** — Hairline 1px is the default line. Contour dividers between sections.
- **Shadows** — Soft, low, warm (`0 8px 24px rgba(11,14,21,.06)`). Never neon glows. On dark bands,
  separation comes from tone, not shadow.
- **Motion** — One orchestrated moment (the hero before→after wipe, once, <900ms on load), then
  restraint. Scroll reveals at 12px / 240ms; hover changes **color only**; sticky header shrinks on
  scroll. No parallax, no counters, no typewriter, no scroll-jacking. Every animation respects
  `prefers-reduced-motion`.
- **Hover / press** — Buttons and links change color on hover, never size. Cards raise their border
  color. No shrink-on-press.
- **Transparency / blur** — Used only for dark scrims over hero photography for text legibility. No
  frosted-glass panels.

**Buttons:** Primary is Deep Field with white text on light backgrounds, Growth Green with Deep Field
text on dark backgrounds. Secondary is a 1px outline. **No gradients on any button, ever.**

---

## ICONOGRAPHY

The Build Manual specifies **no icon set** and warns that no icon should be larger than the text beside
it (the trust bar is "four items on one line, no icons larger than the text"). The brand is
typographic and photographic, not icon-driven.

- **Approach:** minimal, thin-stroke line icons only where genuinely functional (phone, form fields,
  the before/after slider handle, checkmarks in scope lists). Stroke weight ~1.75px to sit with the
  hairline/contour aesthetic. Icon color follows text; green icon strokes appear only on dark surfaces.
- **Set:** **Lucide** (https://lucide.dev) is the recommended match — thin, geometric, open-source,
  matches the survey-line feel. Loaded from CDN in the cards/UI kit. **This is a substitution** (the
  brand defined no set); swap for a custom set if Andrew's studio provides one.
- **No emoji, ever.** No unicode-glyph icons. No filled/duotone icon styles.
- **The contour motif is the brand's true "graphic device,"** not icons. It is decorative — always
  `aria-hidden` / empty `alt`.
- **Logo:** the leaf-sprout mark + blue survey line + "PROGROUND / LAND MANAGEMENT" wordmark. Files in
  `assets/`. The mark reads on Deep Field (see `logo-on-dark.jpg`); a clean vector and light-background
  variant are **still needed from Andrew** (Build Manual §15, "blocking").

---

## INDEX — what's in this project

- **`styles.css`** — global entry point (import this). Pure `@import` list.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`.
- **`assets/`** — logo files.
- **`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.
- **`components/`** — reusable React UI primitives (see below).
- **`ui_kits/website/`** — high-fidelity recreation of the ProGround marketing site.
- **`thumbnail.html`** — project tile.
- **`SKILL.md`** — makes this system usable as a downloadable Agent Skill.

Components and UI-kit inventory are listed at the bottom of this file once built.

### Components (`window.ProGroundDesignSystem_313bb9`)
- **forms/** — `Button`, `Input`, `Textarea`, `Select`, `Checkbox`
- **content/** — `Eyebrow`, `Badge`, `PriceBlock`
- **cards/** — `ServiceCard`
- **interactive/** — `BeforeAfterSlider` (the signature before/after comparison slider)
- **feedback/** — `FaqAccordion`, `TrustBar`, `PromoBanner`
- **brand/** — `Logo`, `ContourDivider`

The component inventory follows Build Manual §08's named "Component library". No primitives
were invented beyond that spec.

### UI kit
- **`ui_kits/website/`** — high-fidelity recreation of the ProGround marketing site (homepage,
  service page, drainage diagnostic / money page, estimate form). Composes the components above.

### Font substitution flag
Archivo / IBM Plex Sans / IBM Plex Mono are all real and load from Google Fonts here so cards render.
The live site must **self-host** them as variable woff2 with the critical face preloaded (Build Manual
§12). Archivo's true **width axis** (wdth 88–90 in the brand guide) is not on the Google build; heading
compression is approximated with weight + negative tracking. Supply the variable woff2 files to finish.
