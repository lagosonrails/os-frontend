import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import configureStore from './store/configureStore'
import { fetchGithubEvents } from './actions/githubEventActions'
import routes from './routes'

import 'babel-polyfill'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()
store.dispatch(fetchGithubEvents)

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
