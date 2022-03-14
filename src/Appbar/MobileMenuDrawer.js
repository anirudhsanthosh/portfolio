import React from "react";
import {
  Drawer,
  Box,
  Grid,
  ButtonGroup,
  IconButton,
  Button,
  Typography,
  Divider,
} from "@mui/material/";
import ThemeModeMenu from "./ThemeModeMenu";
import MobileSocialMenu from "./MobileSocialMenu";
import MobileDrawerOptionHeading from "./MobileDrawerOptionHeading";

export default function MobileMenuDrawer({
  menuOpenStatus,
  toggleMenu,
  toggleThemeMode,
  lightmode,
}) {
  return (
    <Drawer
      anchor="right"
      open={menuOpenStatus}
      onClose={toggleMenu}
      component="nav"
      PaperProps={{
        sx: {
          backgroundColor: "background.backdrop",
          backdropFilter: "blur(20px)",
        },
      }}
    >
      <Divider light />
      <MobileDrawerOptionHeading paddingX={2}>
        Profiles
      </MobileDrawerOptionHeading>
      <MobileSocialMenu sx={{ color: "socialIcons.mobile.primary" }} />
      {/* <Divider light /> TODO */}
      <Box>
        {/* <Typography variant="h6" component="h5" p={2}>
          Settings
        </Typography> TODO*/}
      </Box>
      <Divider light />
      <ThemeModeMenu lightmode={lightmode} toggleThemeMode={toggleThemeMode} />
    </Drawer>
  );
}
