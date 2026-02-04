// toast styling
export const toastOptions = {
  duration: 4000,
  style: {
    background: "#1a1a1a",
    color: "#fff",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  success: {
    iconTheme: {
      primary: "#10b981",
      secondary: "#fff",
    },
    style: {
      background: "#1a1a1a",
      color: "#fff",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444",
      secondary: "#fff",
    },
    style: {
      background: "#1a1a1a",
      color: "#fff",
    },
  },
};

// toast position
export const toasterContainerStyle = {
  top: 20,
  zIndex: 9999,
};
