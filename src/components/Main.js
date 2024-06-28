import React from "react";
import "../styles/Main.css";
import rect1 from "../assets/img/rect.png";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Main = () => {
  return (
    <main className="main">
      <section className="acerca-de">
        <Container fluid>
          <Row className="justify-content-center custom-row">
            <Col xs={12} md={12} lg={10}>
              <div className="text-center">
                <p>
                  QuickFunds - Your trusted financial partner for loans. Quick
                  approvals, competitive rates, and personalized solutions to
                  meet your unique needs. Empowering you to achieve your
                  financial goals. Apply online today!
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                {" "}
                <Button
                  href="/portfolio"
                  variant="outline-dark"
                  style={{ borderRadius: "30px" }}
                  className="custom-button px-3 py-2"
                >
                  Portfolio
                </Button>
              </div>

              <Image src={rect1} alt="Imagen" fluid className="img-center" />
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className="custom-container">
        <Row className="align-items-end">
          <Col xs={12} md={6}>
            <div className="text-left">
              <p>
                QuickFunds- Your trusted financial partner for loans. Quick
                approvals, competitive rates, and personalized solutions to meet
                your unique needs. Empowering you to achieve your financial
                goals. Apply online today!
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <Image src={rect1} alt="Imagen" fluid className="img-right" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <Image src={rect1} alt="Imagen" fluid className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <div className="d-flex">
              <div className="flex-column">
                <p>
                  QuickFunds- Your trusted financial partner for loans. Quick
                  approvals, competitive rates, and personalized solutions to
                  meet your unique needs. Empowering you to achieve your
                  financial goals. Apply online today!
                </p>
              </div>
              <div className="ml-auto">
                <Button
                  href="/contact"
                  variant="outline-dark"
                  style={{ borderRadius: "30px" }}
                  className="custom-button px-3 py-2"
                >
                  Contact
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
