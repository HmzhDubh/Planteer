import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
      } else {
        state.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.findIndex((i) => i.id === itemId);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1; // Decrease quantity
        } else {
          state.splice(index, 1); // Remove item completely
        }
      }
    },

    checkout: (state) => {
      // Empty the cart after checkout
      return [];
    },
  },
});

export const { addToCart, removeFromCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;
