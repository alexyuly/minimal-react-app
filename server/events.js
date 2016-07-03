import EventEmitter from 'events';
import createServer from './createServer';

const AppEventEmitter = class extends EventEmitter {
  remit({ error, timeout = 1000 }, ...event) {
    console.error(error);
    setTimeout(() => this.emit(...event), timeout);
  }
};

const events = new AppEventEmitter();

events.on('serverWillStart', () => {
  createServer(3000).then(server => events.emit('serverDidStart', server));
});

export default events;
