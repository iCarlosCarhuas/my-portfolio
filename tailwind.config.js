/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       Dosis: ["Dosis","sans-serif"],
       Shantell: ["Shantell Sans", "cursive"],

     },
    },
  },
  plugins: [],
}