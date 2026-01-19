import { Box } from "@mui/material";
import style from "../../assets/css/style.js";
import logo from "../../assets/images/Logo.svg";
import ForgotPassword from "./ForgetPassword.jsx";

const OTP = () => {
  return (
    <Box sx={style.loginPage}>
      {/* Logo Section */}
      <Box sx={style.logoSection}>
        <img src={logo} alt={"logo"} style={style.LoginPageLogo} />
      </Box>

      {/* Forgot Password Section */}
      <Box sx={style.loginFormSection}>
        <ForgotPassword />
      </Box>
    </Box>
  );
};

export default OTP;
