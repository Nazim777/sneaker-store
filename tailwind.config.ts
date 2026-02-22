import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        display: ["'Barlow Condensed'", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#2563EB",
          black: "#0A0A0A",
          gray: "#F5F5F5",
          "dark-gray": "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
