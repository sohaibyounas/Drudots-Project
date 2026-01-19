import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  FaSearch,
  FaEllipsisV,
  FaChevronDown,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaBan,
  FaUserShield,
  FaPlus,
} from "react-icons/fa";
import style from "../../assets/css/adminDashboardStyle.js";
import { IoIosSearch } from "react-icons/io";
import AppSearchField from "../../component/DesignSystem/AppSearchField.jsx";
import { darkDataGridSx } from "../../theme/surface,js";
import Adminform from "../../component/AdminForm/AdminForm.jsx";
import { IoWarningOutline } from "react-icons/io5";
import {
  deleteAdminApi,
  fetchAdminsApi,
  searchAdminApi,
} from "../../Constant/apiRoutes.js";

// Desktop DataGrid Shimmer - Matches actual DataGrid structure
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
        p: 2,
        borderBottom: "1px solid #333",
        bgcolor: "#1a1b1e",
      }}
    >
      {/* Name Header */}
      <Skeleton
        variant="text"
        width={200}
        height={24}
        sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
      />
      {/* Email Header */}
      <Skeleton
        variant="text"
        width={250}
        height={24}
        sx={{ ml: "auto", mr: 2, bgcolor: "rgba(255,255,255,0.1)" }}
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

// Mobile Accordion Shimmer - Matches actual accordion structure
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
              width: "100%",
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

        <AccordionDetails
          sx={{
            p: "8px 20px 16px",
            bgcolor: "#1F2024",
          }}
        >
          {/* Email Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Skeleton
              variant="text"
              width={60}
              height={20}
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
            />
            <Skeleton
              variant="text"
              width="50%"
              height={20}
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
            />
          </Box>

          {/* Role Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="text"
              width={50}
              height={20}
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
            />
            <Skeleton
              variant="text"
              width={80}
              height={20}
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

const AdminManagement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [success, setSuccess] = useState(null);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loader, setLoader] = useState(false);
  const open = Boolean(anchorEl);

  // fetch admins
  const fetchAdmins = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchAdminsApi();
      setAdmins(res.data || []);
    } catch (err) {
      setError("Failed to load admins. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch admins calls
  useEffect(() => {
    fetchAdmins();
  }, []);

  // search admin api locally
  const searchAdmins = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await searchAdminApi(query);

      // Make sure res.data is an array
      const adminsArray = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.data)
          ? res.data.data
          : []; // fallback to empty array

      const filteredAdmins = adminsArray.filter(
        (admin) =>
          admin.fullName.toLowerCase().includes(query.toLowerCase()) ||
          admin.email.toLowerCase().includes(query.toLowerCase()),
      );
      setAdmins(filteredAdmins);
    } catch (err) {
      setError("Search failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete admin api
  const handleDeleteAdmin = async () => {
    if (!selectedAdmin) return;

    try {
      setLoader(true);
      await deleteAdminApi(selectedAdmin.id);
      setOpenDialog(false);
      fetchAdmins();
    } catch (error) {
      console.error("Delete admin failed:", error);
    } finally {
      setLoader(false);
    }
  };

  // popover open
  const handleMenuClick = (e, admin) => {
    setAnchorEl(e.currentTarget);
    setSelectedAdmin(admin);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAction = async (action) => {
    if (!selectedAdmin) return;

    if (action === "edit") {
      setSelectedAdminId(selectedAdmin.id);
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

  // row data
  const rows = [
    { id: 1, fullName: "Jon Snow", email: "jon.snow@example.com" },
    {
      id: 2,
      fullName: "Cersei Lannister",
      email: "cersei.lannister@example.com",
    },
    {
      id: 3,
      fullName: "Jaime Lannister",
      email: "jaime.lannister@example.com",
    },
    { id: 4, fullName: "Arya Stark", email: "arya.stark@example.com" },
    {
      id: 5,
      fullName: "Daenerys Targaryen",
      email: "daenerys.targaryen@example.com",
    },
    { id: 6, fullName: "Melisandre", email: "melisandre@example.com" },
    {
      id: 7,
      fullName: "Ferrara Clifford",
      email: "ferrara.clifford@example.com",
    },
    {
      id: 8,
      fullName: "Rossini Frances",
      email: "rossini.frances@example.com",
    },
    { id: 9, fullName: "Harvey Roxie", email: "harvey.roxie@example.com" },
  ];

  // DataGrid columns
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
              fontSize: "14px",
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
        <IconButton onClick={fetchAdmins} color="primary">
          <FaSearch /> Retry
        </IconButton>
      </Box>
    );
  }

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
            Admins
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
            Manage your admins here
          </Typography>
        </Box>

        {/* Add admin */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0.6, sm: 1 },
            // flexWrap: { xs: "wrap", md: "nowrap" },
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
            Add New Role
          </Button>
        </Box>

        {/* add role form */}
        <Adminform
          setShowForm={setShowForm}
          showForm={showForm}
          admins={admins}
          fetchAdmins={fetchAdmins}
          adminId={selectedAdminId}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          setSuccess={setSuccess}
          selectedAdminData={selectedAdmin}
        />
      </Box>

      {/* Search field */}
      <Box>
        <AppSearchField
          fullWidth
          placeholder="Search admin by name, email or phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchAdmins(e.target.value);
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

      {/* Loading State */}
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
                pageSize={10}
                rowsPerPageOptions={[5, 10, 25]}
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
              {rows.map((admin) => (
                <Accordion key={admin.id} sx={{ mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<FaChevronDown color="#fff" />}
                    sx={{ bgcolor: "#1F2024", color: "#fff" }}
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
                            admin.role === "admin"
                              ? "warning.main"
                              : "primary.main",
                          mr: 2,
                        }}
                      >
                        {admin.initials}
                      </Avatar>
                      <Box sx={{ flexGrow: 1, color: "#fff" }}>
                        <Typography fontWeight="medium">
                          {admin.name || "Admin Name"}
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
                    {/* email */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Email</Typography>
                      <Typography>{admin.email}</Typography>
                    </Box>

                    {/* role */}
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
                        {admin.role || "Admin"}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
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
              {/* edit admin */}
              <MenuItem onClick={() => handleAction("edit")}>
                <FaEdit style={{ marginRight: 12 }} />
                Edit Admin
              </MenuItem>

              {/* delete admin */}
              <MenuItem
                onClick={() => {
                  setOpenDialog(true);
                  handlePopClose();
                  handleDeleteAdmin();
                }}
                sx={{ color: "error.main" }}
              >
                <FaTrash style={{ marginRight: 12, color: "red" }} />
                Delete Admin
              </MenuItem>
            </Box>
          </Popover>
        </>
      )}

      {/* Delete confirmation dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        keepMounted
        sx={style.deleteConfirmDialog}
      >
        <DialogTitle sx={style.deletTitle}>
          Confirm Deletion <IoWarningOutline color="red" />
        </DialogTitle>
        <Typography sx={style.deletSubTitle}>
          Are you sure you want to delete this admin?
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
            onClick={handleDeleteAdmin}
          >
            {loader ? <CircularProgress size="20px" color="#fff" /> : "Delete"}
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AdminManagement;
