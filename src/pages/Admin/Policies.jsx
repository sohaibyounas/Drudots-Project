// src/pages/Policies.jsx
import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Popover,
  MenuItem,
  DialogTitle,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaymentsIcon from "@mui/icons-material/Payments";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditPolicy from "../../component/AddEditPolicy";
import Dialog from "../../component/Ui/Dialog";
import { IoWarningOutline } from "react-icons/io5";
import style from "../../assets/css/policy/policy";
import { FaPlus } from "react-icons/fa";

const Policies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const targetRef = useRef();
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [policies, setPolicies] = useState([
    // code of conduct
    {
      id: "code-of-conduct",
      title: "Code of Conduct & Professional Ethics",
      icon: <GavelIcon sx={{ color: "#fff" }} />,
      defaultExpanded: true,
      items: [
        "We maintain the highest standards of integrity, honesty and professionalism",
        "Zero tolerance for harassment, discrimination or bullying of any kind",
        "Strict confidentiality of client information and project details",
        "No conflicts of interest – personal projects must not interfere with company work",
        "Responsible use of company resources and intellectual property",
      ],
      description: "",
    },

    // remote & hybrid work
    {
      id: "remote-hybrid-work",
      title: "Remote & Hybrid Work Policy",
      icon: <HomeIcon sx={{ color: "#fff" }} />,
      items: [
        "Core working hours: 10:00 AM – 4:00 PM PKT (Monday–Friday)",
        "Full remote allowed with 2–3 mandatory office days per month in Lahore",
        "Company provides necessary tools: laptop, licensed software, high-speed internet allowance",
        "Daily stand-ups (10–15 min) and weekly sprint planning required",
        "Use of Slack / Teams for communication + daily updates",
      ],
      description: "",
    },

    // leave & attendance
    {
      id: "leave-attendance",
      title: "Leave & Attendance Policy",
      icon: <CalendarTodayIcon sx={{ color: "#fff" }} />,
      items: [
        "20 paid annual leaves + 10 paid sick leaves per year",
        "Public holidays (Pakistan official + selected religious holidays)",
        "Maternity leave: 12 weeks (as per law), Paternity leave: 5 days paid",
        "Leaves require prior approval (except emergency sick leave)",
        "Unpaid leave possible in special circumstances (case-by-case)",
      ],
      description: "",
    },

    // compensation & benefits
    {
      id: "compensation-benefits",
      title: "Compensation & Benefits",
      icon: <PaymentsIcon sx={{ color: "#fff" }} />,
      items: [
        "Competitive salary paid on the 1st–5th of every month",
        "Performance bonus (quarterly / project-based)",
        "Health insurance (OPD + hospitalization coverage)",
        "Internet & electricity reimbursement for remote employees",
        "Professional development budget (courses, books, conferences)",
      ],
      description: "",
    },

    // data security & ip
    {
      id: "data-security-ip",
      title: "Data Security & Intellectual Property",
      icon: <SecurityIcon sx={{ color: "#fff" }} />,
      items: [
        "All employees sign NDA on joining",
        "Client code, designs & data remain strictly confidential",
        "Company owns all work produced during employment",
        "Use of approved version control (Git) and secure repositories only",
        "Personal devices must follow company security policies if used for work",
      ],
      description: "",
    },

    // performance growth reviews
    {
      id: "performance-growth",
      title: "Performance, Growth & Reviews",
      icon: <TrendingUpIcon sx={{ color: "#fff" }} />,
      items: [
        "Bi-annual performance reviews (June & December)",
        "Clear OKRs / KPIs set at project & individual level",
        "Training & certification support (Udemy, Frontend Masters, conferences)",
        "Promotion & salary review based on performance & business needs",
      ],
      description: "",
    },

    // diversity inclusion
    {
      id: "diversity-inclusion",
      title: "Diversity, Equity & Inclusion",
      icon: <PeopleIcon sx={{ color: "#fff" }} />,
      paragraph:
        "Drudots Technologies is an equal opportunity employer. We do not discriminate on the basis of gender, religion, ethnicity, age, disability or any other protected characteristic.",
      description: "",
    },

    // grievance whistleblower
    {
      id: "grievance-whistleblower",
      title: "Grievance & Whistleblower Policy",
      icon: <ReportProblemIcon sx={{ color: "#fff" }} />,
      paragraph:
        "Any concern regarding policy violation, harassment, unethical behavior or misconduct can be reported confidentially to HR. We ensure no retaliation against good-faith reporters.",
      description: "",
    },
  ]);

  // add/edit policy states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPolicyForActions, setSelectedPolicyForActions] =
    useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const open = Boolean(anchorEl);

  // accordion expand/collapse
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Save new or edited policy
  const handleSavePolicy = (newPolicy) => {
    if (editingPolicy) {
      // edit
      setPolicies(policies.map((p) => (p.id === newPolicy.id ? newPolicy : p)));
    } else {
      // add
      setPolicies([...policies, newPolicy]);
    }
    setEditingPolicy(null);
    setModalOpen(false);
  };

  // Delete policy
  const handleDeletePolicy = (policyId) => {
    setDeleteLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPolicies(policies.filter((p) => p.id !== policyId));
      setOpenDeleteDialog(false);
      setSelectedPolicyForActions(null);
      setDeleteLoading(false);
    }, 500);
  };

  // Edit existing policy
  const handleEdit = (policy) => {
    setEditingPolicy(policy);
    setModalOpen(true);
    handleMenuClose();
  };

  // Popover menu open
  const handleMenuClick = (event, policy) => {
    setAnchorEl(event.currentTarget);
    setSelectedPolicyForActions(policy);
  };

  // Popover menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPolicyForActions(null);
  };

  // Open delete confirmation dialog
  const handleOpenDeleteDialog = (policy) => {
    setSelectedPolicyForActions(policy);
    setOpenDeleteDialog(true);
    handleMenuClose();
  };

  // Close delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedPolicyForActions(null);
  };

  // Shimmer only for AccordionSummary
  const SummarySkeleton = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#1F2024",
        borderRadius: "12px",
        minHeight: 64,
        px: 3,
        py: 1.5,
        mb: 2,
        overflow: "hidden",
      }}
    >
      {/* icon + text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}>
        {/* icon placeholder */}
        <Skeleton
          variant="circular"
          width={30}
          height={30}
          sx={{ bgcolor: "#2a2b30" }}
        />

        {/* title placeholder */}
        <Skeleton
          variant="text"
          width="55%"
          height={28}
          sx={{ bgcolor: "#2a2b30" }}
        />
      </Box>

      {/* action button / more icon placeholder */}
      <Skeleton
        variant="text"
        width="10%"
        height={28}
        sx={{ bgcolor: "#2a2b30" }}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        {/* Header info + Add button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            mb: 4,
          }}
        >
          {/* header text details */}
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                color: "#fff",
                fontSize: isMobile ? 28 : 36,
                fontWeight: isMobile ? 600 : 700,
              }}
            >
              Company Policies
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#e0e0e0", fontSize: isMobile ? 16 : 18 }}
              maxWidth={{ xs: 500, sm: 600, md: 720 }}
            >
              At Drudots Technologies, we are committed to transparency, quality
              delivery...
            </Typography>
            <Typography variant="body2" color="#aaaaaa" mt={1}>
              Last updated: January 2026
            </Typography>
          </Box>

          {/* add policy */}
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={() => {
              setEditingPolicy(null);
              setModalOpen(true);
            }}
            sx={style.PAGE_STYLES.addButton}
          >
            {isTablet ? "Add" : "Add New Policy"}
          </Button>
        </Box>

        <Divider sx={{ my: 5, borderColor: "#444" }} />

        {/* Dynamic Accordions */}
        <Box ref={targetRef}>
          {loading ? (
            // Show shimmer skeletons instead of real accordions
            <>
              {[...Array(6)].map((_, i) => (
                <SummarySkeleton key={i} />
              ))}
            </>
          ) : (
            policies.map((section) => {
              const panelId = `panel-${section.id}`;

              return (
                <Accordion
                  square={false}
                  key={section.id}
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
                  sx={{
                    mb: 2,
                    bgcolor: "#1F2024",
                    borderRadius: "12px !important",
                    overflow: "hidden",
                    boxShadow: "none",
                    "&:before": { display: "none" },
                    "&.Mui-expanded": { bgcolor: "#1F2024" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#bbbbbb" }} />}
                    sx={{
                      bgcolor: "#1F2024",
                      "&:hover": { bgcolor: "#2a2b30" },
                      color: "#ffffff",
                      minHeight: 64,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexGrow: 1,
                      }}
                    >
                      {section.icon}
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, fontSize: 16 }}
                      >
                        {section.title}
                      </Typography>
                    </Box>

                    <Box
                      aria-label="actions"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMenuClick(e, section);
                      }}
                      onFocus={(e) => e.stopPropagation()}
                      sx={{
                        p: "5px",
                        borderRadius: "50%",
                        color: "#aaa",
                        ml: "auto",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                        },
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{ bgcolor: "#1F2024", color: "#e0e0e0", px: 4, pb: 3 }}
                  >
                    {section.description ? (
                      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        {section.description}
                      </Typography>
                    ) : section.paragraph ? (
                      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        {section.paragraph}
                      </Typography>
                    ) : (
                      <List
                        disablePadding
                        sx={{
                          color: "#e0e0e0",
                          "& .MuiListItem-root": { py: 0.6, px: 0 },
                        }}
                      >
                        {section.items?.map((text, idx) => (
                          <ListItem
                            key={idx}
                            disablePadding
                            sx={{ alignItems: "center" }}
                          >
                            <ListItemIcon sx={{ minWidth: 22, color: "#777" }}>
                              <CircleIcon fontSize="15px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              slotProps={{
                                primary: {
                                  variant: "body1",
                                  sx: { color: "#e0e0e0" },
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </AccordionDetails>
                </Accordion>
              );
            })
          )}
        </Box>
      </Container>

      {/* Popover */}
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
          {/* edit policy */}
          <MenuItem onClick={() => handleEdit(selectedPolicyForActions)}>
            <EditIcon style={{ marginRight: 12 }} />
            Edit Policy
          </MenuItem>

          {/* delete policy */}
          <MenuItem
            onClick={() => handleOpenDeleteDialog(selectedPolicyForActions)}
            sx={{ color: "error.main" }}
          >
            <DeleteIcon style={{ marginRight: 12, color: "red" }} />
            Delete Policy
          </MenuItem>
        </Box>
      </Popover>

      {/* Add/Edit Policy component */}
      <AddEditPolicy
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingPolicy(null);
        }}
        onSave={handleSavePolicy}
        initialData={editingPolicy}
        policies={policies}
        setPolicies={setPolicies}
      />

      {/* Delete confirmation dialog */}

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IoWarningOutline color="red" size={28} />
        </Box>
        <DialogTitle sx={{ textAlign: "center", color: "#fff", mt: 2 }}>
          Confirm Deletion
        </DialogTitle>
        <Typography sx={{ textAlign: "center", color: "#e0e0e0", mb: 3 }}>
          Are you sure you want to delete this policy?
        </Typography>

        {/* cancel, submit button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Button
            disableRipple
            onClick={handleCloseDeleteDialog}
            sx={{
              width: "100%",
              color: "#fff",
              borderColor: "#777",
              border: "1px solid #3e3f40",
              "&:hover": {
                borderColor: "#aaa",
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Cancel
          </Button>

          {/* delete policy */}
          <Button
            sx={{
              width: "100%",
              bgcolor: "error.main",
              color: "#fff",
              "&:hover": { bgcolor: "error.dark" },
            }}
            disabled={deleteLoading}
            disableRipple
            onClick={() => handleDeletePolicy(selectedPolicyForActions?.id)}
          >
            {deleteLoading ? (
              <CircularProgress size="20px" color="inherit" />
            ) : (
              "Delete"
            )}
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Policies;
