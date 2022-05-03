import React from "react";

import { Box, Typography, Button } from "@mui/material";
import ContactButton from "../Contact/ContactButton";
import { motion } from "framer-motion";
export default function Hero({ openContactModal }) {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
      component="main"
      sx={{ textAlign: "center" }}
      // viewport={{ once: true }}
      area-labelledby="site-title"
    >
      <Typography
        variant="h3"
        component={motion.h2}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: "0.5" }}
        id="site-title"
      >
        Anirudh V S
      </Typography>
      <Typography
        variant="h6"
        component={motion.h1}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: "0.5" }}
        gutterBottom
        mb={2}
      >
        Fullstack web{" "}
        <Typography variant="h6" component="span" color="primary">
          &
        </Typography>{" "}
        Hybrid mobile app developer
      </Typography>
      <ContactButton openContactModal={openContactModal} />
    </Box>
  );
}
