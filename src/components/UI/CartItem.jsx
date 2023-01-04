import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";

import { GrFormSubtract } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import { MdAdd } from "react-icons/md";

import "alias-style/components/UI/CartItem.scss";

import {
  addItem,
  removeItem,
  deleteItem,
} from "../../store/shopping-cart/cartSlice";
import formatCurrency from "../../FormatCurrency/FormatCurrency";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(removeItem(id));
  };

  const deleteTheItem = () => {
    dispatch(deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>{formatCurrency(totalPrice)}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                {<MdAdd />}
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                {<GrFormSubtract />}
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteTheItem}>
            {<GrClose />}
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
