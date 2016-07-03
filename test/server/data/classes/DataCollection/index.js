import test from 'tape';
import {
  DataCollection,
} from '../../../../../server/data/classes/DataCollection';

test('DataCollection', t => {
  t.plan(3);
  const dataPoints = [];
  const instance = new DataCollection(dataPoints);
  t.equal(instance instanceof DataCollection, true);
  t.notEqual(instance.dataPoints, dataPoints);
  t.deepEqual(instance.dataPoints, dataPoints);
});
