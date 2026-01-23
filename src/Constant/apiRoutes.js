import api from "../Constant/api.js";

// employee login api
export const LoginApi = (data) => api.post("/user/auth/login", data);

// admin login api
export const adminLoginApi = (data) => api.post("/user/auth/verify", data);

// opt api
// export const sendOtp = (data) => api.post("/user/auth/send-otp", data);

// verify otp
// export const verifyOtp = (data) => api.post("/user/auth/verify/otp", data);

// resend otp
// export const resendOtp = (data) => api.post("/resend-otp", data);

// logout user api
export const logoutUser = () => api.post("/user/auth/logout");
