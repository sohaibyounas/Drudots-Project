const style = {
  // main box styles
  mainBox: {
    p: { xs: 2, md: 3 },
    maxWidth: 1400,
    mx: "auto"
  },

  // header styles
  pageContainer: {
    display: "flex",
    gap: { xs: 1.5, md: 2 },
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "space-between",
    mb: 2,
    mx: 1
  },

  pageHeaderContent: {
    display: "flex",
    flexDirection: "column",
    gap: 0.75,
    minWidth: 0,
  },

  pageTitle: {
    fontSize: { xs: "20px", md: "26px" },
    fontWeight: 700,
    color: "#fff",
  },

  pageTitleIcon: {
    marginRight: 10,
    verticalAlign: "middle",
    color: "#fff",
  },

  adminSubTitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)"
  },

  addAdmin: {
    display: "flex",
    gap: { xs: 0.6, sm: 1 },
    alignItems: "start",
    justifyContent: { xs: "flex-start", md: "flex-end" },
  },

  // add button styles
  addButton: {
    textTransform: "none",
    fontWeight: 700,
    color: "#0f1115",
    backgroundColor: "#fff",
    borderRadius: "12px",
    px: 2.5,
    boxShadow: "none",
    "&:hover": { backgroundColor: "#f4f6fb", boxShadow: "none" },
    textTransform: "capitalize",
  },

  // search input
  SEARCH_INPUT: {
    minWidth: { xs: "100%", sm: "100%" },
    maxWidth: 420,
    backgroundColor: "#1f2024",
    borderRadius: 28,
    "& .MuiOutlinedInput-root": {
      borderRadius: 28,
      color: "rgba(255,255,255,0.92)",
      "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.18)" },
      "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.28)" },
    },
    "& .MuiInputBase-input": { py: 1 },
    boxShadow: "none",
    mb: 3
  },

  // avatar styles
  AVATAR_SX: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    backgroundColor: "#27292D",
    color: "#fff",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // datagrid cell styles
  // full name
  fullName: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 2,
  },

  // avatar
  avatar: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "#262626",
    color: "#fff",
    fontSize: "16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // user info
  userInfo: {
    fontSize: "14px",
    color: "#fff"
  },

  // action cell icon
  actionIconButton: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // datagrid  header row shimmer styles
  dataGridShimmer: {
    height: 600,
    width: "100%",
    overflow: "hidden",
    bgcolor: "#1F2024",
    border: "1px solid #333",
    borderRadius: 1,
  },

  shimmerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
    borderBottom: "1px solid #333",
    bgcolor: "#1a1b1e",
    gap: 2
  },

  nameWave: {
    width: 210,
    height: 24,
    flex: 1,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  emailWave: {
    width: 200,
    height: 24,
    flex: 1,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  phoneWave: {
    width: 100,
    height: 24,
    flex: 1,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  roleWave: {
    width: 100,
    height: 24,
    flex: 1,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  actionWave: {
    width: 60,
    height: 34,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  // datagrid rows shimmers
  dataRows: {
    display: "flex",
    alignItems: "center",
    p: 2,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.02)",
    },
    gap: 2
  },

  avatarName: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    minWidth: 200
  },

  phoneName: {
    flex: 1,
    minWidth: 200
  },

  avatarRow: {
    width: 40,
    height: 40,
    mr: 2,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  nameRow: {
    width: 140,
    height: 20,
    mb: 0.5,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  emailBox: {
    flex: 1,
    minWidth: 250,
    ml: 2
  },

  emailRow: {
    width: 200,
    height: 20,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  roleBox: {
    flex: 0.5,
    minWidth: 100,
    ml: 2
  },

  roleRow: {
    width: 120,
    height: 20,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  roleName: {
    flex: 0.5,
    minWidth: 100,
    ml: 2
  },

  actionBox: {
    width: 100,
    display: "flex",
    justifyContent: "center"
  },

  actionRow: {
    width: 32,
    height: 32,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  // mobile shimmers styles
  accordionShimmer: {
    mb: 2,
    bgcolor: "#1F2024",
    "&:before": { display: "none" },
  },

  accordionSummaryShimmer: {
    bgcolor: "#1F2024",
    borderRadius: 1,
    "&:hover": {
      bgcolor: "#2a2b30",
    },
  },

  accordionSummayBox: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    gap: 2,
  },

  accordionSummaryAvatar: {
    width: 40,
    height: 40,
    flexShrink: 0,
    bgcolor: "rgba(255,255,255,0.1)",
  },

  accordionSummaryName: {
    width: "70%",
    height: 24,
    mb: 0.5,
    bgcolor: "rgba(255,255,255,0.1)"
  },

  // icon styles
  actionIcon: {
    color: "#fff",
    fontSize: 14,
  },

  accordionIcon: {
    color: "#fff",
    fontSize: 16,
  },

  editIcon: {
    marginRight: 12,
    color: "#fff",
  },

  deleteIcon: {
    marginRight: 12,
    color: "red",
  },

  searchIcon: {
    color: "#9CA3AF",
    fontSize: 18,
  },

  addIcon: {
    fontSize: 16,
    color: "#0f1115"
  },

  // delete confirmation dialog styles
  deletTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#fff",
  },

  warningIcon: {
    marginRight: 12,
    color: "red",
    fontSize: 28
  },

  deletSubTitle: {
    color: "#b0b0b0",
    fontSize: "0.95rem",
    marginBottom: "28px",
    lineHeight: 1.5,
    paddingLeft: "24px",
    paddingRight: "24px",
  },

  cancelBox: {
    display: "flex",
    gap: "12px",
    width: "100%",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "0px",
  },

  cancelTitle: {
    width: "100%",
    height: "44px",
    flex: 1,
    color: "#fff",
    backgroundColor: "transparent",
    border: "1.5px solid #404040",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#2a2a2a",
      borderColor: "#505050",
    },
  },

  deleteButton: {
    width: "100%",
    height: "44px",
    flex: 1,
    backgroundColor: "#dc2626",
    color: "#fff",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#b91c1c",
    },
    "&:disabled": {
      backgroundColor: "#991b1b",
      color: "#fff",
      opacity: 0.7,
    },
  },

  loader: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },

  // accordion 
  accordion: {
    mb: 1,
    bgcolor: "#1F2024",
    borderRadius: "16px !important",
    overflow: "hidden",
    "&:before": { display: "none" },
    boxShadow: "none",
    "&.Mui-expanded": {
      margin: "8px 0",
    },
  },

  accordionSummary: {
    bgcolor: "#1F2024",
    color: "#fff",
  },

  accordionSummaryDetails: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: 1,
  },

  accordionDetail: {
    p: "8px 20px 16px",
    bgcolor: "#1F2024",
    color: "#fff",
  },

  accordionInner: {
    display: "flex",
    alignItems: "center",
    mb: 1,
    justifyContent: "space-between",
  },

  accordionText: {
    color: "#fff",
    textTransform: "capitalize"
  },

  // popover 
  paper: {
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
};

export default style;
