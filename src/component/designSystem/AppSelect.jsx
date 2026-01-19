import React, { forwardRef } from "react";
import AppTextField from "/AppTextField.jsx";
import { menuPaperProps } from "/styles.js";

const mergeMenuProps = (customMenuProps = {}) => {
  const merged = { ...customMenuProps };
  merged.PaperProps = {
    ...menuPaperProps,
    ...(customMenuProps?.PaperProps || {}),
  };
  if (menuPaperProps?.sx) {
    merged.PaperProps.sx = {
      ...menuPaperProps.sx,
      ...(customMenuProps?.PaperProps?.sx || {}),
    };
  }
  return merged;
};

const AppSelect = forwardRef(function AppSelect(
  { children, SelectProps, sx, ...props },
  ref
) {
  const finalSelectProps = {
    displayEmpty: true,
    ...(SelectProps || {}),
  };
  finalSelectProps.MenuProps = mergeMenuProps(finalSelectProps.MenuProps);

  return (
    <AppTextField
      ref={ref}
      select
      sx={sx}
      SelectProps={finalSelectProps}
      {...props}
    >
      {children}
    </AppTextField>
  );
});

export default AppSelect;
