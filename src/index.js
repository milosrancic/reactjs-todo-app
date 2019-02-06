import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const destination = document.getElementById('root');

ReactDOM.render(
  <div>
      <h1>React To-Do App</h1>
      <h4>improve your productivity</h4>
    <App />
  </div>,
  destination
)