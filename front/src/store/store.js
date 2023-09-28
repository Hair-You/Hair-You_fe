import { configureStore, createSlice } from '@reduxjs/toolkit'
import loginTab from './loginTab'
import auth from './auth'


export default configureStore({
    reducer: {
        loginTab: loginTab.reducer,
        auth: auth.reducer
    }
})

