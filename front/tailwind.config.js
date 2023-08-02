/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#3818D9',
        'primary-light': '#A899F1',
        'secondary':'#FFFFFF',
        'third':'#545454',
        'third-light':'#716E6C',
        'aux':'#D9D9D9',
      }
    },
  },
  plugins: [],
}

