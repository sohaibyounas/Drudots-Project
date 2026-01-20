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
    borderBottom: "1px solid #3e3f40",
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
