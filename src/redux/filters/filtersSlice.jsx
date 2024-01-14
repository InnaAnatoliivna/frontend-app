import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    titleFilter: '',
    locationFilter: '',
    jobTypeFilter: '',
    professionFilter: '',
    filteredOffers: null,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateTitleFilter(state, action) {
            state.titleFilter = action.payload;
        },
        updateLocationFilter(state, action) {
            state.locationFilter = action.payload;
        },
        updateJobTypeFilter(state, action) {
            state.jobTypeFilter = action.payload;
        },
        updateProfessionFilter(state, action) {
            state.professionFilter = action.payload;
        },
        updateFilteredOffers(state, action) {
            state.filteredOffers = action.payload;
        },
    },
});

export const {
    updateTitleFilter,
    updateLocationFilter,
    updateJobTypeFilter,
    updateProfessionFilter,
    updateFilteredOffers
} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;