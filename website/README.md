# ProGround Land Management — website

Static, SEO-optimized marketing site for ProGround Land Management (landscaping,
drainage and property maintenance across Greater Baton Rouge). Built to the
*Local SEO Website Playbook* — 49 unique indexable pages, full technical SEO,
JSON-LD structured data, and Core-Web-Vitals-friendly static HTML (no framework,
no client-side rendering).

## How it's built

There is **no Node/npm** here. Pages are assembled by a small **PowerShell
generator** so the header, footer, schema and metadata stay consistent (DRY)
and easy to edit.

```
website/
  build.ps1        # the generator: config, layout (head/header/footer), foundation files
  gen.ps1          # data-driven service pages + service-areas (location) pages
  gen2.ps1         # Who-We-Serve (audience) pages + niche×city "money" pages
  gen3.ps1         # resource / blog articles + resources hub
  pages/*.html     # hand-written pages (home, about, drainage, faq, estimate, legal, …)
  assets/          # site.css (component styles), site.js (interactions), favicon.svg
  dist/            # ← GENERATED OUTPUT. This is what gets hosted. Do not hand-edit.
```

### To rebuild after any change

```powershell
powershell -ExecutionPolicy Bypass -File "website/build.ps1"
```

This regenerates `website/dist/` (all HTML, `robots.txt`, `sitemap.xml`,
`llms.txt`, `404.html`). Edit the source (`pages/*.html`, `gen*.ps1`,
`assets/*`) and rerun — never edit files in `dist/` directly, they are overwritten.

Design tokens (colors, type, spacing) are reused from the design system in
`../project/` (`styles.css` + `tokens/`) and copied into `dist/` at build time.

## Deploying (pick one)

`dist/` is committed, so any static host works. Recommended: **Netlify** — a
`netlify.toml` at the repo root already sets `publish = website/dist`, and the
estimate form is wired for **Netlify Forms** (works automatically, no backend).

- **Netlify / Cloudflare Pages / Vercel:** set the publish directory to
  `website/dist`. No build command.
- **GitHub Pages:** point Pages at the folder/branch containing the `dist`
  contents (or copy `dist/*` to `/docs`).

## Before it goes live — confirm / finish these

1. **Domain.** The site assumes `https://progroundland.com`. If that's not final,
   change `$BASE` at the top of `build.ps1` and rebuild (it updates canonicals,
   sitemap, schema and social tags everywhere).
2. **Estimate form handler.** Wired for Netlify Forms. On any other host, point
   the `<form>` in `pages/estimate.html` at a Formspree endpoint or your own
   handler. Leads also come in by phone/text as a fallback.
3. **Business hours** were left out of the schema rather than guessed. Add real
   hours to `Get-BusinessNodes` in `build.ps1` if you want them in structured data.
4. **Self-host fonts** (Archivo, IBM Plex Sans/Mono) as woff2 for best Core Web
   Vitals — currently loaded from Google Fonts (preconnected). Design system
   flags this too.
5. **Convert images to WebP** and add `srcset` for the last few CWV points. Source
   photos are JPGs (already sized with width/height + lazy-loading).
6. **Branded 1200×630 OG share image** — currently falls back to a hero photo.

## Off-site checklist (the site is ~half of local ranking — do these too)

1. **Google Business Profile** — create & verify with the EXACT same name /
   phone / city as the site. Set the primary category precisely, add all services,
   complete every field, add real photos incl. the owner. Nothing ranks in the
   map pack until GBP is verified.
2. **Google Search Console** — add a Domain property, verify via DNS, submit
   `https://progroundland.com/sitemap.xml`, request indexing on the homepage +
   the drainage page.
3. **Reviews** — the #1 map-pack lever. Keep a steady trickle of real Google
   reviews; ask customers to mention the service + city.
4. **Citations** with identical name/phone/city — Yelp, Bing Places, Apple
   Business Connect, Nextdoor, plus local/industry directories.
5. **Bing Webmaster Tools** — submit the sitemap there too.

## Content rules (keep these when editing copy)

- Verified facts only. No fabricated reviews, awards, or local claims.
- Banned words: licensed, certified, insured, BBB, award-winning, family-owned,
  "financing available," "quality and service." No exclamation points, no emoji.
- The pricing footnote appears verbatim under every price block.
- Phone is always `(225) 324-8252` / `tel:+12253248252`.
