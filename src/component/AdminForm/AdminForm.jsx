import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Drawer,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import style from "../../assets/css/style.js";
import { RxCross2 } from "react-icons/rx";

const Adminform = ({
  showForm,
  setShowForm,
  admins,
  adminId,
  showEdit,
  setShowEdit,
  selectedAdminData,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "admin",
    roleId: "",
  });

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    fullName: "",
    email: "",
    roleId: "",
  });
  const [globalError, setGlobalError] = useState("");
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  // add admin api
  const handleAddAdmin = async (payload) => {
    try {
      setLoader(true);
      // await AddAdminApi(payload);
      fetchAdmins();
      setSuccess("Admin added successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  // update admin api
  const handleUpdateAdmin = async (id, payload) => {
    try {
      setLoader(true);
      // await UpdateAdminApi(id, payload);
      fetchAdmins();
      setSuccess("Admin updated successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  // Handle form close
  const handleClose = () => {
    setShowForm(false);
    setShowEdit(false);
    resetForm();
  };

  // input handler
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      role: "admin",
      roleId: "",
    });
    setIsEditMode(false);
    setSelectedAdminId(null);
    setError({
      fullName: "",
      email: "",
      roleId: "",
    });
    setGlobalError("");
  };

  // Handle edit mode population
  useEffect(() => {
    if (adminId && showEdit) {
      let admin = selectedAdminData;

      // Fallback to searching in admins array
      if (!admin) {
        admin = admins?.find?.((a) => a._id === adminId || a.id === adminId);
      }

      if (admin) {
        setIsEditMode(true);
        setSelectedAdminId(adminId);
        setFormData({
          fullName: admin.fullName,
          email: admin.email || "",
          role: admin.role || "admin",
          roleId: admin.roleId || admin.role?._id || admin.role || "",
        });
        setError({
          fullName: "",
          email: "",
          roleId: "",
        });
        setShowForm(true);
      }
    } else {
      resetForm();
    }
  }, [adminId, admins, showEdit, selectedAdminData]);

  // form submit handler
  const handleSubmit = async () => {
    setGlobalError("");
    let isValid = true;

    const validateEmail = (value) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value);
    };

    const newError = { ...error };

    // Full name validation
    if (!formData.fullName.trim()) {
      newError.fullName = "Please enter full name";
      isValid = false;
    } else {
      newError.fullName = "";
    }

    // Email validation
    if (!formData.email.trim()) {
      newError.email = "The email field is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newError.email = "The email field must be a valid email address";
      isValid = false;
    } else {
      newError.email = "";
    }

    // Role validation
    if (!formData.roleId) {
      newError.roleId = "Please select a role";
      isValid = false;
    } else {
      newError.roleId = "";
    }

    setError(newError);
    if (!isValid) return;

    setLoader(true);

    // add or update admin api based on mode
    try {
      if (isEditMode) {
        // Call the update API
        await handleUpdateAdmin(formData);
      } else {
        // Call the add API
        await handleAddAdmin(formData);
      }
    } catch (err) {
      // Handle API errors
      setGlobalError(err.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={showForm}
      onClose={handleClose}
      transitionDuration={300}
      sx={style.drawer}
    >
      {/* title */}
      <Box sx={style.editDialog}>
        <Typography sx={style.formHeading}>
          {isEditMode ? "Edit Admin" : "Add New Admin"}
        </Typography>
        <IconButton onClick={handleClose} sx={style.formButton} disableRipple>
          <RxCross2 size={25} color={"#fff"} />
        </IconButton>
      </Box>

      <Box sx={style.whiteDrawer}>
        <Box sx={{ p: "0px 20px" }}>
          {/* Global error */}
          {globalError && (
            <Alert
              severity="error"
              sx={style.drawerError}
              onClose={() => setGlobalError("")}
            >
              {globalError}
            </Alert>
          )}

          {/* Full Name */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Full Name</Typography>
            {error.fullName && (
              <Typography
                sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}
              >
                {error.fullName}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder="Enter full name"
            onChange={handleInput}
            sx={style.formField}
          />

          {/* Email */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Email Address</Typography>
            {error.email && (
              <Typography
                sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}
              >
                {error.email}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInput}
            sx={style.formField}
          />

          {/* Role */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Role</Typography>
            {error.roleId && (
              <Typography
                sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}
              >
                {error.roleId}
              </Typography>
            )}
          </Box>

          {/* options */}
          <FormControl fullWidth sx={style.formField}>
            <Select
              fullWidth
              name="roleId"
              onChange={handleInput}
              value={formData.roleId || ""}
              MenuProps={style.selectMenuProps}
              displayEmpty
              sx={{
                color: formData.roleId ? "#fff" : "#999",
                "& .MuiSelect-icon": { color: "#fff" },
              }}
            >
              {loadingRoles ? (
                <MenuItem disabled>Loading roles...</MenuItem>
              ) : roles.length === 0 ? (
                [
                  <MenuItem value="" disabled sx={{ color: "#fff" }}> Select Role </MenuItem>,
                  <MenuItem key="admin" disableRipple value="admin">
                    Admin
                  </MenuItem>,
                  <MenuItem key="manager" disableRipple value="manager">
                    Manager
                  </MenuItem>,
                ]
              ) : (
                roles.map((role) => (
                  <MenuItem key={role.id} disableRipple value={role.id}>
                    {role.name}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Submit button */}
      <Box sx={{ ...style.editActiondrawer, mt: 3 }}>
        <Button
          disableRipple
          disabled={loader}
          onClick={handleSubmit}
          sx={style.formSubmitButton}
        >
          {loader ? (
            <Box sx={style.adminAction}>
              <CircularProgress size="20px" sx={{ color: "#000" }} />
              <span>{isEditMode ? "Updating..." : "Adding..."}</span>
            </Box>
          ) : isEditMode ? (
            "Update Admin"
          ) : (
            "Add New Admin"
          )}
        </Button>
      </Box>
    </Drawer>
  );
};

export default Adminform;
