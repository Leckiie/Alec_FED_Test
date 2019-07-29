const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Define common loader constants
const sourceMap = process.env.NODE_ENV !== 'production';

// HTML loaders
const html = {
  test: /\.(html)$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  ],
};

// Javascript loaders
const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    'eslint-loader',
  ],
};

// Style loaders
const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap,
  },
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
    ],
    sourceMap,
  },
};

const css = {
  test: /\.css$/,
  use: [
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
  ],
};

const less = {
  test: /\.less$/,
  use: [
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: 'less-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

// Image loaders
const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    bypassOnDebug: true,
    gifsicle: {
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    mozjpeg: {
      progressive: true,
    },
  },
};

const images = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  exclude: /fonts/,
  use: [
    // 'file-loader?name=images/[name].[hash].[ext]',
    {
      loader: 'file-loader',
      options: {
        // outputPath: 'images',
        name: 'images/[name].[hash].[ext]'
      },
    },
    process.env.NODE_ENV === 'production' ? imageLoader : null,
  ].filter(Boolean),
};

module.exports = [
  html,
  js,
  css,
  less,
  images,
];
