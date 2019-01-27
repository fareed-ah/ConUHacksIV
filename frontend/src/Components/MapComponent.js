import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    destination :""
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14} center={{
            lat: 45.421982,
            lng: -75.697273}}>

      <Marker
       title={ "Queen / Metcalfe"}
       name={ "Queen / Metcalfe"}
       position={{lat : 45.421982,lng : -75.697273}} />

      <Marker
        title={ "Metcalfe / Queen"}
        name={ "Metcalfe / Queen"}
        position={{lat : 45.42212199999999,lng : -75.696551}} />

      <Marker
        title={ "Albert / Metcalfe"}
        name={ "Albert / Metcalfe"}
        position={{lat : 45.42183929999999,lng : -75.69615639999999}} />

      <Marker
        title={ "Queen / Metcalfe"}
        name={ "Queen / Metcalfe"}
        position={{lat : 45.42232599999999,lng : -75.696727}} />

      <Marker
        title={ "Queen / Metcalfe"}
        name={ "Queen / Metcalfe"}
        position={{lat : 45.42232599999999,lng : -75.696727}} />

      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD1F_n5E1N1b_xtjczOoGgDWe88Id6csr0"
})(MapContainer)
