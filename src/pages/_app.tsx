import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "@fontsource/lato";
import "@fontsource/raleway";

import { theme } from "@astra/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
