import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'
import {Provider} from 'react-redux';

// console.log("I see you're a curious one.. Me too! Hire me ;-)");

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))


ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>,
  document.getElementById('root')
);
