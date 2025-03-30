module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-amber-700"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
