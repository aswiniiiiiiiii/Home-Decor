/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
       
      }
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  plugins: [],
}

