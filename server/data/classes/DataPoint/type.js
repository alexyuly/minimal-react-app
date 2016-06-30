import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../../nodeDefinitions';

export default new GraphQLObjectType({
  name: 'DataPoint',
  fields: () => ({
    id: globalIdField('DataPoint'),
    data: {
      type: GraphQLString,
    },
  }),
  interfaces: () => [nodeInterface],
});
