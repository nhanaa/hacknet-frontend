/** @type {import('tailwindcss').Config} */
const config = {
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
      animation: {
        fade: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 10s ease-in-out",
        fadeLoop: "fadeLoop 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
          to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
          "10%": { opacity: 0, transform: "translate3d(0, -50%, 0)" },
          "100%": { opacity: 0, transform: "translate3d(0, -50%, 0)" },
        },
        fadeLoop: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
