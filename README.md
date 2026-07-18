# Sea Sail Maldives — Mobile-First Website

A mobile-first marketing site for **Sea Sail**, a watersports business in the Maldives
([@seasail.maldives](https://www.instagram.com/seasail.maldives/) on Instagram).

Built with React + Vite. Designed ocean-first: deep navy → lagoon turquoise → sand,
hand-crafted SVG/CSS visuals, self-hosted Google Fonts, and a floating WhatsApp
booking bubble.

> **Note:** this branch (`claude/sea-sail-mobile-site-mqfhxp`) replaces the repo's
> previous FoundryVTT module content with the Sea Sail site. See `PLAN.md` for the
> design plan and research notes.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deploy

Pushes to this branch trigger `.github/workflows/deploy-pages.yml`, which builds the
site and deploys it to GitHub Pages at
`https://nylasdev.github.io/narrative-health-states-by-nylasdev/`.

## Structure

- `src/App.jsx` — page assembly (hero, activities, pricing, reviews, Instagram, contact)
- `src/components/` — one file per section
- `src/index.css` — design tokens + global styles (mobile-first)
- `public/fonts/` — self-hosted Google Fonts (woff2)
- `PLAN.md` — design plan, research findings, open questions
