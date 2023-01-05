import ReactDOM from "react-dom/client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";


import App from "./App";
import store from "./store/store";
import "./index.css";
import ScrollToNavigate from "../src/components/ScrollTopNavigate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <ScrollToNavigate />
      <App />
    </Provider>
  </Router>
);
