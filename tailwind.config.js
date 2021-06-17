module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      "1/4": "25%",

      "1/2": "50%",

      "3/4": "75%",
      "92pc": "92%",
      "85pc": "85%",
    },
  },
  variants: {
    opacity: ["group-hover", "group-focus"],
    visibility: ["group-hover", "group-focus"],
  },

  plugins: [],
};
