import React from "react";

import { Typography } from "@mui/material";

export default function MobileDrawerOptionHeading(props) {
  const { children } = props;
  return (
    <Typography
      {...props}
      variant="body1"
      component="h6"
      sx={{
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: "0.6875rem",
        margin: "20px 0px 10px",
      }}
      gutterBottom
    >
      {children}
    </Typography>
  );
}
