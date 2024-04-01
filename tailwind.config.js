/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tiny: {min: "480", max: "639px"},
      // => @media (min-width: 480px and max-width: 639px) { ... }
      sm: {min: "640px", max: "767px"},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: {min: "768px", max: "1023px"},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: {min: "1024px", max: "1279px"},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: {min: "1280px", max: "1535px"},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": {min: "1536px", max: "1919px"},
      // => @media (min-width: 1536px and max-width: 1919px) { ... }
      "3xl": {min: "1920px"},
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-blue": "#26235B",
        "theme-white": "#F6F6F6",
        "theme-gray": "#BCBBCC",
        "theme-dark": "#949494",
      },
      backgroundColor: {
        "theme-blue": "#26235B",
        "theme-white": "#F6F6F6",
        "theme-white-light": "#FEFEFE",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`],
        roboto: [`var(--font-roboto)`],
      },
    },
  },
  plugins: [],
};
