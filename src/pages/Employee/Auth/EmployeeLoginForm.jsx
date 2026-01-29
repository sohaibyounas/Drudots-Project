import React, { useEffect, useRef, useState } from "react";
import style from "../../../assets/css/Employee/EmployeeAuth/style.js";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
  DialogContent,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Dialog from "../../../component/Ui/Dialog.jsx";
import { useNavigate } from "react-router-dom";
import {
  forgotPasswordApi,
  LoginApi,
  sendOtp,
  verifyOtp,
} from "../../../Constant/apiRoutes.js";
import {
  EMPLOYEEDASHBOARD,
  FORGETPASSWORD,
} from "../../../component/Routes/RouterUrl.js";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EmployeeLoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);
  const [otpSendLoader, setOtpSendLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // login API
  const performLogin = async () => {
    setOtpLoader(true);
    setLoading(true);
    setErrors([]);

    try {
      const response = await LoginApi({
        email: formData.email,
        password: formData.password,
      });
      console.log("Login response:", response.data);

      if (response.data) {
        toast.success(response.data.message || "OTP sent successfully");

        const userData = response.data.data;
        const token = userData?.token;
        const role = (userData?.user_type || "employee").toLowerCase();

        localStorage.clear(); // Clear old session data
        localStorage.setItem("tempAuthToken", token);
        localStorage.setItem("tempUserData", JSON.stringify(userData));
        localStorage.setItem("tempRole", role);

        setOpen(true); //open otp dialog
      }
    } catch (error) {
      console.error("Login error:", error);

      const errorMessage =
        error?.response?.data?.errors?.[0] ||
        error?.response?.data?.error ||
        "Invalid credentials. Please try again.";
      setErrors([errorMessage]);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setOtpLoader(false);

    }
  };

  // login api in use-Effect
  // useEffect(() => {
  //   performLogin();
  // }, []) // add dpeendecies here

  // verify otp
  const handleVerifyOtp = async (e) => {
    e?.preventDefault();

    // Get OTP value from array
    const otpValue = otp.join("");
    console.log("OTP Value:", otpValue);

    // Validate OTP is complete
    if (!/^\d{6}$/.test(otpValue)) {
      setOtpError(["Please enter complete 6-digit OTP"]);
      return;
    }
    // navigate to employeen dashboard
    navigate(EMPLOYEEDASHBOARD, { replace: true })
    return; //not check otp veri api

    setOtpLoader(true);

    try {
      const response = await verifyOtp({
        email: formData.email,
        otp: otpValue,
      });
      console.log("OTP Verify Response:", response);

      // API-based success check
      if (response?.data?.status === true) {
        toast.success(response?.data?.message || "OTP verified successfully");
        setOpen(false); // close otp dialog
        navigate(EMPLOYEEDASHBOARD, { replace: true });
      } else {
        toast.error(response?.data?.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);

      const errorMsg = error?.response?.data?.message || "Something went wrong. Please try again";
      toast.error(errorMsg);
    } finally {
      setOtpLoader(false);
    }
  };

  // resend otp api
  const handleResendOtp = async () => {
    // api send recall here
    setOtpSendLoader(true);

    try {
      await sendOtp({
        email: formData.email,
      });

      toast.success("OTP sent successfully");
    } catch (error) {
      console.error("Resend OTP failed:", error);
      toast.error(
        error?.response?.data?.message ||
        "Failed to resend OTP. Please try again",
      );
    } finally {
      setOtpSendLoader(false);
    }
  };

  // clear otp & err message on reopen OTP dialog
  useEffect(() => {
    if (open) {
      setOtp(new Array(6).fill(""));
      setOtpError([]);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  // update OTP section
  const otpRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // clear OTP error when user types
    if (otpError.length > 0) setOtpError([]);

    // Auto-focus next input
    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // auto move to next input-field
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // If current field has value, clear it
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If empty, move focus to previous and clear it
        otpRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  // handle the paste event
  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData("Text").trim();
    if (!/^\d{6}$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp(newOtp);

    // Clear OTP error when user pastes
    if (otpError.length > 0) setOtpError([]);

    // Focus the last filled input
    otpRefs.current[5]?.focus();
    e.preventDefault();
  };

  // validate email, password
  const validateForm = () => {
    const newErrors = [];

    // Email validation
    if (!formData.email.trim()) {
      newErrors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.push("Please enter a valid email address");
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.push("Password is required");
    }

    return newErrors;
  };

  // Main login function (for login form)
  const handleSubmit = async (event) => {
    event?.preventDefault();

    const validationErrors = validateForm();
    setOtp(new Array(6).fill(""));

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    setLoading(true);

    await performLogin();
  };

  // forgot password api
  const handleForgotPassword = async () => {
    navigate(FORGETPASSWORD); //navigate to forgot password page
    return;
    try {
      const res = await forgotPasswordApi({ email });

      toast.success(res?.data?.message || "OTP sent successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  // password hide/show
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Mouse up password
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Paper sx={style.loginFormMain}>
        {/* employe header info */}
        <Box sx={style.loginFormHeader}>
          <Typography sx={style.loginHeading}> Welcome to Drudots</Typography>
          <Typography sx={style.loginSubHeading}>
            Please enter your credentials to sign in to employee account.
          </Typography>
        </Box>

        {/* Error Messages at Top */}
        {errors.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error" sx={style.formAlertbox}>
              {errors.map((error, index) => (
                <Typography key={index} variant="body2">
                  {error}
                </Typography>
              ))}
            </Alert>
          </Box>
        )}

        {/* form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={style.loginFormContent}
        >
          {/* email input */}
          <Box sx={style.inputGroup}>
            <Box sx={style.fieldErrorMessage}>
              <Typography sx={style.loginFormLabel}>Email Address</Typography>
            </Box>

            {/* email input */}
            <TextField
              name="email"
              type="email"
              fullWidth
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              sx={style.loginFormInputPassword}
            />
          </Box>

          {/* Password Field */}
          <Box sx={{ ...style.inputGroup, pt: 0.6 }}>
            <Box sx={style.fieldErrorMessage}>
              <Typography sx={style.loginFormLabel}>Password</Typography>
            </Box>

            <TextField
              fullWidth
              name="password"
              autoComplete="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              sx={style.loginFormInputPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff style={{ color: "gray" }} />
                      ) : (
                        <Visibility style={{ color: "gray" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Forgot/Reset Password */}
          <Box sx={style.forgotPasswordSection}>
            <Typography sx={style.forgotPassword}>
              Forgot your password?
              <Button
                disableRipple
                onClick={handleForgotPassword}
                color="primary"
                sx={style.forgotPasswordButton}
              >
                Reset it here.
              </Button>
            </Typography>
          </Box>

          {/* Sign In Button */}
          <Button
            disableRipple
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={style.signInButton}
          >
            {loading ? (
              <CircularProgress size="20px" color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </Box>
      </Paper>

      {/* OTP-Dialog box */}
      <Dialog
        open={open}
        onClose={(event, reason) => {
          // Only allow closing via Cancel button, not backdrop or escape
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            return;
          }
          // Reset state when closing
          setOpen(false);
          setOtp(new Array(6).fill(""));
          setOtpError([]);
          setOtpLoader(false);
        }}
        sx={style.dialog}
      >
        <DialogContent sx={style.dialogContent}>
          <Box>
            <Typography sx={style.dialogText}>Account Verification</Typography>
            <Box sx={style.dialogSubText}>
              <Typography sx={style.dialogHeadText}>
                A 6-digit OTP code has been sent to the provided email address.
              </Typography>
              <Typography sx={style.dialogEmail}>{formData.email}</Typography>
            </Box>

            {/* OTP */}
            <Typography sx={style.dialogOtp}>OTP</Typography>

            {/* OTP Input fields */}
            <Box sx={style.dialogOtpInputs} onPaste={handleOtpPaste}>
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  type="tel"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  inputRef={(el) => (otpRefs.current[index] = el)}
                  sx={style.dialogOtpfields}
                  slotProps={{
                    input: {
                      maxLength: 1,
                      inputMode: "numeric",
                      sx: { textAlign: "center" },
                      pattern: "[0-9]*",
                      autoComplete: "one-time-code",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Show error before the dialog buttons */}
          {otpError.length > 0 && (
            <Box>
              <Alert
                severity="error"
                sx={{
                  ...style.otpAlertbox,
                  padding: "4px 16px 0px 16px",
                }}
              >
                {otpError.map((error, idx) => (
                  <Typography key={idx} variant="body2">
                    {error}
                  </Typography>
                ))}
              </Alert>
            </Box>
          )}

          {/* Dialog cancel/confirm Buttons */}
          <Box sx={style.dialogButtons}>
            {/* cancel */}
            <Button
              disableRipple
              variant="outlined"
              sx={style.otpCancelButton}
              onClick={() => {
                setOpen(false);
                setOtp(new Array(6).fill(""));
                setOtpError([]);
                setOtpLoader(false);
                setLoading(false);
              }}
              disabled={otpLoader}
            >
              Cancel
            </Button>

            {/* confirm */}
            <Button
              disableRipple
              variant="contained"
              color="primary"
              sx={style.otpConfirmButton}
              onClick={handleVerifyOtp}
              disabled={otpLoader}
            >
              {otpLoader ? (
                <CircularProgress sx={style.otpLoader} size={20} />
              ) : (
                "Confirm"
              )}
            </Button>
          </Box>

          {/* Spam Text */}
          <Box>
            <Typography sx={style.dialogSpamText}>
              Didn't receive the code? Check your spam folder
            </Typography>
          </Box>

          {/* resend otp */}
          <Button
            disableRipple
            sx={style.dialogSendButton}
            // onClick={handleResendOtp}
            disabled={otpSendLoader}
          >
            {otpSendLoader ? (
              <CircularProgress
                sx={style.otpLoader}
                size={20}
                style={{ color: "#000", marginTop: "7px" }}
              />
            ) : (
              "Send Again"
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmployeeLoginForm;
