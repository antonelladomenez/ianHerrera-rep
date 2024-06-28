import React from "react";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import serviceImage1 from "./assets/img/background-img.jpg"; // Sample image paths
import serviceImage2 from "./assets/img/background-img.jpg";
import serviceImage3 from "./assets/img/background-img.jpg";
import "./styles/services.css";
import backgroundImage from "./assets/img/background-img.jpg";

const Services = () => {
  const { ref: firstRowRef, inView: firstRowInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondRowRef, inView: secondRowInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: thirdRowRef, inView: thirdRowInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: heroRef, inView: heroInView } = useInView({
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
        <GeneralHeader />

        <Container className="mb-5">
          <div
            className={`text-left slide-in-left ${heroInView ? "visible" : ""}`}
            ref={heroRef}
          >
            <h1 className="hero-text-large hero-text-small">Services</h1>
          </div>
        </Container>
      </section>
      <Container className="service-page">
        <Row
          ref={firstRowRef}
          className={`align-items-center mb-5 ${
            firstRowInView ? "slide-in-left visible" : "slide-in-left"
          }`}
        >
          <Col md={6} className="text-col">
            <h2 className="section-title">How I Work</h2>
            <p className="section-description">
              QuickFunds- Your trusted financial partner for loans. Quick
              approvals, competitive rates, and personalized solutions to meet
              your unique needs. Empowering you to achieve your financial goals.
              Apply online today!
            </p>
            <div className="services-list">
              <p>Service 1: Brief description of service 1.</p>
            </div>
            <div className="button-group">
              <Button
                className="btn-round"
                variant="outline-dark"
                href="/portfolio"
              >
                View Portfolio
              </Button>
            </div>
          </Col>
          <Col md={6} className="service-images">
            <div className="mb-3">
              <img
                src={serviceImage1}
                alt="Service 1"
                className="service-image"
              />
            </div>
          </Col>
        </Row>
        <Row
          ref={secondRowRef}
          className={`align-items-center mb-5 ${
            secondRowInView ? "slide-in-right visible" : "slide-in-right"
          }`}
        >
          <Col md={6} className="text-col">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-description">
              We offer a range of services to meet your needs. Contact us for
              more information.
            </p>
            <div className="services-list">
              <p>Service 2: Brief description of service 2.</p>
              <p>Service 3: Brief description of service 3.</p>
              <p>Service 4: Brief description of service 4.</p>
              <p>Service 5: Brief description of service 5.</p>
              <p>Service 6: Brief description of service 6.</p>
            </div>
          </Col>
          <Col md={6} className="service-images">
            <div className="mb-3">
              <img
                src={serviceImage2}
                alt="Service 2"
                className="service-image"
              />
            </div>
          </Col>
        </Row>
        <Row
          ref={thirdRowRef}
          className={`align-items-center mb-5 ${
            thirdRowInView ? "slide-in-left visible" : "slide-in-left"
          }`}
        >
          <Col md={6} className="text-col">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              QuickFunds- Your trusted financial partner for loans. Quick
              approvals, competitive rates, and personalized solutions to meet
              your unique needs. Empowering you to achieve your financial goals.
              Apply online today!
            </p>
            <div className="services-list">
              <p>
                Contact us for more information about our services and how we
                can help you achieve your goals.
              </p>
            </div>
            <div className="button-group">
              <Button
                className="btn-round"
                variant="outline-dark"
                href="/contact"
              >
                Contact
              </Button>
            </div>
          </Col>
          <Col md={6} className="service-images">
            <div className="mb-3">
              <img
                src={serviceImage1}
                alt="Service 1"
                className="service-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
