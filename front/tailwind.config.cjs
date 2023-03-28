/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    listStyleType: {
      square: "square",
      roman: "upper-roman",
      perso: "\25BC",
    },
  },
  plugins: [],
};
