import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import CartUiSlice from "./shopping-cart/CartUiSlice";

const store = configureStore({
  reducer: {
    products: cartSlice,
    cartUi: CartUiSlice.reducer,
  }
});

export default store;