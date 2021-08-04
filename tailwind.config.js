module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mint-green': '#8fb996',
        'dark-green': '#548c2f',
        'dark-blue': '#001d3d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
