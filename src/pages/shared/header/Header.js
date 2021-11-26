import React from "react";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { AllContexts, } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email } = user;

  return (
    <div className="">
      <Navbar className ="color-nav fixed-top"  collapseOnSelect expand="lg"  variant="dark">
                <Container>
                <Navbar.Brand><Nav.Link as={NavLink} to="/home" href="#"><img className="w-10" src={logo} alt="" /><span class="title text-white">  MediCare Home </span> </Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link as={NavLink} to="/home" href="#">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/About" href="#">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/Services" href="#">Sevices</Nav.Link>
                    <Nav.Link as={NavLink} to="/Contact" href="#">Contact</Nav.Link>
                    
                    <Nav.Link as={HashLink} to="/home#feature" href="#">
                Feature services
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" href="#">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link as={NavLink} to="/login" href="#">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
    </div>
  );
};

export default Header;
