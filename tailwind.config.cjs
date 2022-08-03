/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        infoRedColor: "#F55A5A",
        textDarkBlue: "#2B283A",
        subtitleViewGoogle: "#918E9B",
      },
    },
  },
  plugins: [],
};
