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

      backgroundImage: {
        // 🎨 Prisma-style gradient background
        "gradient-porto": "linear-gradient(to bottom, #0C0F1A, #0A0D17)", // Smooth dark blue gradient

        // 🌌 Radial Glow Effect
        "gradient-glow": "radial-gradient(circle, rgba(76,95,213,0.3) 0%, rgba(12,16,36,0) 90%)",

        // 🎭 Accent Green Border Glow
        "gradient-border": "linear-gradient(to bottom, #3FCF8E, #1F7A5D)",
      },
      colors : {
        rose : "#3FCF8E",
        lightText : '#334155',
        darkText: '  #d1d8d8 ',
        violet : "#4C5FD5",
        clairsombre : "#0c1024",

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