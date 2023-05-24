import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const productStore =  configureStore({
    reducer: productReducer
})