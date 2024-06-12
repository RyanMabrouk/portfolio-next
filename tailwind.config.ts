import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const customPlugin = plugin(function ({ addUtilities }: any) {
  addUtilities({
    ".rotate-y-20": {
      transform: "rotateY(20deg)",
    },
    ".-rotate-y-20": {
      transform: "rotateY(-20deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".scroll-snap-none": {
      scrollSnapType: "none",
    },
    ".scroll-snap-x": {
      scrollSnapType: "x",
    },
    ".scroll-snap-y": {
      scrollSnapType: "y",
    },
    ".duration-650": {
      transitionDuration: "650ms",
    },
  });
});
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        morph: "morph 4s ease-in-out infinite",
        rotate: "rotate 9s linear infinite",
      },
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
      minHeight: {
        screen: "100dvh",
      },
      minWidth: {
        screen: "100dvw",
      },
      maxHeight: {
        screen: "100dvh",
      },
      maxWidth: {
        screen: "100dvw",
      },
      colors: {
        color1: "#2d2e32",
        color2: "#8e8e8e",
        color3: "#f9f9f9",
        color4: "#147efb",
        color5: "#767676",
      },
    },
  },
  plugins: [customPlugin],
};
export default config;
