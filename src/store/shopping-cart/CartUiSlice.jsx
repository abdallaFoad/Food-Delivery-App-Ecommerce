import { createSlice } from "@reduxjs/toolkit";

const CartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default CartUiSlice;
export const cartUiAction = CartUiSlice.actions;