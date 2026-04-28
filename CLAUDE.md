# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mediathera is a one-page showcase website for a psychology & physiotherapy practice, built with Astro 6, React 19, and Tailwind CSS 4. The site language is French (`lang="fr"`).

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `astro check` — TypeScript type checking for Astro files

## Architecture

- **Framework**: Astro 6 with React integration for interactive components
- **Styling**: Tailwind CSS 4 via Vite plugin (configured in `astro.config.mjs`, theme defined in `src/styles/global.css` using `@theme`)
- **TypeScript**: Strict mode, React JSX configured via `tsconfig.json`
- **Node**: Requires >= 22.12.0

### Tailwind CSS 4 specifics

Custom theme values are defined in `src/styles/global.css` using the `@theme` directive. Font families use `--font-*` (not `--font-family-*`) to generate Tailwind utilities like `font-heading` and `font-body`.

### Fonts

- **Headings**: "Mistrully" custom font loaded via `@font-face` from `public/fonts/`. Fallback: Young Serif (Google Fonts).
- **Body**: Plus Jakarta Sans (Google Fonts), loaded in `Layout.astro`.

### Key conventions

- Astro pages in `src/pages/` (file-based routing)
- Reusable layouts in `src/layouts/` (`Layout.astro` is the base layout with font loading, meta tags, and scroll observer script)
- Components in `src/components/` — can be `.astro` or `.tsx` (React)
- Static assets in `src/assets/` (processed by Astro) or `public/` (served as-is)
- Primary color: `#e0982f` (amber), secondary: stone/grey palette
- Scroll-triggered animations use `.reveal`, `.reveal-left`, `.reveal-right` CSS classes observed by an IntersectionObserver in `Layout.astro`
