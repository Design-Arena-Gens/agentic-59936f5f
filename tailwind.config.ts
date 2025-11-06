import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fdf2f8",
          DEFAULT: "#e11d48",
          dark: "#9f1239"
        }
      }
    }
  },
  plugins: []
};

export default config;
