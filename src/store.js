import { configureStore } from '@reduxjs/toolkit';

import plantsReducer from './slices/plantsSlice'
import cartReducer from './slices/cartSlice'

export default configureStore({
    reducer: {
        plants: plantsReducer,
        cart: cartReducer
    },
});