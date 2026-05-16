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
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items[id];
      if (item) {
        if (quantity <= 0) {
          delete state.items[id];
        } else {
          item.quantity = quantity;
        }
      }
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

export const { addItem, removeItem, updateQuantity, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
