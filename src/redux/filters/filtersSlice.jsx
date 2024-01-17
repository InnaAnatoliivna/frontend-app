import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    titleFilter: '',
    provinceFilter: null,
    cityFilter: null,
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
        updateProvinceFilter(state, action) {
            state.locationFilter = action.payload;
        },
        updateCityFilter(state, action) {
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

        clearAllFilters(state) {
            Object.assign(state, initialState);
        },
    },
});

export const {
    updateTitleFilter,
    updateProvinceFilter,
    updateCityFilter,
    updateJobTypeFilter,
    updateProfessionFilter,
    updateFilteredOffers,
    clearAllFilters
} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;