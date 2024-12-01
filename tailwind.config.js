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
        rose : "#aae114",
        lightText : '#334155',
        darkText: '  #d1d8d8 ',

        lightBg : '  #d1d8d8 ',
        DarkBg : 'linear-gradient(145deg, #37465b, #2e3b4d)',


      },
      backgroundImage: {
        DarkBg: "linear-gradient(145deg, #37465b, #2e3b4d)", // Moved here
      },
    },
  },
  darkMode : 'class',
  plugins: [

    require('tailwind-scrollbar'),
  ],
}