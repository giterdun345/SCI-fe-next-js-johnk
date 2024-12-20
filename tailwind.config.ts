import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "linear-gradient(to bottom, rgba(248, 250, 252, 0.5), #f3f4f6, rgba(248, 250, 252, 0.5))",
        "dark-gradient":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #1f2937, rgba(0, 0, 0, 0.5))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        filter: {
          "blur-20": "blur(20px)",
          "blur-25": "blur(25px)",
        },
      },
      keyframes: {
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        "pop-blob": "pop-blob 5s infinite",
        meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
