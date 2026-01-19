import React, { useState } from "react";
import { Box } from "@mui/material";
import style from "../../assets/css/style.js";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Sidebar.jsx";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* layout */}
      <Box sx={style.layout}>
        {/* sidebar */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar />
        </Box>

        {/* sidebar */}
        <Box
          sx={{
            ...style.layoutContentDetails,
            background: "#000000ff",
          }}
        >
          {children}
        </Box>
      </Box>

      {/* set toast for all pages */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );j
};

export default Layout;
