import React from "react";
import Zoom from "@mui/material/Zoom";

const LiquidDropTransition = React.forwardRef(function LiquidDropTransition(
  props,
  ref
) {
  const { in: inProp, ...rest } = props;
  return (
    <Zoom
      ref={ref}
      in={inProp}
      {...rest}
      timeout={{ enter: 420, exit: 220 }}
      style={{
        transformOrigin: "50% 12%",
        filter: inProp ? "drop-shadow(0 25px 60px rgba(6,10,22,0.55))" : "none",
      }}
    />
  );
});

export default LiquidDropTransition;
