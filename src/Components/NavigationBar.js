import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';


function NavigationBar() {
    return(
        <Navbar expand="lg" className = 'border-bottom'>
              <NavbarBrand>
                {this.state.name}
              </NavbarBrand>
              <Navbar.Toggle aria-controls="navbar-toggle"></Navbar.Toggle>
              <Navbar.Collapse id = 'navbar-toggle'>
                <Nav className='ml-auto'>
                  <Link className = 'nav-link' to ='/'>Home</Link>
                  <Link className = 'nav-link' to ='/'>About</Link>
                  <Link className = 'nav-link' to ='/'>Contact</Link>
                  
                </Nav>
              </Navbar.Collapse>
                
        </Navbar>

    )
}

export default NavigationBar