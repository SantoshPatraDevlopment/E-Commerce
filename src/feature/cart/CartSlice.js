import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialStateCart = { arrCart: [] }
export const CartSlice = createSlice({
    name: 'cart',
    initialState: initialStateCart,

    reducers: {
        addIeamToCart: (state, action) => {
            let cartObject = action.payload;
            let obj = state.arrCart.find(e => e.product.id == cartObject.product.id);
            if (obj) {
                obj.quantity++;
            }
            else {  
                state.arrCart.push(cartObject);
            }
        },
        removedItemFromCart: (state, action) => {
            let cartObject = action.payload;
            let index = state.arrCart.findIndex(e => e.product.id == cartObject.product.id);
            if (index != -1) {
                state.arrCart.splice(index, 1);
            }
        }, 
        increaseQuantityofItem: (state, action) => {
            let cartObject = action.payload;
            let obj = state.arrCart.find(e => e.product.id == cartObject.product.id);
            if (obj) {
                obj.quantity++;
            }

        },
        decreaseQuantityofItem: (state, action) => {
            
            let obj = state.arrCart.find(e => e.product.id == action.payload.product.id);
            let index = state.arrCart.findIndex(e => e.product.id == action.payload.product.id);
            if (obj) {
                if (obj.quantity >= 1) {
                    obj.quantity--;
                }
                else {
                    state.arrCart.splice(index, 1);
                }

            }
        }
    },


});

export default CartSlice;