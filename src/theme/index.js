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

// Shared surface tokens for panels/cards used across admin pages
export const surfaceColors = {
  base: "#1f2024",
  elevated: "#2a2b31",
  subtle: "rgba(255,255,255,0.05)",
  border: "rgba(255,255,255,0.08)",
};

// Dialog tokens for consistent dialog appearance
export const dialog = {
  borderRadius: "28px",
  background:
    "linear-gradient(180deg, rgba(33,34,38,0.95) 0%, rgba(21,22,27,0.95) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 42px 120px rgba(2,6,23,0.65)",
};

export const cardSurface = {
  backgroundColor: surfaceColors.base,
  border: `1px solid ${surfaceColors.border}`,
  borderRadius: "28px",
};

export const subtleCardSurface = {
  backgroundColor: surfaceColors.subtle,
  border: `1px solid ${surfaceColors.border}`,
  borderRadius: "16px",
};

// Extended color palette (mapped 1:1 to provided swatches)
export const colorPalette = {
  Red: "#FF4D4F",
  Orange: "#FB8C00",
  Yellow: "#FBBF24",
  Green: "#10B981",
  Mint: "#34D399",
  Teal: "#14B8A6",
  Cyan: "#06B6D4",
  Blue: "#0A84FF",
  Indigo: "#4F46E5",
  Purple: "#A855F7",
  Pink: "#F472B8",
  Brown: "#A16207",
  "Red 2": "#FF6B6B",
  "Orange 2": "#FF8A4C",
  "Yellow 2": "#FFD54F",
  "Green 2": "#34D399",
  "Mint 2": "#2DD4BF",
  "Teal 2": "#06B6D4",
  "Cyan 2": "#06BDBA",
  "Blue 2": "#1E90FF",
  "Indigo 2": "#6366F1",
  "Purple 2": "#C084FC",
  "Pink 2": "#FF6B9A",
  "Brown 2": "#A57C43",
  Black: "#000000",
  White: "#FFFFFF",
  Gray: "#9CA3AF",
};

// Subtle accent backgrounds derived from the palette for use on stat cards
export const accentBackgrounds = {
  blueSoft: "rgba(10,132,255,0.14)",
  greenSoft: "rgba(16,185,129,0.14)",
  orangeSoft: "rgba(251,140,0,0.14)",
  tealSoft: "rgba(20,184,166,0.14)",
};

export const WHITELABEL_LAYOUT_BREAKPOINT = 1200;

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
      paper: "#1f2024",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  components: {
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
