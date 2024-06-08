// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import productReducer from '../slices/productSlice';
import cartReducer from '../slices/cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
