const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const clientDistPath = path.join(__dirname, 'client_dist');

const commonConfig = {
  entry: {
    app: path.join(__dirname, 'client', 'app.js'),
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: clientDistPath,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: { collapseWhitespace: true, html5: true },
      template: path.join(__dirname, 'client', 'pages', 'index.html'),
    }),
  ]
};

const specificConfig = {
  'build': {
    output: {
      filename: '[name].[chunkhash].js',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
        },
      ],
    },
    plugins: [
      new CleanPlugin(clientDistPath),
      new CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
      new DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
    ],
  },
  'start-debug': {
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
      ],
    },
    plugins: [
      new DefinePlugin({ 'process.env.NODE_ENV': '"debug"' }),
      new HotModuleReplacementPlugin(),
    ],
  }
};

const environment = process.env.npm_lifecycle_event;
module.exports = merge(commonConfig, specificConfig[environment]);
