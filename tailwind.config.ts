// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
        text: {
          light: "#1F2937",
          dark: "#F3F4F6",
        },
        primary: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        accent: {
          DEFAULT: "#14B8A6",
        },
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
