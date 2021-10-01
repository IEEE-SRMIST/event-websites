module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: { primary: "#0A0A0A", secondary: "#151515" },
        text: {
          secondary: "#888888",
          primary: "#E5E5E5",
        },
        twittercolour: "#3190FE",
      },
      backgroundImage: (theme) => ({
        sponsor: "url('/sponsorbg.png')",
        hero: "url('/wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
