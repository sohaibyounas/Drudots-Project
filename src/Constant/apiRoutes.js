import api from "../Constant/api.js";

// employee login 
export const LoginApi = (data) => api.post("/user/auth/login", data);

// admin login 
export const adminLoginApi = (data) => api.post("/user/auth/verify", data);

// common otp for send & resend
export const sendOtp = (data) => api.post("/user/auth/send-otp", data);

// verify otp
export const verifyOtp = (data) => api.post("/user/auth/verify/otp", data);

// forgot password
export const forgotPasswordApi = (data) => api.post("/auth/forgot-password", data);

// reset password
export const resetPasswordApi = (data) => api.post("/auth/reset-password", data);

// logout user 
export const logoutUser = () => api.post("/user/auth/logout");
