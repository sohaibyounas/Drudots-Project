import React, { forwardRef } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AppTextField from "./AppTextField";

const AppSearchField = forwardRef(function AppSearchField(
  { InputProps, onClear, ...props },
  ref
) {
  const hasValue = Boolean(props.value);
  const finalInputProps = {
    ...InputProps,
  };

  if (!finalInputProps.startAdornment) {
    finalInputProps.startAdornment = (
      <InputAdornment position="start">
        <SearchRoundedIcon
          fontSize="small"
          sx={{ color: "rgba(255,255,255,0.65)" }}
        />
      </InputAdornment>
    );
  }

  if (hasValue) {
    finalInputProps.endAdornment = (
      <InputAdornment position="end">
        {InputProps?.endAdornment}
        <IconButton
          disableRipple
          size="small"
          onClick={() => {
            if (onClear) {
              onClear();
            } else if (typeof props.onChange === "function") {
              props.onChange({ target: { value: "" } });
            }
          }}
        >
          <CloseRoundedIcon
            fontSize="small"
            sx={{ color: "rgba(255,255,255,0.6)" }}
          />
        </IconButton>
      </InputAdornment>
    );
  }

  return <AppTextField ref={ref} InputProps={finalInputProps} {...props} />;
});

export default AppSearchField;
