import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactButton({ openContactModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: "0.5",
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <Button
        endIcon={<ArrowRightAltIcon />}
        onClick={() => openContactModal()}
      >
        Lets Talk!
      </Button>
    </motion.div>
  );
}
