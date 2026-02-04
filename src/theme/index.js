import { createTheme } from "@mui/material/styles";

// ===== BUTTON CONFIGURATION =====
// Centralized color palette and button styling
export const buttonColors = {
  primary: "#0A84FF", // Blue (sidebar active color)
  secondary: "#FFFFFF", // White
  danger: "#FF4D4F", // Red (delete, logout, etc)
  dropdownMenu: {
    background: "rgba(255,255,255,0.04)", // Dropdown menu background
    text: "#FFFFFF", // White text
    border: "none", // No border
  },
  cancel: {
    text: "#FFFFFF", // White text
    border: "rgba(255,255,255,0.3)",
    background: "transparent",
  },
  hover: {
    primary: "#0067CC", // Darker blue
    secondary: "#E5E5E5", // Lighter gray
    danger: "#DC2626", // Darker red
    cancel: {
      border: "rgba(255,255,255,0.5)",
      background: "rgba(255,255,255,0.05)",
    },
  },
  disabled: "#6B7280", // Gray
};

// Button corner radius (easily adjustable in one place)
export const buttonBorderRadius = "12px";

// Common button sx template
export const buttonBaseSx = {
  borderRadius: buttonBorderRadius,
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
  transition: "all 0.2s ease",
  "&:disabled": {
    backgroundColor: buttonColors.disabled,
    color: "#fff",
    cursor: "not-allowed",
  },
};

// Dialog styles for consistent dialog appearance
export const dialog = {
  borderRadius: "28px",
  background:
    "linear-gradient(180deg, rgba(33,34,38,0.95) 0%, rgba(21,22,27,0.95) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 42px 120px rgba(2,6,23,0.65)",
};

// theme styling
const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#1f2024",
    },
  },
  // default font family
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  // custom components
  components: {
    // MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          ...buttonBaseSx,
        },
        containedPrimary: {
          backgroundColor: buttonColors.primary,
          color: "#fff",
          "&:hover": {
            backgroundColor: buttonColors.hover.primary,
          },
        },
        containedSecondary: {
          backgroundColor: buttonColors.secondary,
          color: "#000",
          "&:hover": {
            backgroundColor: buttonColors.hover.secondary,
          },
        },
      },
    },
    // MuiTextField
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root .MuiSvgIcon-root": {
            color: "#fff",
          },
        },
      },
    },

    // MuiIconButton
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
