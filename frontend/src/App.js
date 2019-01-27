import React, { Component } from "react";
import AppNavbar from './Components/AppNavbar';
import NavbarForm from './Components/NavbarForm'
import Map from "./Components/Map.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


class App extends Component {

  state = {
    data: [],
    id: 0,
    destination: "Carleton",
    numBusses: "2",
    intervalIsSet: false,
  };

constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler(dest, num) {
    this.setState({
      Destination: dest,
      NumBusses: num
    });
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
    let idToBeAdded = 0;

    axios.post("http://localhost:3001/postData", {
      id: idToBeAdded,
      address: "carleton university",
      price: "133000"
    });
  };

  render() {
  	document.body.style.backgroundColor = "#1a1a1a";
  	const data = this.state.data;
  	return (
  		<div>
  			<AppNavbar />
  			<NavbarForm handler = {this.handler}/>
<<<<<<< Updated upstream
        	<Map />
=======
        <Map destination = {this.state.destination}/>
>>>>>>> Stashed changes
  		</div>
  	);
  }
}

export default App;
