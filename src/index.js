import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import FavTeamListReducer from './Reducers/FavTeamListReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const initialState = {}
const store = createStore(FavTeamListReducer, initialState, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
