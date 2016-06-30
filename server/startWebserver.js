import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './data/schema';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (port) => {
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
  server.use('/graphql', graphQLHTTP({ graphiql: true, pretty: true, schema }));
  server.listen(port, error => {
    if (error) {
      console.log(error);
      process.exit(1);
    } else {
      console.log(`Started webserver on port ${port}.`);
    }
  });
};
