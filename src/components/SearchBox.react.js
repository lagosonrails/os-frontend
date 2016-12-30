import React from 'react'

import '../styles/searchBox.styl'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.searchBox = new google.maps.places.SearchBox(this.refs.place)
  }
  submit() {
    let location = this.refs.place.value
    let bank = this.refs.bank.value
    if (location || bank)
      this.props.searchByLocationOrBank({location, bank})
  }

  render() {
    return (
      <div className='search-box'>
        <i className='fa fa-search fa-2x'></i>
        <div className='input-container'>
          <input ref='place' placeholder='Address/Location' type='text' />
          <input ref='bank' placeholder='Bank' type='text' />
        </div>
        <button type='submit' className='btn btn-primary' onClick={this.submit}>
          Go <i className='fa fa-arrow-right'></i>
        </button>
      </div>
    )
  }
}

SearchBox.propTypes = {
  searchByLocationOrBank: React.PropTypes.func
}
