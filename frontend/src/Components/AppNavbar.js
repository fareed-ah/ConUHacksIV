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
  		  		<div>
  		  			<Navbar color="dark" dark expand="sm" className="mb-5">
  		  				<Container>
  		  					<NavbarBrand href="/"> SHFA </NavbarBrand>
  		  					<NavbarToggler onClick={this.toggle} />
  		  					<Collapse isOpen={this.state.isOpen} navbar>
  		  						<Nav className="ml-auto" navbar>
  		  							<NavItem>
	  		  							<NavLink href="http://localhost:3000/addListing">
	  		  								Add a Listing
	  		  							</NavLink>
	  		  						</NavItem>
  		  						</Nav>
  		  					</Collapse>
  		  				</Container>
  		  			</Navbar>
  		  		</div>
            </Router>
  		  	);
  			}
  		  }

  export default AppNavbar;
