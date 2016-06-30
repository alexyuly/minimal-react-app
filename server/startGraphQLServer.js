import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './data/schema';

export default (port) => {
  express()
    .use('/', graphQLHTTP({ graphiql: true, pretty: true, schema }))
    .listen(port, error => {
      if (error) {
        console.log(error);
        process.exit(1);
      } else {
        console.log(`Started GraphQL server on port ${port}`);
      }
    });
};
