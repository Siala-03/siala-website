
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          950: '#050d17',
          900: '#0A1A2F',
          800: '#0D2138',
          700: '#163354',
          600: '#1f4673',
        },
        copper: {
          100: '#f6e3d4',
          400: '#d98f59',
          500: '#C87941',
          600: '#b06531',
        }
      }
    },
  },
  plugins: [],
}
