import { configureStore } from "@reduxjs/toolkit";
import whishSlice from '../slice/whishSlice';
import cartSlice from '../slice/cartSlice';

const store = configureStore({
    reducer:{
     whishlistReducer:whishSlice,
     cartReducer:cartSlice
    }
})

export default store