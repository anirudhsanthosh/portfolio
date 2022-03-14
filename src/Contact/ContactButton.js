import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
export default function ContactButton({ openContactModal }) {
  return (
    <Button endIcon={<ArrowRightAltIcon />} onClick={() => openContactModal()}>
      Lets Talk!
    </Button>
  );
}
