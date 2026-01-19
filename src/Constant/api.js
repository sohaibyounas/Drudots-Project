import axios from 'axios';

// base url
const BASE_URL = "http://localhost:5173/";

// token
const Token = "dummy-token-1768567429735";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});

export { BASE_URL, Token };
export default api;
    