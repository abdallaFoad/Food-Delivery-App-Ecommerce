import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";

import products from "../assets/fake-data/products";
import formatCurrency from "../FormatCurrency/FormatCurrency";
import "../style/pages/FoodDetails.scss";
import TabsFoodDetails from "../components/TabsFoodDetails";
import ProductCard from "../components/UI/ProductCard";
import { addItem } from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { title, price, category, desc, image01, image02, image03 } = product;
  const [previewImg, setPreviewImg] = useState(image01);

  const relatedProduct = products.filter((item) => item.category === category);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ id, image01, title, price }));
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <div className="food-details">
      <Helmet title="Product-details">
        <CommonSection title={title} />

        <Container>
          <Row>
            <Col lg="2" md="2" xs="6">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4" xs="6">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6" xs="12">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>{formatCurrency(price)}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addTOCart__btn" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col>
              <TabsFoodDetails desc={desc} />
            </Col>

            <Col lg="12" className="mb-5 mt-4 ">
              <h2 className="related__Product-title">
                You might also like
              </h2>
            </Col>

            {relatedProduct.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="12" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Helmet>
    </div>
  );
};

export default FoodDetails;
