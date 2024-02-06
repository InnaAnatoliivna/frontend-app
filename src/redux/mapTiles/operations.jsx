import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/MapTiles
 */
export const fetchMapTiles = createAsyncThunk('api/MapTiles', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/MapTiles');
        console.log('map tiles :', data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})

/**
 * GET @ /api/MapTiles/GetMapInBase64
 */
export const fetchMapFromBase = createAsyncThunk('api/MapTiles/GetMapInBase64', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/MapTiles/GetMapInBase64');
        console.log('map tiles from base 64 :', data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})