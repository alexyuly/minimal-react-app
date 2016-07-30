import store from './store';

function handleDispatch(action) {
  store.dispatch(action);
}

export default function bindServerEvents(server) {
  server.on('dispatch', handleDispatch);
}
