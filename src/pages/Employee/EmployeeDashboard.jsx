import React, { useState } from "react";
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
  AccordionActions,
  useMediaQuery,
  useTheme,
  Paper,
  Skeleton,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  FaSearch,
  FaChevronDown,
  FaEdit,
  FaTrash,
  FaUserShield,
  FaPlus,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import style from "../../assets/css/Admin/AdminDashboard.js";
import AppSearchField from "../../component/designSystem/AppSearchField.jsx";
import Employeeform from "../../component/EmployeeForm/EmployeeForm.jsx";
import { darkDataGridSx } from "../../theme/surface,js";
import ConfirmDialog from "../../component/ConfirmDialog.jsx";
import ActionPopover from "../../component/ActionPopover.jsx";

// Desktop DataGrid Shimmer
const DataGridShimmer = () => (
  <Paper sx={style.dataGridShimmer}>
    {/* Header Row */}
    <Box sx={style.shimmerHeader}>
      <Skeleton variant="text" sx={style.nameWave} /> {/* Name Header */}
      <Skeleton variant="text" sx={style.emailWave} /> {/* Email Header */}
      <Skeleton variant="text" sx={style.phoneWave} /> {/* Phone Header */}
      <Skeleton variant="text" sx={style.roleWave} /> {/* Gender Header */}
      <Skeleton variant="text" sx={style.actionWave} /> {/* Action Header */}
    </Box>

    {/* Data Rows */}
    {Array.from({ length: 8 }, (_, index) => (
      <Box key={index} sx={style.dataRows}>
        {/* Avatar + Name Column */}
        <Box sx={style.avatarName}>
          <Skeleton variant="circular" sx={style.avatarRow} />
          <Box>
            <Skeleton variant="text" sx={style.nameRow} />
          </Box>
        </Box>

        {/* Email Column */}
        <Box sx={style.avatarName}>
          <Skeleton variant="text" sx={style.emailRow} />
        </Box>

        {/* Phone Column */}
        <Box sx={style.phoneName}>
          <Skeleton variant="text" sx={style.emailRow} />
        </Box>

        {/* Gender Column */}
        <Box sx={style.roleName}>
          <Skeleton variant="text" sx={style.roleRow} />
        </Box>

        {/* Action Column */}
        <Box sx={style.actionBox}>
          <Skeleton variant="circular" sx={style.actionRow} />
        </Box>
      </Box>
    ))}
  </Paper>
);

// Mobile Accordion Shimmer
const AccordionShimmer = () => (
  <Box sx={{ width: "100%" }}>
    {Array.from({ length: 5 }, (_, index) => (
      <Accordion key={index} sx={style.accordionShimmer}>
        <AccordionSummary
          expandIcon={<FaChevronDown color="rgba(255,255,255,0.3)" />}
          sx={style.accordionSummaryShimmer}
        >
          {/* Avatar + Name */}
          <Box sx={style.accordionSummayBox}>
            <Skeleton variant="circular" sx={style.accordionSummaryAvatar} />
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton variant="text" sx={style.accordionSummaryName} />
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

  // Popover open
  const handleMenuClick = (e, employee) => {
    setAnchorEl(e.currentTarget);
    setSelectedEmployee(employee);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Action handler
  const handleAction = async (action) => {
    if (!selectedEmployee) return;
    if (action === "edit") {
      setSelectedEmployeeId(selectedEmployee.id);
      setShowEdit(true);
      setShowForm(true);
    }
    handleMenuClose();
  };

  const handlePopClose = () => {
    setAnchorEl(null);
    setSelectedEmployee(null);
  };

  // delete Api hanlder
  const handleDeleteEmployee = async () => {
    setLoader(true);
    try {
      // delete API call here
    } finally {
      setLoader(false);
      setOpenDialog(false);
    }
  };

  // Dummy rows data
  const rows = [
    { id: 1, fullName: "Jon Snow", email: "jon.snow@example.com", phone: "23129371209", gender: "male" },
    { id: 2, fullName: "Cersei Lannister", email: "cersei.lannister@example.com", phone: "23129371209", gender: "female" },
    { id: 3, fullName: "Jaime Lannister", email: "jaime.lannister@example.com", phone: "23129371209", gender: "male" },
    { id: 4, fullName: "Arya Stark", email: "arya.stark@example.com", phone: "23129371209", gender: "female" },
    { id: 5, fullName: "Daenerys Targaryen", email: "daenerys.targaryen@example.com", phone: "23129371209", gender: "male" },
    { id: 6, fullName: "Melisandre", email: "melisandre@example.com", phone: "23129371209", gender: "female" },
    { id: 7, fullName: "Ferrara Clifford", email: "ferrara.clifford@example.com", phone: "23129371209", gender: "female" },
    { id: 8, fullName: "Rossini Frances", email: "rossini.frances@example.com", phone: "23129371209", gender: "female" },
    { id: 9, fullName: "Harvey Roxie", email: "harvey.roxie@example.com", phone: "23129371209", gender: "male" },
  ];

  // DataGrid columns
  const columns = [
    // full name
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box sx={style.fullName}>
          <Avatar sx={style.avatar}>
            {params.row.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="body2" sx={style.userInfo}>
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
        <Typography variant="body2" sx={style.userInfo}>{params.row.email}</Typography>
      ),
    },

    // phone
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => <Typography sx={{ color: "#fff" }}>{params.row.phone}</Typography>,
    },

    // gender
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => (
        <Typography sx={{ textTransform: "capitalize", color: "#fff" }}>
          {params.row.gender}
        </Typography>
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
        <IconButton disableRipple size="small" onClick={(e) => handleMenuClick(e, params.row)} sx={style.actionIconButton}>
          <SlOptions style={style.actionIcon} />
        </IconButton>
      ),
    },
  ];

  // Error state
  if (error && !loading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography color="error" gutterBottom>{error}</Typography>
        <IconButton color="primary"><FaSearch /> Retry</IconButton>
      </Box>
    );
  }

  // Mobile accordion state
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (panelId) => (event, newExpanded) => {
    setExpanded(newExpanded ? panelId : false);
  };

  return (
    <Box sx={style.mainBox}>
      {/* Header */}
      <Box sx={style.pageContainer}>
        <Box sx={style.pageHeaderContent}>
          <Typography sx={style.pageTitle}>
            <FaUserShield style={style.pageTitleIcon} /> Employee
          </Typography>
          <Typography sx={style.adminSubTitle}>Manage your employees here</Typography>
        </Box>
        <Box sx={style.addAdmin}>
          <Button variant="contained" startIcon={<FaPlus />} onClick={() => setShowForm(true)} sx={style.addButton}>
            Add New Employee
          </Button>
        </Box>
      </Box>

      {/* Employee Form */}
      <Employeeform
        setShowForm={setShowForm}
        showForm={showForm}
        employees={employees}
        employeeId={selectedEmployeeId}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setSuccess={setSuccess}
        selectedEmployeeData={selectedEmployee}
      />

      {/* Search Field */}
      <Box>
        <AppSearchField
          fullWidth
          placeholder="Search employee by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={style.SEARCH_INPUT}
          InputProps={{ startAdornment: <InputAdornment position="start"><IoIosSearch color="#9CA3AF" /></InputAdornment> }}
        />
      </Box>

      {/* Loading / DataGrid / Accordion */}
      {loading ? (!isMobile ? <DataGridShimmer /> : <AccordionShimmer />) : (
        !isMobile ? (
          // desktop datagrid
          <DataGrid
            getRowHeight={() => "auto"}
            rows={rows}
            columns={columns}
            pageSizeOptions={[]}
            hideFooter
            disableCheckboxSelection
            disableColumnMenu
            disableColumnResize
            disableRowSelectionOnClick
            disableColumnSorting
            disableColumnSelector
            sx={{ ...darkDataGridSx, minHeight: 400 }}
          />
        ) : (
          // mobile accordion
          <Box sx={{ width: "100%" }}>
            {rows.map((employee) => {
              const panelId = `panel-${employee.id}`;
              return (
                <Accordion key={employee.id} expanded={expanded === panelId} onChange={handleAccordionChange(panelId)} sx={style.accordion}>
                  <AccordionSummary expandIcon={<FaChevronDown color="#fff" />} sx={style.accordionSummary}>
                    <Box sx={style.accordionSummaryDetails}>
                      <Avatar sx={style.avatar}>{employee.fullName?.split(" ").map((n) => n[0]).join("").toUpperCase()}</Avatar>
                      <Box sx={style.userInfo}><Typography fontWeight="medium">{employee.fullName}</Typography></Box>
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails sx={style.accordionDetail}>
                    <Box sx={style.accordionInner}><Typography>Email</Typography><Typography>{employee.email}</Typography></Box>
                    <Box sx={style.accordionInner}><Typography>Phone</Typography><Typography sx={style.accordionText}>{employee.phone}</Typography></Box>
                    <Box sx={style.accordionInner}><Typography>Gender</Typography><Typography sx={style.accordionText}>{employee.gender}</Typography></Box>
                  </AccordionDetails>

                  <AccordionActions sx={{ ...style.accordionDetail, ...style.accordionInner }}>
                    <Typography>Action:</Typography>
                    <IconButton size="small" onClick={(e) => handleMenuClick(e, employee)}><SlOptions size={14} /></IconButton>
                  </AccordionActions>
                </Accordion>
              );
            })}
          </Box>
        )
      )}

      {/* Actions Popover */}
      <ActionPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        onEdit={() => {
          setSelectedEmployeeId(selectedEmployee.id);
          setShowEdit(true);
          setShowForm(true);
        }}
        onDelete={() => setOpenDialog(true)}
        editLabel="Edit Employee"
        deleteLabel="Delete Employee"
      />


      {/* Delete confirmation Dialog */}
      <ConfirmDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteEmployee}
        loading={loader}
        message="Are you sure you want to delete this employee?"
      />

    </Box>
  );
};

export default EmployeeDashboard;
