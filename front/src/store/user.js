import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        id: '',
        password: '',
        job: '',
        isLogin: null
    },
    reducers: {
        login: (state, action) => {
            const { id, password, job } = action.payload;
            state.id = id;
            state.password = password;
            state.job = job;
            state.isLogin = true;
        },

        logout: (state) => {
            state.isLogin = false;
        },
    },
});

export let { login, logout } = user.actions
export default user;