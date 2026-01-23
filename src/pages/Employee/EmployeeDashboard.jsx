import React, { useEffect, useState } from "react";
import Dialog from "../../component/Ui/Dialog.jsx";
import {
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Popover,
  MenuItem,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Paper,
  Divider,
  Skeleton,
  Button,
  CircularProgress,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  FaSearch,
  FaEllipsisV,
  FaChevronDown,
  FaEdit,
  FaTrash,
  FaUserShield,
  FaPlus,
} from "react-icons/fa";
import style from "../../assets/css/Admin/AdminDashboard.js";
import { IoIosSearch } from "react-icons/io";
import AppSearchField from "../../component/designSystem/AppSearchField.jsx";
import { darkDataGridSx } from "../../theme/surface,js";
import { IoWarningOutline } from "react-icons/io5";
import Employeeform from "../../component/EmployeeForm/EmployeeForm.jsx";

// Desktop DataGrid Shimmer
const DataGridShimmer = () => (
  <Paper
    sx={{
      height: 600,
      width: "100%",
      overflow: "hidden",
      bgcolor: "#1F2024",
      border: "1px solid #333",
      borderRadius: 1,
    }}
  >
    {/* Header Row */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid #333",
        bgcolor: "#1a1b1e",
      }}
    >
      {/* Name Header */}
      <Skeleton
        variant="text"
        width={100}
        height={24}
        sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
      />

      {/* Email Header */}
      <Skeleton
        variant="text"
        width={100}
        height={24}
        sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
      />

      {/* Role Header */}
      <Skeleton
        variant="text"
        width={60}
        height={24}
        sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
      />

      {/* Action Header */}
      <Skeleton
        variant="text"
        width={100}
        height={24}
        sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
      />
    </Box>

    {/* Data Rows */}
    {Array.from({ length: 8 }, (_, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.02)",
          },
        }}
      >
        {/* Avatar + Name Column */}
        <Box
          sx={{ display: "flex", alignItems: "center", flex: 1, minWidth: 200 }}
        >
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ mr: 2, bgcolor: "rgba(255,255,255,0.1)" }}
          />
          <Box>
            <Skeleton
              variant="text"
              width={140}
              height={20}
              sx={{ mb: 0.5, bgcolor: "rgba(255,255,255,0.1)" }}
            />
          </Box>
        </Box>

        {/* Email Column */}
        <Box sx={{ flex: 1, minWidth: 250, ml: 2 }}>
          <Skeleton
            variant="text"
            width={200}
            height={20}
            sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
          />
        </Box>

        {/* Role Column */}
        <Box sx={{ flex: 0.5, minWidth: 100, ml: 2 }}>
          <Skeleton
            variant="text"
            width={100}
            height={20}
            sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
          />
        </Box>

        {/* Action Column */}
        <Box sx={{ width: 100, display: "flex", justifyContent: "center" }}>
          <Skeleton
            variant="circular"
            width={32}
            height={32}
            sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
          />
        </Box>
      </Box>
    ))}
  </Paper>
);

// Mobile Accordion Shimmer
const AccordionShimmer = () => (
  <Box sx={{ width: "100%" }}>
    {Array.from({ length: 5 }, (_, index) => (
      <Accordion
        key={index}
        sx={{
          mb: 2,
          bgcolor: "#1F2024",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<FaChevronDown color="rgba(255,255,255,0.3)" />}
          sx={{
            bgcolor: "#1F2024",
            borderRadius: 1,
            "&:hover": {
              bgcolor: "#2a2b30",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              gap: 2,
            }}
          >
            {/* Avatar */}
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ bgcolor: "rgba(255,255,255,0.1)", flexShrink: 0 }}
            />

            {/* Name */}
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton
                variant="text"
                width="70%"
                height={24}
                sx={{ mb: 0.5, bgcolor: "rgba(255,255,255,0.1)" }}
              />
            </Box>
          </Box>
        </AccordionSummary>
      </Accordion>
    ))}
  </Box>
);

const EmployeeDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [success, setSuccess] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loader, setLoader] = useState(false);
  const open = Boolean(anchorEl);

  // fetch employee
  // const fetchEmployees = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const res = await fetchAdminsApi();
  //     setAdmins(res.data || []);
  //   } catch (err) {
  //     setError("Failed to load emplpoyee. Please try again.");
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // fetch employee calls
  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  // popover open
  const handleMenuClick = (e, employee) => {
    setAnchorEl(e.currentTarget);
    setSelectedEmployee(employee);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //   open popover
  const handleAction = async (action) => {
    if (!selectedEmployee) return;

    if (action === "edit") {
      setSelectedEmployeeId(selectedEmployee.id);
      setShowEdit(true);
      setShowForm(true);
    }
    handleMenuClose();
  };

  // close popover
  const handlePopClose = () => {
    setAnchorEl(null);
    setSelectedAdmin(null);
  };

  // Close delete confirmation dialog
  const handleCloseDialog = () => setOpenDialog(null);

  // datagrid rows dummy data
  const rows = [
    {
      id: 1, fullName: "Jon Snow", email: "jon.snow@example.com", phone: "23129371209",
      gender: "Male"
    },
    {
      id: 2,
      fullName: "Cersei Lannister",
      email: "cersei.lannister@example.com", phone: "23129371209",
      gender: "Female"
    },
    {
      id: 3,
      fullName: "Jaime Lannister",
      email: "jaime.lannister@example.com",
      phone: "23129371209",
      gender: "Male"
    },
    {
      id: 4, fullName: "Arya Stark", email: "arya.stark@example.com", phone: "23129371209",
      gender: "Female"
    },
    {
      id: 5,
      fullName: "Daenerys Targaryen",
      email: "daenerys.targaryen@example.com",
      phone: "23129371209",
      gender: "Male"
    },
    {
      id: 6, fullName: "Melisandre", email: "melisandre@example.com", phone: "23129371209",
      gender: "Female"
    },
    {
      id: 7,
      fullName: "Ferrara Clifford",
      email: "ferrara.clifford@example.com", phone: "23129371209",
      gender: "Female"
    },
    {
      id: 8,
      fullName: "Rossini Frances",
      email: "rossini.frances@example.com", phone: "23129371209",
      gender: "Female"
    },
    {
      id: 9, fullName: "Harvey Roxie", email: "harvey.roxie@example.com", phone: "23129371209",
      gender: "Male"
    },
  ];

  // DataGrid columns dummy data
  const columns = [
    // user details
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex !important",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {/* user avatar */}
          <Avatar
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              fontSize: "14px",
              width: 40,
              height: 40,
            }}
          >
            {/* initials from fullName */}
            {params.row.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </Avatar>

          {/* user info */}
          <Box>
            <Typography variant="body2" fontWeight="medium">
              {params.row.fullName}
            </Typography>
          </Box>
        </Box>
      ),
    },

    // email
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 250,
      renderCell: (params) => (
        <Box>
          <Typography variant="body2">{params.row.email}</Typography>
        </Box>
      ),
    },

    // phone
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => (
        <Box>
          <Typography
            variant="body2"
            sx={{ textTransform: "capitalize", color: "#fff" }}
          >
            {params.row.phone || "Phone"}
          </Typography>
        </Box>
      ),
    },

    // gender
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => (
        <Box>
          <Typography
            variant="body2"
            sx={{ textTransform: "capitalize", color: "#fff" }}
          >
            {params.row.gender || "Gender"}
          </Typography>
        </Box>
      ),
    },

    // actions
    {
      field: "actions",
      headerName: "Action",
      width: 100,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <IconButton
          disableRipple
          size="small"
          onClick={(e) => handleMenuClick(e, params.row)}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaEllipsisV size={14} />
        </IconButton>
      ),
    },
  ];

  // Error text if no data found
  if (error && !loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
        <IconButton
          // onClick={fetchEmployees}
          color="primary">
          <FaSearch /> Retry
        </IconButton>
      </Box>
    );
  }

  // mobile accordion view controlled
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (panelId) => (event, newExpanded) => {
    setExpanded(newExpanded ? panelId : false);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1400, mx: "auto" }}>
      {/* Header info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          gap: { xs: 1.5, md: 2 },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: { xs: "space-between", md: "space-between" },
          mb: 2,
        }}
      >
        {/* title info */}
        <Box sx={style.pageHeaderContent}>
          <Typography sx={style.pageTitle}>
            <FaUserShield
              style={{
                marginRight: 10,
                verticalAlign: "middle",
                color: "#fff",
              }}
            />
            Employee
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
            Manage your employees here
          </Typography>
        </Box>

        {/* Add employee */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0.6, sm: 1 },
            alignItems: "start",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={() => setShowForm(true)}
            sx={style.PAGE_STYLES.addButton}
          >
            Add New Employee
          </Button>
        </Box>
      </Box>

      {/* Employee form */}
      <Employeeform
        setShowForm={setShowForm}
        showForm={showForm}
        employees={employees}
        // fetchEmployees={fetchEmployees}
        employeeId={selectedEmployeeId}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setSuccess={setSuccess}
        selectedEmployeeData={selectedEmployee}
      />

      {/* Search field */}
      <Box>
        <AppSearchField
          fullWidth
          placeholder="Search employee by name, email or phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchEmployees(e.target.value);
          }}
          sx={{ width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoIosSearch color="#9CA3AF" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* divider */}
      <Divider sx={{ mb: 3, color: "rgba(255,255,255,0.7)" }} />

      {/* Loading datagrid or accordion */}
      {loading ? (
        <>{!isMobile ? <DataGridShimmer /> : <AccordionShimmer />}</>
      ) : (
        <>
          {/* Desktop View - DataGrid */}
          {!isMobile ? (
            <Box>
              <DataGrid
                getRowHeight={() => "auto"}
                rows={rows}
                columns={columns}
                pageSizeOptions={[]}
                hideFooter
                sortingMode="server"
                disableCheckboxSelection
                disableColumnMenu
                disableColumnResize
                disableRowSelectionOnClick
                disableColumnSorting
                disableColumnSelector
                sx={{ ...darkDataGridSx, minHeight: 400 }}
              />
            </Box>
          ) : (
            /* Mobile View - Accordion */
            <Box sx={{ width: "100%" }}>
              {rows.map((employee) => {
                const panelId = `panel-${employee.id}`;

                return (
                  <Accordion
                    key={employee.id}
                    expanded={expanded === panelId}
                    onChange={handleAccordionChange(panelId)}
                    sx={{
                      mb: 2,
                      bgcolor: "#1F2024",
                      borderRadius: 1,
                      "&:before": { display: "none" },
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaChevronDown color="#fff" />}
                      sx={{
                        bgcolor: "#1F2024",
                        borderRadius: 1,
                        "&:hover": { bgcolor: "#2a2b30" },
                        color: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor:
                              employee.role === "admin"
                                ? "warning.main"
                                : "primary.main",
                            mr: 2,
                            color: "#fff",
                          }}
                        >
                          {/* initials from name */}
                          {employee.fullName
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase() || "AD"}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography fontWeight="medium">
                            {employee.fullName || "Employee Name"}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        p: "8px 20px 16px",
                        bgcolor: "#1F2024",
                        color: "#fff",
                      }}
                    >
                      {/* Additional info  */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Email</Typography>
                        <Typography>{employee.email}</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Role</Typography>
                        <Typography
                          sx={{ textTransform: "capitalize", color: "#fff" }}
                        >
                          {employee.role || "Employee"}
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          )}

          {/* Actions cell Popover */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#1F2024",
                  color: "#fff",
                  borderRadius: 2,
                  border: "1px solid #333",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  mt: 1,
                  "& .MuiMenuItem-root": {
                    color: "#e0e0e0",
                    minHeight: 42,
                    px: 2,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#2a2b30",
                    },
                  },
                },
              },
            }}
          >
            <Box>
              {/* edit employee */}
              <MenuItem onClick={() => handleAction("edit")}>
                <FaEdit style={{ marginRight: 12 }} />
                Edit Employee
              </MenuItem>

              {/* delete employee */}
              <MenuItem
                onClick={() => {
                  setOpenDialog(true);
                  handlePopClose();
                  // handleDeleteEmployee();
                }}
                sx={{ color: "error.main" }}
              >
                <FaTrash style={{ marginRight: 12, color: "red" }} />
                Delete Employee
              </MenuItem>
            </Box>
          </Popover>
        </>
      )}

      {/* Delete confirmation dialog */}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IoWarningOutline color="red" size={28} />
        </Box>
        <DialogTitle sx={style.deletTitle}>Confirm Deletion</DialogTitle>
        <Typography sx={style.deletSubTitle}>
          Are you sure you want to delete this employee?
        </Typography>

        {/* cancel, submit button */}
        <Box sx={style.cancelBox}>
          <Button
            disableRipple
            onClick={handleCloseDialog}
            sx={style.cancelTitle}
          >
            Cancel
          </Button>

          {/* delete admin */}
          <Button
            sx={style.deleteButton}
            disabled={loader}
            disableRipple
          // onClick={handleDeleteEmployee}
          >
            {loader ? <CircularProgress size="20px" color="#fff" /> : "Delete"}
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default EmployeeDashboard;
