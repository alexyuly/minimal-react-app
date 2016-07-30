import bindClientEvents from './bindClientEvents';
import store, { addClient, mergeInModel } from './store';

function handleConnection(client) {
  store.dispatch(addClient(bindClientEvents(client)));
  client.emit('dispatch', mergeInModel([], store.getState().get('model').toJS()));
}

export default function bindServerEvents(server) {
  server.on('connection', handleConnection);
}
