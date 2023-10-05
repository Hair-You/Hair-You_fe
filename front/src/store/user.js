import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        userId: '',
        userPasswd: '',
        userJob: ''
    },
    reducers: {
        login: (state, action) => {
            const [userId, userPasswd, userJob] = action.payload;
            // state.userId = action.payload;
            // state.userPasswd = action.payload
            // state.userJob = action.payload
        },
        logout: (state) => {
            state.auth = null;
        },
    },
});

export let { login, logout } = user.actions
export default user;