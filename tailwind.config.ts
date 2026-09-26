module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Map the tailwind class to your custom CSS variable
        playball: [
          "var(--font-playball)",
          "cursive",
        ],
      },
    },
  },
  plugins: [],
};
