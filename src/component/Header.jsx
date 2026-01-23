import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import style from "../assets/css/style.js";
import { IoMdReorder } from "react-icons/io";
import logowhite from "../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { EMPLOYEEDASHBOARD } from "./Routes/RouterUrl.js";
import Sidebar from "./Sidebar.jsx";
import toast from "react-hot-toast";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidemenuOpen = () => setSidebarOpen(true);
  const sidemenuClose = () => setSidebarOpen(false);

  return (
    <Box sx={style.headerMain}>
      {/* logo */}
      <Box
        sx={{ ...style.heaederLogoMain, cursor: "pointer" }}
        onClick={() => {
          navigate(EMPLOYEEDASHBOARD);
          toast.success("Welcome to Dashboard!");
        }}
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
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#000",
            backdropFilter: "none",
            border: "none",
            boxShadow: "none",
            overflow: "visible",
            width: "auto",
            p: 0,
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          },
        }}
      >
        <Sidebar />
      </Drawer>
    </Box>
  );
};

export default Header;
