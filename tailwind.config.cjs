/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        'orangeColor':'#FF5733',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f89',
        'textColor': '#252b36',
        
      }
    },
  },
  plugins: [],
}
