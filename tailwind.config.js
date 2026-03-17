/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#00f5ff",
          500: "#00c8d4",
        },
      },
      animation: {
        "fadeDown": "fadeDown 0.8s ease forwards",
        "fadeUp":   "fadeUp 0.8s ease forwards",
        "blink":    "blink 1s infinite",
        "bounce":   "bounce 2s infinite",
        "float":    "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeDown: {
          "0%":   { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
