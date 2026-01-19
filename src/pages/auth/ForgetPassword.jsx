import React, { useState } from "react";
import style from "../../assets/css/auth/style.js";
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
// import { networkManager } from "../../utils/networkManager.js";
// import { API_ROUTES } from "../../Constant/apiRoutes.js";

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

  // submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // email validation
    if (!formData.email.trim()) {
      newErrors.email = t("validation.email.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("validation.email.invalid");
    }

    setErrors(newErrors);
    // if (Object.keys(newErrors).length === 0) {
    //   handleEmail(); // call the forgot password API
    // }
  };

  // forgot password api
  //   const handleEmail = async () => {
  //     try {
  //       setLoading(true);
  //       await networkManager.post(
  //         API_ROUTES.AUTH.FORGOT_PASSWORD,
  //         { email: formData.email },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           skipAuth: true,
  //         }
  //       );
  //       setFormData({ email: "" }); // Clear the email field
  //       setSuccess(true);
  //     } catch (error) {
  //       const message =
  //         error?.response?.data?.message ||
  //         error?.message ||
  //         t("common.errors.generic");
  //       console.error("Error during reset:", error);
  //       setErrors({ email: message });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <>
      {/* Success Alert */}
      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={style.forgotAlert}>
          Success! Please check your email for reset instructions.
        </Alert>
      </Snackbar>

      {/* Forgot Password */}
      <Paper sx={style.ForgotPassMain}>
        <Box sx={style.ForgotPassHeader}>
          <Typography sx={style.ForgotPassHeading}>Forget Password</Typography>
          <Typography sx={style.ForgotPassSubHeading}>
            Forget Password description text
          </Typography>
        </Box>

        {/* error alert */}
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
              <Typography sx={style.otpEmailLabel}>"Email label"</Typography>
            </Box>

            <TextField
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              placeholder="Email placeholder"
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
              <CircularProgress size="20px" color="#fff" /> //add loader
            ) : (
              "Submit"
            )}
          </Button>
        </Box>

        {/* Remember Password */}
        <Box sx={style.rememberPassword}>
          <Typography variant="body2" sx={style.rememberPasswordText}>
            Rememeber Password
          </Typography>
          {/* redirect to login page */}
          <Button
            disableRipple
            type="button"
            onClick={() => navigate("/")}
            sx={style.trySignin}
          >
            Sign in
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default ForgotPassword;
