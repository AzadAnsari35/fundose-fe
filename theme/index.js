import { createTheme } from "@mui/material/styles";
import Poppins from "../public/font/Poppins-Regular.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E45D5",
      light: "#7386FF",
      dark: "#393fc2",
    },
    secondary: {
      main: "#313245",
    },
    success: {
      main: "#2FBF0B",
    },
  },

  typography: {
    fontFamily: "Poppins",
    body1: {
      fontSize: "1.15rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body2: {
      lineHeight: "1rem",
    },
    overline: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 60px",
          lineHeight: "16px",
          borderRadius: 8,
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
