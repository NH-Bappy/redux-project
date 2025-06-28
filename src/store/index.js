import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})