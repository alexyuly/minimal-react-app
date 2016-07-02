import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './App';
import AppRoute from './AppRoute';

ReactDOM.render(
  <Relay.RootContainer Component={App} route={new AppRoute()} />,
  document.getElementById('render-target')
);
