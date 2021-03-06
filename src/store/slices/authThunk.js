import { createAsyncThunk } from '@reduxjs/toolkit'
import {getToken, removeToken, setToken} from '../../utils/HelperFunctions';
import api from '../../services/api';
import history from '../../utils/history';

// export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, {rejectWithValue}) => {
//     try{
//         const accessToken = getToken();
//         api.defaults.headers.Authorization = `Bearer ${accessToken}`;
//         const response = await api.get('/user');
//         return {...response.data, accessToken};
//     }catch(e){
//         removeToken();
//         return rejectWithValue('');
//     }
// });

export const register = createAsyncThunk('auth/register', async (payload) => {
    console.log("register", {payload});
    const response = await api.post('/user/register', payload);
    console.log("registerThunk", response);
    setToken(response.data.accessToken);
    history.push('/home');
    return response.data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/user/login', payload);
    setToken(response.data.accessToken);
    console.log("loginThunk", response);
    history.push('/home');
    return response.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});