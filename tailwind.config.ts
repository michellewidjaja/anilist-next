import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#4962da",
        white: {
          DEFAULT: "#ededed"
        },
        black: {
          DEFAULT: "#272828",
          100: "#171717"
        },
        blue: {
          DEFAULT: "#328dff",
          700: "#034abf",
          300: "#ebf5ff",
          100: "#f7fbff"
        },
        gray: {
          DEFAULT: "#7b7b7b",
          dark: "#878787",
          100: "#fcfcfc"
        },
        dark: {
          background: "#111010",
          text: "#858282",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
