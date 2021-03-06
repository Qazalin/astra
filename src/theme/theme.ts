import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { ThemeColors } from "./themeColors";
import { FONTS, textStyles } from "./components/text";
import { linkStyles } from "./components/link";
import { buttonStyles } from "./components/button";

const colors = COLORS.colors;
const semanticTokens = ThemeColors.semanticTokens;

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: FONTS.headingFont,
    body: FONTS.bodyFont,
  },

  semanticTokens,
  styles: {
    global: () => ({
      body: {
        overflow: "hidden",
        fontFamily: "body",
        bg: "black",
        lineHeight: "base",
      },
    }),
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
    Link: linkStyles,
  },
});
