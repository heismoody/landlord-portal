import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffffff",
        secondary: "#45A9EA",
        ternary: "#f4f6f6",
        darkPrimary: "#030713",
        darkSecondary: "#4a5565"
      },
    },
  },
  plugins: [],
};
export default config;
