import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { mode } from "@chakra-ui/theme-tools";
import { ThemeColors } from "./themeColors";
import { textStyles } from "./components/text";
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
  semanticTokens,
  styles: {
    global: () => ({
      body: {
        overflow: "hidden",
        fontFamily: "body",
        bg: "bg1",
        lineHeight: "base",
      },
    }),
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
  },
});
