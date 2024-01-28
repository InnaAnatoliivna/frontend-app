import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    titleFilter: '',
    provinceFilter: null,
    cityFilter: null,
    jobTypeFilter: null,
    professionFilter: null,
    filteredOffers: []
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateTitleFilter(state, action) {
            state.titleFilter = action.payload;
        },
        updateProvinceFilter(state, action) {
            state.provinceFilter = action.payload;
        },
        updateCityFilter(state, action) {
            state.cityFilter = action.payload;
        },
        updateJobTypeFilter(state, action) {
            state.jobTypeFilter = action.payload;
        },
        updateProfessionFilter(state, action) {
            state.professionFilter = action.payload;
        },
        // updateFilteredOffers(state, action) {
        //     state.filteredOffers = action.payload;
        // },
        updateFilteredOffers(state, action) {
            if (action.payload) {
                action.payload.forEach(newOffer => {
                    const exists = state.filteredOffers.find(existingOffer => existingOffer.id === newOffer.id);
                    if (!exists) {
                        state.filteredOffers.push(newOffer);
                    }
                });
            }
        },

        clearFilteredOffers(state) {
            state.filteredOffers = [];
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
    clearFilteredOffers,
    clearAllFilters
} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;