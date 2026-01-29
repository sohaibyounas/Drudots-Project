const style = {
  // page styles
  PAGE_STYLES: {
    container: { p: { xs: 2.5, md: 4 } },
    pageTitle: { fontSize: 28, fontWeight: 700, color: "#fff" },
    pageSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 14 },
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
  },

  // Skeleton styles
  SummarySkeleton: {
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
  },

  skeletonBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexGrow: 1
  },

  skeletonIcon: {
    width: 30,
    height: 30,
    bgcolor: "#2a2b30"
  },

  skeletonTitle: {
    width: "55%",
    height: 28,
    bgcolor: "#2a2b30"
  },

  skeletonButton: {
    width: "10%",
    height: 28,
    bgcolor: "#2a2b30"
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
    mb: 4,
  },

  policyHeaderTitle: (isMobile) => ({
    color: "#fff",
    fontSize: isMobile ? 28 : 36,
    fontWeight: isMobile ? 600 : 700,
  }),

  policysubTitle: (isMobile) => ({
    color: "#e0e0e0",
    fontSize: isMobile ? 16 : 18,
    fontWeight: isMobile ? 500 : 600,
    maxWidth: {
      xs: 500,
      sm: 600,
      md: 720,
    },
  }),

  policyTime: {
    color: "#aaaaaa",
    mt: 1
  },

  divider: {
    my: 5,
    borderColor: "#444"
  },

  // policy accordions
  policyAccordion: {
    mb: 2,
    bgcolor: "#1F2024",
    borderRadius: "12px !important",
    overflow: "hidden",
    boxShadow: "none",
    "&:before": { display: "none" },
    "&.Mui-expanded": { bgcolor: "#1F2024" },
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
    },
  },

  policyAccordionSummary: {
    bgcolor: "#1F2024",
    "&:hover": { bgcolor: "#2a2b30" },
    color: "#ffffff",
    minHeight: 64,
  },

  accordionSummaryInfo: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexGrow: 1,
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
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    display: "flex",
    alignItems: "center",
  },

  accordionDetail: {
    bgcolor: "#1F2024",
    color: "#e0e0e0",
    px: 4,
    pb: 3
  },

  accordionDescription: {
    lineHeight: 1.7,
    fontSize: "16px",
    color: "#fff"
  },

  accordionList: {
    color: "#e0e0e0",
    "& .MuiListItem-root": { py: 0.6, px: 0 },
  },

  accordionListIcon: {
    minWidth: 22,
    color: "#fff"
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
          px: 2,
          py: 1,
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
    borderRadius: "12px",
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
    borderRadius: "12px",
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

};

export default style;
