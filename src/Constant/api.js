import axios from "axios";

// Base URL
const BASE_URL = "http://ems.drudotstech.com/api";

// Function to get token from localStorage
const getToken = () => {
  return localStorage.getItem("authToken");
};

// Create axios instance with dynamic token
const api = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor to dynamically add token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export { BASE_URL, getToken };
export default api;
