import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/PHOTO-2022-11-16-21-28-39.jpg";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="horizontal-line"></div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </div>
              <div className="links mt-2">
                <a
                  className="linkedin-link"
                  href="https://www.linkedin.com/in/tu-perfil-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>

                <a className="email-link" href="mailto:tu-correo@dominio.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="horizontal-line"></div>
        <Container>
          <Row className="term text-center text-md-left">
            <Col xs={12} md={6} className="footer-left mb-3 mb-md-0">
              <div>&copy; 2024 Ian Herrera Architect</div>
              <div>|</div>
              <div className="company">
                <a
                  href="https://www.instagram.com/fancyitsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company"
                >
                  By FancyIT
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="footer-right text-md-end">
              <NavLink className={"terms"} to="/content/terms">Terms</NavLink>
              <NavLink className={"privacy"} to="/content/privacy">Privacy</NavLink>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
