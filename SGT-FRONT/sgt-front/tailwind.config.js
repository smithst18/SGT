/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0B698B',
        secondary: '#F2F2F2',
        alterPri: '#9CD3D8',
        alterSec: '#0396A6'
      },
    },
  },
  plugins: [],
}
