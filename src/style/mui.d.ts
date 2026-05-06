import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      background: string;
      foreground: string;
      hover: string;
      selected: string;
    };

    color: {
      white: string;
    };
  }

  interface PaletteOptions {
    surface?: {
      background: string;
      foreground: string;
      hover: string;
      selected: string;
    };

    color?: {
      white: string;
    };
  }
}
