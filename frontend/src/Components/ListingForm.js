import React from "react";

import AppNavbarListing from './AppNavbarListing';
//import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const StyleCenter = {
  "justify-content": "center",
  "align-items": "center",
   "text-align": "center",
   "color":"#ebe465"
    }

// const divStyle = {
//    "width": "45%",
//    "margin": "30px auto"
// }

export default class ListingForm extends React.Component {
  state = {
    Address: "",
    Price: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);

  };

  render() {
    document.body.style.backgroundColor = "#1a1a1a";
    return (
      <div class="Container">
      <AppNavbarListing/>
      <h1 style={StyleCenter}>Create a New Listing</h1>
      <div class="row" style={StyleCenter}>
      <form style={StyleCenter}>
      <div class ="form-group" style={StyleCenter}>
        <input
          style={StyleCenter}
          name="Address"
          placeholder="1234 Mary Jane Ave."
          value={this.state.Address}
          onChange={e => this.change(e)}
        />
      </div>
        <br />
      <div class ="form-group" style={StyleCenter}>
        <input
          style={StyleCenter}
          name="Price"
          placeholder="600"
          value={this.state.Price}
          onChange={e => this.change(e)}
        />
      </div>
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
      </div>
    );
  }
}
