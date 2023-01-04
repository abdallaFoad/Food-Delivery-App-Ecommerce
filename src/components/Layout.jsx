import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector} from 'react-redux';

import Footer from './Footer'
import Header from './Header'
import Carts from './UI/Carts'




const Layout = () => {
  const toggleCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {toggleCart && <Carts />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout