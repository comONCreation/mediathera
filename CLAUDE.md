# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Médiathéra is a one-page showcase site for **Émilie Combret**, a French psycho-social practitioner and art therapist. It presents her bio and her individual offerings (séances thérapeutiques, art-thérapie, Dream Machine, Méthode JMV, ateliers) — accompaniment for psychological/emotional and physiological well-being, not a clinical psychology or physiotherapy practice. Built with Astro 6, React 19, Tailwind CSS 4, and Keystatic CMS. Site language is French (`lang="fr"`). Hosted on Vercel.

## Commands

- `npm run dev` — Start dev server (localhost:4321). Keystatic admin lives at `/keystatic`.
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `npm run check` — TypeScript / Astro type checking (`astro check`)

Node >= 24.x is required (`engines.node` in `package.json`).

## Architecture

- **Framework**: Astro 6 with `output: 'server'` and the `@astrojs/vercel` adapter. Pages opt into static prerendering individually — `src/pages/index.astro` exports `prerender = true`. The Keystatic admin routes are SSR.
- **React 19**: Used for interactive components and the Keystatic admin UI (integrated via `@astrojs/react`).
- **Styling**: Tailwind CSS 4 via Vite plugin (configured in `astro.config.mjs`). The theme is defined in `src/styles/global.css` using `@theme`.
- **CMS**: Keystatic (configured in `keystatic.config.ts`) — local file storage in dev, GitHub-backed in production. Content lives as JSON under `src/content/` (one folder per singleton: `site`, `hero`, `about`, `forwho`, `services`, `contact`).
- **TypeScript**: Strict mode, React JSX configured in `tsconfig.json`.

### Content flow (Keystatic)

Content is read at build/render time via the Keystatic reader, not imported as static JSON.

- `src/lib/keystatic.ts` exports a `reader` created from `keystaticConfig`.
- Components/layouts call e.g. `await reader.singletons.site.read()` to load fields.
- Image fields in Keystatic store **paths** (e.g. `/src/assets/images/about/photo.jpg`), not bundled imports. To turn that path into an `ImageMetadata` usable by `<Image>`/`getImage`, call `resolveImage(path)` from `src/lib/images.ts` — it uses `import.meta.glob` over `src/assets/images/**` to look up the metadata at build time.
- Editing content in `keystatic.config.ts`: when adding a new field, also update the corresponding singleton folder under `src/content/` and any consumer component. Image fields must point to a `directory` under `src/assets/images/...` and the matching `publicPath` must start with `/src/assets/images/...` so `resolveImage` can find them.

### Tailwind CSS 4 specifics

Custom theme values are defined in `src/styles/global.css` using the `@theme` directive. Font families use `--font-*` (not `--font-family-*`) to generate utilities like `font-heading` and `font-body`. Custom animations are exposed via `--animate-*` (e.g. `--animate-fade-up` → `animate-fade-up`).

### Fonts

- **Headings**: "Mistrully" custom font, loaded via `@font-face` in `global.css` from `/fonts/Mistrully.woff2` (file lives in `public/fonts/`). Fallback: Young Serif (Google Fonts).
- **Body**: Plus Jakarta Sans (Google Fonts), loaded via `<link>` in `Layout.astro`.

### Key conventions

- One-page site: all sections live in `src/pages/index.astro`, composed from `src/components/*.astro`.
- `src/layouts/Layout.astro` is the base layout — handles fonts, meta tags from the `site` Keystatic singleton, and an `IntersectionObserver` script that adds `.visible` to elements with `.reveal`, `.reveal-left`, `.reveal-right` classes for scroll-triggered animations.
- Reusable UI primitives in `src/components/ui/` (`ButtonCTA`, `Badge`, `Image`).
- Static assets: `src/assets/` (processed by Astro / referenced through `resolveImage`) vs `public/` (served as-is — fonts, favicon).
- Theme colors: primary `#E0992F` (amber, with `-dark`/`-light`/`-50`/`-100` variants), background `--color-cream` (`#FFFBF5`).

## Production / deployment notes

- Vercel adapter has `webAnalytics.enabled: true`; `@vercel/analytics` is also a dep.
- In production, Keystatic writes commits directly to GitHub via a GitHub App. Required env vars: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_REPO` (see `README.md` for the full GitHub App setup).
