import React from "react";
import { Box, Button } from "@mui/material";

export default function Menu({ pages }) {
  console.log({ pages });
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          ml: 2,
          mr: 2,
          display: { xs: "none", md: "flex" },
          justifyContent: "end",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => {
              // handleCloseNavMenu
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
}
