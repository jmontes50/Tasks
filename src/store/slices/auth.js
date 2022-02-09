import { createSlice } from '@reduxjs/toolkit'
import {register, login, signOut} from './authThunk';

const initialState = {
    token: null,
    loading: false,
    userData: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [signOut.fulfilled]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            const {accessToken, user} = action.payload;
            state.token = accessToken;
            state.userData = user;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            const {accessToken, user} = action.payload;
            state.token = accessToken;
            state.userData = user;
            state.loading = false;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        }
    },
})


export const {} = authSlice.actions;

export default authSlice.reducer;