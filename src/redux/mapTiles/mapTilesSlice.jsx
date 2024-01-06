import { createSlice } from '@reduxjs/toolkit'
import { fetchMapFromBase, fetchMapTiles } from './operations';
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';

const initialState = {
    mapTiles: [],
    base64Map: null,
    isLoading: false,
    error: '',
};

const mapsSlice = createSlice({
    name: 'maps',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMapTiles.pending, handlePending)
            .addCase(fetchMapTiles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.mapTiles = action.payload;
            })
            .addCase(fetchMapTiles.rejected, handleRejectedSecond)
            .addCase(fetchMapFromBase.pending, handlePending)
            .addCase(fetchMapFromBase.fulfilled, (state, action) => {
                state.isLoading = false;
                state.base64Map = action.payload;
            })
            .addCase(fetchMapFromBase.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const mapsTilesPeducer = mapsSlice.reducer;