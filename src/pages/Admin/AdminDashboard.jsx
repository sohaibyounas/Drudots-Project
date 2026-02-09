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
import Adminform from "../../component/AdminForm/AdminForm.jsx";
import { darkDataGridSx } from "../../theme/surface,js";
import ConfirmDialog from "../../component/ConfirmDialog.jsx";
import ActionPopover from "../../component/ActionPopover.jsx";

// Desktop DataGrid Shimmer
const DataGridShimmer = () => (
  <Paper sx={style.dataGridShimmer}>
    <Box sx={style.shimmerHeader}>
      <Skeleton variant="text" sx={style.nameWave} />
      <Skeleton variant="text" sx={style.emailWave} />
      <Skeleton variant="text" sx={style.roleWave} />
      <Skeleton variant="text" sx={style.actionWave} />
    </Box>

    {Array.from({ length: 8 }).map((_, index) => (
      <Box key={index} sx={style.dataRows}>
        <Box sx={style.avatarName}>
          <Skeleton variant="circular" sx={style.avatarRow} />
          <Box>
            <Skeleton variant="text" sx={style.nameRow} />
          </Box>
        </Box>
        <Box sx={style.emailBox}>
          <Skeleton variant="text" sx={style.emailRow} />
        </Box>
        <Box sx={style.roleBox}>
          <Skeleton variant="text" sx={style.roleRow} />
        </Box>
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
    {Array.from({ length: 5 }).map((_, index) => (
      <Accordion key={index} sx={style.accordionShimmer}>
        <AccordionSummary
          expandIcon={<FaChevronDown style={style.accordionIcon} />}
          sx={style.accordionSummaryShimmer}
        >
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

const AdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loader, setLoader] = useState(false);
  const open = Boolean(anchorEl);

  // data grid row data
  const rows = [
    { id: 1, fullName: "Jon Snow", email: "jon.snow@example.com" },
    { id: 2, fullName: "Cersei Lannister", email: "cersei.lannister@example.com" },
    { id: 3, fullName: "Jaime Lannister", email: "jaime.lannister@example.com" },
    { id: 4, fullName: "Arya Stark", email: "arya.stark@example.com" },
    { id: 5, fullName: "Daenerys Targaryen", email: "daenerys.targaryen@example.com" },
    { id: 6, fullName: "Melisandre", email: "melisandre@example.com" },
    { id: 7, fullName: "Ferrara Clifford", email: "ferrara.clifford@example.com" },
    { id: 8, fullName: "Rossini Frances", email: "rossini.frances@example.com" },
    { id: 9, fullName: "Harvey Roxie", email: "harvey.roxie@example.com" },
  ];

  // data grid columns data
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
            {params.row.fullName?.split(" ").map((n) => n[0]).join("").toUpperCase()}
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
        <Typography variant="body2" sx={style.userInfo}>
          {params.row.email}
        </Typography>
      ),
    },

    // role
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ ...style.userInfo, textTransform: "capitalize" }}>
          {params.row.role || "Admin"}
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
        <IconButton
          disableRipple
          size="small"
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
            setSelectedAdmin(params.row);
          }}
          sx={style.actionIconButton}
        >
          <SlOptions style={style.actionIcon} />
        </IconButton>
      ),
    },
  ];

  // mobile accordion view controlled
  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (panelId) => (event, newExpanded) => {
    setExpanded(newExpanded ? panelId : false);
  };

  const handleAction = (action) => {
    if (!selectedAdmin) return;
    if (action === "edit") {
      setSelectedAdminId(selectedAdmin.id);
      setShowEdit(true);
      setShowForm(true);
    }
    setAnchorEl(null);
  };

  // delete api hanlder
  const handleDeleteAdmin = async () => {
    setLoader(true);
    try {
      // delete API call here
    } finally {
      setLoader(false);
      setOpenDialog(false);
      setAnchorEl(null);
      setSelectedAdmin(null);
    }
  };

  return (
    <Box sx={style.mainBox}>
      <Box sx={style.pageContainer}>
        {/* header */}
        <Box sx={style.pageHeaderContent}>
          <Typography sx={style.pageTitle}>
            <FaUserShield style={style.pageTitleIcon} />
            Admins
          </Typography>
          <Typography sx={style.adminSubTitle}>
            Manage your admins here
          </Typography>
        </Box>

        {/* add admin button */}
        <Box sx={style.addAdmin}>
          <Button
            variant="contained"
            startIcon={<FaPlus style={style.addIcon} />}
            onClick={() => setShowForm(true)}
            sx={style.addButton}
          >
            {isMobile ? "Add New Admin" : "Add Admin"}
          </Button>
        </Box>

        {/* admin form */}
        <Adminform
          setShowForm={setShowForm}
          showForm={showForm}
          admins={admins}
          adminId={selectedAdminId}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          selectedAdminData={selectedAdmin}
        />
      </Box>

      {/* search input */}
      <AppSearchField
        fullWidth
        placeholder="Search admin by name, email or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={style.SEARCH_INPUT}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoIosSearch style={style.searchIcon} />
            </InputAdornment>
          ),
        }}
      />

      {loading ? (
        !isMobile ? <DataGridShimmer /> : <AccordionShimmer />
      ) : (
        <>
          {!isMobile ? (
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
          ) : (
            <Box sx={{ width: "100%" }}>
              {rows.map((admin) => {
                const panelId = `panel-${admin.id}`;
                return (
                  <Accordion
                    key={admin.id}
                    expanded={expanded === panelId}
                    onChange={handleAccordionChange(panelId)}
                    sx={style.accordion}
                  >
                    {/* summary */}
                    <AccordionSummary expandIcon={<FaChevronDown style={style.accordionIcon} />} sx={style.accordionSummary}>
                      <Box sx={style.fullName}>
                        <Avatar sx={style.avatar}>
                          {admin.fullName?.split(" ").map((n) => n[0]).join("").toUpperCase() || "AD"}
                        </Avatar>
                        <Box sx={style.userInfo}>
                          <Typography fontWeight="medium">{admin.fullName}</Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={style.accordionDetail}>
                      <Box sx={style.accordionInner}>
                        <Typography>Email:</Typography>
                        <Typography>{admin.email}</Typography>
                      </Box>
                      <Box sx={style.accordionInner}>
                        <Typography>Role:</Typography>
                        <Typography sx={style.accordionText}>{admin.role || "Admin"}</Typography>
                      </Box>
                    </AccordionDetails>

                    {/* action */}
                    <AccordionActions sx={{ ...style.accordionDetail, ...style.accordionInner }}>
                      <Typography>Action:</Typography>
                      <IconButton size="small" onClick={(e) => { setAnchorEl(e.currentTarget); setSelectedAdmin(admin); }}>
                        <SlOptions style={style.actionIcon} />
                      </IconButton>
                    </AccordionActions>
                  </Accordion>
                );
              })}
            </Box>
          )}
        </>
      )}

      {/* action popover */}
      <ActionPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        onEdit={() => {
          setSelectedAdminId(selectedAdmin.id);
          setShowEdit(true);
          setShowForm(true);
        }}
        onDelete={() => setOpenDialog(true)}
        editLabel="Edit Admin"
        deleteLabel="Delete Admin"
      />


      {/* delete confirmation dialog */}
      <ConfirmDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteAdmin}
        loading={loader}
        message="Are you sure you want to delete this admin?"
      />

    </Box>
  );
};

export default AdminDashboard;
