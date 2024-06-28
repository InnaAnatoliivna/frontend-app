import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';
import { addJob, deleteJob, fetchAllJobs, fetchJobById, updateJobs } from './operations';

const initialState = {
    jobs: null,
    jobDetails: null,
    isLoading: false,
    error: '',
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllJobs.pending, handlePending)
            .addCase(fetchAllJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.jobs = state.jobs.push(action.payload.jobs);
                state.jobs = action.payload.jobs
            })
            .addCase(fetchAllJobs.rejected, handleRejectedSecond)
            //
            .addCase(fetchJobById.fulfilled, (state, action) => {
                state.jobDetails = action.payload;
            })
            .addCase(fetchJobById.rejected, handleRejectedSecond)
            //
            .addCase(addJob.fulfilled, (state, action) => {
                // state.jobs.push(action.payload);
                state.jobs = action.payload
            })
            .addCase(addJob.rejected, handleRejectedSecond)
            //
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter(job => job.id !== action.payload.id);
            })
            .addCase(deleteJob.rejected, handleRejectedSecond)
            //
            .addCase(updateJobs.fulfilled, (state, action) => {
                state.jobs = state.jobs.map(job => (job.id === action.payload.id ? action.payload : job));
            })
            .addCase(updateJobs.rejected, handleRejectedSecond)
    },
});

export const jobsReducer = jobsSlice.reducer;
