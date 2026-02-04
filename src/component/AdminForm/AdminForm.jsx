import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import style from "../../assets/css/style.js";

const Adminform = ({
  showForm,
  setShowForm,
  admins,
  adminId,
  showEdit,
  setShowEdit,
  selectedAdminData,
  fetchAdmins,
  setSuccess,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    roleId: "",
  });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({ fullName: "", email: "", roleId: "" });
  const [globalError, setGlobalError] = useState("");
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  // Add admin API
  const handleAddAdmin = async (payload) => {
    try {
      setLoader(true);
      // await AddAdminApi(payload);
      fetchAdmins?.();
      setSuccess?.("Admin added successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  // Update admin API
  const handleUpdateAdmin = async (id, payload) => {
    try {
      setLoader(true);
      // await UpdateAdminApi(id, payload);
      fetchAdmins?.();
      setSuccess?.("Admin updated successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  // Close form drawer
  const handleClose = () => {
    setShowForm(false);
    setShowEdit(false);
    resetForm();
  };

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "roleId") {
      let roleName = value;
      const selectedRole = roles.find((r) => r.id === value || r._id === value);
      if (selectedRole) roleName = selectedRole.name;

      setFormData((prev) => ({ ...prev, roleId: value, role: roleName }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setError((prev) => ({ ...prev, [name]: "" }));
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({ fullName: "", email: "", role: "", roleId: "" });
    setIsEditMode(false);
    setSelectedAdminId(null);
    setError({ fullName: "", email: "", roleId: "" });
    setGlobalError("");
  };

  // Populate form in edit mode
  useEffect(() => {
    if (adminId && showEdit) {
      let admin = selectedAdminData || admins?.find((a) => a._id === adminId || a.id === adminId);

      if (admin) {
        setIsEditMode(true);
        setSelectedAdminId(adminId);
        setFormData({
          fullName: admin.fullName,
          email: admin.email || "",
          role: admin.role || "admin",
          roleId: admin.roleId || admin.role?._id || (typeof admin.role === "string" ? admin.role.toLowerCase() : "admin"),
        });
        setError({ fullName: "", email: "", roleId: "" });
        setShowForm(true);
      }
    } else {
      resetForm();
    }
  }, [adminId, admins, showEdit, selectedAdminData]);

  // Form submission
  const handleSubmit = async () => {
    setGlobalError("");
    let isValid = true;
    const newError = { ...error };

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    // Validation name, email, role
    if (!formData.fullName.trim()) {
      newError.fullName = "Please enter full name";
      isValid = false;
    }

    // email
    if (!formData.email.trim()) {
      newError.email = "The email field is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newError.email = "The email field must be a valid email address";
      isValid = false;
    }

    // role
    if (!formData.roleId) {
      newError.roleId = "Please select a role";
      isValid = false;
    }

    setError(newError);
    if (!isValid) return;

    setLoader(true);

    try {
      // API calls commented for future use - working without backend for now
      if (isEditMode) await handleUpdateAdmin(selectedAdminId, formData);
      else await handleAddAdmin(formData);

      // Close form after successful submission
      handleClose();
    } catch (err) {
      setGlobalError(err.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <Drawer anchor="right" open={showForm} onClose={handleClose} transitionDuration={300} sx={style.drawer}>
      {/* Header */}
      <Box sx={style.editDialog}>
        <Typography sx={style.formHeading}>{isEditMode ? "Edit Admin" : "Add New Admin"}</Typography>
        <IconButton onClick={handleClose} sx={style.formButton} disableRipple>
          <RxCross2 size={25} color="#fff" />
        </IconButton>
      </Box>

      {/* Form */}
      <Box sx={style.whiteDrawer}>
        <Box sx={{ p: "0px 20px" }}>
          {globalError && (
            <Alert severity="error" sx={style.drawerError} onClose={() => setGlobalError("")}>
              {globalError}
            </Alert>
          )}

          {/* Full Name */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Full Name</Typography>
            {error.fullName && <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>{error.fullName}</Typography>}
          </Box>
          <TextField fullWidth id="fullName" name="fullName" value={formData.fullName} placeholder="Enter full name" onChange={handleInput} sx={style.formField} />

          {/* Email */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Email Address</Typography>
            {error.email && <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>{error.email}</Typography>}
          </Box>

          {/* email input */}
          <TextField fullWidth id="email" name="email" autoComplete="email" placeholder="Email Address" value={formData.email} onChange={handleInput} sx={style.formField} />

          {/* Role */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Role</Typography>
            {error.roleId && <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>{error.roleId}</Typography>}
          </Box>
          <FormControl fullWidth sx={style.formField}>
            <Select
              fullWidth
              name="roleId"
              onChange={handleInput}
              value={formData.roleId || ""}
              MenuProps={style.selectMenuProps}
              displayEmpty
              sx={{ color: formData.roleId ? "#fff" : "#999", "& .MuiSelect-icon": { color: "#fff" } }}
            >
              {/* if roles are loading */}
              {loadingRoles ? (
                <MenuItem disabled>Loading roles...</MenuItem>
              ) : roles.length === 0 ? (
                [
                  <MenuItem key="select-role" value="" disabled sx={{ color: "#fff" }}>
                    Select Role
                  </MenuItem>,
                  <MenuItem key="admin" disableRipple value="admin">
                    Admin
                  </MenuItem>,
                  <MenuItem key="manager" disableRipple value="manager">
                    Manager
                  </MenuItem>,
                ]
              ) : (
                roles.map((role) => (
                  <MenuItem key={role.id || role._id} disableRipple value={role.id || role._id}>
                    {role.name}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

        </Box>
      </Box>

      {/* Submit Button */}
      <Box sx={{ ...style.editActiondrawer, mt: 3 }}>
        <Button
          disableRipple
          disabled={loader}
          onClick={handleSubmit}
          sx={style.formSubmitButton}
        >
          {loader ? (
            <Box sx={style.actionLoader}>
              <CircularProgress size={18} thickness={4} sx={{ color: "#000" }} />
              <span style={style.spanLoader}>{isEditMode ? "Updating Admin..." : "Adding Admin..."}</span>
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
