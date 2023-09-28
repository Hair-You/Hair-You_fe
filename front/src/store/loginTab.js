import { configureStore, createSlice } from '@reduxjs/toolkit'

//tablogin
let loginTab = createSlice({
    name: 'loginTab',
    initialState: { name: 'customer' },
    reducers: {
        setLoginTab(state, action) {
            state.name = action.payload
        }
    }
})

export let { setLoginTab } = loginTab.actions

export default loginTab