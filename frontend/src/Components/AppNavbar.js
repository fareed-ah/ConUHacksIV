import React, {Component} from 'react';

import{
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

import { BrowserRouter as Router} from "react-router-dom";

  const STYLE1 = {
    "textAlign": "left", 
    "color":"#ebe465"
  }

  const STYLE2 = {
    "paddingBottom":"0",
    "marginBottom":"0", 
    "backgroundColor":"black"
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
