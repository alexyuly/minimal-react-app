import './css/app.css';

import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import bindServerEvents from './util/bindServerEvents';
import store from './util/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('render-target')
);

bindServerEvents(io(location.origin));
