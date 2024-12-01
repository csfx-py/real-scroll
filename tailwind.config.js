/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"anton"', "sans-serif"],
        dmsans: ['"dmsans"', "sans-serif"],
      },
      colors: {
        primary: "#1f2326",
        secondary: "#b1b1b1",
        "pink-accent": "#ff66b7",
        "green-accent": "#29ccb9",
        "blue-accent": "#0091ff",
        "brown-accent": "#B8926D",
      },
    },
  },
  plugins: [],
};
