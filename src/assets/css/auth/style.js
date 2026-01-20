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
      md: "50px",
    },
    position: "relative",
    zIndex: 1,
  },

  // Login Form Card
  loginFormMain: {
    padding: { xs: "28px 24px", sm: "36px 32px", md: "40px 34px" },
    width: "100%",
    maxWidth: { xs: "100%", sm: "420px", md: "460px" },
    borderRadius: { xs: "20px", sm: "24px" },
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(18,18,18,0.9)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
  },

  loginFormHeader: {
    textAlign: "left",
    marginBottom: { xs: 2.5, sm: 3, md: 4 },
  },

  loginHeading: {
    color: "#fff",
    fontSize: { xs: "24px", sm: "28px", md: "30px" },
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: { xs: "8px", sm: "10px" },
  },

  loginSubHeading: {
    color: "rgba(255,255,255,0.65)",
    fontSize: { xs: "13px", sm: "14px", md: "15px" },
    marginTop: 0,
    fontWeight: 400,
    lineHeight: 1.6,
  },

  loginFormContent: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "18px", sm: "20px", md: "24px" },
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: 0.6, sm: 0.8 },
  },

  loginFormLabel: {
    color: "rgba(255,255,255,0.7)",
    marginBottom: { xs: 0.3, sm: 0.4, md: 0.5 },
    fontSize: { xs: "11px", sm: "12px" },
    letterSpacing: { xs: 0.6, sm: 0.8 },
    fontWeight: 600,
    textTransform: "uppercase",
  },

  loginFormInput: {
    "& .MuiOutlinedInput-root": {
      borderRadius: { xs: "14px", sm: "16px" },
      fontSize: { xs: "14px", sm: "15px" },
      fontWeight: 400,
      backgroundColor: "rgba(255, 255, 255, 0.97)",
      height: { xs: "48px", sm: "50px", md: "52px" },
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "& .MuiInputBase-input": {
        padding: { xs: "12px 14px", sm: "14px 16px", md: "14px 18px" },
        "&::placeholder": {
          color: "#999",
          opacity: 1,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        borderWidth: "0px",
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow:
          "0 0 0 3px rgba(33, 150, 243, 0.25), 0 6px 20px rgba(33, 150, 243, 0.2)",
        border: "2px solid #2196F3",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
          borderWidth: "0px",
        },
      },
    },
  },

  signInButton: {
    marginTop: { xs: "4px", sm: "6px", md: "8px" },
    height: { xs: "48px", sm: "50px", md: "52px" },
    fontSize: { xs: "15px", sm: "16px" },
    fontWeight: 600,
    textTransform: "none",
    borderRadius: { xs: "14px", sm: "16px" },
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0 2px 8px rgba(10, 132, 255, 0.3)",
    },
    "&:active": {
      transform: "translateY(1px)",
    },
  },

  formAlertbox: {
    backgroundColor: "rgba(239, 68, 68, 0.15)",
    color: "#ff6b6b",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    borderRadius: { xs: "10px", sm: "12px" },
    fontSize: { xs: "13px", sm: "14px" },
    padding: { xs: "10px 14px", sm: "12px 16px" },
    "& .MuiAlert-icon": {
      display: "none",
    },
  },

  // Error alert container with fixed height to prevent scrolling
  formErrorContainer: {
    mb: 2,
    minHeight: "50px",
    display: "flex",
    alignItems: "flex-start",
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

  // OTP Dialog Styles
  dialog: {
    textAlign: "center",
    padding: "20px",
    width: { sm: "450px", xs: "350px" },
    "& .MuiDialog-container": {
      alignItems: "center",
      paddingTop: 0,
      overflow: "hidden",
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
      maxHeight: "90vh",
    },
  },

  dialogText: {
    fontWeight: 600,
    fontSize: { sm: "22px", xs: "20px" },
    lineHeight: { sm: "28px", xs: "24px" },
    color: "#fff",
    overflow: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
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

  otpLoader: {
    size: "15px",
    color: "#fff",
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
    borderRadius: "14px",
    "&:active": {
      transform: "translateY(1px)",
    },
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
    borderRadius: "14px",
    "&:active": {
      transform: "translateY(1px)",
    },
  },

  // spam text
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
};

export default style;
