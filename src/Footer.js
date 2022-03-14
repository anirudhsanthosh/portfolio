import React from "react";

import { Container, Typography } from "@mui/material";
import ContactButton from "./Contact/ContactButton";

export default function Footer({ openContactModal }) {
  return (
    <Container sx={{ paddingY: 2, textAlign: "center" }}>
      <Typography variant="h4">{"< Contact Me />"}</Typography>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingY: 3,
        }}
      >
        <ContactButton openContactModal={openContactModal} />
      </Container>
    </Container>
  );
}
