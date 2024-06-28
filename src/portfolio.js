import React from "react";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import rect8 from "./assets/img/selection/1 (2).jpg";
import rect1 from "./assets/img/selection/4 prueba.jpg";
import rect2 from "./assets/img/selection/Imagen1.png";
import rect3 from "./assets/img/selection/Imagen1.png whfqf.png";
import rect4 from "./assets/img/selection/Portfolio Add & Ext.-images-0.jpg";
import rect5 from "./assets/img/selection/1.JPG";
import rect6 from "./assets/img/selection/DSC00027.JPG";
import rect7 from "./assets/img/selection/IMG_4912.JPG";
import "./styles/portfolio.css";
import { Container, Row, Col } from "react-bootstrap";

const images = [
  { id: 1, src: rect1, title: "Image 1" },
  { id: 2, src: rect2, title: "Image 2" },
  { id: 3, src: rect3, title: "Image 3" },
  { id: 4, src: rect4, title: "Image 4" },
  { id: 5, src: rect5, title: "Image 5" },
  { id: 6, src: rect6, title: "Image 6" },
  { id: 7, src: rect7, title: "Image 7" },
  { id: 8, src: rect8, title: "Image 8" },
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleImageClick = (id, title, src) => {
    navigate(`/project/${id}`, { state: { title, src } });
  };

  return (
    <div className="portfolio">
      <GeneralHeader />
      <Container className="gallery-container">
        <Row className="justify-content-center">
          {images.map((image, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="gallery-item d-flex flex-column align-items-center">
              <img src={image.src} alt={`Artwork ${index + 1}`} onClick={() => handleImageClick(image.id, image.title, image.src)} />
              <p>{`Artwork ${index + 1}`}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
