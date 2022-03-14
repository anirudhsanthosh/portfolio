import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeLight = responsiveFontSizes(
  createTheme({
    palette: {
      // mode: "light",
      type: "light",
      primary: {
        main: "#ff1744",
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: "#fff", //"#e4f0e2",
        backdrop: "rgba(255,255,255,0.6)",
      },
      logo: {
        primary: "#ffffff",
        secondary: "rgba(0,0,0,0.6)",
      },
      appbar: {
        background: "#ff1744",
      },
      socialIcons: {
        primary: "#fff",
        mobile: {
          primary: "#ff1744",
        },
      },
    },
  })
);

export const themeDark = responsiveFontSizes(
  createTheme({
    palette: {
      // mode: "dark",
      type: "dark",
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#2ff7be",
      },
      background: {
        default: "#303030",
        paper: "#424242",
        backdrop: "rgba(0,0,0,0.2)",
      },
      text: {
        primary: "#ffffff",
        secondary: "rgba(255,255,255,0.7)",
      },
      appbar: {
        background: "#1c1c1c",
      },
      logo: {
        primary: "#ffffff",
        secondary: "#fff",
      },
      socialIcons: {
        primary: "#fff",
        mobile: {
          primary: "#fff",
        },
      },
    },
  })
);
