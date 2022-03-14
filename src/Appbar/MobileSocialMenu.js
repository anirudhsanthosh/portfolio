import React from "react";

import { Box, Button, IconButton } from "@mui/material";
import MobileDrawerOptionHeading from "./MobileDrawerOptionHeading";

import StackOverflowIcon from "../Icons/StackOverflowIcon";
import GitHubIcon from "@mui/icons-material/GitHub";

/**
 * color of the text will come from the hideonscroll element
 * @param {sx:{}} props
 * @returns
 */
export default function MobileSocialMenu(props) {
  function openUrl(url) {
    if (!url) return;
    if (!typeof window) return;
    window.open(url, "_blank");
  }

  return (
    <Box paddingX={2} {...props}>
      <IconButton
        onClick={() => {
          openUrl("https://stackoverflow.com/users/4398399/anirudhsanthosh");
        }}
        color="inherit"
        title="Anirudh's Stackoverflow Profile"
      >
        <StackOverflowIcon />
      </IconButton>
      <IconButton
        color="inherit"
        title="Anirudh's Github Profile"
        onClick={() => {
          openUrl("https://github.com/anirudhsanthosh");
        }}
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}
