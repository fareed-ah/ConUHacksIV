import React, { Component } from "react";
import AppNavbar from './Components/AppNavbar'; 
import ListingForm from "./Components/ListingForm"
// import logo from './logo.svg';
// import './App.css';


//import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


class App extends Component {

  state = {
    data: [],
    id: 0,
    address: "Carleton",
    price: "100.00",
    intervalIsSet: false,
  };


  // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
      this.getDataFromDb();
      if (!this.state.intervalIsSet) {
        let interval = setInterval(this.getDataFromDb, 100000);
        this.setState({ intervalIsSet: interval });
      }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
      if (this.state.intervalIsSet) {
        clearInterval(this.state.intervalIsSet);
        this.setState({ intervalIsSet: null });
      }
    }

    // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("http://localhost:3001/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = () => {
    // let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;

    axios.post("http://localhost:3001/getData", {
      id: idToBeAdded,
      address: "carleton university", 
      price: "133000"
    });
  };

  state = {
  	fields: {}
  };

  onSubmit = fields => {
  	this.setState({fields}); 
  };

  render() {
  	const data = this.state.data; 
  	return (
  		<div> 
  			<AppNavbar />
  			<ListingForm onSubmit={fields => this.onSubmit(fields)} />
  			<p> {JSON.stringify(this.state.fields, null,2)}</p>
			{JSON.stringify(data)}; 
  		</div>
  	);

  }
}

export default App;

