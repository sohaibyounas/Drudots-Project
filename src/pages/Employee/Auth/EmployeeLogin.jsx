import { Box } from "@mui/material";
import style from "../../../assets/css/loginpage.js";
import logo from "../../../assets/images/Logo.svg";
import EmployeeLoginForm from "./EmployeeLoginForm.jsx";

const EmployeeLogin = () => {
  return (
    // employee login page container
    <Box sx={style.loginPage}>
      {/* Logo Section */}
      <Box sx={style.logoSection}>
        <img src={logo} alt={"logo"} style={style.LoginPageLogo} />
      </Box>

      {/* employee Login Form Section */}
      <Box sx={style.loginFormSection}>
        <EmployeeLoginForm />
      </Box>
    </Box>
  );
};

export default EmployeeLogin;
