import React, {Component} from 'react'; 
import{
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

  const ConColor = {
    "color":"#ebe465"
  }
  class AppNavbarListing extends Component{
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
  		  		<div>
  		  			<Navbar color="dark" dark expand="sm" className="mb-5">
  		  					<h1 style={ConColor}> SHFA </h1> <i class="fas fa-bus" style={ConColor}></i> 
  		  					<NavbarToggler onClick={this.toggle} />
  		  					<Collapse isOpen={this.state.isOpen} navbar>
  		  						<Nav className="ml-auto" navbar> 
  		  							<NavItem>
	  		  							<NavLink href="http://localhost:3000" style={ConColor}>
	  		  								Housing Location Finder
	  		  							</NavLink>
	  		  						</NavItem>
  		  						</Nav>
  		  					</Collapse>
  		  			</Navbar>
  		  		</div>
  		  	);
  			}
  		  } 

  export default AppNavbarListing; 