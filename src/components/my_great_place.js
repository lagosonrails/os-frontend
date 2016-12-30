import React, {PropTypes, Component} from 'react';
import {greatPlaceStyle, presentLocation} from './my_great_place_styles.js'

export default class MyGreatPlaceWithHover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.marker ? presentLocation : greatPlaceStyle;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}
