/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      "14px":"14px",
      "18px":"18px",
      "32px": "32px",
    },
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
      primary:{
        "blue-200":"#5454D4",
        "blue-500":"rgba(84, 84, 212, 1)",
      },
      white:{
        "900":"#ffffff",
      },
      gray:{
        "200":"rgba(174, 174, 174, 1)",
      },
      black:{
        "500":"#575559"
      }
    },
  },
  plugins: [],
};
