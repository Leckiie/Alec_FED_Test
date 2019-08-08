const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const WebpackBar = require('webpackbar');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Hot module replacement
const hmr = new webpack.HotModuleReplacementPlugin();

// Clean webpack
const clean = new CleanWebpackPlugin({
  root: __dirname,
});

// Stylelint
const stylelint = new StyleLintPlugin();

// Extract CSS
const cssExtract = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css',
});

// HTML generation
const html = new HTMLWebpackPlugin({
  template: 'index.html',
  meta: {
    // viewport: config.viewport,
  },
});

// Webpack bar
const webpackBar = new WebpackBar({
  color: '#ff6469',
});

module.exports = [
  clean,
  stylelint,
  cssExtract,
  html,
  // fs.existsSync(config.favicon) && favicons,
  // process.env.NODE_ENV === 'production' && optimizeCss,
  // process.env.NODE_ENV === 'production' && robots,
  webpackBar,
  process.env.NODE_ENV === 'development' && hmr,
].filter(Boolean);
