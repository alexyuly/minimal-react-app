import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (port) => new Promise((resolve, reject) => {
  const server = express();
  const target = process.env.npm_lifecycle_event;
  if (target === 'start-debug') {
    const compiler = webpack(webpackConfig);
    server
      .use(webpackDevMiddleware(compiler, { publicPath: '/' }))
      .use(webpackHotMiddleware(compiler));
  } else {
    server.use('/', express.static('../client_dist'));
  }
  server.listen(port, error => (error ? reject(error) : resolve(port)));
});
