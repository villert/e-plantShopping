import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = {
          ...product,
          quantity: 1,
        };
      }
    },
    removeItem(state, action) {
      delete state.items[action.payload];
    },
    increaseQuantity(state, action) {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items[action.payload];
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
