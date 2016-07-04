import EventEmitter from 'events';

export default class AppEventEmitter extends EventEmitter {
  remit({ error, timeout = 1000 }, ...event) {
    console.error(error);
    setTimeout(() => this.emit(...event), timeout);
  }
}
