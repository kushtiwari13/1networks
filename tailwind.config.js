// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mjs}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        slowspin: "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
