const style = {
  // sidebar of Home page
  sidebar: {
    width: { xs: "220px", sm: "220px", md: "220px" },
    height: {
      xs: "calc(100vh - 30px)",
      sm: "calc(100vh - 30px)",
      md: "calc(100vh - 30px)",
    },
    marginLeft: { xs: "10px", sm: "15px", md: "15px" },
    marginTop: {
      xs: "15px",
      sm: "15px",
      md: "15px",
    },
    marginBottom: {
      xs: "10px",
      sm: "10px",
      md: "10px",
    },
    borderRadius: "28px",
    boxSizing: "border-box",
    paddingBottom: "16px",
    overflowY: "hidden",
    overflowX: "hidden",
    flexShrink: 0,
    zIndex: 1000,
    backgroundColor: "#1f2024",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
    isolation: "isolate",
    willChange: "transform",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    WebkitFontSmoothing: "antialiased",
    backgroundClip: "padding-box",
    contain: "paint",
  },

  // Logo box
  logomain: {
    display: "flex",
    justifyContent: "center",
    padding: "15px 0px 10px 0px",
  },

  // Sidebar container
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 24px)",
    backgroundColor: "#1F2024",
  },

  // Logo style
  logo: {
    width: 70,
    height: "auto",
    display: "block",
  },

  sidebarMenu: {
    padding: { xs: "12px", sm: "16px 20px", md: "16px", },
    height: {
      xs: 'calc(100vh - var(--sat) - var(--sab) - 180px)',
      sm: 'calc(100vh - 92px)',
    },
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    scrollbarWidth: 'none',
  },

  // Sidebar item styles
  sidebarItem: (isActive) => ({
    minHeight: 48,
    borderRadius: "10px",
    margin: "2px",
    color: "#e0e0e0",
    backgroundColor: isActive
      ? "rgba(10, 132, 255, 0.18)"
      : "transparent",
    transition: "all 0.2s ease",
    justifyContent: "flex-start",
    gap: 1.5,

    "&:hover": {
      backgroundColor: isActive
        ? "rgba(10, 132, 255, 0.28)"
        : "rgba(255, 255, 255, 0.08)",
    },

    "&.Mui-selected": {
      backgroundColor: "#0A84FF !important",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#1a94ff !important",
      },
    },
  }),

  // Sidebar icon style
  icon: (isActive) => ({
    minWidth: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: isActive ? "#ffffff" : "inherit",
    fontSize: "1.4rem",
  }),

  // Sidebar list item text style
  listItem: (isActive) => ({
    fontSize: "14px",
    fontWeight: isActive ? 600 : 500,
    color: "inherit",
    whiteSpace: "wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textTransform: "capitalize",
  }),

  // logout box
  logoutButtonBox: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    p: "8px 16px",
    m: { xs: "0px 16px 8px 16px", sm: "0 16px 8px 16px" },
    borderRadius: "12px",
    cursor: "pointer",
    transition: "none",
    flexShrink: 0,
    position: { xs: "relative", sm: "relative" },
    zIndex: 1200,
    pb: {
      xs: `calc(6px + env(safe-area-inset-bottom, 0px))`,
      sm: `calc(6px + env(safe-area-inset-bottom, 0px))`,
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  },

  // logout button text
  logoutButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "24px",
    textTransform: "none",
    padding: 0,
    minWidth: 0
  },

  headerMain: {
    display: {
      xs: "flex", sm: "flex", md: "none",
    },
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingTop: { xs: "var(--sat)", sm: 0, md: 0 },
    paddingBottom: 0,
    borderBottom: "1px solid #3e3f40"
  },

  headerLogoImg: {
    width: "100px",
    padding: "0px 30px",
    filter: "brightness(0) saturate(100%) invert(100%)",
  },

  headerHumberger: {
    cursor: "pointer",
    pr: { xs: "20px", sm: "32px", color: "#fff" },
  },

  heaederLogoMain: {
    padding: "15px 0px 10px 0px",
    display: "flex",
    justifyContent: "center",
  },

  // sidebar drawer
  root: {
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
    },
  },

  paper: {
    backgroundColor: "#000",
    backdropFilter: "none",
    border: "none",
    boxShadow: "none",
    overflow: "visible",
    width: "auto",
    p: 0,
    paddingTop: "env(safe-area-inset-top, 0px)",
    paddingBottom: "env(safe-area-inset-bottom, 0px)",
  },

  // form drawer
  drawer: {
    "& .MuiDrawer-paper": {
      width: "500px",
      backgroundColor: "#1e1f20",
    },
  },

  // content details
  contentDetails: {
    border: "1px solid #fff",
    p: "20px",
    color: "#fff",
    fontSize: "20px",
    overflowY: "auto",
    height: "100vh",
    lineHeight: "24px",
  },

  layout: {
    display: "flex",
    background: "#000000ff",
    height: "100vh",
    overflowX: "hidden",
  },

  logoutModal: {
    p: "15px",
    position: "absolute",
    top: { xs: "27%", sm: "30%" },
    left: { xs: "10.5%", sm: "38%" },
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", sm: "400px" },
    borderRadius: "10px",
    border: "1px solid #a1a3a4",
    bgcolor: "#262626",
    "&:focus-visible": {
      outline: "none",
      border: "1px solid #a1a3a4",
    },
  },

  modalTitleText: {
    pt: 2,
    pl: 2,
    color: "#fff",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  modalSubtitle: {
    p: "10px 30px 16px 16px",
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  modalButton: {
    px: "16px",
    pt: "20px",
    pb: "23px",
    gap: "20px",
    display: "flex",
    alignItems: "center",
  },

  cancel: {
    width: "100%",
    height: { xs: "35px", sm: "45px" },
    color: "#fff",
    textTransform: "none",
    borderRadius: "10px",
    border: "1px solid #3e3f40",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  // layout content details
  layoutContentDetails: {
    flex: "1",
    height: "auto",
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
  },

  // loader
  loader: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },

  // popover action
  popover: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "5px 0px",
    "& .MuiPaper-root": {
      border: "1px solid #f0f0f070",
      borderRadius: "10px",
      boxShadow: "none !important",
      backgroundColor: "#262626",
      color: "#fff",
    },
  },

  detailText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    minWidth: "100%",
    padding: "6px 19px",
    textTransform: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: "1",
    fontWeight: 400,
    "& svg": {
      marginRight: "8px",
      fontSize: "16px",
    },
  },

  deleteText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    minWidth: "100%",
    padding: "6px 16px",
    textTransform: "none",
    color: "#D32F2F",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: "1",
    fontWeight: 400,
    "& svg": {
      marginRight: "8px",
      fontSize: "20px",
    },
  },

  iconButton: {
    color: "#000010",
    "&:hover": {
      color: "#000",
    },
  },

  // add admin form
  admin: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    bgcolor: "rgba(0,0,0,0.3)",
    zIndex: 1300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  adminForm: {
    bgcolor: "background.paper",
    borderRadius: 3,
    p: "16px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  addAdminContent: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#555",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    scrollbarColor: "#262626",
  },

  adminCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 1,
  },

  adminAction: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  formButton: {
    minWidth: 0,
    padding: 0.5,
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: "transparent" },
  },

  formHeading: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 500,
  },

  formFieldText: {
    my: 1,
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
  },

  adminFieldText: {
    my: 1,
    color: "#fff",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: 600,
  },

  formField: {
    height: "42px",
    borderRadius: "5px",
    color: "#fff",
    "& .MuiOutlinedInput-root": {
      height: "100%",
      fontSize: "16px",
      fontWeight: 400,
      color: "#fff",
      borderRadius: "5px",
      "& .MuiOutlinedInput-input": {
        padding: "10px 14px",
        height: "100%",
        boxSizing: "border-box",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a9a9a9",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3b82f6",
        borderWidth: "1.5px",
      },
    },
    "&:focus": {
      outline: "none",
    },
    "& .MuiSelect-icon": {
      color: "#fff",
    },

    "& .MuiFormHelperText-root": {
      ml: "0px",
      "&.Mui-error": {
        color: "#d32f2f",
      },
    },
  },

  formSelect: {
    "& .MuiSelect-select": {
      padding: "10px 14px",
      color: "#fff",
      height: "42px",
      display: "flex",
      alignItems: "center",
    },
    "& .MuiOutlinedInput-root": {
      height: "42px",
      fontSize: "16px",
      fontWeight: 400,
      color: "#fff",
      borderRadius: "5px",
      "& .MuiOutlinedInput-input": {
        padding: "10px 14px",
        height: "100%",
        boxSizing: "border-box",
        color: "#fff",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3e3f40",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#888",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3b82f6",
      borderWidth: "2px",
    },
    "& .MuiSelect-icon": {
      color: "#fff",
      width: 20,
      height: 20,
    },
    "& .MuiFormHelperText-root": {
      ml: "0px",
      "&.Mui-error": {
        color: "#d32f2f",
      },
    },
  },

  formVisibile: {
    fontSize: 18,
    color: "#fff",
  },

  // delete confirmation dialog
  deleteModal: {
    position: "absolute",
    top: { xs: "27%", sm: "30%" },
    left: { xs: "10.5%", sm: "38%" },
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", sm: "400px" },
    borderRadius: "10px",
    bgcolor: "#fff",
  },

  deleteDialogTitleText: {
    p: 2,
    color: "#212529",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 1000,
  },

  deletedialogButton: {
    px: "16px",
    py: "20px",
    gap: "20px",
    display: "flex",
    alignItems: "center",
  },

  deleteCancelButton: {
    width: "200px",
    height: "42px",
    color: "#000",
    textTransform: "none",
    borderRadius: "10px",
    border: "1px solid #CED4DA",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  deletelogoutButton: {
    width: "200px",
    height: "42px",
    color: "#fff",
    background: "#000",
    textTransform: "none",
    borderRadius: "10px",
    border: "1px solid #CED4DA",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  // data grid desktop view
  dataGridDesktopView: {
    borderRadius: "8px",
    backgroundColor: "#000",
    border: "1px solid #3E3F40",
  },

  // data grid desktop view
  gridBox: {
    mb: 2,
    gap: "10px",
    display: "flex",
    alignItems: "center",
  },

  // data grid Filter popover
  dataGridFilterPopover: {
    fontSize: "16px",
    lineHeight: "21px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "7px",
    width: "200px",
    height: "42px",
    borderColor: "#3E3F40",
    color: "#fff",
    textTransform: "none",
    backgroundColor: "#000",
  },

  filterButtonIcon: {
    ml: 1,
    display: "flex",
    alignItems: "center",
  },

  gridPopover: {
    p: 2,
    border: "1px solid #3e3f40",
    borderRadius: 1,
    width: 220,
    background: "#262626",
  },

  gridPopoverHead: {
    mb: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  gridFilterText: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: 700,
  },

  gridClearAll: {
    color: "#FF0000",
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: 700,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  gridFilterButton: {
    color: "#fff",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 400,
  },

  gridButon: {
    mb: 2,
    mx: 1,
    gap: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  gridActive: {
    textTransform: "none",
    width: "100px",
    height: "35px",
    color: "#fff",
    border: "1px solid #3e3f40",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  gridInactive: {
    textTransform: "none",
    width: "100px",
    height: "35px",
    color: "#fff",
    border: "1px solid #3e3f40",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  gridFormText: {
    mb: 1,
    color: "#fff",
  },

  gridFormOption: {
    borderRadius: "8px",
    height: "43px",
    color: "#fff",
    "&:focus": {
      outline: "none",
    },
    "& .MuiSelect-icon": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root, &.MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
        borderWidth: "1px",
      },
    },
  },

  filterFormOption: {
    borderRadius: "8px",
    height: "43px",
    color: "#fff",
    "&:focus": {
      outline: "none",
    },
    "& .MuiSelect-icon": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root, &.MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e3f40",
        borderWidth: "1px",
      },
    },
  },

  filterMenuProp: {
    PaperProps: {
      sx: {
        border: "1px solid #3e3f40",
        borderRadius: "12px",
        backgroundColor: "transparent",
        "& .MuiMenuItem-root": {
          color: "#fff",
          backgroundColor: "#262626",
          "&:hover": {
            backgroundColor: "#262626",
          },
          "&.Mui-selected": {
            backgroundColor: "#262626",
            "&:hover": {
              backgroundColor: "#262626",
            },
          },
        },
        "& .MuiList-root.MuiMenu-list": {
          paddingTop: "4px",
          paddingBottom: 0,
          outline: "none",
        },
      },
    },
  },

  filterOption: {
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#000",
    border: "1px solid #3f3f40",
    borderRadius: "4px",
    "&.Mui-selected": {
      color: "#fff",
    },
  },

  // Delete confirmation dialog
  deleteConfirmDialog: {
    minWidth: { xs: "250px", sm: "350px" },
    minHeight: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 25px 13px 25px",
    overflowX: "hidden",
  },

  deletTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "1.25rem",
    fontWeight: 500,
    textAlign: "center",
    color: "#fff",
    p: "10px",
  },

  deletSubTitle: {
    color: "#fff",
    mb: 2,
    textAlign: "center",
  },

  cancelBox: {
    color: "#fff",
    gap: 2,
    display: "flex",
    alignItems: "center",
    width: "100%",
    flex: 1,
    height: { xs: "35px", sm: "45px" },
    color: "#FFFFFF",
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "transparent",
    borderRadius: "12px",
    mt: 1,
  },

  cancelTitle: {
    flex: 1,
    height: { xs: "35px", sm: "45px" },
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    textTransform: "capitalize",
    fontSize: { xs: "15px", sm: "16px" },
    backgroundColor: "rgba(255,255,255,0.05)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
    },
  },

  deleteButon: {
    height: { xs: "35px", sm: "45px" },
    width: "100%",
    backgroundColor: "#d32f2f",
    color: "#fff",
    textTransform: "none",
    padding: "8px 16px",
    borderRadius: "12px",
    flex: 1,
    "&:hover": {
      backgroundColor: "#b91c1c",
    },
  },

  accordionSummary: {
    display: "flex",
    flexDirection: { sm: "row", md: "column" },
    gap: "4px",
  },

  // add admin drawer

  // Edit Admin Form dialog
  editForm: {
    "& .MuiDrawer-paper": {
      width: "500px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#262626",
      border: "1px solid #3e3f40",
    },
  },

  editTitle: {
    borderBottom: "1px solid #3e3f40",
  },

  // add admin drawer
  whiteDrawer: {
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#444",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#444 transparent",
  },

  // drawer admin action button
  editActiondrawer: {
    borderTop: "1px solid #3e3f40",
    p: "12px 20px",
    position: "sticky",
    bottom: 0,
    zIndex: 2,
    boxSizing: "border-box",
  },

  editDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    p: "10px",
    backgroundColor: "#1e1f20",
    borderBottom: "1px solid #3e3f40",
  },

  editAction: {
    px: "25px",
    maxWidth: "90.5%",
  },

  formSubmitButton: {
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #3e3f40",
    fontSize: 16,
    fontWeight: 600,
    textTransform: "none",
    width: "100%",
    height: "38px",
  },

  selectMenuProps: {
    PaperProps: {
      sx: {
        color: "#fff",
        backgroundColor: "#262626",
        "& .MuiMenuItem-root": {
          backgroundColor: "#262626",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#262626",
          },
          "&.Mui-selected": {
            backgroundColor: "#262626",
            "&:hover": {
              backgroundColor: "#262626",
            },
          },
        },
      },
    },
  },

  // shimmer styles
  waveColor: {
    bgcolor: "rgba(255,255,255,0.1)",
    borderRadius: "5px",
    "&::after": {
      bgcolor: "rgba(255,255,255,0.1)",
    },
  },
};

export default style;
