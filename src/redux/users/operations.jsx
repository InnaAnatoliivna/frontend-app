import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/**
 * GET @ api/Users/{id}
 * idUser: string
 */
export const fetchUsers = createAsyncThunk('api/Users', async (idUser, thunkAPI) => {
    try {
        const { data } = await api.get(`/api/Users/${idUser}`, user);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})