import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light iOS theme — token names kept the same so the whole app
        // re-themes without touching every component.
        void: "#EEF1F7", // page background (soft light gray-blue)
        navy: {
          950: "#FFFFFF", // brightest surface
          900: "#F7F9FC",
          800: "#EDF1F8",
          700: "#DCE2EC", // borders / dividers
          600: "#C7D0DE",
        },
        ink: {
          100: "#0B1220", // primary text (near-black)
          300: "#49556B", // secondary text
          500: "#8A94A6", // muted text
        },
        cyan: {
          DEFAULT: "#0A84FF", // iOS system blue
          soft: "#4AA8FF",
        },
        violet: {
          DEFAULT: "#5E5CE6", // iOS system indigo
          soft: "#8E8DF0",
        },
        azure: {
          DEFAULT: "#0A84FF",
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
