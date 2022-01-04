import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand to="/home" className="fw-bold fs-4">Green Foodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/home">Home</Nav.Link>
              <Nav.Link to="/foods">Foods</Nav.Link>
              <Nav.Link to="/orders">Orders</Nav.Link>
              <Nav.Link to="/register">Register</Nav.Link>
              <Nav.Link to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;