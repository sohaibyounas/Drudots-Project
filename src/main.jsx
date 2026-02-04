import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { Toaster } from "react-hot-toast";
import { toastOptions, toasterContainerStyle } from "./theme/toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      {/* Toast notifications - root level for entire project */}
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        gutter={8}
        toastOptions={toastOptions}
        containerStyle={toasterContainerStyle}
      />
    </ThemeProvider>
  </StrictMode>
);
