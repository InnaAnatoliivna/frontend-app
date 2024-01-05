import { createSlice } from '@reduxjs/toolkit'
import { loginUser, refreshUser, signUpUser } from './operations'

const handlePending = (state) => {
    state.isLoading = true
    state.error = ''
}

const handleFulfilled = (state) => {
    state.isLoading = false
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload.error
}

const handleFulfilledSignUp = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
    state.isLoggedIn = true
    state.token = payload.token
    state.isRefreshing = false
}

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: '',
    isRefreshing: false,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            state.user = { name: null, email: null }
            state.token = null
            state.isLoading = false
            state.isLoggedIn = false
            state.error = ''
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
            .addCase(loginUser.fulfilled, handleFulfilledSignUp)
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            },)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(
                ({ type }) => type.endsWith('/fulfilled'),
                handleFulfilled
            )
            .addMatcher(
                ({ type }) => type.endsWith('/rejected'),
                handleRejected
            ),
})

export const authReducer = userSlice.reducer
export const { logOut } = userSlice.actions