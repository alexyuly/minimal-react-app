import io from 'socket.io-client';
import store from './store';

class Server {
  constructor(path) {
    this.path = path;
  }
  connect() {
    this.socket = io(this.path);
    this.socket.on('dispatch', (action) => {
      console.log(action);
      store.dispatch(action);
    });
  }
  dispatch(action) {
    this.socket.emit('dispatch', action);
  }
}

const server = new Server(location.origin);
export default server;
