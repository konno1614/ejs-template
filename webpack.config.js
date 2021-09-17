const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/js/'),
  },
  mode: 'production',
  watch: true,
};
