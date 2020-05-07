import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import App from './app/App';

import { combineReducers } from 'redux'
import { auth } from './app/common/reducers/auth'
import { store as homeStore, tagFilter } from './app/home/duck/reducers'
import { product } from './app/product/duck/reducers'
import { connectRouter } from 'connected-react-router'


const loggerMiddleware = createLogger()
const history = createBrowserHistory()

const rootReducer = combineReducers(
  {auth, product, tagFilter, store: homeStore, router: connectRouter(history)}
)

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, loggerMiddleware, routerMiddleware(history)
  )
)

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)


serviceWorker.register()