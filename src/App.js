import './App.css';
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import AllFoods from "./pages/AllFoods";
import FoodDetails from "./pages/FoodDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Home from './pages/Home';
import Cart from './pages/CartPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="foods" element={<AllFoods />} />
          <Route path="foods/:id" element={<FoodDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
