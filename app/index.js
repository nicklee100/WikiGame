import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

import { connect, Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import {Route} from 'react-router-dom'
import thunk from 'redux-thunk';

import {updateArticle} from './state/reducers/index.js'

const rootReducer = combineReducers({updateArticle})
const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

