import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/lato";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import AdaptivityProvider from "@astra/providers/AdaptivityProvider";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: unknown) => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <AdaptivityProvider>
        {getLayout(<Component {...pageProps} />)}
      </AdaptivityProvider>
    </ChakraProvider>
  );
}

export default MyApp;
