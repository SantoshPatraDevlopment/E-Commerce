import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Automatically Generate Pending ,Fullfilment nad Rejected action Type.
const initialStateCategory = {
    loading: false,
    arrCategory: [],
    error: '',
    selectedCategory: 'Category Selected'
}
export var fetchCategory = createAsyncThunk('category/fetchCategory', (action) => {
    console.log(action)
    return axios.get('https://dummyjson.com/products/categories').then((sucess) => {
        

        return sucess.data;

    })
});

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialStateCategory,

    reducers: {
        changeCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {

            state.loading = true;
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {

            state.loading = false;
            state.arrCategory = action.payload;
        })
        builder.addCase(fetchCategory.rejected, (state, action) => {

            state.loading = false;
            state.error = action.payload;
        })

    }


});

export default categorySlice;