import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
  
      // 2. Remove an item entirely from the cart by filtering out its name
      removeItem: (state, action) => {
        // action.payload will just be the name string of the plant (e.g., "Snake Plant")
        state.items = state.items.filter(item => item.name !== action.payload);
      },
  
      // 3. Update the exact amount of an item (used for + and - buttons or inputs)
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
      },
    },
  });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
