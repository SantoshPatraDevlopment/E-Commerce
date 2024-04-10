import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"; 
import axios from 'axios';

const initialStateProduct={
    loading:false,
    arrProduct:[],
    error:'',
}

export var fetchProduct=createAsyncThunk('product/fetchProduct',(action)=>{
  return axios.get('https://dummyjson.com/products').then((response)=>{
     return response.data;
   })
});


export const productSlice=createSlice({
    name:'product',
    initialState:initialStateProduct,
    // reducers:{
    //     changeCategory:(state,action)=>{
    //       state.selectedCategory=action.payload;
    //     }
    // },

    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            debugger;
            state.loading=false;
            state.arrProduct=action.payload.products;
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            debugger;
            state.loading=false;
            state.error=action.payload;
        })

    }
    
});

export default productSlice;