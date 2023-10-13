import { configureStore, createSlice } from '@reduxjs/toolkit'

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