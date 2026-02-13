/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4BC',
        },
        forest: {
          DEFAULT: '#2D5A27',
          light: '#4A7A43',
        },
        dark: '#1A1A1A',
      },
      fontFamily: {
        typewriter: ['"Courier Prime"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};