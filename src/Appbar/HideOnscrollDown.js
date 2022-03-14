import * as React from "react";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export const ScrollContext = React.createContext();

export default function HideOnScrollDown({ children }) {
  const trigger = useScrollTrigger();

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  const scrolledStyle = scrolled
    ? { backgroundColor: "appbar.background", color: "socialIcons.primary" }
    : { backgroundColor: "transparent", color: "primary.main" };
  return (
    <ScrollContext.Provider value={scrolled}>
      <Slide appear={false} direction="down" in={!trigger}>
        {React.cloneElement(children, {
          sx: scrolledStyle,
          elevation: scrolled ? 4 : 0,
        })}
      </Slide>
    </ScrollContext.Provider>
  );
}
