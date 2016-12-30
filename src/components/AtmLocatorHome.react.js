import React from 'react'
import GoogleMap from 'google-map-react'
import MyGreatPlace from './my_great_place'
import SearchBox from './SearchBox.react'

import '../styles/atmLocator.styl'

export default class AtmLocatorHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      coordinates: {},
    }
    this.showPosition = this.showPosition.bind(this)
  }
  componentWillMount() {
    this.getLocation()
  }
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  showPosition(position) {
    this.setState({coordinates: {lat: position.coords.latitude, lng: position.coords.longitude}})
  }
  searchByLocationOrBank(query){
    console.log(query)
  }

  render() {
    if (!this.state.coordinates.lat)
      return null
    return (
      <div className='atm-locator'>
        <div>
          <SearchBox searchByLocationOrBank={this.searchByLocationOrBank} />
          <h2 className='intro'>Here are the ATMs around you</h2>
        </div>
        <GoogleMap
          defaultCenter={this.state.coordinates}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyCeVyVf5rS9hVsbhdJn3wwBYohwx8WHw_g',
          }}>
          <MyGreatPlace {...this.state.coordinates} marker={true} />
          <MyGreatPlace lat={6.5253793} lng={3.3799057} />
          <MyGreatPlace lat={6.5244793} lng={3.3796057} />
          <MyGreatPlace lat={6.5247793} lng={3.3797057} />
          <MyGreatPlace lat={6.5255793} lng={3.3798057} />
          <MyGreatPlace lat={6.5245793} lng={3.3858057} />
          <MyGreatPlace lat={6.5245793} lng={3.3792057} />
          <MyGreatPlace lat={6.5255793} lng={3.3822057} />
          <MyGreatPlace lat={6.5545793} lng={3.3892057} />
        </GoogleMap>
      </div>
    )
  }
}

AtmLocatorHome.defaultProps = {
  center: {lat: 59.938043, lng: 30.337157},
  zoom: 18,
}
