import fs from 'fs';
import path from 'path';
import schema from '../server/data/schema';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

graphql(schema, introspectionQuery)
  .then(result => {
    fs.writeFileSync(
      path.join(__dirname, '../server/data/schema.json'),
      JSON.stringify(result, null, 2)
    );
    console.log('Compiled GraphQL schema for Relay.')
  })
  .catch(error => {
    console.error(error);
  });
