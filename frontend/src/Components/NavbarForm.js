import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route } from 'react-router-dom';
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Container
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  const STYLE1 = {
    "text-align": "center", 
    "color":"#ebe465"
  }
  const STYLE2 = {
    "width": "30%", 
    "margin":"30px auto"
  }
  const STYLE3 = {
    "float":"center"
  }

  const STYLE4 ={
    "float":"center"
  }

  const StyleCenter = {
      "justify-content": "center",
      "align-items": "center",
      "text-align": "center"
}

  const paddingStyle = {
    "padding":"5px"
  }

  const color = {
    "background-color":"black"
  }


 export default class NavbarForm extends React.Component{
  		state = {
        Destination: "",
        NumBusses: '',
  			isOpen: false
  		}  

      change = e => {
        this.setState({
          [e.target.name]:e.target.value
        });
      }; 

      onSubmit = e => {
        e.preventDefault(); 
        this.props.handler(this.state.Destination, this.state.NumBusses);
      }

  		toggle = () => {
  		  this.setState({
  		  	isOpen: !this.state.isOpen
  		  });
  		}
  		  	render(){
  		  		return(
  		  		<div>
  		  			<Navbar color="dark" dark expand="x-lg" style={color}>
    		  					<NavbarToggler onClick={this.toggle} style={STYLE3}/>
    		  					<Collapse isOpen={this.state.isOpen} navbar>
    		  						<Nav className="ml-auto" navbar> 
    		  							<NavItem>
                          <Container>
                            <form style={StyleCenter}>
                              <h1 style={STYLE1}> Add preferance </h1>
                              <div class ="form-group">
                                <input
                                  style={paddingStyle}
                                  name="Destination"
                                  placeholder="1234 Mary Jane Ave."
                                  value={this.state.Destination}
                                  onChange={e => this.change(e)}
                                />
                                </div>
                                <div class ="form-group">
                                <input
                                  style={paddingStyle}
                                  name="NumBusses"
                                  placeholder="600"
                                  value={this.state.NumBusses}
                                  onChange={e => this.change(e)}
                                />
                                </div>
                              <button onClick={e => this.onSubmit(e)}>Submit</button>
                            </form>
                          </Container>
  	  		  						</NavItem>
    		  						</Nav>
    		  					</Collapse>
  		  			</Navbar>
  		  		</div>
  		  	);
  			}
  		  } 