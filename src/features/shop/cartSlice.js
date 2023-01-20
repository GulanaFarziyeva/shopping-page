import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          title: newItem.title,
          img: newItem.img,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },

    removeItemfromCart: (state, action) => {
      const id = action.payload;
      const removedItem = state.itemsList.find((item) => item.id === id);
      state.itemsList = state.itemsList.filter(
        (item) => item.id !== removedItem.id
      );
      state.totalQuantity -= removedItem.quantity;
    },
  },
});

export const { addToCart, removeItem, removeItemfromCart } = cartSlice.actions;
export default cartSlice.reducer;
