import {configureStore} from '@reduxjs/toolkit'
import categorySlice from '../feature/category/categorySlice'
import productSlice from '../feature/product/productSlice';

const store=configureStore ({
    reducer:{
        category:categorySlice.reducer,
        product:productSlice.reducer,
    },
})

export default store;
