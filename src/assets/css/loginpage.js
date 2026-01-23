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
};

export default style;
