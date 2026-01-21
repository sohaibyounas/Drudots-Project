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
};

export default style;
