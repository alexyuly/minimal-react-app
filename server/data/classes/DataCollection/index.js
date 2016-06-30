export default class DataCollection {
  constructor() {
    this.dataPoints = [];
  }
  add(dataPoint) {
    this.dataPoints.push(dataPoint);
    return this;
  }
}
