import React from "react";

import { Box, Typography, Button } from "@mui/material";
import ContactButton from "../Contact/ContactButton";

export default function Hero({ openContactModal }) {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
      sx={{ textAlign: "center" }}
      component="main"
      area-labelledby="site-title"
    >
      <Typography variant="h3" component="h2" id="site-title">
        Anirudh V S
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom mb={2}>
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
