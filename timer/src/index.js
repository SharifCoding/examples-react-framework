import React from 'react';
import ReactDOM from 'react-dom';
import TimerExample from './App';

ReactDOM.render(
  <TimerExample start={Date.now()} />,
  document.getElementById('root')
);
