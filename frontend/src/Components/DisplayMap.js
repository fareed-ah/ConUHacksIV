
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from "axios";
// import NavbarForm from "./NavbarForm"
import Map from './MapComponent';
class DisplayMap extends Component {

  state = {
    results:[],
    lng:0,
    lat:0,
    destination: "",
    numBusses: ''
  };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
      this.setState({destination: this.props.destination})
      this.getLocationFromDb();
    
    }
    getNearbyStopsFromDb = () => {
      fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + this.state.lat+","+this.state.lng+"&rankby=distance&type=transit_station&key=AIzaSyD1F_n5E1N1b_xtjczOoGgDWe88Id6csr0")
        .then(results => results.json())
        .then(res => this.setState({ results: res.results}));
      const data = this.state.results;
      console.log(data);

    };
  // our first get method that uses our backend api to
  // fetch data from our data base
  getLocationFromDb = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Carleton&key=AIzaSyD1F_n5E1N1b_xtjczOoGgDWe88Id6csr0")
      .then(results => results.json())
      .then(res => this.setState({ results: res.results,lng: res.results[0].geometry.location.lng,lat:res.results[0].geometry.location.lat}));


  };

  render() {
  	const data = this.state.results;
  	return (
  		<div>
      <ul>
        {data.length <= 0
          ? "NO DB ENTRIES YET"
          : data.map(d => (
              <li style={{ padding: "10px" }} key={d.formatted_address}>
                <span style={{ color: "gray" }}> lat: </span> {this.state.lat} <br />
                <span style={{ color: "gray" }}> long: </span>{this.state.lng}
                <span style={{ color: "gray" }}> dest: {this.state.destination}</span>

              </li>
            ))}
      </ul>
        <Map/>
  		</div>
  	);

  }
}

export default DisplayMap;
