import { configureStore, createSlice } from '@reduxjs/toolkit'
import loginTab from './loginTab'
import user from './user'


export default configureStore({
    reducer: {
        loginTab: loginTab.reducer,
        user: user.reducer
    }
})