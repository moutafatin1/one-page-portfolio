/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        opp: {
          black: "#151515",
          darkGrey: "#242424",
          grey: "#d9d9d9",
          green: "#4ee1a0",
          red: "#ff6f5b",
        },
      },
    },
  },
  plugins: [],
};
