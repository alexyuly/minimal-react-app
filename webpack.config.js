const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.js',
    './src/index.css',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minimal React App',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
