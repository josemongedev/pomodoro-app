/** @type {import('tailwindcss').Config} */
import * as defaultTheme from "tailwindcss/defaultTheme";

// export default {
export default {
  content: ["./**/*.{tsx,html}", "./components/**/*.{html,tsx}"],
  safelist: [
    "hidden",
    { pattern: /bg-(lightorange|skyblue|fuchsia)/ },
    { pattern: /stroke-(lightorange|skyblue|fuchsia)/ },
    { pattern: /text-(lightorange|skyblue|fuchsia)/, variants: ["hover"] },
    {
      pattern: /font-(roboto-slab|kumbh-sans|space-mono)/,
    },
  ],
  // darkMode: "media",
  theme: {
    screens: {
      // mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      black: "#0E112A",
      modal: "rgba(10, 12, 28, 0.50)",
      navy: "#1E213F",
      blueblack: "#161932",
      blue: "#2E325A",
      lightorange: "#F87070",
      lighterorange: "#f98d8d",
      skyblue: "#70F3F8",
      bluegray: "#D7E0FF",
      whitegray: "#EFF1FA",
      fuchsia: "#D881F8",
      white: "#FFFFFF",
      hrwhite: "#E3E1E1",
      timergradient: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
    },
    boxShadow: {
      lg: "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
    },
    fontSize: {
      "xxs-sp": ["11px", { lineHeight: 1, letterSpacing: "4.23px" }],
      xs: ["12px", { lineHeight: 1 }],
      sm: ["13px", { lineHeight: 1 }],
      "sm-sp": ["13px", { lineHeight: 1, letterSpacing: "5px" }],
      md: ["14px", { lineHeight: 1 }],
      "md-sp": ["14px", { lineHeight: 1, letterSpacing: "13.125px" }],
      lg: ["15px", { lineHeight: 1 }],
      xl: ["16px", { lineHeight: 1 }],
      "xl-sp": ["16px", , { lineHeight: 1, letterSpacing: "15px" }],
      "2xl": ["20px", { lineHeight: 1 }],
      "3xl": ["28px", { lineHeight: 1 }],
      "4xl": ["80px", { lineHeight: 1, letterSpacing: "-5px" }],
      "5xl": ["88px", { lineHeight: 1, letterSpacing: "-5px" }],
      "6xl": ["100px", { lineHeight: 1, letterSpacing: "-5px" }],
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
