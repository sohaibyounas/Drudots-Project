import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import style from "../assets/css/style.js";
import { IoMdReorder } from "react-icons/io";
import logowhite from "../assets/images/Logo.svg";
import Sidebar from "./Sidebar.jsx";
// import { useNavigate } from "react-router-dom";
// import { EMPLOYEEDASHBOARD } from "./Routes/RouterUrl.js";
// import toast from "react-hot-toast";

const Header = ({ onMenuClick }) => {
  // const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidemenuOpen = () => setSidebarOpen(true); //sidebar open
  const sidemenuClose = () => setSidebarOpen(false); //sidebar close

  return (
    <Box sx={style.headerMain}>
      {/* logo */}
      <Box
        sx={{ ...style.heaederLogoMain, cursor: "pointer" }}
      // onClick={() => {
      //   navigate(EMPLOYEEDASHBOARD);
      //   toast.success("Welcome to Dashboard!");
      // }}
      >
        <img
          src={logowhite}
          alt={"Logo white"}
          style={style.headerLogoImg}
        />
      </Box>

      {/* sidebar */}
      <Box onClick={onMenuClick} sx={style.headerHumberger}>
        {/* icon */}
        <IoMdReorder size={40} onClick={sidemenuOpen} />
      </Box>

      {/* Drawer for sidebar*/}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={sidemenuClose}
        variant="temporary"
        sx={style.root}
        PaperProps={{
          elevation: 0,
          sx: style.paper,
        }}
      >
        <Sidebar onMenuItemClick={sidemenuClose} />
      </Drawer>
    </Box>
  );
};

export default Header;
