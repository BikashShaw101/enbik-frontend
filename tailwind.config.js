/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffa500",
        darkprimary: "#ff8800;",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183856",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    theme: [],
    darkTheme: false,
    base: false,
    styled: true,
    utils: true,
    prefix: "d-",
  },
};
