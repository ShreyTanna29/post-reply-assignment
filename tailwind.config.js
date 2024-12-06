module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "1000px", opacity: "1" },
        },
        collapse: {
          "0%": { maxHeight: "1000px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
      },
      animation: {
        expand: "expand 0.3s ease-in-out",
        collapse: "collapse 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
