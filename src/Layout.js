import React, { useState } from "react";

import Head from "next/head";
import { themeDark, themeLight } from "./Theme";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Paper, Grid, Button } from "@mui/material";

import AppBar from "./Appbar/AppBar";

export default function Layout({ children }) {
  /**
   * state for theme default is dark
   * <CssBaseline> is the component which responsible for setting the changes
   */

  const [lightMode, setLightMode] = React.useState(false);

  const toggleThemeMode = () => {
    setLightMode(!lightMode);
  };

  // console.log({ themeDark, themeLight });
  return (
    <ThemeProvider theme={lightMode ? themeLight : themeDark}>
      <CssBaseline />
      <AppBar lightmode={lightMode} toggleThemeMode={toggleThemeMode} />
      <Box>{children}</Box>
    </ThemeProvider>
  );
}
