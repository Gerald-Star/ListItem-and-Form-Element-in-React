import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer/reducer1';
import { createStore } from 'redux'; // sets the react createStore but deprecated

let store = createStore(rootReducer) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

