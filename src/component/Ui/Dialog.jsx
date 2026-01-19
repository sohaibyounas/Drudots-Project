import MuiDialog from "@mui/material/Dialog";
import LiquidDropTransition from "./Transition";

/**
 * Dialog
 * Central wrapper for all pop-up windows in the app.
 * - Adjust borderRadius, colors, blur, and shadow here.
 * - Content (title, text, buttons, icons) is defined per page.
 */

const Dialog = ({
  children,
  PaperProps = {},
  BackdropProps = {},
  sx,
  ...props
}) => {
  const defaultBackdropSx = {
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    position: "fixed",
    inset: 0,
    // slightly darker overlay, with extra focus on the top and bottom.
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.65) calc(env(safe-area-inset-top, 0px)), rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.9) calc(100% - env(safe-area-inset-bottom, 0px)))",
  };

  const defaultPaperSx = {
    borderRadius: "32px",
    background:
      "linear-gradient(180deg, rgba(33,34,38,0.95) 0%, rgba(21,22,27,0.95) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 42px 120px rgba(2,6,23,0.65)",
    color: "#f8fafc",
    overflow: "hidden",
  };

  // Handle sx prop: merge any non-selector keys and any nested "& .MuiDialog-paper" into PaperProps.sx
  const sxObj = sx || {};
  const paperSxOverrides = { ...(sxObj["& .MuiDialog-paper"] || {}) };
  // include top-level non-selector keys (e.g., minWidth, padding) as paper overrides
  Object.keys(sxObj).forEach((key) => {
    if (!key.startsWith("&") && !key.startsWith("@")) {
      paperSxOverrides[key] = sxObj[key];
    }
  });

  const mergedPaperSx = { ...defaultPaperSx, ...paperSxOverrides };

  return (
    <MuiDialog
      slots={{ transition: LiquidDropTransition }}
      BackdropProps={{
        ...(BackdropProps || {}),
        sx: { ...defaultBackdropSx, ...(BackdropProps?.sx || {}) },
      }}
      PaperProps={{
        ...(PaperProps || {}),
        sx: { ...mergedPaperSx, ...(PaperProps?.sx || {}) },
      }}
      sx={{
        "& .MuiBackdrop-root": {
          position: "fixed",
          inset: 0,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      }}
      {...props}
    >
      {children}
    </MuiDialog>
  );
};

export default Dialog;
