import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { ScrollContext } from "./HideOnscrollDown";

export default function Logo({ lightmode }) {
  const logo = lightmode ? "/img/logolight.svg" : "/img/logodark.svg";
  const scrolled = useContext(ScrollContext);

  return (
    <>
      <img
        style={{ width: "35px", marginRight: "0.5rem" }}
        alt="Anirudh VS"
        src={logo}
      />
      <Typography
        variant="h6"
        component="h1"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Typography
          variant="h6"
          component="span"
          sx={{
            color: scrolled
              ? "secondary.main"
              : lightmode
              ? "primary.main"
              : "secondary.main",
          }}
        >
          Anirudh
        </Typography>
        <Typography
          variant="h6"
          component="span"
          sx={{ color: "logo.secondary" }}
        >
          {" "}
          V S
        </Typography>
      </Typography>
    </>
  );
}
