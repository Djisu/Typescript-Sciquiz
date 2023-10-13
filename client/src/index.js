import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import store from './store.js';

//ReactDOM.render(
//  <Provider store={store}>
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
//  </Provider>,
//  document.getElementById('root')
//);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </Provider>
);
