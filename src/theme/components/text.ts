import { ComponentStyleConfig } from "@chakra-ui/react";

export const FONTS = {
  headingFont: '"Hammersmith One", sans-serif',
  bodyFont: '"Lato", sans-serif',
};

export const textStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: FONTS.bodyFont,
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    heading: {
      fontSize: ["3rem", "4rem", "5rem"],
      fontFamily: "heading",
      textTransform: "capitalize",
      lineHeight: "1.05em",
    },
    h1: {
      fontSize: ["1.3rem", "1.6rem", "1.8rem", "2.3rem"],
      fontWeight: "bold",
      fontFamily: FONTS.headingFont,
    },
    h2: {
      fontSize: ["1.2rem", "1.5rem", "1.7rem", "2rem"],
      fontFamily: FONTS.bodyFont,
      fontWeight: "light",
    },
    h3: {
      fontSize: ["0.90rem", "0.95rem", "1rem", "1.2rem", "1.3rem"],
      fontWeight: "light",
    },
    h4: {
      fontSize: ["0.8rem", "0.9rem", "1rem"],
    },
    p: {
      fontSize: "1rem",
      fontFamily: FONTS.bodyFont,
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
