import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';

ReactDOM.render(
  <View brandWidth={300} navbarHeight={50} />,
  document.getElementById('render-target')
);
