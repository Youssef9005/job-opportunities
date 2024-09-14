import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg-md": "995px",
        xs: "520px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color": "#5727e7",
        "second-color": "#5D11FF",
      },
    },
  },
  plugins: [],
};
export default config;
