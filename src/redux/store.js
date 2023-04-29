import { configureStore,combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
const rootReducer=combineReducers({
    cart:cartSlice,
    products:productSlice
})


const store = configureStore({
    reducer: rootReducer
  });

  export default store

