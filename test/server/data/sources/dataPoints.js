import test from 'tape';
import { DataCollection } from '../../../../server/data/classes/DataCollection';
import { DataPoint } from '../../../../server/data/classes/DataPoint';
import {
  getDataCollection,
  getDataPoint,
} from '../../../../server/data/sources/dataPoints';

test('getDataCollection', t => {
  t.plan(1);
  t.equal(getDataCollection() instanceof DataCollection, true);
});

test('getDataPoint', t => {
  t.plan(2);
  t.equal(getDataPoint(), undefined);
  t.equal(getDataPoint(0) instanceof DataPoint, true);
});
