import React, {Component} from 'react';


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

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  const STYLE1 = {
    "text-align": "left", 
    "color":"#ebe465"
  }

  const STYLE2 = {
    "padding-bottom":"0",
    "margin-bottom":"0", 
    "background-color":"black"
  }

    const ConColor = {
    "color":"#ebe465"
  }

  class AppNavbar extends Component{
  		state = {
  			isOpen: false
  		}
  		  	toggle = () => {
  		  		this.setState({
  		  			isOpen: !this.state.isOpen
  		  		});
  		  	}
  		  	render(){
  		  		return(
            <Router>
  		  		<div style={STYLE2}>
  		  			<Navbar color="dark" dark expand="sm" style={STYLE2}>
  		  					<h1 style={STYLE1}> SHFA </h1>
  		  					<NavbarToggler onClick={this.toggle} />
  		  					<Collapse isOpen={this.state.isOpen} navbar style={ConColor} >
  		  						<Nav className="ml-auto" navbar style={ConColor}>
  		  							<NavItem>
	  		  							<NavLink href="http://localhost:3000/addListing" style={ConColor}>
	  		  								Add a Listing
	  		  							</NavLink>
	  		  						</NavItem>
  		  						</Nav>
  		  					</Collapse>
  		  			</Navbar>
  		  		</div>
            </Router>
  		  	);
  			}
  		  }

  export default AppNavbar;
