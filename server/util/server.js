import express from 'express';
import io from 'socket.io';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import bindClientEvents from './bindClientEvents';
import dataSource, { setData } from './dataSource';
import store, { addClient } from './store';

class Server {
  static dispatchInitialData(client) {
    const data = dataSource.getState().get('data').toJS();
    client.emit('dispatch', setData(data));
  }
  static handleConnection(client) {
    store.dispatch(addClient(bindClientEvents(client)));
    Server.dispatchInitialData(client);
  }
  constructor(app) {
    this.app = app;
  }
  start() {
    const server = io(this.app);
    server.on('connection', Server.handleConnection);
  }
}

const app = express();
if (process.env.npm_lifecycle_event === 'debug') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { publicPath: '/' }));
  app.use(webpackHotMiddleware(compiler));
}
else {
  app.use(express.static(path.join(__dirname, '../../client_dist')));
}

const server = new Server(app.listen(3000));
export default server;
