/** @type {import('tailwindcss').Config} */
import * as defaultTheme from "tailwindcss/defaultTheme";

// export default {
module.exports = {
  content: ["./**/*.{tsx,html}", "./components/**/*.{html,tsx}"],
  // darkMode: "media",
  theme: {
    screens: {
      // mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      black: "#0E112A",
      navy: "#1E213F",
      blueblack: "#161932",
      blue: "#2E325A",
      lightorange: "#F87070",
      skyblue: "#70F3F8",
      bluegray: "#D7E0FF",
      whitegray: "#EFF1FA",
      fuchsia: "#D881F8",
      white: "#FFFFFF",
      timergradient: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
    },
    boxShadow: {
      lg: "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ["'Kumbh Sans'", ...defaultTheme.fontFamily.sans],
        "roboto-slab": ["'Roboto Slab'", ...defaultTheme.fontFamily.serif],
        "space-mono": ["'Space Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
