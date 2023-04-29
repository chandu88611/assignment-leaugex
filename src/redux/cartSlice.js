import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartProducts:JSON.parse(localStorage.getItem('cartProducts')) || [],
    },
    reducers: {
      updateCart: (state,action)=>{
       state.cartProducts=action.payload;
     }
    }
  });
  
  export const { updateCart } = cartSlice.actions;
  export default cartSlice.reducer;