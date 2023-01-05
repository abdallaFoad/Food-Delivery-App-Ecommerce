import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ReactPaginate from "react-paginate";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from "react-icons/io";

import CommonSection from "../components/UI/CommonSection";
import ProductCard from "../components/UI/ProductCard";
import Helmet from "../components/Helmet";
import products from "../assets/fake-data/products";
import "../style/pages/AllFoods.scss";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <div className="main-foods">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>{<GrSearch />}</span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => {
              return (
                <Col className="mb-4" lg="3" md="4" sm="6" xs="12">
                  <ProductCard item={item} />
                </Col>
              );
            })}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={
                  <div className="icon">
                    <IoIosArrowBack />
                    <span>Prev</span>
                  </div>
                }
                nextLabel={<div className="icon">
                  <span>Next</span>
                  <IoIosArrowForward />
                </div>}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default AllFoods;
