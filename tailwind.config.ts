import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rose-gold": {
          DEFAULT: "#C9A46A",
          light: "#d4b8a0",
          pale: "#E8C7C8",
        },
        wine: {
          DEFAULT: "#5A1F2B",
          red: "#5A1F2B",
          light: "#7a3040",
          dark: "#3a0d19",
        },
        cream: {
          DEFAULT: "#FFF8F1",
          warm: "#F4E8DA",
          light: "#FFFDE7",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
