/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#bc5623",
      
"secondary": "#f9c0a9",
      
"accent": "#c91906",
      
"neutral": "#20223C",
      
"base-100": "#333135",
      
"info": "#5A98CE",
      
"success": "#60DCAB",
      
"warning": "#F8BA62",
      
"error": "#FA3F19",
      },
    },
  ],
  plugins: [require("daisyui")],
}

