import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
} from 'graphql-relay';

import { GraphQLObjectType } from 'graphql';
import { nodeInterface } from '../../nodeDefinitions';
import dataPointType from '../DataPoint/type';
import dataSource from '../../dataSource';

const { connectionType: dataPointConnection } = connectionDefinitions({
  name: 'DataPoint',
  nodeType: dataPointType,
});

export default new GraphQLObjectType({
  name: 'DataCollection',
  fields: () => ({
    id: globalIdField('DataCollection'),
    dataPoints: {
      type: dataPointConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(dataSource.dataPoints, args),
    },
  }),
  interfaces: () => [nodeInterface],
});
