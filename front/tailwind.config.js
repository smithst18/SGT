/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#00a8c6',
        'primary-light': '#40c0cb',
        'secondary':'#8fbe00',
        'secondary-light':'#aee239',
        'third':'#f9f2e7'
      }
    },
  },
  plugins: [],
}

