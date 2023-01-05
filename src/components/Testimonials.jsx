import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "./UI/TestimonialSlider";

import "../style/components/Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="main-testimonials">
      <Container>
        <Row>
          <Col lg="6" md="6" ms='12' className="overflow-hidden">
            <Fade left>
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Fade>
          </Col>

          <Col lg="6" md="6" ms='12'>
            <Fade right>
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
