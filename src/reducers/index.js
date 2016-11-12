import { combineReducers } from 'redux'
import githubEvents from './githubEventReducer'

const rootReducer = combineReducers({
  githubEvents
})

export default rootReducer
