/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#69E9F5',
        'primary-light': '#96dcf3',
      }
    },
  },
  plugins: [],
}
