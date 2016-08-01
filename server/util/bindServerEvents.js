import bindClientEvents from './bindClientEvents';
import dataSource, { setData } from './dataSource';
import store, { addClient } from './store';

function dispatchInitialData(client) {
  const data = dataSource.getState().get('data').toJS();
  client.emit('dispatch', setData(data));
}

function handleConnection(client) {
  store.dispatch(addClient(bindClientEvents(client)));
  dispatchInitialData(client);
}

export default function bindServerEvents(server) {
  server.on('connection', handleConnection);
}
