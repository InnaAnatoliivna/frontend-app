import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/Sims/GetSities
 */
export const fetchMapTiles = createAsyncThunk('api/Sims/GetSities', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/Sims/GetSities');
        console.log('got sities :', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

