import React, { useEffect, useState } from "react";
import "../style/components/Header.scss";

import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';

import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logoImg from "../assets/images/res-logo.png";
import { useRef } from "react";
import { cartUiAction } from "../store/shopping-cart/CartUiSlice";

const Header = () => {

  const totalQuantity = useSelector((state) => state.products.totalQuantity);

  const nav_links = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Foods",
      path: "foods",
    },
    {
      display: "Cart",
      path: "cart",
    },
    {
      display: "Contact",
      path: "contact",
    },
  ];

  
  const menuRef = useRef(null);
  const borderRef = useRef(null);
  const [show, setShow] = useState(false);
  const toggleState = () => setShow(!show);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiAction.toggle());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [menuRef]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.documentElement.scrollTop > 80
        ? borderRef.current.classList.add("header-shrink")
        : borderRef.current.classList.remove("header-shrink");
    });
    // return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div className="header" ref={borderRef}>
      <Container>
        {/*==== Logo ==== */}
        <div>
          <NavLink to="/" className="logo">
            <img src={logoImg} alt="logo" />
            <h5>Testy Treat</h5>
          </NavLink>
        </div>

        {/*==== Menu ==== */}
        <div
          className="navigation"
          ref={menuRef}
          style={{ left: show === true ? "0" : "5000px" }}
          onClick={toggleState}
        >
          <div
            className="nav-menu"
            style={{ right: show === true ? "0" : "-5000px" }}
          >
            {nav_links.map((e, i) => {
              return (
                <NavLink
                  to={e.path}
                  key={i}
                  className={(navClass) => navClass.isActive && "isActive"}
                >
                  {e.display}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/*==== Nav Right Icons ==== */}
        <div className="right-menu">
          <div className="cart-icon" onClick={toggleCart}>
            <div className="icon">{<RiShoppingBasketLine />}</div>
            <div className="num">{totalQuantity}</div>
          </div>
          <div className="user">
            <Link to="login">{<AiOutlineUser />}</Link>
          </div>
          <div className="click-menu" onClick={toggleState}>
            {<GiHamburgerMenu />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
