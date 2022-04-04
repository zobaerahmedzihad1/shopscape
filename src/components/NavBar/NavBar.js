import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  // let location = useLocation();
  // if (location.key !== "default") {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavLink to="/">
              <img
                alt=""
                src={logo}
                width="auto"
                height="50"
                className="d-inline-block align-top"
              />
            </NavLink>
            <Nav className="ms-auto">
              <NavLink className="link" to="/home">
                Home
              </NavLink>
              <NavLink className="link" to="/reviews">
                Reviews
              </NavLink>
              <NavLink className="link" to="/dashboard">
                Dashboard
              </NavLink>
              <NavLink className="link" to="/blogs">
                Blogs
              </NavLink>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  // }
};

export default NavBar;
