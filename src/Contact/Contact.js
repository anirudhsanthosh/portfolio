import React from "react";

import {
  Modal,
  Box,
  Typography,
  Button,
  Fade,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact({ open, closeHandler }) {
  const handleClose = () => closeHandler();
  const style = {
    width: "95%",
    maxWidth: "450px",
    bgcolor: "background.paper",
    boxShadow: 24,
    px: { xs: 1, md: 2, lg: 4 },
    py: { xs: 2, md: 4, lg: 6 },
  };

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "#6f7e8c21",
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              pl={1}
              gutterBottom
            >
              Contact Me
            </Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="ul"
            >
              <ListItemButton
                href="mailto:anirudhsanthosh@gmail.com"
                component="a"
              >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="anirudhsanthosh@gmail.com" />
              </ListItemButton>
              <ListItemButton href="tel:+919745212030" component="a">
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+91 97452 12030" />
              </ListItemButton>
            </List>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
