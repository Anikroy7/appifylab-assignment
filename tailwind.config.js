/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2e3e52",

          "secondary": "#F000B8",

          "accent": "#e9ebee",

          "neutral": "#717171",

          "base-100": "#ffff",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#db2025",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
