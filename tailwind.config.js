/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        seaSalt: "rgb(248, 246, 246)",
        sky: "rgb(203, 243, 240)",
        ocean: "rgb(46, 196, 182)",
        oceanDark: "rgb(0, 153, 142)",
        pine: "rgb(27, 114, 106)",
        pineDark: "rgb(14, 64, 59)",
        creamsicle: "rgb(255, 191, 105)",
        orangeJulius: "rgb(255, 159, 28)",
      },
    },
  },
  plugins: [],
};
