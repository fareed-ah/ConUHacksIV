import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    
  };
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />


      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD1F_n5E1N1b_xtjczOoGgDWe88Id6csr0"
})(MapContainer)
