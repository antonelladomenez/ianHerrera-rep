import React from "react";
import "../styles/generalHeader.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/PHOTO-2022-11-16-21-28-39.jpg";

const GeneralHeader = ({ isGallery }) => {
  return (
    <section>
      <Navbar
        expand="lg"
        className={`navbar-transparent ${isGallery ? "navbar-gallery" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Ian H. Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="nav-links">
              <Nav.Link href="/" exact>
                Home
              </Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default GeneralHeader;
