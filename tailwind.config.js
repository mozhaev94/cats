module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'paws': "url('/background.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
