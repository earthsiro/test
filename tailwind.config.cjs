/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005fff",
          secondary: "#c000ff",
          accent: "#FFE999",
          neutral: "#3B8AC4",
          "base-100": "#ffffff",
          info: "#2563EB",
          success: "#16A34A",
          warning: "#D97706",
          error: "#DC2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
