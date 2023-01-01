import "alias-style/components/UI/Category.scss";

import React from "react";
import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "alias-images/category-01.png";
import categoryImg02 from "alias-images/category-02.png";
import categoryImg03 from "alias-images/category-03.png";
import categoryImg04 from "alias-images/category-04.png";


const categoryData = [
  { 
    display: "Fast Food",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <div className="category">
      <Container>
        <Row>
          {categoryData.map((item, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Category;