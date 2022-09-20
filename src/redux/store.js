import { configureStore } from '@reduxjs/toolkit'

import postSlice from './postSlice'
import  userReducer  from './userSlice'

export const store = configureStore({
    reducer: {
        userName : userReducer,
        data: postSlice, 
    }
})