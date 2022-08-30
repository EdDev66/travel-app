import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './favorites'
import authReducer from './auth'

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        auth: authReducer
    }
});