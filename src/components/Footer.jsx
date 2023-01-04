import React from "react";
import "alias-style/components/Footer.scss";


import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";


import logo from "../assets/images/res-logo.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiFacebookFill } from 'react-icons/ri';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list ">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="newsletter">
              <h5 className="footer__title">Newsletter</h5>
              <p>Subscribe our newsletter</p>
              <div className="newsletter-input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter your email")}
                />
                <span>
                  <RiSendPlaneFill />
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 bottom-footer">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0 fs-5 fw-bold">Follow: </p>
              <a
                href="https://www.facebook.com/abdalla.foad.50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookFill className="facebook" />
              </a>
              <a
                href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR3cVpszml-H46u4m3b6Kmr51ag8abvsL1f9SFGVBqndZrlMraBAHrKSzM8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/abdofoad1179674/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://twitter.com/abdallafoad74?fbclid=IwAR3kCOmht_taY7AnJT7rgRTqX5pdG0PrDRQ5bBWcJlUipBvMrp_IwWRMFM0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
