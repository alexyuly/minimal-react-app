const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const CleanPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoErrorsPlugin = webpack.NoErrorsPlugin;
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const paths = {
  dist: path.join(__dirname, 'client_dist'),
  html_template: path.join(__dirname, 'client', 'html', 'index.html'),
  imports: [
    'babel-polyfill',
    'material-ui',
    'react',
    'react-dom',
    'react-relay',
    'react-tap-event-plugin',
  ],
  src: path.join(__dirname, 'client', 'index.js'),
  webpack: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ],
};

const common = {
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
      template: paths.html_template,
    }),
  ],
};

const specific = {
  'build': {
    entry: {
      app: paths.src,
      vendor: paths.imports,
    },
    output: {
      path: paths.dist,
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
      new CleanPlugin(paths.dist),
      new CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
      new DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
    ],
  },
  'start-debug': {
    entry: paths.webpack.concat(paths.src),
    output: {
      path: '/',
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
      new OccurrenceOrderPlugin(),
      new HotModuleReplacementPlugin(),
      new NoErrorsPlugin(),
    ],
  },
};

module.exports = merge(common, specific[process.env.npm_lifecycle_event]);
