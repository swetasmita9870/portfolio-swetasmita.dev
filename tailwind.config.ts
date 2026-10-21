import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c0909",
          raised: "#161111",
          soft: "#211919",
        },
        line: "rgba(255,255,255,0.12)",
        ivory: {
          DEFAULT: "#f5f5f4",
          muted: "#a8a29e",
          dim: "#78716c",
        },
        gold: {
          DEFAULT: "#e11d2e",
          bright: "#ff6b6b",
          deep: "#9f1239",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        frame: "0 30px 80px -40px rgba(0,0,0,0.85)",
        glow: "0 0 32px -4px rgba(255,255,255,0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "portrait-in": "portraitIn 1s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-ring": "pulseRing 2.8s ease-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        portraitIn: {
          from: { opacity: "0", transform: "scale(0.94) translateY(16px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.92)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(1.12)", opacity: "0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-4%, 6%, 0) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
