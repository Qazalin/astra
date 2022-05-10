import { ComponentStyleConfig } from "@chakra-ui/react";

export const FONTS = {
  headingFont: '"Raleway", sans-serif',
  bodyFont: '"Lato", sans-serif',
};

export const buttonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: FONTS.bodyFont,
    minW: "50px",
    ":focus": {
      outline: "none",
      boxShadow: "none",
    },
    maxH: "60px",
    maxW: "150px",
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "15px",
    },
    primaryGhost: {
      bg: "trasnparent",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "13px",
      _hover: {
        bg: "primary",
        color: "inherit",
      },
    },
    // wallet connect button
    connect: {
      bg: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "15px",
    },
    secondary: {
      bg: "secondary",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
