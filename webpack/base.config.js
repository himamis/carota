const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/carota.js',
  output: {
    filename: 'carota.min.js',
    path: __dirname + '/../dist',
  },
};
