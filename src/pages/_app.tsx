import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/hammersmith-one";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import { SharedLayout } from "@astra/layouts";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: unknown) => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SharedLayout>{getLayout(<Component {...pageProps} />)}</SharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
