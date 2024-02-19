/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        green: "#42938D",
        purple: "#404080",
      },
    },
  },
  plugins: [],
};
