import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// Reducers
const customerName = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_NAME') {
        return action.payload;
    }
    return state;
}

const customerAddress = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_ADDRESS') {
        return action.payload;
    }
    return state;
}

const customerCity = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_CITY') {
        return action.payload;
    }
    return state;
}

const customerZip = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_ZIP') {
        return action.payload;
    }
    return state;
}

const type = (state = '', action) => {
  if (action.type === 'SET_TYPE') {
      return action.payload;
  }
  return state;
}



/** Create store */
const storeInstance = createStore(
    combineReducers(
        {
          customerName, customerAddress, customerCity, customerZip, type
        }
    ),
    // Setup logger
    applyMiddleware(logger)
);







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);
