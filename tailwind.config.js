/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        head: ['Protest Guerrilla', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.769rem',
        '8xl': '5.961rem',
        '9xl': '7.451rem',
        '10xl': '9.313rem',
        '11xl': '11.641rem',
        '12xl': '14.551rem',
        '13xl': '18.189rem',
        '14xl': '22.736rem',
        '15xl': '28.420rem',
        '16xl': '35.525rem',
      },
      colors: {
        white: '#ffffff',
        orange: '#F54703',
        lightOrange: '#FF7518',
        darkGrey: '#32004F',
        lightGrey: '#464545',
        lightBlack: '#1B1B1B',
        black: '#000000',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}