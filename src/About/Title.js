import React from "react";
import { Typography, Box } from "@mui/material";

export default function Title() {
  const aboutmeStyles = {
    color: "secondary.dark",
    fontSize: { xs: "1.26rem", md: "1.96rem", lg: "2.6rem", xl: "3.2rem" },
    pb: 3,
    textTransform: "uppercase",
  };
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: { md: 1 },
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        id="about-anirudh"
        sx={aboutmeStyles}
      >
        {"<About me />"}
      </Typography>
    </Box>
  );
}
