/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1e293b",
        },
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
});
