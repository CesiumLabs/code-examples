module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        night: "#2f3136",
        blurple: {
          200: "#EBEEFA",
          300: "#C3CDEF",
          400: "#9AABE5",
          500: "#7289DA",
          600: "#4A67CF",
          700: "#304EB6",
          800: "#253C8E",
          900: "#1B2B65",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
