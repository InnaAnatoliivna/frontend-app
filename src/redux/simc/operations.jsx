import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ /api/Simc/GetCities
 */
export const fetchCities = createAsyncThunk('api/Simc/GetCities', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/api/Simc/GetCities');
        console.log('got cities :', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../api/serviceApi';

// /**
//  * GET @ /api/Simc/GetCities
//  */
// export const fetchCities = createAsyncThunk('api/Simc/GetCities', async (selectedProvince, thunkAPI) => {
//     try {
//         // Ваш запит тепер приймає параметр selectedProvince
//         const { data } = await api.get(`/api/Simc/GetCities?province=${selectedProvince}`);
//         console.log('got cities:', data);
//         return data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });
