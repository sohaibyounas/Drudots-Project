const style = {
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

  dialogContent: {
    p: "8px 16px",
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

  // Forgot Password secion on login page
  forgotPasswordSection: {
    textAlign: "center",
    marginTop: { xs: 1, sm: 1.2 },
  },

  forgotPassword: {
    fontSize: { xs: 13, sm: 14 },
    fontWeight: 400,
    color: "rgba(255,255,255,0.6)",
  },

  forgotPasswordButton: {
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

};

export default style;
