import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "reactstrap";

// Importing Modal
import ModalSection from "../../components/common/ModalSection";

// Import Images
import bg4 from "../../assets/images/homeImage.JPG";

const content = ["Mobil Shop Naseri", "Produkte cilësore, çmime të lira"];

// Custom smooth text rotator component
const SmoothTextRotator = ({ texts, displayTime = 8000, fadeTime = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState("fade-in");

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeProp("fade-out"), displayTime);

    const changeTextTimer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFadeProp("fade-in");
    }, displayTime + fadeTime);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTextTimer);
    };
  }, [index, texts.length, displayTime, fadeTime]);

  return (
    <span className={fadeProp} style={{ display: "inline-block" }}>
      {texts[index]}
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity ${fadeTime}ms ease-in;
        }
        .fade-out {
          opacity: 0;
          transition: opacity ${fadeTime}ms ease-out;
        }
      `}</style>
    </span>
  );
};

const Section = () => {
  const modalRef = useRef(null);

  const callModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <section
      className="home-full position-relative d-flex align-items-center"
      id="home"
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Background overlay */}
      <div
        className="bg-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        }}
      />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h5
              className="text-uppercase fw-light"
              style={{
                letterSpacing: "3px",
                marginTop: "1rem",
                textDecoration: "underline",
                color: "#e0e0e0", // changed color
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)", // subtle shadow
              }}
            >
              Telefona dhe aksesorë
            </h5>
            <h1
              className="text-uppercase fw-bold my-4"
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                color: "#e0e0e0", // changed color
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)", // stronger shadow for big text
              }}
            >
              <SmoothTextRotator
                texts={content}
                displayTime={8000}
                fadeTime={1000}
              />
            </h1>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "300",
                color: "#e0e0e0", // changed color
                textShadow: "1px 1px 2px rgba(0,0,0,0.6)", // subtle shadow for readability
              }}
            >
              Dyqani juaj i telefonave dhe aksesorëve.
            </p>
          </Col>
        </Row>
      </Container>

      <ModalSection ref={modalRef} channel="vimeo" videoId="99025203" />
    </section>
  );
};

export default Section;
