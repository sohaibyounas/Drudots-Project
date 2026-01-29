import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import Dialog from "../../../component/Ui/Dialog.jsx";
import style from "../../../assets/css/Admin/AdminAuth/admin.js";
import { useNavigate } from "react-router-dom";
import { adminLoginApi, sendOtp, verifyOtp } from "../../../Constant/apiRoutes.js";
import { ADMINDASHBOARD } from "../../../component/Routes/RouterUrl.js";
import toast from "react-hot-toast";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false); //otp dialog
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);
  const [otpSendLoader, setOtpSendLoader] = useState(false);

  // login admin api
  const AdminLogin = async () => {
    // navigate to admin dashboard
    navigate(ADMINDASHBOARD, { replace: true });
    return;

    setLoading(true);
    setErrors([]);

    try {
      const response = await adminLoginApi({
        email: formData.email,
        password: formData.password,
      });
      console.log("Admin login response:", response);

      // API success case
      if (response.data) {
        toast.success(response.data.messgae || "Login successful!");

        const userData = response.data?.data;
        const token = userData?.token;
        const role = (userData?.user_type || "admin").toLowerCase();

        localStorage.clear(); // Clear old session data
        localStorage.setItem("token", token);
        localStorage.setItem("data", JSON.stringify(userData));
        localStorage.setItem("userRole", role);

        setOpen(true); //open otp dialog
      }
    } catch (error) {
      console.error("Failed to login", error);
      const errors = error.response?.data?.errors || [
        "Server error. Please try again.",
      ];
      setErrors(errors);
    } finally {
      setLoading(false);
    }
  };

  // login api in use-Effect
  // useEffect(() => {
  //   AdminLogin();
  // }, []); //add dependencies here

  // verify otp api
  const handleVerifyOtp = async (e) => {
    e?.preventDefault();

    // Get OTP value from array
    const otpValue = otp.join("");

    // Validate OTP is complete
    if (otpValue.length !== 6) {
      setOtpError(["Please enter complete 6-digit OTP"]);
      return;
    }
    navigate(ADMINDASHBOARD, { replace: true });
    if (otpLoader) return;

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
        navigate(ADMINDASHBOARD, { replace: true });
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
    // otp send api recall here
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

  // check input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  // OTP input handlers
  const otpRefs = useRef([]);

  // check otp changes
  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (otpError.length > 0) setOtpError([]);

    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // handle backspace in otp inputs
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        otpRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  // handle paste event for otp inputs
  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData("Text").trim();
    if (!/^\d{6}$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp(newOtp);

    if (otpError.length > 0) setOtpError([]);

    otpRefs.current[5]?.focus();
    e.preventDefault();
  };

  // form validation
  const validateForm = () => {
    const newErrors = [];

    // email validation
    if (!formData.email.trim()) {
      newErrors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.push("Please enter a valid email address");
    }

    return newErrors;
  };

  // form submit handler
  const handleSubmit = async (event) => {
    event?.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    await AdminLogin();
  };

  return (
    <>
      {/* admin form */}
      <Paper sx={style.loginFormMain} elevation={0}>
        {/* Login Form Header */}
        <Box sx={style.loginFormHeader}>
          <Typography sx={style.loginHeading}>Welcome to Drudots</Typography>
          <Typography sx={style.loginSubHeading}>
            Please enter your credentials to sign in to the admin account.
          </Typography>
        </Box>

        {/* Form error alert */}
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

        {/* login form */}
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

          {/* submit button */}
          <Button
            disableRipple
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={style.signInButton}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size="24px" color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </Box>
      </Paper>

      {/* OTP Dialog box */}
      <Dialog
        open={open}
        onClose={(event, reason) => {
          // Only allow closing via Cancel button, not backdrop or escape
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            return;
          }
          setOpen(false); //Reset otp states on close
          setOtp(new Array(6).fill(""));
          setOtpError([]);
          setOtpLoader(false);
        }}
        sx={style.dialog}
      >
        <DialogContent sx={style.dialogContent}>
          {/* text inputs  */}
          <Box>
            <Typography sx={style.dialogText}>Account Verification</Typography>
            {/* email text */}
            <Box sx={style.dialogSubText}>
              <Typography sx={style.dialogHeadText}>
                A 6-digit OTP code has been sent to the provided email address.
              </Typography>
              <Typography sx={style.dialogEmail}>{formData.email}</Typography>
            </Box>

            {/* otp */}
            <Typography sx={style.dialogOtp}>OTP</Typography>

            {/* OTP Inputs fields */}
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

          {/* OTP error alerts */}
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

          {/* OTP Dialog Buttons */}
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
              // send otp api 1st time
              // onClick={handleVerifyOtp}
              disabled={otpLoader}
            >
              {otpLoader ? (
                <CircularProgress size={20} color="#fff" />
              ) : (
                "Confirm"
              )}
            </Button>
          </Box>

          {/* OTP Spam Warning */}
          <Box>
            <Typography sx={style.dialogSpamText}>
              Didn't receive the code? Check your spam folder
            </Typography>
          </Box>

          {/* Resend OTP Button */}
          <Button
            disableRipple
            sx={style.dialogSendButton}
            // resend api
            // onClick={handleResendOtp}
            disabled={otpSendLoader}
          >
            {otpSendLoader ? (
              <CircularProgress
                size={20}
                sx={style.otpLoader}
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

export default AdminLoginForm;
