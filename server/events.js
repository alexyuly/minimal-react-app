import AppEventEmitter from './util/AppEventEmitter';
import createServer from './util/createServer';

const events = new AppEventEmitter();

events.on('serverWillStart', () => {
  createServer(process.env.PORT || 3000).then(server => events.emit('serverDidStart', server));
});

export default events;
