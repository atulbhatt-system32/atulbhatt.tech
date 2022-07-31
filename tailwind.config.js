/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      "176px": "176px",
      "64px": "64px",
    },
    minWidth: {
      "214px": "214px",
      "234px": "234px",
    },
    maxWidth: {
      none: "none",
      "31%": "31%",
      "45%": "45%",
      "200px": "200px",
      "280px": "280px",
      "360px": "360px",
      "520px": "520px",
    },
    fontSize: {
      "12px": "12px",
      "14px": "14px",
      "16px": "16px",
      "18px": "18px",
      "20px": "20px",
      "24px": "24px",
      "32px": "32px",
      "40px": "40px",
      "44px": "44px",
      "48px": "48px",
    },
    colors: {
      grass: "#05950A",
      transparent: "transparent",
      current: "currentColor",
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
      "btn-color": "#2D69E7",
      "transparent-dark": "rgba(7, 7, 36, 0.12)",
      primary: {
        "blue-200": "#5454D4",
        "blue-500": "rgba(84, 84, 212, 1)",
        "blue-600": "#2A7FFF",
        green: "rgba(0, 198, 101, 1)",
      },
      white: {
        900: "#ffffff",
      },
      gray: {
        100: "#AEAEAE",
        200: "rgba(174, 174, 174, 1)",
      },
      black: {
        100: "#1B1B1B",
        200: "#222222",
        500: "#575559",
        50: "#2C2C2C",
      },
    },
    extend: {
      spacing: {
        "5px": "5px",
        "144px": "144px",
        "120px": "120px",
      },
      width: {
        "5%": "5%",
        "12%": "12%",
        "15%": "15%",
        "80%": "80%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "65%": "65%",
        "75%": "75%",
        "95%": "95%",
        "100%": "100%",
        "sidebar-large": "300px",
        "sidebar-md": "265px",
        "footer-title-xl": "360px",
      },
      height: {
        "profile-ex-sm": "280px",
        "profile-sm": "410px",
        "profile-md": "480px",
        "profile-lg": "650px",
        "quote-ex-sm": "250px",
        "quote-md": "290px",
        "quote-large": "470px",
        "podcast-banner": "160px",
        "podcast-banner-sm": "300px",
        "podcast-banner-lg": "388px",
      },
    },
    borderWidth: {
      0.5: "0.5px",
      1: "1px",
      1.5: "1.5px",
    },

    fontFamily: {
      body: ["'DM Sans'"],
      logo: ["'BrightWall'"],
    },
  },
  plugins: [],
};
