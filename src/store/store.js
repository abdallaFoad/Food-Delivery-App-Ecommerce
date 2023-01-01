import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";

const store = configureStore({
  reducer: {
    products: cartSlice
  }
});

export default store;