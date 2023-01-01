import React from "react";
import { Link } from 'react-router-dom';

import "alias-style/components/UI/ProductCard.scss";
import formatCurrency from "../../FormatCurrency/FormatCurrency";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/shopping-cart/cartSlice";


const ProductCard = (props) => {
  const { id, image01, title, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({id, image01, title, price}))
  }
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{formatCurrency(price)}</span>
          <button className="addTOCart__btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
