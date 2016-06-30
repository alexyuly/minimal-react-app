import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './data/schema';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const PORT = 3000;
const server = express();

// Serve the client
if (process.env.npm_lifecycle_event === 'start-debug') {
  const compiler = webpack(webpackConfig);
  server
    .use(webpackDevMiddleware(compiler, { publicPath: '/' }))
    .use(webpackHotMiddleware(compiler));
} else {
  server.use('/', express.static('../client_dist'));
}

// Serve GraphQL queries
server.use('/graphql', graphQLHTTP({ graphiql: true, pretty: true, schema }));

// Start serving
server.listen(PORT, error => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Started server on port ${PORT}.`);
  }
});
