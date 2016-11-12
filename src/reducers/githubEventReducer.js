import Types from '../actions/actionTypes'
import initialState from './initialState'

export default function githubEventReducer(state = initialState.githubEvent, action) {
  switch (action.type) {
    case Types.GOT_GITHUB_EVENTS:
      return action.events
    default:
      return state
  }
}
