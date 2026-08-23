---
name: proground-design
description: Use this skill to generate well-branded interfaces and assets for ProGround Land Management (a Denham Springs, LA landscaping / drainage / property-maintenance company serving Greater Baton Rouge), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design,
ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code,
depending on the need.

## The five things to get right for ProGround
1. **Not a dark site.** Light editorial base (Bone `#F4F1E9`), dark bands (Deep Field `#0B0E15`) as
   punctuation only — 4–5 per page max (header, proof, conversion, footer, one image feature).
2. **Colors.** Growth Green `#10E016` only on dark at small sizes; Turf `#0D5B2B` for green text on
   light. **Survey Blue `#1863B8` is reserved for water/drainage content only** — never a link color.
   No gradients, ever.
3. **Type.** Archivo (heavy display), IBM Plex Sans (body 17px/1.65), IBM Plex Mono (prices,
   measurements, captions). Eyebrows are Archivo 12px uppercase +18% tracking.
4. **The contour motif** (survey/grading line work) is the one signature device. Small radii (≤4px),
   hairline borders, soft warm shadows, restrained motion.
5. **Voice + facts.** Calm, declarative, second person, numbers where true, **no exclamation points**,
   no emoji. Fabricate nothing — no licenses, certifications, insurance claims, awards, or job counts
   other than "100+ homes served." Phone is always `(225) 324-8252`. No street address anywhere.

## Files
- `styles.css` — link this one file; it pulls in all tokens + fonts.
- `tokens/` — colors, typography, spacing, effects, fonts, base element styles.
- `assets/` — logo files (`logo-on-dark.jpg` reads on Deep Field; a light/vector variant is still needed).
- `guidelines/` — foundation specimen cards.
- `components/` — React primitives (Button, Fields, PriceBlock, ServiceCard, BeforeAfterSlider,
  FaqAccordion, TrustBar, PromoBanner, Logo, ContourDivider, Eyebrow, Badge).
- `ui_kits/website/` — the marketing-site recreation to copy screens/patterns from.

Every price block carries the mandatory footnote verbatim — do not rewrite it.
