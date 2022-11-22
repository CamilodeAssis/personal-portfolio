/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif', ] 
    },
    extend: {
      
      animation:{
        "anim" : 'all 0.3s cubic-bezier(.25,.8,.25,1)'
      },
      keyframes:{
        anim: {
          "0%": { width: '0%' },
          "100%": {width: '100%'},
        }
      },
      backgroundImage: {
        'eu': "url('./src/assets/images/eu.jpeg')",
        'eureal': "url('./src/assets/images/eureal.jpg')",
      }
    },
    colors: {
      'gray-100': '#f5f2f2',
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