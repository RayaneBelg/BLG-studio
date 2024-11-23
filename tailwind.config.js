/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        agdasima: ['Agdasima', 'sans-serif'], // Add Agdasima
        teko: ['Teko', 'sans-serif'],         // Add Teko
      },
      colors : {
        rose : "#F5004F",
        lightText : '#334155',
        darkText: '  #d1d8d8 ',

        lightBg : '  #d1d8d8 ',
        DarkBg : '#334155',


      }
    },
  },
  darkMode : 'class',
  plugins: [

    require('tailwind-scrollbar'),
  ],
}