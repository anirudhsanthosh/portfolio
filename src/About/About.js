import React from "react";

import { Box } from "@mui/material";

import Title from "./Title";
import Content from "./Content";

export default function About() {
  return (
    <Box
      width="100%"
      height="100vh"
      p="1rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ xs: "column", md: "row" }}
      component="section"
      area-aria-labelledby="about-anirudh"
    >
      <Title />
      <Content />
    </Box>
  );
}
