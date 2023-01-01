import { configureStore } from "@reduxjs/toolkit";
import cartAppReducer from "app/store/cartApp/cartSlice";

export const store = configureStore({
    reducer: {
        cartApp: cartAppReducer,
    },
});
