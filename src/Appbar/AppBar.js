import React, { useState } from "react";

import { AppBar, Toolbar, Box } from "@mui/material";

import HideOnScrollDown from "./HideOnscrollDown";
import Logo from "./Logo";
import SocialBar from "./SocialBar";
import Menu from "./Menu";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import MobileMenuDrawer from "./MobileMenuDrawer";
import MobileSocialMenu from "./MobileSocialMenu";
import ThemeSwitch from "./ThemeSwitch";
/**
 *
 * @param {$lightmode<bool>,$toggleThemeMode<Function>} param0
 * @returns
 */
export default function CustomAppbar({ lightmode, toggleThemeMode }) {
  const pages = ["Products", "Pricing", "Blog"];

  const [menuOpenStatus, setMenuOpenStatus] = useState(false);

  function toggleMenu() {
    setMenuOpenStatus(!menuOpenStatus);
  }

  return (
    <HideOnScrollDown>
      <AppBar position="fixed" enableColorOnDark={true}>
        <Toolbar>
          <Logo lightmode={lightmode} />
          {/* <Menu pages={pages} /> */}
          <Box sx={{ flexGrow: 1 }}></Box>
          <MobileSocialMenu
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "300%",
            }}
          />
          <MobileMenuToggleButton toggleMenu={toggleMenu} />
          <MobileMenuDrawer
            menuOpenStatus={menuOpenStatus}
            toggleThemeMode={toggleThemeMode}
            toggleMenu={toggleMenu}
            lightmode={lightmode}
          />
          <ThemeSwitch
            onChange={toggleThemeMode}
            checked={lightmode ? false : true}
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          />
        </Toolbar>
      </AppBar>
    </HideOnScrollDown>
  );
}
