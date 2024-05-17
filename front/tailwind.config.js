/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px', // Define el punto de interrupción para 620px
      },
      colors: {
        customBg: '#F6F6F6',
        customYellow: '#F8C547',
        customGrey: '#005758',
        customGreen: '#005758',
        customBlack: '#121212',
        customGray: '#E9E9E9',
        customGrayTranf: '#695959'
      },
      fontFamily: {
        custom: ['Almarai', 'sans-serif'],
        serif: ['Kaisei Opti', 'serif'],
      },
    },
  },
  plugins: [],
}
