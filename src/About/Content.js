import React from "react";
import { Box, Typography, Button } from "@mui/material";

import Hobbies from "./Hobbies";

export default function Content() {
  return (
    <Box
      p={{ md: 2 }}
      sx={{
        flexGrow: { md: 1 },
        fontSize: {
          xs: "1rem",
          md: "1.25rem",
          lg: "1.5rem",
          xl: "1.9rem",
        },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{ fontSize: "inherit" }}
      >
        I started programming as a hobby, now i made it as my proffession
      </Typography>
      <Hobbies />
      <Button variant="contained" href="/resume-anirudhvs.pdf" download>
        My Resume
      </Button>
    </Box>
  );
}
