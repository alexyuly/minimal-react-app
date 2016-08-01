import express from 'express';
import io from 'socket.io';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import bindServerEvents from './util/bindServerEvents';

const app = express();
if (process.env.npm_lifecycle_event === 'debug') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { publicPath: '/' }));
  app.use(webpackHotMiddleware(compiler));
}
else {
  app.use(express.static(path.join(__dirname, '../client_dist')));
}
bindServerEvents(io(app.listen(3000)));
