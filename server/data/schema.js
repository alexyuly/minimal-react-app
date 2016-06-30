import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './nodeDefinitions';
import dataPointType from './dataPointType';
import getDataPoint from './getDataPoint';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      dataPoint: {
        type: dataPointType,
        resolve: () => getDataPoint(),
      },
    }),
  }),
});
