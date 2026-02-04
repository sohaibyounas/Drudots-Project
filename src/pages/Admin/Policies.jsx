import React, { useState, useCallback } from "react";
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
import AddEditPolicy from "../../component/AddEditPolicy";
import Dialog from "../../component/Ui/Dialog";
import { IoWarningOutline } from "react-icons/io5";
import style from "../../assets/css/policy/policy.js";
import { FaPlus } from "react-icons/fa";
import { policiesData } from "../../policyData/policiesData";
import { MdCircle, MdDelete, MdEdit, MdExpandMore } from "react-icons/md";

// Header text details
const CONSTANTS = {
  TITLE: "Company Policies",
  SUBTITLE: "At Drudots Technologies, we are committed to transparency, quality delivery...",
  LAST_UPDATED: "Last updated: February 2026",
  ADD_BUTTON_TEXT: "Add New Policy",
  ADD_BUTTON_TEXT_MOBILE: "Policy",
  SKELETON_COUNT: 8,
};


const Policies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [policies, setPolicies] = useState(policiesData); //policies data import here

  // add/edit policy states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPolicyForActions, setSelectedPolicyForActions] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const open = Boolean(anchorEl);
  const addButtonText = isTablet ? CONSTANTS.ADD_BUTTON_TEXT_MOBILE : CONSTANTS.ADD_BUTTON_TEXT; // show "Add New Policy" or "Policy" based on screen size

  // accordion expand/collapse
  const handleChange = useCallback((panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }, []);

  // Save new or edited policy
  const handleSavePolicy = useCallback((newPolicy) => {
    try {
      if (editingPolicy) {
        setPolicies(policies.map((p) => (p.id === newPolicy.id ? newPolicy : p)));
      } else {
        const newPolicyWithId = { ...newPolicy, id: Date.now() };
        setPolicies([...policies, newPolicyWithId]);
      }
      setEditingPolicy(null);
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving policy:", error);
    }
  }, [editingPolicy, policies]);

  // Delete policy
  const handleDeletePolicy = useCallback((policyId) => {
    setDeleteLoading(true);
    setTimeout(() => {
      try {
        setPolicies(policies.filter((p) => p.id !== policyId));
        setOpenDeleteDialog(false);
        setSelectedPolicyForActions(null);
      } catch (error) {
        console.error("Error deleting policy:", error);
      } finally {
        setDeleteLoading(false);
      }
    }, 500);
  }, [policies]);

  // Edit existing policy
  const handleEdit = useCallback((policy) => {
    setEditingPolicy(policy);
    setModalOpen(true);
    handleMenuClose();
  }, []);

  // Popover menu open
  const handleMenuClick = useCallback((event, policy) => {
    setAnchorEl(event.currentTarget);
    setSelectedPolicyForActions(policy);
  }, []);

  // Popover menu close
  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedPolicyForActions(null);
  }, []);

  // Open delete confirmation dialog
  const handleOpenDeleteDialog = useCallback((policy) => {
    setSelectedPolicyForActions(policy);
    setOpenDeleteDialog(true);
    handleMenuClose();
  }, [handleMenuClose]);

  // Close delete confirmation dialog
  const handleCloseDeleteDialog = useCallback(() => {
    setOpenDeleteDialog(false);
    setSelectedPolicyForActions(null);
  }, []);

  // Shimmers for Accordion
  const SummarySkeleton = () => (
    <Box sx={style.SummarySkeleton}>
      {/* icon + text */}
      <Box sx={style.skeletonBox}>
        {/* icon placeholder */}
        <Skeleton variant="circular" sx={style.skeletonIcon} />

        {/* title placeholder */}
        <Skeleton variant="text" sx={style.skeletonTitle} />
      </Box>

      {/* action button */}
      <Skeleton variant="text" sx={style.skeletonButton} />
    </Box>
  );

  return (
    <Box sx={style.policyContainer}>
      <Container maxWidth="lg">
        {/* Header info + Add button */}
        <Box sx={style.policyHeader}>
          {/* header text details */}
          <Box>
            <Typography gutterBottom sx={style.policyHeaderTitle(isMobile)}>
              {CONSTANTS.TITLE}
            </Typography>
            <Typography sx={style.policysubTitle(isMobile)}>
              {CONSTANTS.SUBTITLE}
            </Typography>
            <Typography sx={style.policyTime}>
              {CONSTANTS.LAST_UPDATED}
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
            {addButtonText}
          </Button>
        </Box>

        <Divider sx={style.divider} />

        {/* Accordions */}
        <Box>
          {loading ? (
            // policies shimmers
            <>
              {[...Array(CONSTANTS.SKELETON_COUNT)].map((_, i) => (
                <SummarySkeleton key={i} />
              ))}
            </>
          ) : (
            // policies data
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
                    expandIcon={<MdExpandMore size={22} color="#fff" />}
                    sx={style.policyAccordionSummary}
                  >
                    <Box sx={style.accordionSummaryInfo}>
                      {section.icon}
                      <Typography sx={style.summaryInfoText}>
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
                      <MdEdit size={20} color="#fff" />
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails sx={style.accordionDetail}>
                    {/* description info */}
                    {section.description ? (
                      <Typography sx={style.accordionDescription}>
                        {section.description}
                      </Typography>
                      // paragraph info
                    ) : section.paragraph ? (
                      <Typography sx={style.accordionDescription}>
                        {section.paragraph}
                      </Typography>
                    ) : (
                      // list info
                      <List disablePadding sx={style.accordionList}>
                        {section.items?.map((text, idx) => (
                          <ListItem
                            key={idx}
                            disablePadding
                            sx={{ alignItems: "center" }}
                          >
                            <ListItemIcon sx={style.accordionListIcon}>
                              <MdCircle size={10} />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              slotProps={style.listItemTextStyles}
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
          <MenuItem onClick={() => handleEdit(selectedPolicyForActions)}
            sx={style.editIconMain}
          >
            <MdEdit {...style.actionIconProps} />
            Edit Policy
          </MenuItem>

          {/* delete policy */}
          <MenuItem
            onClick={() => handleOpenDeleteDialog(selectedPolicyForActions)}
            sx={style.deleteIconMain}
          >
            <MdDelete {...style.deleteIconProps} />
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
        <DialogTitle sx={style.deletTitle}>Confirm Deletion</DialogTitle>

        {/* subtitle */}
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
              <CircularProgress size="20px" sx={{ color: "#fff" }} />
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
