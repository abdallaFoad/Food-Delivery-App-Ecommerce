import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { AiOutlineClose } from "react-icons/ai";


import CartItem from "./CartItem";
import "../../style/components/UI/Carts.scss";
import { cartUiAction } from "../../store/shopping-cart/CartUiSlice";
import formatCurrency from "../../FormatCurrency/FormatCurrency";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.products.cartItems);
  const totalAmount = useSelector((state) => state.products.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiAction.toggle());
  }
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <AiOutlineClose />
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>{formatCurrency(totalAmount)}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
