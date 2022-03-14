import React, { useContext } from "react";

import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ScrollContext } from "./HideOnscrollDown";

export default function MobileMenuToggleButton({ toggleMenu }) {
  const scrolled = useContext(ScrollContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "end",
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="large"
        aria-label="Mobile menu toggle"
        aria-haspopup="true"
        onClick={toggleMenu}
        color={scrolled ? "secondary" : "primary"}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
