import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import DataPoint from './DataPoint';
import dataPointType from './dataPointType';
import getDataPoint from './getDataPoint';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'DataPoint') {
      return getDataPoint(id);
    }
    return null;
  },
  obj => {
    if (obj instanceof DataPoint) {
      return dataPointType;
    }
    return null;
  }
);
