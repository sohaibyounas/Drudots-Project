import React, { forwardRef } from "react";
import { TextField } from "@mui/material";
import { fieldBaseSx } from "./styles.js";

const AppTextField = forwardRef(function AppTextField(
  { sx, InputLabelProps, ...props },
  ref,
) {
  return (
    <TextField
      ref={ref}
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ shrink: true, ...InputLabelProps }}
      sx={{ ...fieldBaseSx, ...sx }}
      {...props}
    />
  );
});

export default AppTextField;
