import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import style from "../../assets/css/style.js";
import Sidebar from "../Sidebar.jsx";
import Header from "../Header.jsx";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // sidebar hid/show
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const rawRole = localStorage.getItem("role");
  const role = rawRole ? rawRole.toLowerCase() : null;
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    // 1. Not logged in -> Redirect to login
    if (!token) {
      if (location.pathname.startsWith("/admin")) {
        navigate("/admin/login", { replace: true });
      } else {
        navigate("/employee/login", { replace: true });
      }
      return;
    }

    // 2. Role-based route protection
    if (role !== "admin" && location.pathname.startsWith("/admin")) {
      navigate("/employee/dashboard", { replace: true });
      return;
    }

    // ADDED: Employee accessing admin routes
    if (role === "employee" && location.pathname.startsWith("/admin")) {
      navigate("/employee/dashboard", { replace: true });
      return;
    }
  }, [location.pathname, navigate, role, token]);

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
        {/* sidebar - PASS ROLE TO SIDEBAR */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar role={role} />
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
