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
import { LoginApi } from "../../../Constant/apiRoutes.js";
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

  // clear opt & err message on reopen OTP dialog
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

  // validate email
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

  // Main login function
  const handleSubmit = async (event) => {
    event?.preventDefault();

    const validationErrors = validateForm();
    setOtp(new Array(6).fill(""));

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      validationErrors.forEach((error) => toast.error(error));
      return;
    }

    setErrors([]);
    setLoading(true);

    await performLogin();
  };

  // login API
  const performLogin = async () => {
    try {
      const response = await LoginApi({
        email: formData.email,
        password: formData.password,
      });

      console.log("Login response:", response);
      Console.info("formdata", formData);

      // Stop both loaders
      setLoading(false);
      setOtpSendLoader(false);

      if (response.data?.status === true) {
        toast.success("OTP sent successfully to your email!");
        setOpen(true);
        localStorage.setItem("authToken", response.data?.data?.token); // store token
        localStorage.setItem("data", response.data?.data); // store data
      } else {
        const message = response.data?.errors[0] || "Something went wrong";
        toast.error(message);
        setErrors([message]);
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.errors[0] ||
        error.response?.data?.error ||
        "Invalid credentials. Please try again.";
      setErrors([errorMessage]);
      toast.error(errorMessage);
      setLoading(false);
      setOtpSendLoader(false);
    }
  };

  // resend otp api
  // const resendOtpApi = async (email) => {
  //   try {
  //     const response = await resendOtp({ email });
  //     console.info("Resend OTP response:", response);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // Send Again function
  const handleSendAgain = async () => {
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      validationErrors.forEach((error) => toast.error(error));
      return;
    }

    setErrors([]);
    setOtp(new Array(6).fill(""));
    setOtpSendLoader(true);

    try {
      // await resendOtpApi(formData.email);
      toast.success("OTP resent successfully!");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Failed to resend OTP";
      setErrors([errorMessage]);
      toast.error(errorMessage);
    } finally {
      setOtpSendLoader(false);
    }
  };

  // OTP verify API
  // const handleVerify = async () => {
  //   // otp validation
  //   if (otp.some((digit) => digit === "" || !/^\d$/.test(digit))) {
  //     const errorMsg = "Please enter a valid 6-digit OTP";
  //     setOtpError([errorMsg]);
  //     toast.error(errorMsg);
  //     return;
  //   }

  //   try {
  //     setOtpLoader(true);
  //     const response = await verifyOtp({
  //       email: formData.email,
  //       otp: otp.join(""),
  //     });

  //     console.log("Verify OTP response:", response);

  //     if (response.data?.status === 200) {
  //       // Close dialog and reset state
  //       setOpen(false);
  //       setOtpLoader(false);
  //       setOtp(new Array(6).fill(""));
  //       setOtpError([]);

  //       // Navigate to dashboard
  //       navigate(EMPLOYEEDASHBOARD, { replace: true });
  //     } else {
  //       const errorMsg = response.data?.message || "OTP verification failed";
  //       setOtpError([errorMsg]);
  //       toast.error(errorMsg);
  //       setOtpLoader(false);
  //     }
  //   } catch (error) {
  //     console.error("Verify error:", error);
  //     const errorMessage =
  //       error.response?.data?.message ||
  //       "OTP verification failed. Please try again.";
  //     setOtpError([errorMessage]);
  //     toast.error(errorMessage);
  //     setOtpLoader(false);
  //   }
  // };

  // resend otp api
  // const handleResendOtp = async () => {
  //   setOtpSendLoader(true);
  //   try {
  //     await resendOtp({ email: formData.email });
  //   } catch (error) {
  //     console.error("Resend OTP failed:", error);
  //   } finally {
  //     setOtpSendLoader(false);
  //   }
  // };

  // OTP dialog
  const handleCLickOtp = () => {
    navigate(FORGETPASSWORD);
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
                onClick={handleCLickOtp}
                color="primary"
                sx={{
                  textTransform: "none",
                  textDecoration: "underline",
                  fontSize: { xs: 14, sm: 15 },
                  fontWeight: 500,
                  padding: "0 4px",
                  minWidth: "auto",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                    opacity: 0.8,
                  },
                }}
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
            sx={{
              marginBottom: "10px",
              marginTop: "8px",
              height: "42px",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 2px 8px rgba(10, 132, 255, 0.3)",
              },
              "&:active": {
                transform: "translatey(1px)",
              },
            }}
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
        <DialogContent>
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
            <Button
              disableRipple
              variant="outlined"
              sx={{
                flex: 1,
                maxWidth: "230px",
                height: "44px",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#fff",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "24px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "none",
                transition: "all 0.2s ease",
                borderColor: "rgba(255,255,255,0.15)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                  borderColor: "rgba(255,255,255,0.25)",
                },
              }}
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
            <Button
              disableRipple
              variant="contained"
              color="primary"
              sx={{
                flex: 1,
                maxWidth: "230px",
                height: "44px",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "24px",
                boxShadow: "none",
                border: "none",
                transition: "all 0.2s ease",
                "&:active": {
                  transform: "translateY(1px)",
                },
              }}
              // onClick={handleVerify}
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
            onClick={handleSendAgain}
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
