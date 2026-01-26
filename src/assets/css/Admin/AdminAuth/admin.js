const style = {
  // Login Page Layout
  loginPage: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(180deg, #010103 0%, #040506 55%, #010103 100%)",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    "&:before": {
      content: "''",
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 30% 20%, rgba(0,122,255,0.2), transparent 55%)",
      filter: "blur(120px)",
      opacity: 0.9,
      pointerEvents: "none",
    },
  },

  // Logo Section
  logoSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: {
      xs: "32px 20px 24px",
      sm: "40px 24px 32px",
      md: "60px 30px",
    },
    width: { xs: "100%", md: "45%" },
    position: "relative",
    zIndex: 1,
  },

  LoginPageLogo: {
    width: { xs: "110px", sm: "150px", md: "180px" },
    height: "200px",
    filter: "brightness(0) saturate(100%) invert(1)",
  },

  logoText: {
    color: "#fff",
    fontSize: { xs: "36px", sm: "44px", md: "52px" },
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },

  logoSubText: {
    fontWeight: 400,
    opacity: 0.9,
  },

  // Login Form Section
  loginFormSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: {
      xs: "0 16px 40px",
      sm: "0 24px 48px",
      md: "20px",
    },
    position: "relative",
    zIndex: 1,
  },

  // Login Form Styles
  loginFormMain: {
    padding: { xs: "28px", sm: "34px" },
    width: "100%",
    maxWidth: { xs: "360px", sm: "420px", md: "440px" },
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(12,12,12,0.85)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
  },

  loginFormHeader: {
    textAlign: "left",
    marginBottom: { xs: 3, sm: 3.5 },
  },

  loginHeading: {
    color: "#fff",
    fontSize: { xs: "28px", sm: "30px" },
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "8px",
  },

  loginSubHeading: {
    color: "rgba(255,255,255,0.7)",
    fontSize: { xs: "15px", sm: "16px" },
    marginTop: 0,
    fontWeight: 400,
    lineHeight: 1.6,
    maxWidth: "320px",
  },

  loginFormContent: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "14px", sm: "18px" },
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 0.8,
  },

  loginFormLabel: {
    color: "rgba(255,255,255,0.75)",
    marginBottom: 0.5,
    fontSize: "13px",
    letterSpacing: 0.4,
    fontWeight: 500,
    textTransform: "uppercase",
  },

  loginFormInputPassword: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      fontSize: "14px",
      fontWeight: 400,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      height: "48px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.2s ease",
      "& .MuiInputBase-input": {
        padding: {
          xs: "12px 16px",
          sm: "12px 18px",
        },
        "&::placeholder": {
          color: "#999",
          opacity: 1,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        borderWidth: "0px",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        boxShadow:
          "0 0 0 2px rgba(0, 122, 255, 0.2), 0 4px 12px rgba(0, 122, 255, 0.3), inset 0 1px 2px rgba(0, 0, 0, 0.05)",
        border: "2px solid rgba(0, 122, 255, 0.8)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
          borderWidth: "0px",
        },
      },
    },
  },

  fieldErrorText: {
    color: "#EF4444",
    fontSize: {
      xs: 12,
      sm: 13,
    },
    fontWeight: 400,
    marginTop: 0.5,
    marginLeft: 0.5,
  },

  fieldErrorMessage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  formAlertbox: {
    backgroundColor: "rgba(235, 87, 87, 0.12)",
    color: "#ff6b6b",
    border: "1px solid rgba(235, 87, 87, 0.25)",
    borderRadius: "12px",
    "& .MuiAlert-icon": {
      display: "none",
    },
  },

  otpAlertbox: {
    mt: 2,
    backgroundColor: "rgba(235, 87, 87, 0.12)",
    color: "#ff6b6b",
    border: "1px solid rgba(235, 87, 87, 0.25)",
    borderRadius: "14px",
    px: 2,
    py: 0.5,
    textAlign: "left",
    "& .MuiAlert-icon": {
      display: "none",
    },
  },

  // OTP Dialog of login form
  dialog: {
    textAlign: "center",
    padding: "20px",
    width: { sm: "450px", xs: "350px" },
    "& .MuiDialog-container": {
      alignItems: "center",
      paddingTop: 0,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      scrollbarWidth: "none",
    },
    "& .MuiPaper-root": {
      background: "linear-gradient(180deg, #0A0E1A 0%, #05070D 100%)",
      borderRadius: "32px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 35px 60px rgba(0,0,0,0.55)",
      color: "#fff",
      padding: { sm: "38px 40px", xs: "28px 24px" },
    },
  },

  dialogText: {
    fontWeight: 600,
    fontSize: { sm: "22px", xs: "20px" },
    lineHeight: { sm: "28px", xs: "24px" },
    color: "#fff",
  },

  dialogSubText: {
    mt: "6px",
    mb: { sm: "26px", xs: "16px" },
    textAlign: "center",
  },

  dialogHeadText: {
    textAlign: "center",
    margin: { sm: "0px 24px", xs: "0px 12px" },
    color: "rgba(255,255,255,0.72)",
    fontWeight: 400,
    lineHeight: { sm: "24px", xs: "20px" },
    fontSize: { sm: "16px", xs: "14px" },
  },

  dialogEmail: {
    pt: { sm: "6px", xs: "4px" },
    pb: { sm: "2px", xs: "10px" },
    color: "#fff",
    fontWeight: 600,
    lineHeight: { sm: "24px", xs: "20px" },
    fontSize: "16px",
    letterSpacing: 0.2,
  },

  dialogOtp: {
    marginBottom: "10px",
    textAlign: "start",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 600,
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: 0.4,
  },

  dialogOtpInputs: {
    display: "flex",
    gap: "12px",
  },

  dialogOtpfields: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 20px 35px rgba(0,0,0,0.55)",
      transition: "all 0.2s ease",
    },

    // border on hover
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(10,132,255,0.7)",
      borderWidth: "1px",
    },

    //  border on focus (click)
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(10,132,255,0.95)",
      borderWidth: "2px",
      boxShadow: "0 0 0 2px rgba(10,132,255,0.25)",
    },

    "& .MuiInputBase-input": {
      height: { sm: "3rem", xs: "2.5rem" },
      padding: 0,
      textAlign: "center",
      fontWeight: 700,
      fontSize: { sm: "20px", xs: "18px" },
      color: "#fff",
    },
  },

  // OTP Dialog Buttons
  dialogButtons: {
    mt: "28px",
    mb: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { sm: "14px", xs: "10px" },
    flexWrap: "nowrap",
    width: "100%",
  },

  otpCancelButton: {
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
  },

  otpLoader: {
    size: "15px",
    color: "#fff",
  },

  otpConfirmButton: {
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
  },

  // otp spam warning text
  dialogSpamText: {
    pl: "0px",
    mt: "22px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "24px",
  },

  dialogSendButton: {
    color: "#0A84FF",
    textDecoration: "underline",
    background: "transparent",
    textTransform: "none",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: 0.2,
    "&:hover": {
      textDecoration: "underline",
      background: "transparent",
      color: "#0067CC",
    },
  },

  // Forgot Password Page
  forgotPasswordSection: {
    textAlign: "center",
    marginTop: { xs: 1, sm: 1.2 },
  },

  forgotPassword: {
    fontSize: { xs: 13, sm: 14 },
    fontWeight: 400,
    color: "rgba(255,255,255,0.6)",
  },

  ResetPasswordButton: {
    color: "#0A84FF",
    textTransform: "none",
    textDecoration: "underline",
    fontSize: { xs: 13, sm: 14 },
    fontWeight: 500,
    padding: "0 4px",
    minWidth: "auto",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "transparent",
      color: "#80b8ff",
    },
  },

  signInButton: {
    marginBottom: "10px",
    marginTop: "8px",
    height: "44px",
    textTransform: "none",
    background: "#0A84FF",
    color: "#fff",
    borderRadius: "18px",
    fontSize: "15px",
    fontWeight: 500,
    boxShadow: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "background-color 0.2s ease",
    "&:hover": {
      background: "#006fdd",
      boxShadow: "none",
    },
    "&:active": {
      transform: "none",
      boxShadow: "none",
    },
  },

  // OTP-Dialog
  otpPage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#000",
  },

  otpLogoSection: {
    display: { xs: "flex", md: "block" },
    alignItems: { xs: "center", md: "flex-start" },
    justifyContent: { xs: "flex-start", md: "flex-start", sm: "flex-start" },
    padding: {
      xs: "30px 0px 0px 0px",
      sm: "30px 0px 0px 0px",
      md: "40px 0px 0px 0px",
    },
    width: "100%",
  },

  otpPageLogo: {
    width: { xs: "100px", sm: "130px", md: "160px" },
    paddingLeft: "30px",
    height: "auto",
    filter: "brightness(0) saturate(100%) invert(1)",
  },

  forgotPassSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: {
      xs: 2,
      sm: "0px",
      md: "0px",
    },
  },

  // Forgot Password Page
  ForgotPassMain: {
    padding: { xs: "28px", sm: "34px" },
    width: "100%",
    maxWidth: {
      xs: "360px",
      sm: "420px",
      md: "440px",
    },
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(12,12,18,0.88)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",
  },

  // Text Header
  ForgotPassHeader: {
    textAlign: "left",
    marginBottom: {
      xs: 2.5,
      sm: 3,
    },
  },

  // Text Main-Heading
  ForgotPassHeading: {
    color: "#fff",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "1.3",
    marginBottom: 0,
  },

  // Text Sub-Heading
  ForgotPassSubHeading: {
    color: "rgba(255,255,255,0.7)",
    maxWidth: "340px",
    fontSize: "15px",
    marginTop: "10px",
    fontWeight: 400,
    lineHeight: { sm: "22px" },
  },

  // forgot password alert
  forgotAlert: {
    width: { xs: "70%", sm: "70%", md: "100%" },
  },

  // forgot email
  forgotEmail: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // OTP Email-Input
  otpEmail: {
    display: "flex",
    flexDirection: "column",
  },

  otpEmailLabel: {
    fontSize: {
      xs: "13px",
      md: "13px",
    },
    fontWeight: 500,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    lineHeight: { xs: "18px", md: "18px" },
    color: "rgba(255,255,255,0.68)",
    marginBottom: 1,
  },

  otpEmailInput: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      fontSize: "14px",
      fontWeight: 400,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      height: "48px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 16px rgba(4, 12, 24, 0.2)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      transition: "all 0.2s ease",
      "& .MuiOutlinedInput-input": {
        padding: {
          xs: "12px 16px",
          sm: "12px 18px",
        },
        "&::placeholder": {
          color: "#7A8194",
          opacity: 1,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&:hover": {
        borderColor: "transparent",
        boxShadow: "0 6px 18px rgba(4, 12, 24, 0.3)",
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        border: "2px solid rgba(10, 132, 255, 0.7)",
        boxShadow: "0 0 0 2px rgba(10, 132, 255, 0.2)",
      },
    },
  },

  // OTP-Email Error Message
  otpEmailErrorMessage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Send OTP button
  sendOtp: {
    marginBottom: "10px",
    marginTop: "8px",
    height: "44px",
    textTransform: "none",
    background: "#0A84FF",
    color: "#fff",
    borderRadius: "18px",
    fontSize: "15px",
    fontWeight: 500,
    boxShadow: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "background-color 0.2s ease",
    "&:hover": {
      background: "#006fdd",
      boxShadow: "none",
    },
    "&:active": {
      transform: "none",
      boxShadow: "none",
    },
  },

  // Remember-Password
  rememberPassword: {
    textAlign: "center",
    marginTop: "25px",
  },

  rememberPasswordText: {
    color: "rgba(255,255,255,0.65)",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "23px",
  },

  trySignin: {
    mt: "4px",
    mb: "12px",
    fontWeight: 500,
    color: "#0A84FF",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "15px",
    lineHeight: "0px",
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default style;
