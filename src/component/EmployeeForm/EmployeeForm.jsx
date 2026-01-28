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
import style from "../../assets/css/style.js";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { getToken } from "../../Constant/api.js";

const Employeeform = ({
  showForm,
  setShowForm,
  employees,
  fetchEmployee,
  employeeId,
  showEdit,
  setShowEdit,
  setSuccess,
  selectedEmployeeData,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [globalError, setGlobalError] = useState("");

  // ---------------- CLOSE FORM ----------------
  const handleClose = () => {
    setShowForm(false);
    setShowEdit(false);
    resetForm();
  };

  // input handle 
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  //  reset form 
  const resetForm = () => {
    setFormData({ fullName: "", email: "", phone: "", gender: "" });
    setError({ fullName: "", email: "", phone: "", gender: "" });
    setIsEditMode(false);
    setSelectedEmployeeId(null);
    setGlobalError("");
  };

  // edit mode population
  useEffect(() => {
    if (employeeId && showEdit) {
      let employee = selectedEmployeeData;

      if (!employee) {
        employee = employees?.find?.((e) => e._id === employeeId);
      }

      if (employee) {
        setIsEditMode(true);
        setSelectedEmployeeId(employeeId);
        setFormData({
          fullName: employee.fullName || "",
          email: employee.email || "",
          phone: employee.phone || "",
          gender: employee.gender || "",
        });
        setShowForm(true);
      }
    } else {
      resetForm();
    }
  }, [employeeId, employees, showEdit, selectedEmployeeData]);

  // add employee 
  const handleAddEmployee = async (payload) => {
    try {
      setLoader(true);
      const token = getToken();

      await axios.post("/api/employees", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      await fetchEmployee();
      setSuccess("Employee added successfully");
      handleClose();
    } catch (err) {
      setGlobalError(err.response?.data?.message || "Failed to add employee");
    } finally {
      setLoader(false);
    }
  };

  //  update employee 
  const handleUpdateEmployee = async (id, payload) => {
    try {
      setLoader(true);
      const token = getToken();

      await axios.put(`/api/employees/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      await fetchEmployee();
      setSuccess("Employee updated successfully");
      handleClose();
    } catch (err) {
      setGlobalError(err.response?.data?.message || "Failed to update employee");
    } finally {
      setLoader(false);
    }
  };

  //  submit handler 
  const handleSubmit = async () => {
    setGlobalError("");
    let isValid = true;

    const validateEmail = (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const validatePhone = (value) =>
      /^[\d\s\-\+\(\)]+$/.test(value) &&
      value.replace(/\D/g, "").length >= 10;

    const newError = { ...error };

    if (!formData.fullName.trim()) {
      newError.fullName = "Please enter full name";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newError.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newError.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newError.phone = "Invalid phone number";
      isValid = false;
    }
    if (!formData.gender) {
      newError.gender = "Please select gender";
      isValid = false;
    }

    setError(newError);
    if (!isValid) return;

    const payload = { ...formData };

    if (isEditMode && selectedEmployeeId) {
      await handleUpdateEmployee(selectedEmployeeId, payload);
    } else {
      await handleAddEmployee(payload);
    }
  };

  //  drawer 
  return (
    <Drawer
      anchor="right"
      open={showForm}
      onClose={handleClose}
      transitionDuration={300}
      sx={style.drawer}
    >
      <Box sx={style.editDialog}>
        <Typography sx={style.formHeading}>
          {isEditMode ? "Edit Employee" : "Add New Employee"}
        </Typography>
        <IconButton onClick={handleClose} sx={style.formButton}>
          <RxCross2 size={25} color="#fff" />
        </IconButton>
      </Box>

      {/* form fields */}
      <Box sx={style.whiteDrawer}>
        <Box sx={{ p: "0 20px" }}>
          {globalError && (
            <Alert
              severity="error"
              sx={{ mb: 2, backgroundColor: "#2a1f1f", color: "#fff" }}
              onClose={() => setGlobalError("")}
            >
              {globalError}
            </Alert>
          )}

          {/* FULL NAME */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Full Name</Typography>
            {error.fullName && (
              <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>
                {error.fullName}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            name="fullName"
            value={formData.fullName}
            placeholder="full name"
            onChange={handleInput}
            sx={style.formField}
          />

          {/* EMAIL */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Email Address</Typography>
            {error.email && (
              <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>
                {error.email}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            name="email"
            value={formData.email}
            placeholder="email address"
            onChange={handleInput}
            sx={style.formField}
          />

          {/* PHONE */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Phone Number</Typography>
            {error.phone && (
              <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>
                {error.phone}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            name="phone"
            value={formData.phone}
            placeholder="phone nNumber"
            onChange={handleInput}
            sx={style.formField}
          />

          {/* GENDER */}
          <Box sx={style.adminCont}>
            <Typography sx={style.formFieldText}>Gender</Typography>
            {error.gender && (
              <Typography sx={{ ...style.adminFieldText, color: "error.main", ml: 2 }}>
                {error.gender}
              </Typography>
            )}
          </Box>

          <FormControl fullWidth sx={style.formField}>
            <Select
              name="gender"
              value={String(formData.gender ?? '')}
              onChange={handleInput}
              displayEmpty
              sx={{
                color: formData.gender ? "#fff" : "#999",
                "& .MuiSelect-icon": { color: "#fff" },
              }}
            >
              <MenuItem value="" disabled sx={{ color: "#fff" }}> Select Gender </MenuItem>
              <MenuItem value="male" sx={{ color: "#fff" }}>Male</MenuItem>
              <MenuItem value="female" sx={{ color: "#fff" }}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* form submit button */}
      <Box sx={{ ...style.editActiondrawer, mt: 3 }}>
        <Button disabled={loader} onClick={handleSubmit} sx={style.formSubmitButton}>
          {loader ? (
            <CircularProgress size={20} sx={{ color: "#000" }} />
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
