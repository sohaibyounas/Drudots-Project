import api from "../Constant/api.js";

// auth apis routes

// login user
export const loginUser = (data) => api.post("/login", data);

// logout user
export const logoutUser = () => api.post("/logout");

// opt api
export const sendOtp = (data) => api.post("/send-otp", data);

// verify otp
export const verifyOtp = (data) => api.post("/verify-otp", data);

// resend otp
export const resendOtp = (data) => api.post("/resend-otp", data);

// Admin dashboard api routes

// get/fetch admin list
export const fetchAdminsApi = () => api.get("/users");

// search admin
export const searchAdminApi = (query) =>
  api.get(`/users/search?query=${query}`);

// add admin
export const addAdminApi = (payload) => {
  return api.post("/admins", payload);
};

// Edit/update admin user
export const updateAdminApi = (id, payload) => {
  return api.put(`/admins/${id}`, payload);
};

// delete admin
export const deleteAdminApi = (id) => api.delete(`/admins/${id}`);
