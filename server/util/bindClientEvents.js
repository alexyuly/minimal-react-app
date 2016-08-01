import dataSource from './dataSource';
import store, { removeClient } from './store';

function handleDisconnect(client) {
  return function () {
    store.dispatch(removeClient(client));
  };
}

function handleDispatch(socket) {
  return function (action) {
    dataSource.dispatch(action);
    store.getState()
      .get('clients')
      .filter(client => client.get('socket') !== socket)
      .forEach(client => client.get('socket').emit('dispatch', action));
  };
}

function handleError(error) {
  console.error(error.stack);
}

export default function bindClientEvents(client) {
  client.on('disconnect', handleDisconnect(client));
  client.on('dispatch', handleDispatch(client));
  client.on('error', handleError);
  return client;
}
