import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubEventActions from '../actions/githubEventActions'

import '../styles/home.styl'

class GithubEvent extends React.Component {
  constructor(props, context) {
    super(props)

    this.fetchEvents = this.fetchEvents.bind(this)
  }
  fetchEvents(event) {
    event.preventDefault()
    this.props.actions.fetchGithubEvents(this.refs.input.value)
  }

  render() {
    console.log(this.props.events);
    return(
      <div className='home'>
        <i>A sample app to show us how we want to do things</i>
        <h1>Fetch Github User Events</h1>
        <p>Just type in a username and all recent events will be shown to you</p>
        <form className='form-inline'>
          <div className='form-group'>
            <div className='field'>
              <input className='form-control' ref='input' type='text' placeholder='Enter username'/>
            </div>
          </div>
          <button onClick={this.fetchEvents} className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(githubEventActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubEvent)
