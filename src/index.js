// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
