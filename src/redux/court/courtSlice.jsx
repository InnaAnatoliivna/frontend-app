import { createSlice } from '@reduxjs/toolkit'
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';
import { fetchAddressByCourtsId, fetchCourts } from './operations';

const initialState = {
    courtsList: null,
    currentCourt: null,
    postalCode: null,
    simcId: null,
    street: null,
    tercId: null,
    isLoading: false,
    error: '',
};

const courtSlice = createSlice({
    name: 'court',
    initialState,
    reducers: {
        setCurrentCourt: (state, action) => {
            state.currentCourt = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourts.pending, handlePending)
            .addCase(fetchCourts.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.id = action.payload.id;
                state.courtsList = action.payload;
            })
            .addCase(fetchCourts.rejected, handleRejectedSecond)
            //
            .addCase(fetchAddressByCourtsId.fulfilled, (state, action) => {
                state.postalCode = action.payload.postalCode;
                state.simcId = action.payload.simcId;
                state.street = action.payload.street;
                state.tercId = action.payload.tercId;
            })
            .addCase(fetchAddressByCourtsId.rejected, handleRejectedSecond)
    },
});

export const courtReducer = courtSlice.reducer;
export const { setCurrentCourt } = courtSlice.actions;