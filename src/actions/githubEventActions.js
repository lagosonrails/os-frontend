import Types from './actionTypes'
import Fetcher from '../lib/Fetcher'

export function fetchGithubEventsSuccess(events) {
  return { type: Types.GOT_GITHUB_EVENTS, events }
}

export function fetchGithubEvents(username) {
  return function(dispatch) {
    return (Fetcher(`https://api.github.com/users/${username}/events`)
      .always(events => {
        dispatch(fetchGithubEventsSuccess(events))
      })
    )
  }
}
