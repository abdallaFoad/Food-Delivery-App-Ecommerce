import "../style/components/Tabs.scss";

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import products from "../assets/fake-data/products";
import ProductCard from "./UI/ProductCard";

const Tabs = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="tabs-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Popular Foods</h2>
          </Col>

          <Col lg="12">
            <div className="food__category d-flex w-100 align-items-center justify-content-center gap-lg-4 gap-sm-0">
              <button
                className={`all__btn  ${
                  category === "ALL" && "foodBtnActive" 
                } `}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BURGER" && "foodBtnActive"
                } `}
                onClick={() => setCategory("BURGER")}
              >
                <img src={foodCategoryImg01} alt="" />
                Burger
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "PIZZA" && "foodBtnActive" 
                } `}
                onClick={() => setCategory("PIZZA")}
              >
                <img src={foodCategoryImg02} alt="" />
                Pizza
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BREAD" && "foodBtnActive" 
                } `}
                onClick={() => setCategory("BREAD")}
              >
                <img src={foodCategoryImg03} alt="" />
                Bread
              </button>
            </div>
          </Col>
          {allProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mt-5">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Tabs;
