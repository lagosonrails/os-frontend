import React from 'react'
import loader from '../assets/default.gif'

export default class GithubEventTable extends React.Component {
  constructor(props) {
    super(props)
    this.fetchEvents = this.fetchEvents.bind(this)
    this.loading = this.loading.bind(this)
    this.eventBody = this.eventBody.bind(this)
  }
  fetchEvents(event) {
    event.preventDefault()
    this.props.fetchEvents(this.refs.input.value)
  }
  loading() {
    if (this.props.processing)
      return (<img className='loader' src={loader} />)
  }
  eventBody() {
    if (this.props.events.message)
      return (
        <h3 className='error-message'>
          {this.props.events.message}
        </h3>
      )
    if (this.props.events.length > 0) {
      const row = this.props.events.map(event => {
        return (
          <div className='row-wrapper-sb table-body' key={event.id}>
            <div className='first-column column-padding'>{event.id}</div>
            <div className='second-column column-padding'>{event.type}</div>
            <div className='third-column column-padding'>{event.repo.name}</div>
            <div className='fourth-column column-padding'>{new Date(event.created_at).toDateString()}</div>
          </div>
        )
      })
      return (
        <div className='column-wrapper'>
          <div className='row-wrapper-sb header'>
            <div className='first-column'>Event Id</div>
            <div className='second-column'>Event Type</div>
            <div className='third-column'>Repository Name</div>
            <div className='fourth-column'>Date</div>
          </div>
          {row}
        </div>
      )
    }
  }


  render() {
    return (
      <div className='home'>
        <i>A sample app to show us how we want to do things</i>
        <h1>Fetch Github User Events</h1>
        <p>Just type in a username and all recent events will be shown to you</p>
        <form className='form-inline'>
          <div className={`form-group ${this.props.error ? 'has-error' : ''}`}>
            <div className='field'>
              <input className='form-control' ref='input' type='text' placeholder='Enter username' required/>
              <p className='error pull-left'>{this.props.error}</p>
            </div>
          </div>
          <button onClick={this.fetchEvents} className='btn btn-primary'>Fetch Events</button>
          {this.loading()}
        </form>
        {this.eventBody()}
      </div>
    )
  }
}
