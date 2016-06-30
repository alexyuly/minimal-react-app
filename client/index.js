import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './App';

const AppRoute = class extends Relay.Route {};
AppRoute.routeName = 'AppRoute';
AppRoute.queries = {
  dataCollection: () => Relay.QL`
    query {
      dataCollection
    }
  `,
};

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppRoute()}
  />,
  document.getElementById('render-target')
);
