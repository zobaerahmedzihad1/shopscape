import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import bannerImage from "../../images/phonewatch.png";
import googlePlay from "../../images/google_play.png";
import appStore from "../../images/app_store.png";

const Home = () => {
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col md={7}>
            <div className="banner-text">
              <h5>APP SHOWCASE</h5>
              <h1>
                Made with Style <br /> & <span>Commitment</span>
              </h1>
              <p>
                Phosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinate proactive
                e-commerce via process-centric “outside the box“ thinking.
                Completely pursue scalable customer service through sustainable
                potentialities.
              </p>
              <div className="store">
                <img className="google-play" src={googlePlay} alt="" />
                <img className="app-store" src={appStore} alt="" />
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="banner-image mt-4">
              <img src={bannerImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
