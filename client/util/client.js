import io from 'socket.io-client';
import store from './store';

class Client {
  constructor(path) {
    this.path = path;
  }
  connect() {
    this.socket = io(this.path);
    this.socket.on('dispatch', (action) => store.dispatch(action));
  }
  dispatch(action) {
    this.socket.emit('dispatch', action);
  }
}

const client = new Client(location.origin);
export default client;
