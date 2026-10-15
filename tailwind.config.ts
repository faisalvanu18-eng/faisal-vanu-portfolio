import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tokens are driven by CSS variables (defined in index.css) so the
        // whole app re-themes between light & dark without touching components.
        void: "rgb(var(--c-void) / <alpha-value>)", // page background
        navy: {
          950: "rgb(var(--c-navy-950) / <alpha-value>)", // brightest surface
          900: "rgb(var(--c-navy-900) / <alpha-value>)",
          800: "rgb(var(--c-navy-800) / <alpha-value>)",
          700: "rgb(var(--c-navy-700) / <alpha-value>)", // borders / dividers
          600: "rgb(var(--c-navy-600) / <alpha-value>)",
        },
        ink: {
          100: "rgb(var(--c-ink-100) / <alpha-value>)", // primary text
          300: "rgb(var(--c-ink-300) / <alpha-value>)", // secondary text
          500: "rgb(var(--c-ink-500) / <alpha-value>)", // muted text
        },
        cyan: {
          DEFAULT: "rgb(var(--c-cyan) / <alpha-value>)", // iOS system blue
          soft: "rgb(var(--c-cyan-soft) / <alpha-value>)",
        },
        violet: {
          DEFAULT: "rgb(var(--c-violet) / <alpha-value>)", // iOS system indigo
          soft: "rgb(var(--c-violet-soft) / <alpha-value>)",
        },
        azure: {
          DEFAULT: "rgb(var(--c-cyan) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(10,22,40,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,22,40,0.04) 1px, transparent 1px)",
        "glow-cyan-violet":
          "radial-gradient(circle at 30% 20%, rgba(10,132,255,0.18), transparent 45%), radial-gradient(circle at 75% 60%, rgba(94,92,230,0.16), transparent 45%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      boxShadow: {
        glow: "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 10px 30px -12px rgba(10,22,40,0.18)",
        "glow-violet": "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 14px 40px -14px rgba(94,92,230,0.28)",
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
