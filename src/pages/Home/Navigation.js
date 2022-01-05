import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Navigation.css"

const Navigation = () => {
  const { user,logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand to="/home" className="fw-bold fs-4">Green Foodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="navlink" to="/home">Home</NavLink>
              <NavLink className="navlink" to="/foods">Foods</NavLink>
              <NavLink className="navlink" to="/orders">Orders</NavLink>
              {
              user?.email ? <Button onClick={logOut} className="my-0" variant="warning" size="sm">
              Logout
            </Button> : <><NavLink className="navlink" to="/register">Register</NavLink>
              <NavLink className="navlink" to="/login">Login</NavLink></>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;