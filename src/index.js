import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.js';
import 'index.css';

ReactDOM.render(
  <App api="https://rxtechnicaltest.herokuapp.com" />,
  document.getElementById('root')
);
