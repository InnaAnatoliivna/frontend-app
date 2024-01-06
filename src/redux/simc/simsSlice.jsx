import { createSlice } from '@reduxjs/toolkit';
import { fetchMapTiles } from './operations';
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';

const initialState = {
    cities: [],
    isLoading: false,
    error: '',
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMapTiles.pending, handlePending)
            .addCase(fetchMapTiles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cities = action.payload;
            })
            .addCase(fetchMapTiles.rejected, handleRejectedSecond);
    },
});

export const citiesReducer = citiesSlice.reducer;
