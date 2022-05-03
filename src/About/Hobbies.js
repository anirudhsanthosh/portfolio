import React from "react";
import { ListItemAvatar, ListItem, List, ListItemText } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import CelebrationIcon from "@mui/icons-material/Celebration";

import { v4 as uuid } from "uuid";

const list = [
  {
    title:
      "I love to spend my free time with microcontrollers like Arduino and Esp",
    icon: <BuildIcon />,
  },
  // {
  //   title: "Big fan of Anim especially Naruto and Ang",
  //   icon: <CelebrationIcon />,
  // },
];

export default function Hobbies() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "max-content",
        bgcolor: "background.paper",
        fontSize: "inherit",
        mb: 2,
      }}
    >
      {list.map((item) => {
        return (
          <ListItem key={uuid()} sx={{ fontSize: "inherit", p: "0.5rem" }}>
            <ListItemAvatar key={uuid()} sx={{ p: 1 }}>
              {item.icon}
            </ListItemAvatar>
            <ListItemText
              key={uuid()}
              primaryTypographyProps={{ sx: { fontSize: "inherit" } }}
              primary={item.title}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
