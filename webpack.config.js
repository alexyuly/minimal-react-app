const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      title: 'Minimal React App',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
  devtool: 'source-map',
  devServer: {
    port: 8080,
  },
};
