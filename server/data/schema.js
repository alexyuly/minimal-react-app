import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './nodeDefinitions';
import dataCollectionType from './classes/DataCollection/type';
import dataSource from './dataSource';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      dataCollection: {
        type: dataCollectionType,
        resolve: () => dataSource,
      },
    }),
  }),
});
