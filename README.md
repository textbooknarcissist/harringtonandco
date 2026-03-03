# Harrington & Co

A premium, editorial-style website for a boutique law firm. Built as a static-friendly, multi-page SPA with React 19, TypeScript, Tailwind CSS v4, and Vite.

## Highlights
- Brand-first design system with custom typography, high-contrast palette, and rich editorial layouts.
- Hash-based routing with lazy-loaded pages for fast, static hosting with zero server configuration.
- Composable feature sections (hero, practice previews, testimonials, FAQs, track record).
- Contact workflow with React Hook Form plus Zod validation.
- Motion and micro-interactions via CSS keyframes, intersection observers, and page transition loading bar.

## Pages
- Home: hero, about, practice preview, blog preview, FAQ, contact, testimonials.
- About: heritage narrative, track record, mission/vision/values.
- Practice Areas: specialized services, execution strategy, practice leads.
- Resources: blog listing with featured insight.
- Contact: full-screen hero, expanded FAQ, validated contact form, global presence block.
- Compliance: privacy policy and terms pages.

## Tech Stack
- React 19, TypeScript 5, Vite 6
- Tailwind CSS 4 via PostCSS
- react-hook-form plus zod for form validation
- lucide-react for icons

## Architecture
- Hash router implemented in App.tsx for static hosting without React Router.
- Page-level code splitting using React.lazy and Suspense with components/ui/LoadingBar.tsx.
- Feature sections live in components/features/ and are composed into pages in pages/.
- Centralized content and typed models in constants.tsx and types/.

## Project Structure
- App.tsx and main.tsx
- pages/
- components/features/
- components/layout/
- components/ui/
- types/
- assets/
- index.css

## Running Locally
```bash
npm install
npm run dev
```

## Build and Preview
```bash
npm run build
npm run preview
```

## Customization
- Update firm content, FAQs, and blog data in constants.tsx.
- Adjust color tokens and fonts in index.css and tailwind.config.js.
- Add or reorder sections by editing the page components in pages/.
- Replace imagery directly inside feature components in components/features/.

## Deployment
- Vite outputs a static build to dist/.
- Hash routing (#/...) works on any static host without rewrites.
- For subpath hosting, set base in vite.config.ts.

## Notes
- The contact form currently simulates a request and logs to the console in components/features/ContactSection.tsx.
- No automated tests or lint configuration are included yet.
- components/features/EnterpriseTicker.tsx and components/features/Hero.tsx import framer-motion, but the dependency is not declared. Install it or remove the import if you enable those modules in production builds.
