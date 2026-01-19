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
import Dialog from "../../component/Ui/Dialog";
import style from "../../assets/css/auth/style.js";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../component/Routes/RouterUrl";
import { resendOtp, sendOtp, verifyOtp } from "../../Constant/apiRoutes.js";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);
  const [otpSendLoader, setOtpSendLoader] = useState(false);

  // send otp api
  const handleOtpApi = async () => {
    setOtpSendLoader(true);
    try {
      await sendOtp({ email: formData.email });
    } catch (error) {
      console.error("OTP sending failed:", error);
    } finally {
      setOtpSendLoader(false);
    }
  };

  // verify otp
  const handleVerifyotp = async () => {
    const otpCode = otp.join("");

    // check otp length
    if (otpCode.length !== 6) {
      setOtpError(["Please enter complete 6-digit OTP"]);
      return;
    }
    setOtpLoader(true);
    try {
      await verifyOtp({ email: formData.email, otp: otpCode });
      navigate(DASHBOARD);
    } catch (error) {
      console.error("OTP verification failed:", error);
    } finally {
      setOtpLoader(false);
    }
  };

  // resend otp api
  const handleResendOtp = async () => {
    setOtpSendLoader(true);
    try {
      await resendOtp({ email: formData.email });
    } catch (error) {
      console.error("Resend OTP failed:", error);
    } finally {
      setOtpSendLoader(false);
    }
  };

  // clear opt & err message on reopen OTP dialog
  // useEffect(() => {
  //   if (open) {
  //     setOtp(new Array(6).fill(""));
  //     setOtpError([]);
  //     // send otp automatically
  //     handleOtpApi();
  //   }
  // }, [open]);

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

    if (!formData.email.trim()) {
      newErrors.push("Email address is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.push("Please enter a valid email address");
    }

    return newErrors;
  };

  // form submit handler
  const handleSubmit = (event) => {
    event?.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    setOpen(true);
  };

  return (
    <>
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
            <Typography sx={style.loginFormLabel}>Email Address</Typography>
            <TextField
              name="email"
              type="email"
              fullWidth
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              sx={style.loginFormInput}
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
          // Reset otp states on close
          setOpen(false);
          setOtp(new Array(6).fill(""));
          setOtpError([]);
          setOtpLoader(false);
        }}
        sx={style.dialog}
      >
        <DialogContent sx={style.dialogText}>
          {/* text input  */}
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
              // onClick={handleVerifyotp}
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
            <Typography sx={style.otpSpamText}>
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

export default LoginForm;
