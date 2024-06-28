import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/serviceApi';

/*
 * GET @ /api/Jobs/GetJobs
 */
export const fetchAllJobs = createAsyncThunk('api/Jobs/GetJobs', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token; // Do you need auth here???
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await api.get('/api/Jobs/GetJobs', { headers });
        console.log('got All Jobs :', data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);

/*
 * GET @ /api/Jobs/GetJob/${id}
 * idJob: number
 */
export const fetchJobById = createAsyncThunk('api/Jobs/GetJob', async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token; // Do you need auth here???
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await api.get(`/api/Jobs/GetJob/${id}`, { headers });
        console.log('got job by ID :', data)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);

/*
 * POST @ /api/Jobs/Create
 * job: object
 */
export const addJob = createAsyncThunk('api/Jobs/Create',
    async (job, thunkAPI) => {
        try {
            // const state = thunkAPI.getState();
            // const token = state.auth.token;
            // const headers = { Authorization: `Bearer ${token}` };

            // const { data } = await api.post('/api/Jobs/Create', job, { headers });
            const { data } = await api.post('/api/Jobs/Create', job);

            console.log('added this job :', data)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
/*
 * DELETE @ /api/Jobs/deleteJob
 * idJob: number
 */
export const deleteJob = createAsyncThunk('api/Jobs/deleteJob',
    async (idJob, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            const headers = { Authorization: `Bearer ${token}` };
            const { data } = await api.delete(`/api/Jobs/deleteJob/${idJob}`, { headers });
            console.log('deleted this job :', data)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
/*
 * PUT @ /api/Jobs/Update
 * updateData: { name, id, phone }
 */
export const updateJobs = createAsyncThunk('api/Jobs/Update', async (job, thunkAPI) => {
    const { idJob, ...updateData } = job;
    try {
        const { data } = await api.put(`/api/Jobs/Update/${idJob}`, updateData);
        console.log('updated with this job :', data)

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
