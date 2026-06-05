/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          50: "#fdf2f4",
          100: "#fce4e8",
          200: "#facdd5",
          300: "#f5a3b4",
          400: "#ed6d8c",
          500: "#e24068",
          600: "#cf2052",
          700: "#ae1644",
          800: "#92153d",
          900: "#7d1639",
          950: "#45061c",
        },
        primary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0da',
          300: '#f4a9bc',
          400: '#ed7698',
          500: '#e14776',
          600: '#cc265e',
          700: '#ab1b4f',
          800: '#8f1a47',
          900: '#7a1b40',
        },
        accent: {
          50: '#fdf8f0',
          100: '#faecd8',
          200: '#f5d5b0',
          300: '#efb87e',
          400: '#e8934a',
          500: '#e37727',
          600: '#d45e1c',
          700: '#b04719',
          800: '#8d391c',
          900: '#73311a',
        },
        rose: {
          gold: "#b76e79",
        },
        cream: {
          50: "#fffefb",
          100: "#fef9f0",
          200: "#fcf0dc",
          300: "#f9e4c3",
          400: "#f5d4a1",
          500: "#f0c27e",
        },
        warm: {
          50: "#faf8f5",
          100: "#f5f0ea",
          200: "#ebe0d4",
          300: "#dccbb7",
          400: "#c9b099",
          500: "#b8987e",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Noto Serif SC", "serif"],
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
