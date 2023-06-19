/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'league1': "url('/public/Riot_logo.png')",
        'summoner': "url('/public/summoner_r.jpg')",
        'aram': "url('/public/aram_bg.jpg')",
        'tft': "url('/public/tft_bg.jpg')",
        'world-league': "url('/public/lol_world1.jpg')",
      },
      screens: {
        'xl': {'min': '1281px' ,'max': '1600px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '961px' ,'max': '1280px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '640px' ,'max': '960px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'min': '320px','max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    

    },
  },
  plugins: [],
}