import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        midnight: '#0b1120',
        panel: '#111827',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139, 92, 246, 0.18), 0 20px 50px rgba(79, 70, 229, 0.2)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.22) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
