import { Box } from "@mui/material";
import style from "../../../assets/css/loginpage.js";
import logo from "../../../assets/images/Logo.svg";
import AdminLoginForm from "./AdminLoginForm.jsx";

const AdminLogin = () => {
  return (
    // admin login page container
    <Box sx={style.loginPage}>
      {/* Logo Section */}
      <Box sx={style.logoSection}>
        <img src={logo} alt={"logo"} style={style.LoginPageLogo} />
      </Box>

      {/* admin login form section */}
      <Box sx={style.loginFormSection}>
        <AdminLoginForm />
      </Box>
    </Box>
  );
};

export default AdminLogin;
