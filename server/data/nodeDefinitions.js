import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { getDataCollection, getDataPoint } from './sources/dataPoints';
import { DataCollection } from './classes/DataCollection';
import { DataPoint } from './classes/DataPoint';
import dataCollectionType from './classes/DataCollection/type';
import dataPointType from './classes/DataPoint/type';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'DataCollection') {
      return getDataCollection();
    } else if (type === 'DataPoint') {
      return getDataPoint(id);
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
