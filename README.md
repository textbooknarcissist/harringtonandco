# Harrington & Co

A premium, editorial-style website for a boutique law firm. Built as a static-friendly, multi-page SPA with React 19, TypeScript, Tailwind CSS v4, and Vite.

## Highlights
- Brand-first design system with custom typography, high-contrast palette, and rich editorial layouts.
- BrowserRouter-based client-side routing with lazy-loaded pages for fast navigation.
- Composable feature sections (hero, practice previews, testimonials, FAQs, track record).
- Contact workflow with React Hook Form plus Zod validation.
- Motion and micro-interactions via CSS keyframes, intersection observers, and page transition loading states.

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
- React Router is wired in App.tsx with route-level code splitting.
- Page-level code splitting using React.lazy and Suspense with components/ui/PageLoader.tsx.
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

If you want to experiment with API-backed content, copy `.env.example` to `.env` and set `VITE_USE_MOCK_DATA=false` plus a real `VITE_API_BASE_URL`.

## Build and Preview
```bash
npm run build
npm run preview
```

## Customization
- Update firm content, FAQs, and blog data in constants.tsx.
- Toggle mock/demo versus API-backed content in `.env.example` and `services/contentService.ts`.
- Adjust color tokens and fonts in index.css and tailwind.config.js.
- Add or reorder sections by editing the page components in pages/.
- Replace imagery directly inside feature components in components/features/.

## Deployment
- Vite outputs a static build to dist/.
- BrowserRouter works best with a rewrite fallback on static hosts.
- For subpath hosting, set base in vite.config.ts.

## Notes
- The contact form currently simulates a request and logs to the console in components/features/ContactSection.tsx.
- Automated tests, ESLint 9 flat config, and Prettier are included.
- components/features/EnterpriseTicker.tsx uses framer-motion for the scrolling logo ticker.
