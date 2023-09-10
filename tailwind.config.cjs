/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair"],
    },
    colors: {
      primary: "#0B0D17",
      secondary: "#FFFFFF",
      highlight: "#D0D6F9",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
