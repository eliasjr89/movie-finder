// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilita control manual del dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        background: {
          light: "#F9FAFB", // gris claro
          dark: "#111827", // gris oscuro (tailwind slate-900)
        },
        text: {
          light: "#1F2937", // slate-800
          dark: "#F3F4F6", // slate-100
        },
        primary: {
          DEFAULT: "#6366F1", // indigo-500
          dark: "#4F46E5", // indigo-600
        },
        accent: {
          DEFAULT: "#14B8A6", // teal-500
        },
      },
      fontSize: {
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
      },
    },
  },
  plugins: [],
};

export default config;
