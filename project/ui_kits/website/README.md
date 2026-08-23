# ProGround website — UI kit

A high-fidelity, interactive recreation of the ProGround marketing site, composed entirely from the
design-system components. It demonstrates the intended look, motion and conversion flow before the
production site is built (the GitHub repo was empty at build time).

## Screens (click-through via the header + CTAs)
- **Home** (`Home.js`) — dark, image-led homepage: full-bleed image hero with benefit-led copy and a
  trust row, dark stats strip, image-collage About split, six-card image service grid, flagship
  before/after renovation block, the differentiators (dark band over imagery), a project gallery,
  five-step process and Google reviews.
- **Service page** (`Screens.js` → `ServicePage`) — the Landscape Renovations pattern: hero,
  problem, what's included, standardized price block, before/after evidence, FAQ, related services.
- **Drainage money page** (`Screens.js` → `DrainagePage`) — service-crossed-with-city page carrying
  the **Yard Water Diagnostic** (the signature tool): a guided set of Andrew's phone questions that
  returns a plain-language cause, likely fix, starting cost range, and an honest "confirmed on the
  property" caveat, then hands off to the estimate form. Survey Blue is used throughout as the water color.
- **Request an estimate** (`Estimate.js`) — the full 4-step conditional form with a progress
  indicator, branch questions that change by service, an optional budget range shown only for project
  services, and a same-day-response thank-you state.

## Structure
- `index.html` — mounts React + the compiled `_ds_bundle.js`, then the babel screen scripts.
- `Shared.js` — Header, Footer, dark ConversionBlock, mobile sticky bar (exported to `window`).
- Screens export to `window` (`PGHome`, `PGServicePage`, `PGDrainagePage`, `PGEstimatePage`) because
  each `text/babel` script has its own scope.
- `App.js` — the state-based router; mounts into `#pg-root` only after the bundle loads.
- The screen files use a **`.js`** extension on purpose (loaded via `type="text/babel"`). The design-system
  compiler sweeps every `.jsx`/`.tsx` into `_ds_bundle.js`; naming these `.js` keeps the app scripts out
  of the component bundle so they don't auto-execute at bundle load.

## Notes
- All photography is a **labeled placeholder** — the before/after sliders and portrait slots show mono
  "(placeholder pair)" captions until Andrew supplies real work photos (Build Manual §15).
- Responsive: collapses to a single column and shows the mobile Call / Request-estimate bar below 860px.
