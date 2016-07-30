import store, { removeClient } from './store';

function handleDisconnect(client) {
  return function () {
    store.dispatch(removeClient(client));
  };
}

export default function bindClientEvents(client) {
  client.on('disconnect', handleDisconnect(client));
  return client;
}
