import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/shop/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
