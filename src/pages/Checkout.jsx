import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet";
import formatCurrency from "../FormatCurrency/FormatCurrency";

import '../style/pages/Checkout.scss'

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.products.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout">
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter your name")}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter your email")}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Phone number")}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Country")}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "City")}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Postal code")}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>{formatCurrency(cartTotalAmount)}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>{formatCurrency(shippingCost)}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{formatCurrency(totalAmount)}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
