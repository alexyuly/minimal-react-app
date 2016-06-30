import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import DataCollection from './classes/DataCollection';
import dataCollectionType from './classes/DataCollection/type';
import DataPoint from './classes/DataPoint';
import dataPointType from './classes/DataPoint/type';
import dataSource from './dataSource';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'DataCollection') {
      return dataSource;
    } else if (type === 'DataPoint') {
      return dataSource.dataPoints[id];
    }
    return null;
  },
  obj => {
    if (obj instanceof DataCollection) {
      return dataCollectionType;
    } else if (obj instanceof DataPoint) {
      return dataPointType;
    }
    return null;
  }
);
