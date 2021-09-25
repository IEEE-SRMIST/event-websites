module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#151515',
      secondary: '#888888',
      tertiary: '#E5E5E5',
    },
    fontSize: {
      '2md': ['22px', {
        lineHeight:'40px',
      }],
      
      fontFamily: {
        
        'sans': ['"Roboto"'],
       },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}