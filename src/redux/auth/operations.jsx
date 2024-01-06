import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { setAuthHeader, clearAuthHeader } from '../api/serviceApi';

/*
 * POST @ /users/signup
 * user: { name, email, password }
 */
export const signUpUser = createAsyncThunk('Auth/register',
    async (user, thunkAPI) => {
        try {
            const { data } = await api.post('/Auth/register', user);
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
            const { data } = await api.post('/Auth/login', user);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

/*
 * POST @ /users/logout
 */
export const logOutUser = createAsyncThunk('Auth/logout',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.post('/Auth/logout');
            clearAuthHeader();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

/*
 * POST @ /users/current
 * body: { name, email, password } ?????????????????
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
            const { data } = await api.get('/Auth/current');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);