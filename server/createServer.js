import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './data/schema';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (port) => new Promise(resolve => {
  const server = express();
  if (process.env.npm_lifecycle_event === 'start-debug') {
    const compiler = webpack(webpackConfig);
    server
      .use(webpackDevMiddleware(compiler, { publicPath: '/' }))
      .use(webpackHotMiddleware(compiler));
  } else {
    server.use('/', express.static('../client_dist'));
  }
  server
    .use('/graphql', graphQLHTTP({ graphiql: true, pretty: true, schema }))
    .listen(port, () => resolve(server));
});
