import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    surface: {
      background: "var(--bg-default)",
      foreground: "#1E1E1E",
      hover: "#282828",
      selected: "#3D3D3D",
    },
    color: {
      white: "#FFFFFF",
    },
  },
});
