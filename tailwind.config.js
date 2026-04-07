/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './{App,main,constants}.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './store/**/*.{ts,tsx}',
    './types/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F1E2E',
        'gold': '#C6A75E',
      },
    },
  },
  plugins: [],
}
