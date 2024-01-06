// api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://lawyerappwebapi.azurewebsites.net';

const api = axios.create();

// Utility to add JWT
export const setAuthHeader = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
    api.defaults.headers.common.Authorization = '';
};

// Export your custom axios instance
export default api;
