import { createSlice } from '@reduxjs/toolkit';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  isPopupVisible: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const { productToAdd, quantityToAdd } = action.payload;
      const existingCartItem = state.cartItems.find(cartItem => cartItem.id === productToAdd.id);
      if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + quantityToAdd;
      } else {
        state.cartItems.push({ ...productToAdd, quantity: quantityToAdd });
      }
    },
    removeItemFromCart(state, action) {
      const cartItemToRemove = action.payload;
      // find the cart item to remove
      const existingCartItem = state.cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
      );
      // check if quantity is equal to 1, if it is remove that item from the cart
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
      } else {
        existingCartItem.quantity = existingCartItem.quantity - 1;
      }
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
      state.isPopupVisible = false;
    },
    setIsPopupVisible(state, action) {
      state.isPopupVisible = action.payload;
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
  setIsPopupVisible,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
