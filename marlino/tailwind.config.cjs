/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./code.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#070a12',
          navy: '#0b111e',
          surface: '#0f172a',
          card: '#131d33',
          cyan: '#00d2ff',
          teal: '#00e5bf',
          accent: '#3b82f6',
          purple: '#6366f1',
          gold: '#f2ca50',
          goldDark: '#d4af37',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
