import { createSlice } from '@reduxjs/toolkit';
import { fetchMapTiles } from './operations';
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
            .addCase(fetchMapTiles.pending, handlePending)
            .addCase(fetchMapTiles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.provinces = action.payload;
            })
            .addCase(fetchMapTiles.rejected, handleRejectedSecond);
    },
});

export const provincesReducer = provincesSlice.reducer;
