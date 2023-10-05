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
            const { userId, userPasswd, userJob } = action.payload;
            state.userId = userId;
            state.userPasswd = userPasswd;
            state.userJob = userJob;
        },
        logout: (state) => {
            state.auth = null;
        },
    },
});

export let { login, logout } = user.actions
export default user;