/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'darkinset-custom': 'inset 20px 20px 60px #1f2733, inset -20px -20px 60px #475b77',
        'inset-custom': 'inset 20px 20px 30px #7d8282, inset -20px -20px 30px #ffffff',
      },

      fontFamily:{
        agdasima: ['Agdasima', 'sans-serif'], // Add Agdasima
        teko: ['Teko', 'sans-serif'],         // Add Teko
      },
      colors : {
        rose : "#8dbe22",
        lightText : '#334155',
        darkText: '  #d1d8d8 ',

        lightBg : '  #d1d8d8 ',
        DarkBg : '#334155',


      },
    
    },
  },
  darkMode : 'class',
  plugins: [

    require('tailwind-scrollbar'),
  ],
}