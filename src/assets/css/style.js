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

  sidebarMenu: {
    padding: { xs: "12px", sm: "16px 20px", md: "16px" },
    height: {
      xs: "calc(100vh - var(--sat) - var(--sab) - 180px)",
      sm: "calc(100vh - 92px)",
    },
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
  },

  sidebarListHeading: {
    color: "#fff",
    fontSize: "13px",
    fontWeight: 600,
    lineHeight: "24px",
  },

  sidebarListSubHeading: {
    fontSize: "12px",
    lineHeight: "24px",
    cursor: "pointer",
    fontWeight: 400,
    listStyleType: "circle",
    display: "list-item",
    listStylePosition: "inside",
    textDecoration: "none",
    color: "#fff",
  },

  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "rgb(255 255 255 / 50%)",
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

  logout: {
    width: "100%",
    height: { xs: "35px", sm: "45px" },
    color: "#fff",
    background: "red",
    textTransform: "none",
    borderRadius: "10px",
    border: "1px solid #3e3f40",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  // small screen header logo
  headerMain: {
    display: {
      xs: "flex",
      sm: "flex",
      md: "none",
    },
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingTop: { xs: "var(--sat)", sm: 0, md: 0 },
    paddingBottom: 0,
  },

  headerLogoImg: {
    width: "100%",
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

  // OTP Dialog
  dialog: {
    "& .MuiDialog-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .MuiPaper-root": {
      background: "linear-gradient(180deg, #1F1F1F 0%, #1A1A1A 100%)",
      borderRadius: "32px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 35px 60px rgba(0,0,0,0.55)",
      color: "#fff",
      padding: "20px",
      margin: 0,
      position: "relative",
      maxWidth: { xs: "350px", sm: "450px" },
      width: "90%",
    },
  },

  dialogText: {
    fontWeight: 600,
    fontSize: { sm: "22px", xs: "20px" },
    lineHeight: { sm: "28px", xs: "24px" },
    color: "#fff",
  },

  dialogSubText: {
    mt: "6px",
    mb: { sm: "26px", xs: "16px" },
    textAlign: "center",
  },

  dialogHeadText: {
    textAlign: "center",
    margin: { sm: "0px 24px", xs: "0px 12px" },
    color: "rgba(255,255,255,0.72)",
    fontWeight: 400,
    lineHeight: { sm: "24px", xs: "20px" },
    fontSize: { sm: "16px", xs: "14px" },
  },

  dialogEmail: {
    pt: { sm: "6px", xs: "4px" },
    pb: { sm: "2px", xs: "10px" },
    color: "#fff",
    fontWeight: 600,
    lineHeight: { sm: "24px", xs: "20px" },
    fontSize: "16px",
    letterSpacing: 0.2,
  },

  dialogOtp: {
    marginBottom: "10px",
    textAlign: "start",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 600,
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: 0.4,
  },

  dialogOtpInputs: {
    display: "flex",
    gap: "12px",
  },

  dialogOtpfields: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 20px 35px rgba(0,0,0,0.55)",
      transition: "all 0.2s ease",
    },

    // border on hover
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(10,132,255,0.7)",
      borderWidth: "1px",
    },

    //  border on focus (click)
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(10,132,255,0.95)",
      borderWidth: "2px",
      boxShadow: "0 0 0 2px rgba(10,132,255,0.25)",
    },

    "& .MuiInputBase-input": {
      height: { sm: "3rem", xs: "2.5rem" },
      padding: 0,
      textAlign: "center",
      fontWeight: 700,
      fontSize: { sm: "20px", xs: "18px" },
      color: "#fff",
    },
  },

  dialogButtons: {
    mt: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { sm: "14px", xs: "10px" },
    flexWrap: "nowrap",
    width: "100%",
  },

  dialogCancelButton: {
    flex: 1,
    maxWidth: "230px",
    height: "44px",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    textTransform: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "24px",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "rgba(255,255,255,0.18)",
      borderColor: "rgba(255,255,255,0.25)",
    },
  },

  otpLoader: {
    size: "15px",
    color: "#fff",
  },

  dialofConfirmButton: {
    flex: 1,
    maxWidth: "230px",
    height: "44px",
    background: "#0A84FF",
    color: "#fff",
    textTransform: "none",
    borderRadius: "12px", // Update this or use theme value
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    boxShadow: "none",
    border: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "#0067CC",
    },
    "&:active": {
      transform: "translateY(1px)",
    },
  },

  dialogSpamText: {
    pl: "0px",
    mt: "22px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "24px",
  },

  dialogSendButton: {
    color: "#0A84FF",
    textDecoration: "underline",
    background: "transparent",
    textTransform: "none",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: 0.2,
    "&:hover": {
      textDecoration: "underline",
      background: "transparent",
      color: "#0067CC",
    },
  },

  // Role Management page
  loader: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },

  // company name cell
  comanyText: {
    display: "flex",
    flexDirection: "column",
    width: "260px",
    overFlow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "clip",
  },

  roleNameCol: {
    width: "210px",
    overFlow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "21px",
  },

  rowEmail: {
    color: "#AAAAAA",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
  },

  tableHead: {
    width: "100%",
    pl: "10px",
  },

  headRowSubHeading: {
    color: "#fff",
    fontSize: { xs: "12.5px", sm: "14px" },
    lineHeight: "18px",
    fontWeight: 400,
  },

  // table head cell row
  tableRow: {
    "&:hover": {
      backgroundColor: "#00af5012",
    },
  },

  tableHeadCell: {
    color: "#fff",
    borderBottom: "none",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 600,
  },

  tableHeadeButton: {
    color: "#fff",
    bgcolor: "#000",
    textTransform: "none",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    padding: "8px 16px",
    width: "160px",
    height: "42px",
  },

  addAdminButton: {
    textTransform: "none",
    display: { xs: "none", md: "block" },
  },

  tableAddButton: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "25px",
  },

  tablePlusIcon: {
    pt: "7px",
    display: { xs: "block", md: "none" },
  },

  // name column
  tableRow1: {
    borderRight: "1px solid #DCE0E1",
    width: "260px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  // Phone column
  tableRowPhone: {
    width: "150px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRight: "1px solid #DCE0E1",
  },

  // Email column
  tableRowEmail: {
    width: "250px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRight: "1px solid #DCE0E1",
  },

  // Role column
  tableRowRole: {
    width: "120px",
    borderRight: "1px solid #DCE0E1",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  // Action column
  tableRowAction: {
    width: "80px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    textWrap: "nowrap",
  },

  row1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "10px",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 600,
    cursor: "pointer",
  },

  row2: {
    color: "#fff",
    fontSize: "13px",
    fontWeight: 400,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(184 200 217 / 36%)",
  },

  rolecolName: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  roleButton: {
    fontSize: 20,
    color: "#fff",
  },

  tableRows: {
    border: "1px solid #DEE2E6",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
  },

  tr: {
    cursor: "pointer",
    border: "1px solid #DEE2E6",
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

  // Role Management Accordion
  roleAccordion: {
    borderRadius: "5px",
    border: "1px solid #3e3f40",
    display: { xs: "block", sm: "block", md: "none" },
  },

  accordionHeadeButton: {
    backgroundColor: "#0070FF",
    border: "1px solid #3E3F40",
    borderRadius: "4px",
    width: { xs: "40px", md: "170px" },
    minWidth: { xs: "40px", md: "64px" },
    height: { xs: "35px", md: "42px" },
    minHeight: { xs: "35px", md: "42px" },
    cursor: "pointer",
  },

  accordRoleText: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
    my: "5px",
  },

  accordRoleSubText: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
  },

  protectionSubText: {
    color: "#fff",
  },

  accordion: {
    boxShadow: "none",
    backgroundColor: "#000",
    "& .MuiAccordionSummary-root": {
      p: "0px 10px 0px 0px",
    },
  },

  accordionDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #DCE0E1",
    my: "5px",
  },

  accordionText: {
    color: "#fff",
    fontSize: { xs: "10px", sm: "15px" },
    lineHeight: "24px",
    fontWeight: 600,
    my: "5px",
  },

  accordionSubText: {
    color: "#fff",
    fontSize: { xs: "10px", sm: "15px" },
    lineHeight: "24px",
    fontWeight: 600,
  },

  protectionSubText: {
    color: "#fff",
  },

  accordionAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
  },

  accordionActionButton: {
    gap: { xs: "10px", md: "20px" },
    padding: "8px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  accordionDetailText: {
    color: "#fff",
    cursor: "pointer",
    height: "30px",
    textTransform: "none",
    border: "1px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pl: 1.5,
    gap: "4px",
    "& svg": {
      marginRight: "6px",
      fontSize: "18px",
    },
  },

  accordionDeleteText: {
    color: "#D32F2F",
    cursor: "pointer",
    height: "30px",
    textTransform: "none",
    border: "1px solid #D32F2F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // pr: 1.5,
    gap: "4px",
    "& svg": {
      marginRight: "6px",
      fontSize: "18px",
    },
  },

  acordRoleText: {
    color: "#000",
    cursor: "pointer",
    textTransform: "none",
  },

  // accordion skelton
  skeltonName: {
    p: "5px 10px",
    gap: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    mt:1
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
      backgroundColor: "#DC2626f",
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
    // Firefox support
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

  // Members Page
  title: {
    color: "#fff",
    fontSize: { xs: "20px", sm: "30px" },
    lineHeight: "normal",
    fontWeight: 700,
  },

  subititle: {
    maxWidth: { xs: "87%", sm: "100%" },
    color: "#fff",
    fontSize: { xs: "14px", sm: "18px" },
    lineHeight: { xs: "20px", sm: "27px" },
    fontWeight: 400,
  },

  tableTitle: {
    color: "#fff",
    fontSize: { xs: "20px", sm: "24px" },
    lineHeight: { xs: "30px", sm: "38px" },
    fontWeight: 700,
  },

  error: {
    color: "red",
    fontSize: "14px",
    fontWeight: 400,
  },

  searchMain: {
    m: "10px",
  },

  searchField: {
    m: { xs: "10px 0px", md: "10px" },
    width: { xs: "99%", sm: "96%", md: "96%" },
    borderColor: "#fff",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      height: "42px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A4A4A4",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A4A4A4",
      boxShadow: 2,
    },
  },

  searchTable: {
    mt: { xs: "10px", md: "20px" },
  },

  tableHeadRow: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    border: "1px solid #3E3F40",
    borderRadius: "8px",
    p: "15px",
    marginBottom: "11px",
  },

  tableCompany: {
    color: "#858585",
    fontSize: "16px",
    fontWeight: 500,
  },

  nameCell: {
    width: 200,
    borderRight: "1px solid #E0E0E0",
    color: "#666666",
  },

  phoneCell: {
    width: 180,
    borderRight: "1px solid #E0E0E0",
    color: "#666666",
  },

  coachCell: {
    width: 120,
    color: "#666666",
    borderRight: "1px solid #E0E0E0",
  },

  companyCell: {
    width: 220,
    color: "#666666",
  },

  // desktop-skeleton row
  tableRowData: {
    color: "#000",
    fontSize: "16px",
    fontWeight: 500,
    borderRight: "1px solid #E0E0E0",
  },

  // members accordion
  memberAcordion: {
    display: { xs: "block", sm: "block", md: "none" },
    border: "1px solid #3e3f40",
    borderRadius: "5px",
    p: 1,
    backgroundColor: "transparent",
  },

  accordionSkeleton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  accordionSubSkeleton: {
    display: "flex",
    justifyContent: "space-between",
  },

  accordiondetail: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #000",
  },

  accordiondetailTxt: {
    mt: "10px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #000",
  },

  accordionSubTitle: {
    mt: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  // Company Page
  companyTitle: {
    color: "#fff",
    fontSize: { xs: "20px", sm: "30px" },
    fontWeight: 700,
    lineHeight: "normal",
  },

  companySubTitle: {
    maxWidth: { xs: "290px", sm: "700px" },
    color: "#fff",
    fontSize: { xs: "13px", sm: "18px" },
    fontWeight: 400,
    lineHeight: { xs: "20px", sm: "27px" },
    pt: { xs: 1, sm: 0 },
  },

  company: {
    mt: "38px",
    gap: "20px",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  card: {
    flex: "1 1 300px",
    minWidth: "260px",
    maxWidth: "100%",
    borderRadius: 2,
    color: "#fff",
    backgroundColor: "#000",
    border: "1px solid #3e3f40",
  },

  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  cardIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "5px",
    mr: "7px",
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "#0C100F",
  },

  skeletonICon: {
    background: "none",
  },

  cardText: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  cardTitle: {
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: "normal",
  },

  cardHeading: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "25px",
  },

  cardPerct: {
    color: "lightgreen",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
  },

  cardDetails: {
    color: "#858585",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
  },

  // Company Table
  searchArea: {
    width: "100%",
    backgroundColor: "#000",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      height: "42px",
      borderRadius: "8px",
      color: "#fff",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3E3F40",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3E3F40",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3E3F40",
      },
    },
    "& input::placeholder": {
      color: "#fff",
      opacity: 1,
    },
  },

  compHead: {
    mt: 4,
    mb: 2,
  },

  compColEmail: {
    fontSize: "14px",
    fontWeight: 600,
  },

  compColText: {
    color: "#aaa",
    fontSize: "14px",
    lineHeight: "20px",
  },

  compcolButton: {
    fontSize: 20,
    color: "#fff",
  },

  // companies table-head row-data
  avatar: {
    mr: 1,
    width: 25,
    height: 25,
  },

  avatarBox: {
    display: "flex",
    alignItems: "center",
    minHeight: 70,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },

  avatarText: {
    m: 0,
    color: "#fff",
    lineHeight: "25px",
    fontWeight: 500,
    fontSize: "16px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },

  actionIcon: {
    border: "1px solid #858585",
    borderRadius: "8px",
    padding: "4px",
  },

  // Table Heading
  tableText: {
    color: "#fff",
    fontSize: { xs: "20px", sm: "24px" },
    fontWeight: 700,
    lineHeight: { xs: "20px", sm: "38px" },
  },

  // table body data
  tableBody: {
    px: "20px",
    borderRadius: "10px",
    border: "1px solid #3e3f40",
    backgroundColor: "#000",
  },

  // search field
  searchField: {
    mt: 4,
    mb: 2,
  },

  // skeleton styles
  waveCircle: {
    bgcolor: "#fff",
    borderRadius: "50%",
  },

  waveColor: {
    bgcolor: "#fff",
    borderRadius: "5px",
    "&::after": {
      bgcolor: "#fff",
    },
  },

  roleAccord: {
    display: "flex",
    alignContent: "center",
    gap: "10px",
    pt: "5px",
  },

  // Image loader
  imageLoader: {
    background: "#5c5c5c",
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    width: "15px !important",
    height: "15px !important",
    color: "#f0f0f0",
  },

  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },

  // company data grid
  companyDataGrid: {
    cursor: "pointer",
    "--DataGrid-t-color-background-base": "#000 !important",
    border: "1px solid #3e3f40",
    borderRadius: "8px",
    overflow: "hidden",
    height: "auto",
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "transparent",
    },
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
      border: "1px solid #3e3f40",
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#000",
      color: "#fff",
      outline: "none",
      border: "1px solid #3e3f40",
      borderBottom: "none",
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
    },
    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none",
      },
    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
      outline: "none",
      boxShadow: "none",
    },
    "& .MuiDataGrid-cell.MuiDataGrid-cell--editing": {
      boxShadow: "none",
      outline: "none",
    },
    "& .MuiDataGrid-cell.MuiDataGrid-cell--selected": {
      outline: "none",
      boxShadow: "none",
      backgroundColor: "transparent !important",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#000 !important",
    },
    "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
      borderBottom: "1px solid #3e3f40",
    },
    "& .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader, & .MuiDataGrid-row--borderBottom .MuiDataGrid-filler, & .MuiDataGrid-row--borderBottom .MuiDataGrid-scrollbarFiller":
      {
        borderBottom: "none !important",
      },
    "& .MuiDataGrid-columnSeparator": {
      display: "none !important",
    },
    "& .MuiCheckbox-root": {
      color: "#8C8C8C",
      borderRadius: "0%",
      "&.Mui-checked": {
        border: "none",
        borderRadius: "0%",
      },
    },
    "& .MuiCheckbox-root:hover": {
      backgroundColor: "#000",
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      width: "100%",
    },
    "& .MuiDataGrid-footerContainer": {
      display: "none",
    },
    "& .MuiDataGrid-overlayWrapperInner": {
      display: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
      },
      "&::-webkit-scrollbar-track": {
        display: "none !important",
        background: "transparent !important",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none !important",
        background: "transparent !important",
      },
      "&::-webkit-scrollbar-corner": {
        display: "none !important",
        background: "transparent !important",
      },
      padding: "0 !important",
      margin: "0 !important",
    },
    "& .MuiDataGrid-virtualScrollerContent": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
      },
      "&::-webkit-scrollbar-track": {
        display: "none !important",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none !important",
      },
    },
    "& .MuiDataGrid-main": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
      },
      "&::-webkit-scrollbar-track": {
        display: "none !important",
      },
      overflow: "hidden !important",
    },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
      },
    },
    "& .MuiDataGrid-scrollArea": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
      },
      "&::-webkit-scrollbar-track": {
        display: "none !important",
        background: "transparent !important",
      },
    },
    "& *": {
      scrollbarWidth: "none !important",
      msOverflowStyle: "none !important",
      "&::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
      },
      "&::-webkit-scrollbar-track": {
        display: "none !important",
        background: "transparent !important",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none !important",
        background: "transparent !important",
      },
      "&::-webkit-scrollbar-corner": {
        display: "none !important",
        background: "transparent !important",
      },
    },
    "& .MuiDataGrid-container--top [role=row]": {
      backgroundColor: "#000 !important",
    },
    "& .MuiDataGrid-container--bottom [role=row]": {
      backgroundColor: "#000 !important",
    },
  },

  companyDatGrid: {
    width: "100%",
    height: "auto",
    backgroundColor: "#000",
    display: { xs: "none", sm: "none", md: "block" },
  },

  // companies Accordion
  companyAccordion: {
    display: { xs: "block", sm: "block", md: "none" },
    border: "1px solid #3e3f40",
    borderRadius: "5px",
    p: 1,
    backgroundColor: "transparent",
  },

  acordionBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
  },

  compAcordionTitle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  },

  compAcordionSubTitle: {
    color: "#3e3f40",
    fontSize: "14px",
    lineHeight: "20px",
  },

  acordionDetails: {
    pt: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  accordionEdit: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
    my: "5px",
    mb: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  compAccordion: {
    boxShadow: "none",
    backgroundColor: "#000",
    color: "#000",
    pb: 1.5,
    "& .MuiAccordionSummary-root": {
      p: 0,
    },
  },

  compSummary: {
    p: 0,
    m: 0,
    minHeight: "unset",
    "&.Mui-expanded": {
      minHeight: "unset",
    },
    "& .MuiAccordionSummary-content": {
      m: 0,
      p: 0,
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      m: 0,
    },
  },

  compText: {
    color: "#fff",
    fontSize: { xs: "12px", sm: "14px" },
    fontWeight: 400,
  },

  compRow2: {
    lineHeight: "24px",
    width: { xs: "25px", sm: "30px" },
    height: { xs: "25px", sm: "30px" },
    fontSize: { xs: "12px", sm: "13px" },
    fontWeight: 600,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(184 200 217 / 36%)",
  },

  compTxt: {
    color: "#fff",
    fontSize: { xs: "12px", sm: "13px" },
    lineHeight: "24px",
    fontWeight: 600,
  },

  compSubText: {
    color: "#fff !important",
    fontSize: { xs: "12px", sm: "14px" },
    lineHeight: "24px",
    fontWeight: 600,
  },

  compEdit: {
    color: "#fff",
    fontSize: "13px",
    lineHeight: "24px",
    fontWeight: 600,
    my: "5px",
    mb: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  compDetailText: {
    fontSize: "13px",
    color: "#fff",
    cursor: "pointer",
    textTransform: "none",
  },

  // role management data grid
  managementDataGrid: {
    border: "1px solid #3e3f40",
    borderRadius: "4px",
    overflow: "hidden",
    height: "auto",
    backgroundColor: "#000",
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
    },
    "& .MuiDataGrid-root": {
      width: "100%",
      border: "none",
      backgroundColor: "#000",
    },
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      backgroundColor: "#000",
      border: "1px solid #3e3f40",
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#000",
      color: "#fff",
      outline: "none",
      border: "1px solid #3e3f40",
      borderBottom: "none",
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
    },
    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
      outline: "none",
    },

    // to override the unwanted border
    "& .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader, & .MuiDataGrid-row--borderBottom .MuiDataGrid-filler, & .MuiDataGrid-row--borderBottom .MuiDataGrid-scrollbarFiller":
      {
        borderBottom: "none !important",
      },
    "& .MuiDataGrid-columnSeparator": {
      display: "none !important",
    },
    "& .MuiDataGrid-columnHeader:last-child": {
      borderRight: "1px solid #3e3f40",
    },
    "& .MuiDataGrid-cell:last-child": {
      borderRight: "1px solid #3e3f40",
    },
    "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
      borderBottom: "1px solid #3e3f40",
    },
    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none",
      },

    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
      outline: "none",
      boxShadow: "none",
    },
    "& .MuiDataGrid-cell.MuiDataGrid-cell--editing": {
      boxShadow: "none",
      outline: "none",
    },
    "& .MuiDataGrid-cell.MuiDataGrid-cell--selected": {
      outline: "none",
      boxShadow: "none",
      backgroundColor: "transparent !important",
    },
    "& .MuiCheckbox-root": {
      color: "#8C8C8C",
      borderRadius: "0%",
      "&.Mui-checked": {
        border: "none",
        borderRadius: "0%",
      },
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      width: "100%",
    },
    "& .MuiDataGrid-footerContainer": {
      display: "none",
    },
    "& .MuiDataGrid-overlayWrapperInner": {
      display: "none",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#000 !important",
    },
    "& .MuiDataGrid-sortIcon": {
      marginLeft: "4px",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      overflow: "visible",
    },
  },

  // action/edit button
  dotIcon: {
    fontSize: "20",
    border: "1px solid #E0E0E0",
    borderRadius: "5px",
  },

  // company Edit popover
  companyPopoverLayer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    bgcolor: "rgba(0,0,0,0.4)",
    zIndex: 1200,
  },

  companyPopover: {
    "& .MuiPaper-root": {
      border: "1px solid #a1a3a4",
      borderRadius: "5px",
      padding: "4px",
      boxShadow: "none !important",
      backgroundColor: "#262626",
    },
  },

  companyPopoverText: {
    p: "10px",
    color: "#fff",
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },

  // Pagination component
  pagination: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column", sm: "row" },
    mt: 2,
    px: 1,
    pb: 2,
  },

  paginationLeftText: {
    mr: 1,
    color: "#fff",
    fontSize: {
      xs: "13px",
      sm: "14px",
    },
  },

  paginationLeftSubText: {
    color: "#fff",
    fontSize: {
      xs: "13px",
      sm: "14px",
    },
  },

  paginationInput: {
    mr: "4px",
    "& .MuiInputBase-root": {
      height: { xs: "35px", sm: "40px" },
      width: "67px",
      color: "#fff",
      backgroundColor: "#000",
    },
    "& .MuiInputBase-input": {
      padding: "8px 10px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3e3f40",
      },
      "&:hover fieldset": {
        borderColor: "#3e3f40",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3e3f40",
        borderWidth: "1px",
      },
    },
    "& .MuiInputBase-input[type=number]::-webkit-inner-spin-button": {
      filter: "invert(100%)",
      backgroundColor: "#3e3f40",
      width: "20px",
      marginRight: "2px",
      cursor: "pointer",
    },
    "& .MuiInputBase-input[type=number]::-webkit-outer-spin-button": {
      filter: "invert(100%)",
      backgroundColor: "#3e3f40",
      width: "20px",
      marginRight: "2px",
      cursor: "pointer",
    },
  },

  // left pagination
  paginationLeft: {
    display: "flex",
    alignItems: "center",
  },

  paginationLeftField: {
    width: 70,
    mr: 1,
    minHeight: 0,
    height: 30,
    "& .MuiInputBase-root": {
      minHeight: 0,
      height: 30,
      color: "#fff",
    },
    "& .MuiSelect-select": {
      minHeight: 0,
      height: 30,
      display: "flex",
      alignItems: "center",
    },
  },

  // right pagination
  paginationRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    border: "1px solid #3e3f40",
    Color: "#000",
    height: { xs: "40px", md: "35px" },
    overflow: "hidden",
  },

  paginationRightPrevButton: {
    color: "#fff !important",
    borderRadius: "0",
    padding: { xs: "8px 4px", md: "6px 2px" },
    textTransform: "none",
    minWidth: { xs: "36px", md: "50px" },
    "&[disabled]": {
      pointerEvents: "auto",
      cursor: "no-drop",
    },
    "&:hover": {
      backgroundColor: "#27292D",
      color: "#fff",
    },
  },

  paginationCount: {
    color: "#fff",
    padding: { xs: "8px 5px", md: "5px 10px" },
    marginRight: { xs: "2px", md: "5px" },
    minWidth: { xs: "40px", md: "50px" },
  },

  paginationPages: {
    color: "#fff",
    cursor: "pointer",
    padding: { xs: "8px 5px", md: "6px 10px" },
    borderRadius: "0",
    border: "1px solid #3e3f40",
    minWidth: { xs: "40px", md: "50px" },
  },

  paginationTotalPages: {
    color: "#fff",
    border: "none",
    borderRadius: "0",
    borderLeft: "1px solid #3e3f40",
    padding: { xs: "8px 5px", md: "6px 10px" },
    cursor: "pointer",
    minWidth: { xs: "40px", md: "50px" },
  },

  paginationNext: {
    color: "#fff",
    borderRadius: "0",
    borderTop: "none",
    borderBottom: "none",
    borderRight: "none",
    borderLeft: "1px solid #3e3f40",
    padding: { xs: "8px 4px", md: "6px 2px" },
    textTransform: "none",
    minWidth: { xs: "40px", md: "50px" },
    "&[disabled]": {
      pointerEvents: "auto",
      cursor: "no-drop",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#27292D",
      color: "#fff",
    },
  },

  acordionSumm: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: { xs: "10px", sm: "16px" },
  },

  memberaccordion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  memberGrid: {
    width: "100%",
    backgroundColor: "#000",
    display: { xs: "none", sm: "none", md: "block" },
    height: "auto",
  },
};

export default style;

export const OTP_BUTTON_BORDER_RADIUS = "12px";
