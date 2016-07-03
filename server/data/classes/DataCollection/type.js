import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
} from 'graphql-relay';

import { GraphQLObjectType } from 'graphql';
import { nodeInterface } from '../../nodeDefinitions';
import dataPointType from '../DataPoint/type';

const { connectionType } = connectionDefinitions({
  name: 'DataPoint',
  nodeType: dataPointType,
});

export default new GraphQLObjectType({
  name: 'DataCollection',
  fields: () => ({
    id: globalIdField('DataCollection'),
    dataPoints: {
      type: connectionType,
      args: connectionArgs,
      resolve: (parent, args) => connectionFromArray(parent.dataPoints, args),
    },
  }),
  interfaces: () => [nodeInterface],
});
