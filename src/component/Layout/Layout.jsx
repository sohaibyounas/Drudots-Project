import React, { useState } from "react";
import { Box } from "@mui/material";
import style from "../../assets/css/style.js";
import Sidebar from "../Sidebar.jsx";
import Header from "../Header.jsx";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* header */}
      <Header
        onMenuClick={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
        sx={{ position: "fixed", top: 0 }}
      />

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
        {/* Toast Container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#333",
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </Box>
    </>
  );
};

export default Layout;
