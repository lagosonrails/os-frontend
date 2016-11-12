import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App.react'
import About from './components/About.react'
import GithubEvent from './components/GithubEvent.react'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={GithubEvent} />
    <Route path='about' component={About} />
  </Route>
)
