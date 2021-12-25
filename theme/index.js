import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3e4fbf",
      light: "#acb1f9",
      dark: "#393fc2",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 20px",
          lineHeight: "16px",
          borderRadius: 5,
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;
