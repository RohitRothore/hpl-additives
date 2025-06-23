import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee2: "marquee 15s linear infinite",
        moveUpward: "moveUpward 2s linear forwards",
        scaleY: "scaleY 0.2s ease-in-out ",
        showTranslateY: " showTranslateY 0.64s ease-in-out",
        slideInLeft: "slideInLeft .5s ease-in",
        slideInRight: "slideInRight 0.4s ease-in-out",
        slideInUp: "slideInUp 0.4s ease-in-out",
        slideOutLeft: "slideOutLeft .5s ease-out",
        stopWord: "stopWord 2s linear forwards",
      },
      colors: {
        theme: '#6cb336',
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "0.75rem",
          xl: "1rem",
          "2xl": "3rem",
        },
        center: true,
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveUpward: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "33.33%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "66.67%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-100%)",
          },
        },
        showTranslateY: {
          "0%": { transform: " translateY(60px)", opacity: "0" },
          "100%": { transform: " translateY(0rem)", opacity: "1" },
        },
        stopWord: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "33.33%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translate3d(-100%, 0, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translateZ(0)",
          },
        },
        slideOutLeft: {
          "0%": {
            transform: "translateZ(0)",
          },
          to: {
            visibility: "hidden",
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translate3d(100%, 0, 0)",
            visibility: "visible",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideInUp: {
          "0%": {
            transform: "translate3d(0, 100%, 0)",
            visibility: "visible",
          },
          "100%": {
            transform: "translateZ(0)",
          },
        },
        scaleY: {
          "0%": {
            opacity: "0",
            transform: "scaleY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scaleY(1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
