import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./src/slices/cartSlice";
import categoriesSlice from "./src/slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    cart: cartSlice,
  },
});
