const style = {
  // header styles
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2.5, md: 3.5 },
    paddingX: { xs: 2, md: 4 },
    paddingTop: { xs: 2, md: 3 },
    paddingBottom: { xs: 3, md: 4 },
    color: "#fff",
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
    color: "#dc2626",
    fontSize: "28px",
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
};

export default style;
