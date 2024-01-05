import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://lawyerappwebapi.azurewebsites.net';

/**
 * GET @ api/Users/{id}
 * idUser: string
 */
export const fetchUsers = createAsyncThunk('api/Users', async (idUser, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/Users/${idUser}`, user);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})