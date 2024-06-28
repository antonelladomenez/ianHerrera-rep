import React, { useState } from "react";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import "./styles/Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_l506eto', 'template_i7kuejx', formData, '2WRgl1FjHQJZ9UCta')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado exitosamente');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Fallo en el envío del mensaje');
      });

    // Opcional: limpiar el formulario después del envío
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <GeneralHeader />
      <Container fluid className="frame" style={{ padding: 0 }}>
        <Row className="auto-layout">
          <Col md={6} className="text-center mb-4">
            <h1 className="text-wrapper">Contact</h1>
            <p className="p">
              QuickFunds- Your trusted financial partner for loans. Quick approvals,
              competitive rates, and personalized solutions to meet your unique needs.
              Empowering you to achieve your financial goals. Apply online today!
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 div-3">
                <Form.Label className="text-wrapper-2">Your Name</Form.Label>
                <Form.Control
                  className="div-4 form-control-custom"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 div-3">
                <Form.Label className="text-wrapper-2">Email Address</Form.Label>
                <Form.Control
                  className="div-4 form-control-custom"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 div-3">
                <Form.Label className="text-wrapper-2">Message</Form.Label>
                <Form.Control
                  className="div-4 form-control-custom"
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button className="style-filled button-instance" type="submit">
                SEND
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
