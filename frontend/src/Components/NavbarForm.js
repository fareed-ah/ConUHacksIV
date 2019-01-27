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

 export default class NavbarForm extends Component React.Component{
  		state = {
        Destination: ""
        NumBusses: ''; 
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
  		  				<Container>
  		  					<NavbarBrand href="/"> Form </NavbarBrand>
  		  					<NavbarToggler onClick={this.toggle} />
  		  					<Collapse isOpen={this.state.isOpen} navbar>
  		  						<Nav className="ml-auto" navbar> 
  		  							<NavItem>
	  		  							<NavLink href="http://localhost:3000">
	  		  								Housing Location Finder
	  		  							</NavLink>
	  		  						</NavItem>
  		  						</Nav>
  		  					</Collapse>
  		  				</Container>
  		  			</Navbar>
  		  		</div>
  		  	);
  			}
  		  } 