import { DataCollection } from '../classes/DataCollection';
import { DataPoint } from '../classes/DataPoint';

const source = new DataCollection([
  new DataPoint(0, 'Apple'),
  new DataPoint(1, 'Banana'),
  new DataPoint(2, 'Carrot'),
]);

export const getDataCollection =
  () => source;

export const getDataPoint =
  (id) => source.dataPoints.filter(x => x.id === id)[0];
