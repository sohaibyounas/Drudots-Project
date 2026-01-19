export const inputColors = {
  text: "#ffffff",
  label: "rgba(255,255,255,0.85)",
  placeholder: "rgba(255,255,255,0.6)",
  border: "rgba(255,255,255,0.24)",
  borderHover: "rgba(255,255,255,0.42)",
  borderFocus: "#0A84FF",
  background: "#2a2c32",
  backgroundMuted: "#1f2024",
};

export const fieldBaseSx = {
  "& .MuiInputLabel-root": {
    color: inputColors.label,
    fontSize: 14,
  },
  "& .MuiOutlinedInput-root": {
    color: inputColors.text,
    backgroundColor: inputColors.background,
    borderRadius: 10,
    fontSize: 14,
    "& fieldset": {
      borderColor: inputColors.border,
    },
    "&:hover fieldset": {
      borderColor: inputColors.borderHover,
    },
    "&.Mui-focused fieldset": {
      borderColor: inputColors.borderFocus,
      boxShadow: "0 0 0 1px rgba(10,132,255,0.4)",
    },
    "&.Mui-disabled": {
      opacity: 0.65,
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 14px",
  },
  "& .MuiSelect-icon": {
    color: inputColors.text,
  },
  '& input[type="date"]::-webkit-calendar-picker-indicator, & input[type="datetime-local"]::-webkit-calendar-picker-indicator, & input[type="time"]::-webkit-calendar-picker-indicator':
    {
      filter: "invert(1)",
    },
};

export const compactInputSx = {
  ...fieldBaseSx,
  "& .MuiOutlinedInput-input": {
    padding: "6px 10px",
    fontSize: 13,
  },
};

export const inlineSelectSx = {
  minWidth: 120,
  fontSize: 13,
  "& .MuiOutlinedInput-root": {
    color: inputColors.text,
    backgroundColor: inputColors.backgroundMuted,
    borderRadius: 8,
    "& fieldset": {
      borderColor: inputColors.border,
    },
    "&:hover fieldset": {
      borderColor: inputColors.borderHover,
    },
    "&.Mui-focused fieldset": {
      borderColor: inputColors.borderFocus,
    },
  },
};

export const menuPaperProps = {
  sx: {
    backgroundColor: "#1f2024",
    color: inputColors.text,
    borderRadius: 1.5,
    "& .MuiMenuItem-root": {
      fontSize: 14,
    },
  },
};
