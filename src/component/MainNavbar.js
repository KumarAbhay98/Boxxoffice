import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar2() {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="Navbrand">Boxxoffice</Navbar.Brand>
          <Nav >
            <Link to="/"  className="Navlinks">Home</Link>
            <a href="#section1" className="Navlinks">Movies</a>
            <Link to="/About" className="Navlinks">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbar2;