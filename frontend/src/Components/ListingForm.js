import React from "react";

import AppNavbarListing from './AppNavbarListing';
import {Container} from 'reactstrap';
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
    return (
      <div>
      <AppNavbarListing/>
      <Container>
      <form>
        <input
          name="Address"
          placeholder="1234 Mary Jane Ave."
          value={this.state.Address}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Price"
          placeholder="600"
          value={this.state.Price}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </Container>
      </div>
    );
  }
}
