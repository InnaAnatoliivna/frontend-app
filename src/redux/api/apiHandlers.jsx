export const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
};

export const handleFulfilled = (state) => {
    state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.error;
};

export const handleRejectedSecond = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const handleFulfilledSignUp = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
    state.isLoggedIn = true;
    state.token = payload.token;
    state.isRefreshing = false;
};