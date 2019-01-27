import React from "react";

export default class ListingForm extends React.Component {
  state = {
    Address: "",
    Price: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // this.props.onChange({ [e.target.name]: e.target.value });
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      Address: "",
      Price: "",
    });
  };

  render() {
    return (
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
    );
  }
}