/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#002D60",
          red: "#E31E24",
          "red-hover": "#B81722",
          white: "#FFFFFF",
          "gray-dark": "#222222",
          "gray-light": "#F2F2F2",
          // Sistema dark derivado da identidade
          base: "#04122B",
          elevated: "#07204A",
          overlay: "#0A2D63",
          // Texto
          text: "#F8FAFC",
          "text-secondary": "#AAB6C8",
          "text-muted": "#6F7C91",
        },
      },
      backgroundColor: {
        base: "#04122B",
        elevated: "#07204A",
        overlay: "#0A2D63",
        accent: "#E31E24",
      },
      textColor: {
        accent: "#E31E24",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-tinos)", "Times New Roman", "Times", "serif"],
        display: ["var(--font-tinos)", "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        "brand-glow": "0 8px 24px rgba(227, 30, 36, 0.30)",
        "brand-glow-lg": "0 12px 32px rgba(227, 30, 36, 0.30)",
        "blue-glow": "0 0 120px rgba(0, 45, 96, 0.45)",
      },
      backgroundImage: {
        "brand-grid":
          "radial-gradient(circle at 1px 1px, rgba(120,160,255,0.06) 1px, transparent 0)",
        "gradient-dark":
          "linear-gradient(135deg, #04122B 0%, #07204A 50%, #04122B 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
