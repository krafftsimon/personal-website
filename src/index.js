import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('js-app-container'));

if (!!module.hot) module.hot.accept();
