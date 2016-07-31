import bindClientEvents from './bindClientEvents';
import dataSource from './dataSource';
import store, { addClient, mergeInModel } from './store';

function handleConnection(client) {
  store.dispatch(addClient(bindClientEvents(client)));
  client.emit('dispatch', mergeInModel(dataSource));
}

export default function bindServerEvents(server) {
  server.on('connection', handleConnection);
}
