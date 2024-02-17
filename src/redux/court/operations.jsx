import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/Court/GetCourts
 */
export const fetchCourts = createAsyncThunk('api/Court/GetCourts', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/Court/GetCourts');
        // console.log('got courts :', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

/*
 * GET @ /api/Court/GetCourtAddress/${id}
 * idJob: number
 */
export const fetchAddressByCourtsId = createAsyncThunk('api/Court/GetCourtAddress', async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token; // Do you need auth here???
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await api.get(`/api/Court/GetCourtAddress/${id}`, { headers });
        // console.log('got courts address by ID :', data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);