import { createSlice } from '@reduxjs/toolkit';
import { addOffers, updateOffers } from './operations';
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';

const initialState = {
    offers: [],
    isLoading: false,
    error: '',
};

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addOffers.pending, handlePending)
            .addCase(addOffers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.offers = [...state.offers, action.payload];
            })
            .addCase(addOffers.rejected, handleRejectedSecond)
            .addCase(updateOffers.pending, handlePending)
            .addCase(updateOffers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.offers = state.offers.map(offer => (offer.id === action.payload.id ? action.payload : offer));
            })
            .addCase(updateOffers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const offersReducer = offersSlice.reducer;
