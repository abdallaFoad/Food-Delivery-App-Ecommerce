import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from 'react-icons/ri';

import { deleteItem } from "../store/shopping-cart/cartSlice";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet";

import '../style/pages/CartPage.scss';
import formatCurrency from "../FormatCurrency/FormatCurrency";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center py-4">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4 controls_cart">
                <h6>
                  Subtotal:
                  <span className="cart__subtotal">
                    {formatCurrency(totalAmount)}
                  </span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({item}) => {
  const { id, image01, title, price, quantity } = item;
  const dispatch = useDispatch();

  const theDeleteItem = () => {
    dispatch(deleteItem(id));
  };
  return (
    <tr className="tr-content">
      <td className="text-center cart__img-box">
        <img src={image01} alt="" width="100%" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{formatCurrency(price)}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <RiDeleteBin5Line
          onClick={theDeleteItem}
          style={{ cursor: "pointer", fontSize: "2rem" }}
        />
      </td>
    </tr>
  );
};

export default Cart;
