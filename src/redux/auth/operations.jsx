import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://lawyerappwebapi.azurewebsites.net';
// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * user: { name, email, password }
 */
export const signUpUser = createAsyncThunk('Auth/register',
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.post('/Auth/register', user);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
/*
 * POST @ /users/login 
 * user: { name, email, password }
 */
export const loginUser = createAsyncThunk('Auth/login',
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.post('/Auth/login', user);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOutUser = createAsyncThunk('Auth/logout',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.post('/Auth/logout');
            clearAuthHeader();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);
/*
 * POST @ /users/current
 * body: { name, email, password }?????????????????
 */
export const refreshUser = createAsyncThunk('Auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get('/Auth/current');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);