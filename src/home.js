import React from "react";
import "./styles/home.css";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import logo from "./assets/img/PHOTO-2022-11-16-21-28-39.jpg";
import backgroundImage from "./assets/img/background-img.jpg";
import aboutImage from "./assets/img/Rectangle 1.jpg";
import Footer from "./components/Footer";

function App() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <section
        id="hero"
        className="section-padding"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar
          expand="lg"
          style={{ background: "transparent", width: "100%" }}
        >
          <Container fluid>
            <Navbar.Brand href="#home">
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
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mb-5">
          <div
            className={`text-left slide-in-left ${heroInView ? "visible" : ""}`}
            ref={heroRef}
          >
            <h1 className="hero-text-large hero-text-small">
              Building with every detail.
            </h1>
            <p className="hero-subtext-large hero-subtext-small">
              Inspiring with every line
            </p>
          </div>
        </Container>
      </section>

      <section id="about" className="my-5">
        <Container
          ref={aboutRef}
          className={`slide-in-left ${aboutInView ? "visible" : ""}`}
        >
          <Row className="align-items-center justify-content-center text-center">
            <Col md="auto">
              <p>
                QuickFunds- Your trusted financial partner for loans. Quick
                approvals, competitive rates, and personalized solutions to meet
                your unique needs. Empowering you to achieve your financial
                goals. Apply online today!
              </p>
            </Col>
            <Col md="auto">
              <Button
                className="btn-round"
                variant="outline-dark"
                href="/portfolio"
              >
                View Portfolio
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <img
                src={aboutImage}
                alt="Portfolio section"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="info" className="my-5">
        <Container
          ref={infoRef}
          className={`slide-in-right ${infoInView ? "visible" : ""}`}
        >
          <Row className="align-items-end">
            <Col md={6}>
              <p>
                QuickFunds- Your trusted financial partner for loans. Quick
                approvals, competitive rates, and personalized solutions to meet
                your unique needs. Empowering you to achieve your financial
                goals. Apply online today!
              </p>
              <Button
                className="btn-round mb-3"
                variant="outline-dark"
                href="/services"
              >
                Services
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={aboutImage}
                alt="Portfolio section"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="my-5">
        <Container
          ref={contactRef}
          className={`slide-in-left ${contactInView ? "visible" : ""}`}
        >
          <Row className="align-items-end">
            <Col md={6}>
              <img
                src={aboutImage}
                alt="Contact section"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center">
                <p className="mb-0 mr-3">
                  QuickFunds- Your trusted financial partner for loans. Quick
                  approvals, competitive rates, and personalized solutions to
                  meet your unique needs. Empowering you to achieve your
                  financial goals. Apply online today!
                </p>
                <Button
                  className="btn-round"
                  variant="outline-dark"
                  href="/contact"
                >
                  Contact
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default App;
