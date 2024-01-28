import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/Simc/GetCities
 */
export const fetchCities = createAsyncThunk('api/Simc/GetCities', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/Simc/GetCities');
        // console.log('got cities :', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
