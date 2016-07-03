import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './nodeDefinitions';
import { getDataCollection } from './sources/dataPoints';
import dataCollectionType from './classes/DataCollection/type';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      dataCollection: {
        type: dataCollectionType,
        resolve: () => getDataCollection(),
      },
    }),
  }),
});
