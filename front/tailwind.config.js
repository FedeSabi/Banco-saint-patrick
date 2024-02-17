/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#F8C547',
        customGrey: '#005758',
        customGreen: '#005758'
      },
    },
  },
  plugins: [],
}