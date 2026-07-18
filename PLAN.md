# Sea Sail Maldives — Design & Build Plan (v001)

## 1. Business research findings (2026-07-18)

**The business has no indexed web presence yet.** Extensive web research (18+ search
queries across Instagram, TripAdvisor, Google, Facebook, Viator, GetYourGuide, Klook,
and the Maldives business registry) found:

- `@seasail.maldives` on Instagram could not be verified from this environment
  (Instagram and its mirrors are unreachable from the build sandbox; the handle has no
  search-index footprint). The site links to it as provided — **owner should confirm
  the exact handle.**
- **No published prices** for Sea Sail anywhere. Pricing on the site is *indicative*,
  anchored to confirmed Maafushi/Hulhumalé market rates:
  - Watersports combo (jet ski + tube + kayak): $45–150 depending on operator/duration
  - Parasailing: $70 (1 pax) / $95 (2 pax)
  - SUP/kayak: ~$10/hour
  (Sources: activemaldives.com/price, maafushidive.com, TripAdvisor product listings.)
- **No reviews exist yet** for Sea Sail. The reviews section ships with clearly-marked
  sample quotes (labelled "sample") to show the layout — **must be replaced with real
  guest reviews before launch.** No fabricated reviews are presented as real.
- **No logo found online.** A custom SVG logo/wordmark was designed for v001
  (`src/components/Logo.jsx`) — replace with the official logo when provided.
- No confirmed location/contact. Site copy says "Maldives" generically; WhatsApp
  number is a placeholder to be linked later (per owner's instruction).

Competitor structural references: activemaldives.com, maafushidive.com,
extrememaldives.com, watersportsmv.com.

## 2. How we highlight the business (strategy)

1. **Sell the feeling first** — full-screen ocean-gradient hero, big expressive type,
   immediate "Book on WhatsApp" action. Mobile users decide in ~3 seconds.
2. **Activities as swipeable cards** — thumb-friendly horizontal snap carousel, each
   card with icon, duration, and "from $" price anchor.
3. **Trust signals** — reviews carousel + Instagram section (real content once the
   account is connected), safety/experience badges.
4. **One conversion path** — every CTA funnels to WhatsApp (floating bubble + sticky
   hero CTA). No forms, no friction — right for Maldives tour operators.
5. **Instagram as the living gallery** — the feed section links out to the profile;
   automatic pulling is wired to upgrade to Behold/LightWidget once the owner
   connects the account (no API credentials exist yet for v001).

## 3. Deployment

- Branch `claude/sea-sail-mobile-site-mqfhxp` → GitHub Actions →
  GitHub Pages (`https://nylasdev.github.io/narrative-health-states-by-nylasdev/`).
- Note: the user asked for a *private* repo — GitHub Pages requires a public repo on
  the free plan; this repo is public. Discuss moving to a dedicated repo later.

## 4. Open questions for the owner

1. Confirm exact Instagram handle (nothing indexed under `seasail.maldives`).
2. Real price list (current numbers are market-rate placeholders marked "from").
3. WhatsApp number for the bubble + booking CTAs.
4. Official logo file, brand colors if any, and 5–10 best photos/videos.
5. Which island/atoll does Sea Sail operate from? (Affects copy + map.)
6. Real guest reviews (or permission to link a TripAdvisor/Google listing once live).

## 5. Design direction — "Cinematic Lagoon"

Synthesized from Awwwards research (OMAYA Yachts, AB Yachts, The Sea We Breathe,
Thalassa Beach Resort, Dawn Patrol, Deep Sea Dive) + 2026 mobile-first best practice:

- **Palette "Lagoon Luxe"**: ink `#041c32` / `#06263d` base, ocean `#0a3d62`,
  lagoon `#1ecdcb`, aqua `#7fcdff`, foam `#def3f6`, sand `#f2e8d5`, coral
  `#ff7f50` **reserved exclusively for booking CTAs**.
- **Typography**: Fraunces (expressive display serif, variable, italic accents) +
  Outfit (clean geometric sans for UI/body). Self-hosted woff2 (latin subset),
  `font-display: swap` — no third-party font requests.
- **Scroll narrative** (AB-Yachts-style background arc): dark adrenaline hero →
  deep ocean sections → *surfacing* to a light sand section for reviews → back
  into the deep for Instagram/FAQ/footer. SVG wave dividers mark the surface.
- **Instrument chrome** (The Sea We Breathe): decorative coordinates in the hero,
  altitude/flight-time stat grid on the signature parasailing block.
- **Mobile patterns**: 100svh hero with CTA in thumb zone, horizontal snap
  carousels with next-card peek (activities, bundles, reviews), 48px+ tap
  targets, floating WhatsApp bubble with safe-area inset, sticky translucent nav.
- **Motion**: CSS-only — IntersectionObserver reveals, drifting swell lines,
  sun pulse, floating parachute; `prefers-reduced-motion` fully respected.
  No animation library (34 kB saved vs framer-motion).
- All visuals are hand-crafted CSS/SVG (no stock photos) — swap in real
  photos/videos from the owner for v002; the crafted look keeps LCP fast and
  avoids any licensing issues meanwhile.

## 6. Technical decisions

- **Stack**: Vite 6 + React 19, plain CSS design tokens. Build: ~67 kB gzip JS,
  ~4.5 kB gzip CSS, 3 font files (~140 kB total).
- **Instagram**: v001 = curated tile grid linking to the profile (no credentials
  exist for automatic pulling; Instagram killed tokenless feed APIs — as of
  June 2026 tokenless *oEmbed per-post* is back, which enables a build-time
  refresh script once real post URLs exist). Upgrade path documented: owner
  converts IG to Business/Creator → Behold.so (free) or LightWidget ($10
  one-time) → live auto-updating feed.
- **WhatsApp**: `wa.me/<digits>?text=<prefilled>` links everywhere, per-activity
  pre-filled messages (qualified inquiries). Number placeholder in `src/data.js`;
  until set, CTAs fall back to Instagram DM.
- **Hosting**: GitHub Pages via Actions (`configure-pages` with
  `enablement: true`), triggered on push to this branch. Verified: Pages
  requires a public repo on the free plan — this repo is public.
- **Validation**: production build screenshot-tested with Playwright at
  390×844 (iPhone-class) and 1440×900, full-page and per-section; zero console
  errors; reveals, snap scroll, accordion all exercised.
