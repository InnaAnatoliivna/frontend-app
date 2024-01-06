import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/Terc/GetProvinces
 */
export const fetchMapTiles = createAsyncThunk('api/Terc/GetProvinces', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/Terc/GetProvinces');
        console.log('got provinces :', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

