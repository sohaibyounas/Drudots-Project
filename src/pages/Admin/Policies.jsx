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
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditPolicy from "../../component/AddEditPolicy";
import Dialog from "../../component/Ui/Dialog";
import { IoWarningOutline } from "react-icons/io5";
import style from "../../assets/css/policy/policy.js";
import { FaPlus } from "react-icons/fa";
import { policiesData } from "../../policyData/policiesData";

const Policies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const targetRef = useRef();
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [policies, setPolicies] = useState(policiesData);

  // add/edit policy states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPolicyForActions, setSelectedPolicyForActions] = useState(null);
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
    <Box sx={style.SummarySkeleton}>
      {/* icon + text */}
      <Box sx={style.skeletonBox}>
        {/* icon placeholder */}
        <Skeleton
          variant="circular"
          sx={style.skeletonIcon}
        />

        {/* title placeholder */}
        <Skeleton
          variant="text"
          sx={style.skeletonTitle}
        />
      </Box>

      {/* action button */}
      <Skeleton
        variant="text"
        sx={style.skeletonButton}
      />
    </Box>
  );

  return (
    <Box sx={style.policyContainer}>
      <Container maxWidth="lg">
        {/* Header info + Add button */}
        <Box sx={style.policyHeader}>
          {/* header text details */}
          <Box>
            <Typography
              gutterBottom
              sx={style.policyHeaderTitle(isMobile)}
            >
              Company Policies
            </Typography>
            <Typography
              sx={style.policysubTitle(isMobile)}
            >
              At Drudots Technologies, we are committed to transparency, quality
              delivery...
            </Typography>
            <Typography sx={style.policyTime}>
              Last updated: January 2026
            </Typography>
          </Box>

          {/* add policy button */}
          <Button
            startIcon={<FaPlus />}
            onClick={() => {
              setEditingPolicy(null);
              setModalOpen(true);
            }}
            sx={style.PAGE_STYLES.addButton}
          >
            {isTablet ? "Policy" : "Add New Policy"}
          </Button>
        </Box>

        <Divider sx={style.divider} />

        {/* Accordions */}
        <Box ref={targetRef}>
          {loading ? (
            // Show skeletons instead of real data
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
                  sx={style.policyAccordion}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    sx={style.policyAccordionSummary}
                  >
                    <Box
                      sx={style.accordionSummaryInfo}
                    >
                      {section.icon}
                      <Typography
                        sx={style.summaryInfoText}
                      >
                        {section.title}
                      </Typography>
                    </Box>

                    {/* edit icon */}
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMenuClick(e, section);
                      }}
                      onFocus={(e) => e.stopPropagation()}
                      sx={style.summaryIcon}
                    >
                      <EditIcon fontSize="small" sx={{ color: "#fff" }} />
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={style.accordionDetail}
                  >
                    {section.description ? (
                      <Typography sx={style.accordionDescription}>
                        {section.description}
                      </Typography>
                    ) : section.paragraph ? (
                      <Typography sx={style.accordionDescription}>
                        {section.paragraph}
                      </Typography>
                    ) : (
                      <List
                        disablePadding
                        sx={style.accordionList}
                      >
                        {section.items?.map((text, idx) => (
                          <ListItem
                            key={idx}
                            disablePadding
                            sx={{ alignItems: "center" }}
                          >
                            <ListItemIcon sx={style.accordionListIcon}>
                              <CircleIcon fontSize="15px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              slotProps={{
                                primary: {
                                  variant: "body1",
                                  sx: { color: "#fff" },
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
        slotProps={style.popover}
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
        {/* header */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IoWarningOutline color="red" size={28} />
        </Box>

        {/* title */}
        <DialogTitle sx={style.deletTitle}>
          Confirm Deletion
        </DialogTitle>
        
        <Typography sx={style.deletSubTitle}>
          Are you sure you want to delete this policy?
        </Typography>

        {/* cancel, submit button */}
        <Box sx={style.cancelBox}>
          <Button
            disableRipple
            onClick={handleCloseDeleteDialog}
            sx={style.cancelTitle}
          >
            Cancel
          </Button>

          {/* delete policy */}
          <Button
            sx={style.deleteButton}
            disabled={deleteLoading}
            disableRipple
            onClick={() => handleDeletePolicy(selectedPolicyForActions?.id)}
          >
            {deleteLoading ? (
              <CircularProgress size="20px" color="fff" />
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
