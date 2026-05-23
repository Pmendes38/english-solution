/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1F44",
          "navy-dark": "#06112B",
          "navy-light": "#15306B",
          red: "#E11D2A",
          "red-dark": "#B11320",
          cream: "#F8F6F2",
          ink: "#0E1830",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-tinos)", "Times New Roman", "Times", "serif"],
        display: ["var(--font-tinos)", "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        brand: "0 30px 60px -25px rgba(10, 31, 68, 0.45)",
      },
      backgroundImage: {
        "brand-grid":
          "radial-gradient(circle at 1px 1px, rgba(10,31,68,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
