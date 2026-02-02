const style = {
  // page styles
  PAGE_STYLES: {
    container: { p: { xs: 2.5, md: 4 } },
    pageTitle: { fontSize: 28, fontWeight: 700, color: "#fff" },
    pageSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 14 },
    addButton: {
      textTransform: "capitalize",
      fontWeight: 600,
      color: "#0f1115",
      backgroundColor: "#fff",
      borderRadius: "12px",
      px: 2.5,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#f4f6fb",
        boxShadow: "none",
        transform: "translateY(-1px)",
      },
    },
    "&:active": {
      transform: "translateY(0)",
    },
  },

  // Skeleton styles
  SummarySkeleton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "#1F2024",
    borderRadius: "12px",
    minHeight: 64,
    px: 2,
    py: 1.5,
    mb: 2,
    overflow: "hidden",
  },

  skeletonBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexGrow: 1,
  },

  skeletonIcon: {
    width: 30,
    height: 30,
    bgcolor: "#626365",
  },

  skeletonTitle: {
    width: "55%",
    height: 28,
    bgcolor: "#626365",
  },

  skeletonButton: {
    width: "7%",
    height: 30,
    borderRadius: "10%",
    bgcolor: "#626365",
  },

  // policy container
  policyContainer: {
    bgcolor: "#000000",
    color: "#ffffff",
    minHeight: "100vh",
    py: 5,
  },

  policyHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 3,
    mb: 4,
    flexWrap: { xs: "wrap", sm: "nowrap" },
  },

  policyHeaderTitle: (isMobile) => ({
    color: "#fff",
    fontSize: isMobile ? 28 : 36,
    fontWeight: isMobile ? 600 : 700,
  }),

  policysubTitle: (isMobile) => ({
    color: "#e0e0e0",
    fontSize: isMobile ? 14 : 16,
    fontWeight: 400,
    maxWidth: {
      xs: 500,
      sm: 600,
      md: 720,
    },
  }),

  policyTime: {
    color: "#aaaaaa",
    fontSize: 13,
    fontWeight: 400,
    mt: 1.5,
  },

  divider: {
    my: 4,
    borderColor: "#444",
  },

  // policy accordions
  policyAccordion: {
    mb: 2,
    bgcolor: "#1F2024",
    borderRadius: "12px !important",
    overflow: "hidden",
    boxShadow: "none",
    border: "1px solid transparent",
    "&:before": { display: "none" },
    "&.Mui-expanded": {
      bgcolor: "#1F2024",
      m: 0,
      mb: 2,
    },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      borderColor: "#2a2b30",
    },
  },

  policyAccordionSummary: {
    bgcolor: "#1F2024",
    "&:hover": { bgcolor: "#2a2b30" },
    color: "#ffffff",
    minHeight: 64,
    transition: "background-color 0.2s ease",
    "& .MuiAccordionSummary-content": {
      my: 2,
    },
  },

  accordionSummaryInfo: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexGrow: 1,
    minWidth: 0,
  },

  summaryInfoText: {
    fontSize: 16,
    fontWeight: 600,
  },

  summaryIcon: {
    p: "5px",
    borderRadius: "50%",
    color: "#aaa",
    ml: "auto",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#fff",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  accordionDetail: {
    bgcolor: "#1F2024",
    color: "#e0e0e0",
    px: 4,
    pb: 3,
  },

  accordionDescription: {
    lineHeight: 1.7,
    fontSize: "15px",
    color: "#fff",
  },

  accordionList: {
    color: "#e0e0e0",
    "& .MuiListItem-root": { py: 0.6, px: 0 },
  },

  accordionListIcon: {
    minWidth: 22,
    color: "#fff",
  },

  // popover
  popover: {
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
          fontSize: "14px",
          px: 2,
          py: 1,
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: "#2a2b30",
          },
        },
      },
    },
  },

  // delete confirmation dialog
  deletTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#fff",
    pt: 2,
    pb: 1,
  },

  deletSubTitle: {
    color: "#b0b0b0",
    fontSize: "0.95rem",
    marginBottom: "24px",
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
    borderRadius: "12px",
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#2a2a2a",
      borderColor: "#505050",
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  deleteButton: {
    width: "100%",
    height: "44px",
    flex: 1,
    backgroundColor: "#dc2626",
    color: "#fff",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#b91c1c",
    },
    "&:disabled": {
      backgroundColor: "#991b1b",
      color: "#fff",
      opacity: 0.7,
    },
  },
};

export default style;
