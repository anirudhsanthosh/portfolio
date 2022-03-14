import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MobileDrawerOptionHeading from "./MobileDrawerOptionHeading";

export default function ThemeModeMenu({ lightmode, toggleThemeMode }) {
  const selectedSx = {
    backgroundColor: "primary.main",
    color: "secondary.main",
    "&:hover": {
      color: "secondary.main",
      backgroundColor: "primary.main",
    },
  };
  const unSelectedSx = { color: "primary.main" };

  return (
    <Box maxWidth={"80vw"} paddingX={2}>
      <MobileDrawerOptionHeading>Mode</MobileDrawerOptionHeading>
      <ButtonGroup variant="outlined" aria-label="Theme settings" size="large">
        <Button
          aria-label="Light"
          sx={lightmode ? selectedSx : unSelectedSx}
          onClick={() => {
            if (!lightmode) toggleThemeMode();
          }}
        >
          <LightModeIcon />
        </Button>
        <Button
          aria-label="Dark"
          sx={!lightmode ? selectedSx : unSelectedSx}
          onClick={() => {
            if (lightmode) toggleThemeMode();
          }}
        >
          <DarkModeIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
