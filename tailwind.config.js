/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Fixed closing bracket
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Fixed nesting of brackets
      },
    },
  },
  plugins: [],
};
