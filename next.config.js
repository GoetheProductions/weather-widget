const withSASS = require('@zeit/next-sass');

module.exports = withSASS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
