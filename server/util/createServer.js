import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from '../data/schema';
import useDebugServer from '../util/useDebugServer';
import useProductionServer from '../util/useProductionServer';

export default (port) => new Promise(resolve => {
  const server = express();
  (process.env.npm_lifecycle_event === 'start-debug'
    ? useDebugServer(server)
    : useProductionServer(server))
    .use('/graphql', graphQLHTTP({ graphiql: true, pretty: true, schema }))
    .listen(port, () => resolve());
});
