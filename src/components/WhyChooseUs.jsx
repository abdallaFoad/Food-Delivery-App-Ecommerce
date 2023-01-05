import '../style/components/WhyChooseUs.scss';

import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { AiOutlineCheckCircle } from 'react-icons/ai';

import whyImg from "../assets/images/location.png";



const WhyChooseUs = () => {
  return (
    <div className="why-chooseUs py-4">
      <Container>
        <Row>
          <Col lg="6" md="6" ms="12">
            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
          </Col>

          <Col lg="6" md="6" ms="12">
            <div className="why__tasty-treat">
              <h2 className="tasty__treat-title mb-4">
                Why <span>Tasty Treat?</span>
              </h2>
              <p className="tasty__treat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, minus. Tempora reprehenderit a corporis velit,
                laboriosam vitae ullam, repellat illo sequi odio esse iste
                fugiat dolor, optio incidunt eligendi deleniti!
              </p>

              <ListGroup className="mt-4">
                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2 ">
                    {<AiOutlineCheckCircle />} Fresh and tasty foods
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    {<AiOutlineCheckCircle />} Quality support
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    {<AiOutlineCheckCircle />} Order from any location{" "}
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
