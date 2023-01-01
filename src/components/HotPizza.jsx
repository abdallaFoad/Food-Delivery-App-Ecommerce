import React, { useState , useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";

import products from "../assets/fake-data/products";
import ProductCard from "./UI/ProductCard";


const HotPizza = () => {
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filterHotPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterHotPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  return (
    <div className="hot-pizza py-4 mt-0">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5 ">
            <h2>Hot Pizza</h2>
          </Col>

          {hotPizza.map((item) => (
            <Col lg="3" md="4" sm="6" xs="12" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HotPizza;
