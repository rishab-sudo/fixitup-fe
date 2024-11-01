import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

// Define Store using const or let
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
