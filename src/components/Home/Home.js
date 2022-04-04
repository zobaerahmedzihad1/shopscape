import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import bannerImage from "../../images/phonewatch.png";
import googlePlay from "../../images/google_play.png";
import appStore from "../../images/app_store.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col md={7}>
            <div className="banner-text">
              <h5 className="line">APP SHOWCASE</h5>
              <h1>
                Made with Style <br /> & <span>Commitment</span>
              </h1>
              <p className="Second-line">
                Phosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinate proactive
                e-commerce via process-centric “outside the box“ thinking.
                Completely pursue scalable customer service through sustainable
                potentialities.
              </p>
              <div className="store">
                <a target="blank" href="https://play.google.com/">
                  <img className="google-play" src={googlePlay} alt="" />
                </a>
                <a target="blank" href="https://trello.com/">
                  <img className="app-store" src={appStore} alt="" />
                </a>
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
