import React from "react";

import { Box } from "@mui/material";

import Title from "./Title";
import Content from "./Content";
import { motion } from "framer-motion";
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
      sx={{ overflow: "hidden", textAlign: { xs: "center", md: "left" } }}
    >
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: "-150" }}
        transition={{ duration: 0.3 }}
      >
        <Title />
      </motion.div>
      <motion.div
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3 }}
        // viewport={{ once: true }}
      >
        <Content />
      </motion.div>
    </Box>
  );
}
