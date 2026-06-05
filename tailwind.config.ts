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
        rose: {
          gold: "#B76E79",
        },
        wine: {
          DEFAULT: "#722F37",
          light: "#8B3A44",
          dark: "#5A252C",
        },
        cream: {
          DEFAULT: "#FFFDD0",
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
