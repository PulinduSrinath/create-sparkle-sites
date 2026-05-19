import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "80rem",
        "2xl": "80rem",
      },
    },
    extend: {
      screens: {
        xs: "430px",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "hero-fade": {
          from: { opacity: "0.85", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-orb-a": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(50px, -30px)" },
        },
        "hero-orb-b": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-40px, 40px)" },
        },
        "hero-orb-c": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(30px, 50px)" },
        },
        "nav-enter": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "logo-float": {
          "0%, 100%": { transform: "translateY(0) rotateY(0deg)" },
          "50%": { transform: "translateY(-20px) rotateY(10deg)" },
        },
        "float-orb": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, -18px) scale(1.08)" },
        },
        "orbit-ring": {
          from: { transform: "rotate(0deg) scale(1)" },
          to: { transform: "rotate(360deg) scale(1.05)" },
        },
        "node-drift": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.1" },
          "50%": { transform: "translateY(-80px) scale(1.4)", opacity: "0.4" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.4" },
        },
        "line-drift": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.2" },
          "50%": { transform: "translateX(40px)", opacity: "0.5" },
        },
        "terminal-enter": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "terminal-line": {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "badge-enter": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "hero-fade": "hero-fade 0.5s ease-out both",
        "hero-fade-delayed": "hero-fade 0.55s ease-out 0.08s both",
        "hero-fade-delayed-2": "hero-fade 0.55s ease-out 0.14s both",
        "hero-fade-delayed-3": "hero-fade 0.55s ease-out 0.2s both",
        "hero-visual": "hero-fade 0.65s ease-out 0.1s both",
        "hero-orb-a": "hero-orb-a 8s ease-in-out infinite",
        "hero-orb-b": "hero-orb-b 10s ease-in-out infinite",
        "hero-orb-c": "hero-orb-c 12s ease-in-out infinite",
        "nav-enter": "nav-enter 0.6s ease-out both",
        "logo-float": "logo-float 6s ease-in-out infinite",
        "float-orb": "float-orb var(--float-duration, 18s) ease-in-out var(--float-delay, 0s) infinite",
        "orbit-ring": "orbit-ring var(--orbit-duration, 50s) linear infinite",
        "node-drift": "node-drift var(--float-duration, 6s) ease-in-out var(--float-delay, 0s) infinite",
        "node-pulse": "node-pulse var(--float-duration, 6s) ease-in-out var(--float-delay, 0s) infinite",
        "line-drift": "line-drift 8s ease-in-out var(--float-delay, 0s) infinite",
        "terminal-enter": "terminal-enter 0.7s ease-out 1.2s forwards",
        "terminal-line": "terminal-line 0.35s ease-out forwards",
        "badge-enter": "badge-enter 0.7s ease-out 0.9s forwards",
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
