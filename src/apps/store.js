import {configureStore} from '@reduxjs/toolkit'
import categorySlice from '../feature/category/categorySlice'
import productSlice from '../feature/product/productSlice';
import  CartSlice from '../feature/cart/CartSlice';

const store=configureStore ({
    reducer:{
        category:categorySlice.reducer,
        product:productSlice.reducer,
        cart:CartSlice.reducer,
    },
})

export default store;
