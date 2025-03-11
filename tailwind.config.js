/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ebebeb",
        secondary: "#fc581f",
        background: "#141414",
        black: {
          100: "#000000",
          200: "#151414",
        },
        gray: "#242424",
      },
    },
  },
  plugins: [],
};
