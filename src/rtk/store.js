import { configureStore } from "@reduxjs/toolkit";
import productsSLice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
    reducer:{
        products : productsSLice,
        cart : cartSlice
    }
})