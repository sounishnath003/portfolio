/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      // "dracula",
      {
        mytheme: {
          // primary: "#00ad81",
          // secondary: "#00a9bb",
          // accent: "#866700",
          // neutral: "#171a09",
          // "base-100": "#f2fff5",
          // info: "#00c5f5",
          // success: "#71ff17",
          // warning: "#cb5700",
          // error: "#ff2761",

          primary: "#0023ff",
          secondary: "#006a00",
          accent: "#009885",
          neutral: "#160c11",
          "base-100": "#fbfffb",
          info: "#009dff",
          success: "#88f36b",
          warning: "#d63800",
          error: "#ff6389",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
