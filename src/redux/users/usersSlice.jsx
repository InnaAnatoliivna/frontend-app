import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';
import { handlePending, handleRejectedSecond } from '../api/apiHandlers';

const initialState = {
    users: null,
    isLoading: false,
    error: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, handlePending)
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, handleRejectedSecond);
    },
});

export const usersReducer = usersSlice.reducer;
