module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {
      path: `./pages`,
    },
    'postcss-cssnext': {},
  },
})