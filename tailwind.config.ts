import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070C",
        navy: {
          950: "#080B15",
          900: "#0B111F",
          800: "#111A2C",
          700: "#182339",
          600: "#233252",
        },
        ink: {
          100: "#EEF1F8",
          300: "#AAB3C8",
          500: "#75809A",
        },
        cyan: {
          DEFAULT: "#4FD8C9",
          soft: "#3BB6AD",
        },
        violet: {
          DEFAULT: "#8E7FF2",
          soft: "#6C63B5",
        },
        azure: {
          DEFAULT: "#4C7EF3",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "glow-cyan-violet":
          "radial-gradient(circle at 30% 20%, rgba(79,216,201,0.14), transparent 45%), radial-gradient(circle at 75% 60%, rgba(142,127,242,0.14), transparent 45%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.08), 0 20px 60px -20px rgba(79,216,201,0.15)",
        "glow-violet": "0 0 0 1px rgba(148,163,184,0.08), 0 20px 60px -20px rgba(142,127,242,0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "dash": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
