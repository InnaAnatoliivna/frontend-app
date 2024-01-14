import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './operations';
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
            .addCase(fetchCities.pending, handlePending)
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, handleRejectedSecond);
    },
});

export const citiesReducer = citiesSlice.reducer;
