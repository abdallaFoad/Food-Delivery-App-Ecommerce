import "alias-style/components/Features.scss";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import featureImg01 from "alias-images/service-01.png";
import featureImg02 from "alias-images/service-02.png";
import featureImg03 from "alias-images/service-03.png";
import { Fade } from "react-reveal";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];


const Features = () => {
  return (
    <div className="features">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <Fade bottom>
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Fade>
          </Col>

          {featureData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className=" fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
