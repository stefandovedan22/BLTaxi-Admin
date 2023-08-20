import { extendTheme } from "@chakra-ui/react";

import { ButtonStyles as Button } from "./components/buttonStyles";
import { InputStyles as Input } from "./components/inputStyles";

export const theme = extendTheme({
  // breakpoints,
  breakpoints: {
    xs: "320px",
    sm: "400px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  colors: {
    dark: "#000000",
    primary: "#13064d",
    navPrimary: "rgba(71, 85, 118, 0.81)",
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
  },
  textStyles: {
    titleBold: {
      fontFamily: "Poppins",
      color: "dark",
      fontSize: "3.5rem",
      fontWeight: "500",
    },
    titleLight: {
      fontFamily: "Poppins",
      color: "dark",
      fontSize: "1rem",
      fontWeight: "400",
    },
    titleSmall: {
      fontFamily: "Poppins",
      color: "dark",
      fontSize: "0.813rem",
      fontWeight: "400",
    },
  },
  components: {
    Button,
    Input,
  },
});
