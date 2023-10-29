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
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
export default config;
