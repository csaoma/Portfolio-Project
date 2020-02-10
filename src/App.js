import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Nav from 'react-bootstrap/Nav';

import NavbarBrand from 'react-bootstrap/NavbarBrand';

import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chamoun Saoma',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      

      
    }
  }
  
  // consider adding a link to projects under navigation bar or within the about me page
  render() {
    return (

      <div>
        <Router>
          <Container className='p-0' fluid={true}>
            <Navbar className="border-bottom" bg="dark" expand="lg" variant="dark">
              <Navbar.Brand>{this.state.name}</Navbar.Brand>

              <Navbar.Toggle aria-controls="navbar-toggle"></Navbar.Toggle>
              <Navbar.Collapse id = 'navbar-toggle'>
                  <Nav className='ml-auto'>
                    
                    <Link className = 'nav-link' to ='/'>Home</Link>
                    <Link className = 'nav-link' to ='/about'>About</Link>
                    <Link className = 'nav-link' to ='/linkedin'>LinkedIn</Link>
                    <Link className = 'nav-link' to ='/github'>GitHub</Link>

                  </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage  />} />
            <Route path="/about" render={() => <AboutPage  />} />
            <Route path='/linkedin' component={() => { window.location.href = 'https://www.linkedin.com/in/chamoun-saoma/'; return null;}}/>
            <Route path='/github' component={() => { window.location.href = 'https://github.com/csaoma'; return null;}}/>



          
          </Container>
        </Router>
      </div>

    );

  }


}

export default App;
