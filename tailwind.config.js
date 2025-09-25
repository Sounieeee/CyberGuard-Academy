/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1b26',
        secondary: '#1f2937',
        accent: '#60a5fa',
        highlight: '#34d399',
        'text-primary': '#e5e7eb',
        'text-secondary': '#9ca3af',
        'border-color': '#374151'
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}