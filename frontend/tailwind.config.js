/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // "corporate",
      {
        mytheme: {
          "primary": "#00ad81",
          "secondary": "#00a9bb",
          "accent": "#866700",
          "neutral": "#171a09",
          "base-100": "#f2fff5",
          "info": "#00c5f5",
          "success": "#71ff17",
          "warning": "#cb5700",
          "error": "#ff2761",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
