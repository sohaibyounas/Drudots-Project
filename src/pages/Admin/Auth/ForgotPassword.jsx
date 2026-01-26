import React, { useState } from "react";
import style from "../../../assets/css/Admin/AdminAuth/admin.js";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../../assets/images/Logo.svg";
import { resetPasswordApi } from "../../../Constant/apiRoutes.js"

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); //set navigation

  // get value(name) from formdata
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear specific field error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // reset password api
  const handleEmail = async () => {
    try {
      const response = await resetPasswordApi({ email: formData.email });
      console.info("Forgot Password Response:", response.data);
      setLoading(true);
      setFormData({ email: "" });
      setSuccess(true);
      toast.success("Reset link sent!");
    } catch (error) {
      console.error("Error during reset:", error);
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to send reset email";
      setErrors({ email: message });
    } finally {
      setLoading(false);
    }
  };

  // submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleEmail(); // call the reset password API
    }
  };

  return (
    <>
      <Box sx={style.loginPage}>
        {/* Logo Section */}
        <Box sx={style.logoSection}>
          <img src={logo} alt={"logo"} style={style.LoginPageLogo} />
        </Box>

        {/* Forgot Password */}
        <Box sx={style.loginFormSection}>
          <Paper sx={style.ForgotPassMain}>
            <Box sx={style.ForgotPassHeader}>
              <Typography sx={style.ForgotPassHeading}>
                Forgot Password
              </Typography>
              <Typography sx={style.ForgotPassSubHeading}>
                Enter your email to receive a password reset link.
              </Typography>
            </Box>

            {errors.email && (
              <Alert severity="error" sx={{ ...style.formAlertbox, mb: 3 }}>
                <Typography variant="body2">{errors.email}</Typography>
              </Alert>
            )}

            {/* Forgot-Password Email */}
            <Box sx={style.loginFormContent}>
              {/* Email Field */}
              <Box sx={style.otpEmail}>
                <Box sx={style.forgotEmail}>
                  <Typography sx={style.otpEmailLabel}>Email Address</Typography>
                </Box>

                <TextField
                  name="email"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  sx={style.otpEmailInput}
                />
              </Box>

              {/* Send Email */}
              <Button
                disableRipple
                onClick={handleSubmit}
                variant="contained"
                fullWidth
                sx={style.sendOtp}
              >
                {loading ? (
                  <CircularProgress size="20px" color="#fff" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>

            {/* Remember Password */}
            <Box sx={style.rememberPassword}>
              <Typography variant="body2" sx={style.rememberPasswordText}>
                Remember your password?
              </Typography>
              {/* redirect to login page */}
              <Button
                disableRipple
                type="button"
                onClick={() => navigate("/")}
                sx={style.trySignin}
              >
                Try Signing In
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
