import DataPoint from './DataPoint';

const source = {
  0: new DataPoint('Apple'),
  1: new DataPoint('Banana'),
  2: new DataPoint('Carrot'),
};

export default (id) => source[id];
