import test from 'tape';
import {
  DataPoint,
} from '../../../../../server/data/classes/DataPoint';

test('DataPoint', t => {
  t.plan(3);
  const id = 0;
  const data = 'Apple';
  const instance = new DataPoint(id, data);
  t.equal(instance instanceof DataPoint, true);
  t.equal(instance.id, id);
  t.equal(instance.data, data);
});
