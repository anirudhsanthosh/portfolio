import React from "react";

import { Box, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SocialBar({ socialLinks, lightmode }) {
  const border = lightmode ? "1px solid #1c1c1c33;" : "1px solid #ff1744";
  return (
    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
      {socialLinks.map((page) => (
        <IconButton
          key={page}
          size="medium"
          color="primary"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            // backgroundColor: "transparent",
            fontSize: "1.5rem",
            padding: "8px",
            color: "#007FFF",
            height: "34px",
            width: "34px",
            border,
            borderRadius: "10px",
            color: "#fff",
            marginRight: "0.25rem",
          }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      ))}
    </Box>
  );
}
