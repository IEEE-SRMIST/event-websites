module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgConcepto: "#0A0A0A",
        primary: "#151515",
        secondary: "#888888",
        tertiary: "#E5E5E5",
        cardbg: "#151515"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
