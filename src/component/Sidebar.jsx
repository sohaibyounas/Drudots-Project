import React, { useState } from "react";
import logowhite from "../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import style from "../assets/css/style.js";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  LOGIN,
  DASHBOARD,
  POLICIES,
  EMPLOYEEDASHBOARD,
} from "./Routes/RouterUrl.js";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { IoWarningOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from "../Constant/apiRoutes.js";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // logout api
  const handleLogout = async () => {
    setLoading(true);
    setErrors({});

    try {
      const res = await logoutUser();
      console.log("Logout response:", res.data);

      // Optional: redirect to login page
      navigate("/login");
      // Or clear local storage / auth token
      localStorage.removeItem("token");
    } catch (err) {
      setErrors({ email: "Logout failed. Please try again." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // logout dialog open & close
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrors({});
  };

  // stored user data
  const storedData = JSON.parse(localStorage.getItem("formData"));
  const userRole = storedData?.data?.admin?.role;

  // Toggle section expansion
  const toggleSection = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Sidebar Menu
  const sidebarMenu = [
    {
      key: "adminDashboard",
      label: "Admin dashboard",
      to: DASHBOARD,
      icon: <DashboardOutlinedIcon fontSize="small" />,
    },
    {
      key: "EmployeeDashboard",
      label: "Employee Dashboard",
      to: EMPLOYEEDASHBOARD,
      icon: <DashboardOutlinedIcon fontSize="small" />,
    },
    {
      key: "policies",
      label: "Policies",
      to: POLICIES,
      icon: <DescriptionOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <>
      <Box
        sx={{
          ...style.sidebar,
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 24px)",
          backgroundColor: "#1F2024",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={style.logomain}
          onClick={() => navigate(DASHBOARD)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logowhite}
            alt="Logo"
            style={{
              width: 70,
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* Menu Items (Scrollable) */}
        <Box
          sx={{
            ...style.sidebarMenu,
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {sidebarMenu?.map((section) => {
            const isOpen = !!expanded[section.key];
            return (
              <List key={section.key} disablePadding sx={{ mb: 1 }}>
                {/* Section Header */}
                <ListItemButton
                  onClick={() => toggleSection(section.key)}
                  sx={{
                    borderRadius: "12px",
                    color: "#fff",
                    mb: 0.5,
                    px: 1,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ ...style.sidebarListHeading }}>
                        {section.label}
                      </Typography>
                    }
                  />
                  {isOpen ? (
                    <ExpandMore sx={{ color: "#fff" }} />
                  ) : (
                    <ChevronRight sx={{ color: "#fff" }} />
                  )}
                </ListItemButton>
              </List>
            );
          })}
        </Box>

        {/* Logout button - fixed at bottom of sidebar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            p: "8px 16px",
            m: { xs: "0px 16px 8px 16px", sm: "0 16px 8px 16px" },
            borderRadius: "12px",
            cursor: "pointer",
            transition: "none",
            flexShrink: 0,
            position: { xs: "relative", sm: "relative" },
            zIndex: 1200,
            pb: {
              xs: `calc(6px + env(safe-area-inset-bottom, 0px))`,
              sm: `calc(6px + env(safe-area-inset-bottom, 0px))`,
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
          onClick={() => setOpen(true)}
        >
          <IoIosLogOut size={20} color="#fff" />
          {/* Logout button */}
          <Button
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textTransform: "none",
              padding: 0,
              minWidth: 0,
            }}
          >
            Logout
          </Button>
        </Box>

        {/* Logout Dialog */}
        <Dialog
          open={open}
          onClose={(event, reason) => {
            if (
              reason === "backdropClick" ||
              reason === "escapeKeyDown" ||
              loading
            ) {
              return;
            }
            handleClose();
          }}
          sx={style.dialog}
        >
          <DialogContent sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <IoWarningOutline color="#fb7185" size={28} />
            </Box>
            {/* title */}
            <Typography sx={style.dialogText}>
              Are you sure you want to log out?
            </Typography>

            {/* subtitle */}
            <Box sx={style.dialogSubText}>
              <Typography sx={style.dialogHeadText}>
                You will be redirected to the login page.
              </Typography>
            </Box>

            {/* error alert */}
            {errors.email && (
              <Alert severity="error" sx={{ ...style.formAlertbox, my: 2 }}>
                {errors.email}
              </Alert>
            )}

            {/* button box */}
            <Box sx={style.cancelBox}>
              <Button
                disableRipple
                variant="outlined"
                onClick={() => handleClose()}
                disabled={loading}
                sx={style.cancelTitle}
              >
                Cancel
              </Button>
              <Button
                disableRipple
                variant="contained" 
                onClick={handleLogout}
                disabled={loading}
                sx={style.deleteButon}
              >
                {loading ? (
                  <Box sx={style.loader}>
                    <CircularProgress size={20} sx={{ color: "#fff" }} />
                    <span style={{ color: "#fff" }}>
                      Deleting...
                    </span>
                  </Box>
                ) : (
                  "Logout"
                )}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default Sidebar;
