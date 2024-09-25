
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar  sticky="top" expand="lg" className="custom-navbar">
      <Container>
        <img className='small-logo ' src='/photos/smalllogo.png' alt='small logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} className="nav-link-spacing" to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-spacing" to="/activity">Activity</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-spacing" to="/sports">Sports</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-spacing" to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-spacing" to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
