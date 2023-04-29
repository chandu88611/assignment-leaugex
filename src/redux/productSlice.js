import { createSlice } from '@reduxjs/toolkit';

 
const productSlice = createSlice({
    name: 'products',
    initialState:{
        products:[]
    },
    reducers: {
     setProducts: (state,action)=>{
     state.products=action.payload;
     }
    }
  });
  
  export const {setProducts} = productSlice.actions;
  export default productSlice.reducer;

//   import { createSlice } from "@reduxjs/toolkit";

// const usersSlice = createSlice({
//     name: "users",
//     initialState: {
//         user : null
//     },
//     reducers: {
//         SetUser: (state, action) => {
//             state.user = action.payload;
//         } 
//     }
// });

// export const { SetUser } = usersSlice.actions;
// export default usersSlice.reducer;