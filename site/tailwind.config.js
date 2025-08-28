// tailwind.config.js - Tailwind setup with custom color vars bridging.
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,json}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "sans-serif",
        ],
      },
      colors: {
        bg: "#0a0b0e",
        "bg-alt": "#0f1115",
        surface: "#1a1f28",
        "surface-alt": "#232a36",
        border: "#2a303b",
        text: "#e6e9ef",
        secondary: "#c1c7d3",
        muted: "#9aa0b2",
        indigo: {
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
        },
        pink: {
          500: "#ec4899",
        },
        green: {
          400: "#4ade80",
        },
      },
      boxShadow: {
        card: "0 2px 4px -2px rgba(0,0,0,.4),0 4px 12px -4px rgba(0,0,0,.3)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 4px 6px -1px rgba(0,0,0,0.4)" },
          "50%": {
            boxShadow:
              "0 10px 25px -3px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.2)",
          },
        },
      },
    },
  },
  plugins: [],
};
