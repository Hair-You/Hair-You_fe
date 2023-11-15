import { configureStore, createSlice } from '@reduxjs/toolkit'

const naver = createSlice({
    name: 'naver',
    initialState: {

        userName: ''
    },
    reducers: {
        naverLogin: (state, action) => {
            state.userName = action.payload;
        },
    }
})

export let { naverLogin } = naver.actions
export default naver;