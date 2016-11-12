import React, { PropTypes } from 'react'
import Header from './shared_components/Header.react'

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
