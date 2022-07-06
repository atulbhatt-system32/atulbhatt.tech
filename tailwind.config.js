/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#2B2B2B;",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "project-card-lg-voilet": "#bc53ff",
      "project-card-lg-blue": "#0092a9",
      "project-card-dk-blue": "#3f2aff",
      "project-card-dk-pink": "#c2005d",
      "project-card-dk-voilet": "#7b0570",
      "project-card-bg": "#4d46cf",
      "black-normal": "#070724",
      "gray-dark": "#AEAEAE",
    },
    fontFamily: {
      body: ["'DM Sans'"],
    },
  },
  plugins: [],
};
