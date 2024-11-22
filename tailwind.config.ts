import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable dark mode with class strategy
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
      },
      fontFamily: {
        "neue-machina": ["Neue Machina", "sans-serif"],
        "jetBrains-Mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
