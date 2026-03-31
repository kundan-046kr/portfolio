/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'DM Serif Display'", "serif"],
      },
      colors: {
        accent: "#4f46e5",
        "accent-light": "#eef2ff",
      },
    },
  },
  plugins: [],
};
