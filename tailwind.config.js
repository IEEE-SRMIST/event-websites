module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgConcepto: "#0A0A0A",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
