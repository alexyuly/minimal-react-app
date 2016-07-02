import EventEmitter from 'events';
import createServer from './createServer';

const events = new EventEmitter();

events.on('serverWillStart', () => {
  createServer().listen(3000);
});

export default events;
