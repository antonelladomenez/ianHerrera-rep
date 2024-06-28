import React, { useState, useEffect } from "react";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./styles/gallery.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const galleryImages = {
  1: require.context("./assets/img/MM portafolio", false),
  2: require.context("./assets/img/Fesumo 1", false),
  3: require.context("./assets/img/fotos la herradura", false),
  4: require.context("./assets/img/frank p", false),
  5: require.context("./assets/img/Cp arq", false),
  6: require.context("./assets/img/indumil", false),
  7: require.context(
    "./assets/img/Mars Industries Group-20240619T072536Z-001",
    false
  ),
  8: require.context("./assets/img/Vaucluse House", false),
};

const importAll = (r) => r.keys().map(r);

const Gallery = () => {
  const { id } = useParams();
  const location = useLocation();

  const images = React.useMemo(
    () => (galleryImages[id] ? importAll(galleryImages[id]) : []),
    [id]
  );

  const backgroundImage = images.length > 0 ? images[0] : null;

  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentImageIndex(null);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, currentImageIndex]);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectTitle = location.state?.title || "Project";

  return (
    <div>
      <section
        id="hero"
        className="section-padding hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <GeneralHeader isGallery={true} />
        <Container className="mb-5 hero-container">
          <div
            className={`text-left slide-in-left ${heroInView ? "visible" : ""}`}
            ref={heroRef}
          >
            <h1 className="hero-text-large hero-text-small">
              Project: {projectTitle}
            </h1>
          </div>
        </Container>
      </section>
      <Container className="gallery-page">
        <Row className="gallery-header">
          <Col>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-description">
              Explore our collection of images.
            </p>
          </Col>
        </Row>
        <Row className="gallery-content justify-content-center">
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="gallery-item">
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="gallery-image"
                onClick={() => handleImageClick(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {currentImageIndex !== null && (
            <>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrow-icon left-arrow"
                onClick={handlePrev}
              />
              <img
                src={images[currentImageIndex]}
                alt="Expanded view"
                className="expanded-image"
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrow-icon right-arrow"
                onClick={handleNext}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
