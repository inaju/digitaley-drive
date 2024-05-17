import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[class="dark"]'],
  content: [
    "node_modules/preline/dist/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#3ec14b",
        greenSecondary: "#51c13e",
        lightPrimary: "#e3e3e1",
        // primary: "var(--color-primary)",
        // secondary: "var(--color-secondary)",
        // heading: "var(--color-heading)",
        // text: "var(--color-text)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
