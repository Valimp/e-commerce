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
        'egg-white': '#F9F6F1',
        'grass-green': '#2B4F3E',
        'deep-green': '#00373D',
        'sun-orange': '#F07605',
      },
    },
  },
  plugins: [],
};
export default config;
