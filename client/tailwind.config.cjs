/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif', ] 
    },
    extend: {
      backgroundImage: {
        'eu': "url('./src/assets/images/eu.jpeg')",
        'eureal': "url('./src/assets/images/eureal.jpg')",
      }
    },
    colors: {
      'gray-400': '#252528',
      'gray-700': '#19191B',
      'gray-900': '#0C0C0D',

      'black': '#000000',

      'green': '#37CFA2',

      'white': '#FFFFFF'
    },
  },
  plugins: [],
}