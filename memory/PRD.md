# Mojtaba Mousavi — Designer Portfolio (Personal Landing Page)

## Original Problem Statement
Create a personal landing page for a UI/UX designer using Mojtaba Mousavi's resume (PDF) for content and Billy Sweeney's portfolio screenshot as design inspiration.

## User Choices
- Frontend-only static landing page (no backend)
- Sections: Hero + image collage + Values + Work history + Testimonials + Accolades + Press + Contact
- Curated stock UI/UX/dashboard images for hero collage
- Both light and dark theme with toggle
- Subtle scroll animations / micro-interactions
- Downloadable resume button

## Architecture
- React (CRA + craco), Tailwind, shadcn/ui
- next-themes for dark/light toggle (default dark)
- framer-motion for scroll-triggered reveals
- Outfit (heading) + Inter (body) + Instrument Serif (italic accents) — Google Fonts
- Resume PDF served from /app/frontend/public/resume.pdf
- All content lives in /app/frontend/src/data/portfolio.js

## Implemented (2026-12)
- Sticky glass navigation with section anchors, theme toggle, Resume download CTA, mobile menu
- Editorial Hero: massive typographic headline mixing bold sans + serif italic, asymmetric image collage, skills marquee, location/availability badge
- Work timeline: 7 roles (WhiteFox, Nito Labs, LeQuest, Lumenswap, Hamyar System, Yekzan, Ponisha) with company icon, dates, location, role headline, description
- Values: large display headline mixing bold + serif italic, 4 paired explanations (Useful, Considered, Beautiful, Well-made)
- Testimonials: asymmetric grid of 4 quote cards with Instrument Serif quotes
- Accolades + Press: two-column lists with year columns
- Contact: massive headline, big email mailto link, phone/LinkedIn/location grid, headshot card with "Currently" overlay
- Footer with colophon (fonts, stack, back to top)
- Grain overlay, custom scrollbar, link-underline micro-interactions
- All interactive elements have data-testid attributes

## Testing Status
- iteration_1: 100% pass on frontend (13/13 acceptance criteria), 0 console errors

## Backlog / Next Tasks
- P1: Wire up real LinkedIn/portfolio URLs (currently placeholder href)
- P2: Add a Case Studies section with project deep-dives + image galleries
- P2: Add Lenis smooth scrolling for premium scroll feel
- P3: Add per-section scroll progress indicator
- P3: Add subtle cursor-follow on hero image collage

## Iteration 2 — 2026-12 (Showcase added)
- New Showcase section (Hero → Showcase → Work) inspired by Billy Sweeney's project mosaic
- 4 vertical marquee columns with curated UI/UX visuals, each scrolling at its own rhythm (some up, some down)
- Soft top/bottom mask fade, hover-revealed project captions, CTA "Request the full case studies" → Contact
- Nav updated with new Showcase anchor (desktop + mobile)
- iteration_2 testing: 100% pass (13/13), 0 console errors
