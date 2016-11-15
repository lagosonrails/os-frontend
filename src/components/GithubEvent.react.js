import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubEventActions from '../actions/githubEventActions'
import GithubEventTable from './GithubEventTable.react'

import '../styles/githubEvent.styl'

class GithubEvent extends React.Component {
  constructor(props, context) {
    super(props)
    this.state = {
      processing: false,
      error: ''
    }
    this.fetchEvents = this.fetchEvents.bind(this)
  }
  fetchEvents(value) {
    if (value === '')
      return this.setState({error: 'Please enter a github username'})
    this.setState({processing: true})
    this.props.actions.fetchGithubEvents(value).then(() => {
      this.setState({processing: false})
    })
  }

  render() {
    return(
      <GithubEventTable
        events={this.props.events}
        processing={this.state.processing}
        fetchEvents={this.fetchEvents}
        error={this.state.error}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.githubEvents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(githubEventActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubEvent)
