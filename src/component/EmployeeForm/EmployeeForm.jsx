import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import style from "../../assets/css/style";
import { RxCross2 } from "react-icons/rx";

const Employeeform = ({
  showForm,
  setShowForm,
  admins,
  fetchEmployee,
  adminId,
  showEdit,
  setShowEdit,
  setSuccess,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [globalError, setGlobalError] = useState("");

  // Handle form close
  const handleClose = () => {
    setShowForm(false);
    setShowEdit(false);
    resetForm();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
    });
    setIsEditMode(false);
    setSelectedAdminId(null);
    setError({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
    });
    setGlobalError("");
  };

  // Handle edit profile
  useEffect(() => {
    if (adminId && showEdit) {
      const list = extractList(admins);
      const admin = list?.find?.((a) => a._id === adminId || a.id === adminId);

      if (admin) {
        setIsEditMode(true);
        setSelectedAdminId(adminId);
        setFormData({
          fullName: admin.fullName || "",
          email: admin.email || "",
          phone: admin.phone || "",
          gender: admin.gender || "",
        });
        setError({
          fullName: "",
          email: "",
          phone: "",
          gender: "",
        });
        setShowForm(true);
      }
    } else {
      resetForm();
    }
  }, [adminId, admins, showEdit]);

  // check validations
  const handleSubmit = async () => {
    setGlobalError("");
    let isValid = true;

    // Email validation
    const validateEmail = (value) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value);
    };

    // Phone validation (basic - adjust based on your requirements)
    const validatePhone = (value) => {
      const regex = /^[\d\s\-\+\(\)]+$/;
      return regex.test(value) && value.replace(/\D/g, "").length >= 10;
    };

    const newError = { ...error };

    // Full name validate
    if (!formData.fullName.trim()) {
      newError.fullName = "Please enter full name";
      isValid = false;
    } else {
      newError.fullName = "";
    }

    // Email validate
    if (!formData.email.trim()) {
      newError.email = "The email field is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newError.email = "The email field must be a valid email address";
      isValid = false;
    } else {
      newError.email = "";
    }

    // Phone validate
    if (!formData.phone.trim()) {
      newError.phone = "Please enter phone number";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newError.phone = "Please enter a valid phone number";
      isValid = false;
    } else {
      newError.phone = "";
    }

    // Gender validate
    if (!formData.gender) {
      newError.gender = "Please select a gender";
      isValid = false;
    } else {
      newError.gender = "";
    }

    setError(newError);

    if (!isValid) {
      return;
    }
    setLoader(true);

    try {
      const token = getToken();
      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
      };

      if (isEditMode && selectedAdminId) {
        await editEmployee(selectedAdminId, payload);
        return;
      }

      await addEmployee(payload);
    } catch (err) {
      setGlobalError(
        err.response?.data?.message ||
        err.message ||
        (isEditMode ? "Failed to update employee." : "Failed to add employee."),
      );
    } finally {
      setLoader(false);
    }
  };

  // Add employee API
  const addEmployee = async (data) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const response = await axios.post("/api/employees", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(response.data.message || "Employee added successfully.");
      await fetchEmployee();
      handleClose();
      resetForm();
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
        error.message ||
        "Failed to add employee."
      );
    }
  };

  // Edit employee API
  const editEmployee = async (id, data) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const response = await axios.put(`/api/employees/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(response.data.message || "Employee updated successfully.");
      await fetchEmployee();
      handleClose();
      resetForm();
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
        error.message ||
        "Failed to update employee."
      );
    }
  };

  return (
    <Drawer
      anchor="right"
      open={showForm}
      onClose={handleClose}
      transitionDuration={300}
      sx={{
        "& .MuiDrawer-paper": {
          width: "500px",
          backgroundColor: "#1e1f20",
        },
      }}
    >
      {/* Title */}
      <Box sx={style.editDialog}>
        <Typography sx={style.formHeading}>
          {isEditMode ? "Edit Employee" : "Add New Employee"}
        </Typography>
        <IconButton onClick={handleClose} sx={style.formButton} disableRipple>
          <RxCross2 size={25} color={"#fff"} />
        </IconButton>
      </Box>

      {/* Employee text fields */}
      <Box sx={style.whiteDrawer}>
        <Box sx={{ p: "0px 20px" }}>
          {/* Global error */}
          {globalError ? (
            <Alert
              severity="error"
              sx={{ mb: 2, backgroundColor: "#2a1f1f", color: "#fff" }}
              onClose={() => setGlobalError("")}
            >
              {globalError}
            </Alert>
          ) : null}

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

          {/* full name input */}
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
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

          {/* email input */}
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

          {/* Phone */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Phone Number</Typography>
            {error.phone && (
              <Typography
                sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}
              >
                {error.phone}
              </Typography>
            )}
          </Box>

          {/* phone input */}
          <TextField
            fullWidth
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInput}
            sx={style.formField}
          />

          {/* Gender */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Gender</Typography>
            {error.gender && (
              <Typography
                sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}
              >
                {error.gender}
              </Typography>
            )}
          </Box>

          <FormControl fullWidth sx={style.formField}>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInput}
              displayEmpty
              sx={{
                color: formData.gender ? "#fff" : "#999",
                "& .MuiSelect-icon": { color: "#fff" },
              }}
            >
              <MenuItem value="" disabled sx={{ color: "#fff" }}>
                Select Gender
              </MenuItem>
              <MenuItem value="male" sx={{ color: "#fff" }}>Male</MenuItem>
              <MenuItem value="female" sx={{ color: "#fff" }}>Female</MenuItem>
              <MenuItem value="other" sx={{ color: "#fff" }}>Other</MenuItem>
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
            "Update Employee"
          ) : (
            "Add New Employee"
          )}
        </Button>
      </Box>
    </Drawer>
  );
};

export default Employeeform;