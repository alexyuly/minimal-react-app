import DataCollection from './classes/DataCollection';
import DataPoint from './classes/DataPoint';

export default new DataCollection()
  .add(new DataPoint(0, 'Apple'))
  .add(new DataPoint(1, 'Banana'))
  .add(new DataPoint(2, 'Carrot'));
