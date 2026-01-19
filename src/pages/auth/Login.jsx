import { Box } from "@mui/material";
import LoginForm from "./LoginForm.jsx";
import style from "../../assets/css/auth/style.js";
import logo from "../../assets/images/Logo.svg";

const Login = () => {

  return (
    // login page container
    <Box sx={style.loginPage}>
      {/* Logo Section */}
      <Box sx={style.logoSection}>
        <img src={logo} alt={"logo"} style={style.LoginPageLogo} />
      </Box>

      {/* Login Form Section */}
      <Box sx={style.loginFormSection}>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
