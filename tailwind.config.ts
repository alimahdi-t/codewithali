import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          "25": "#FCFAFF",
          "50": "#edfaff",
          "100": "#d6f2ff",
          "200": "#b5eaff",
          "300": "#83dfff",
          "400": "#48cbff",
          "500": "#1eacff",
          "600": "#068eff",
          "700": "#007aff",
          "800": "#085dc5",
          "900": "#0d519b",
          "950": "#0e315d",
        },
        gray: {
          "25": "#FCFCFD",
          "50": "#F9FAFB",
          "100": "#F2F4F7",
          "200": "#E4E7EC",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "500": "#667085",
          "600": "#475467",
          "700": "#344054",
          "800": "#1D2939",
          "900": "#101828",
          "950": "#0C111D",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
