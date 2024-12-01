import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#86B6B6",
          foreground: "#000000",
          light: "#A8D1D1",
          dark: "#5E8B8B",
        },
        accent: {
          DEFAULT: "#E8A8A8",
          foreground: "#000000",
          light: "#F4C4C4",
          dark: "#D17878",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#B8A8E8",
          light: "#D4C4F4",
          dark: "#9B8BCC",
          foreground: "#000000",
        },
        highlight: {
          DEFAULT: "#A8E8D4",
          light: "#C4F4E4",
          dark: "#78D1B8",
          foreground: "#000000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent': {},
        },
        '.text-gradient-purple': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-accent': {},
        },
        '.text-gradient-ocean': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-highlight to-secondary': {},
        },
        '.text-gradient-sunset': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-accent to-tertiary': {},
        },
        '.text-gradient-nature': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-highlight to-tertiary': {},
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;