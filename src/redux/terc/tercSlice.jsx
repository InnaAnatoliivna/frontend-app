import { createSlice } from '@reduxjs/toolkit';
import { fetchProvinces } from './operations';
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';

const initialState = {
    provinces: [],
    isLoading: false,
    error: '',
};

const provincesSlice = createSlice({
    name: 'provinces',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProvinces.pending, handlePending)
            .addCase(fetchProvinces.fulfilled, (state, action) => {
                state.isLoading = false;
                state.provinces = action.payload;
            })
            .addCase(fetchProvinces.rejected, handleRejectedSecond);
    },
});

export const provincesReducer = provincesSlice.reducer;
