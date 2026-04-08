# Harrington and Co

A polished React portfolio site for a fictional boutique law firm. The project is built to feel premium and production-ready while still staying intentionally demo-friendly and lightweight.

## What's Included
- Premium editorial-style landing pages for the firm, practice areas, blog, about, and contact flow.
- Client-side routing with React Router and route-level code splitting.
- Reusable feature sections and layout components for a clean, maintainable structure.
- Contact form validation with React Hook Form and Zod.
- Smooth scrolling, polished navigation, and a static-first load experience.
- Local favicon and social preview assets for better browser and sharing presentation.

## Tech Stack
- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- React Router
- React Hook Form
- Zod
- lucide-react

## Project Structure
- `App.tsx` and `main.tsx` for app shell and routing
- `pages/` for page-level composition
- `components/features/` for section-driven UI
- `components/layout/` for shared navigation and footer chrome
- `components/ui/` for reusable primitives
- `constants.tsx` for curated firm content
- `index.css` for global styles and motion utilities

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Notes
- This is a portfolio project, not a backend-driven product.
- The content is intentionally curated and mostly static so the site stays fast and presentation-focused.
- BrowserRouter works best with a rewrite fallback on static hosting.
