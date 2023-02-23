import sassConfig from './sass.config.js';

module.exports = {
  plugins: [
    require('postcss-scss'),
    require('autoprefixer'),
    (sassConfig),
  ],
};