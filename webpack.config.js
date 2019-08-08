const path = require('path');

// const config = require('./site.config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    path.join(__dirname, 'src', 'javascripts/scripts.js'),
    path.join(__dirname, 'src', 'stylesheets/styles.less'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  mode: ['production', 'development'].includes(process.env.NODE_ENV)
    ? process.env.NODE_ENV
    : 'development',
  devtool: process.env.NODE_ENV === 'production'
    ? 'hidden-source-map'
    : 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 8000,
  },
  module: {
    rules: loaders,
  },
  plugins,
};
