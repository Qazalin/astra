import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/hammersmith-one";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import { SharedLayout } from "@astra/layouts";
import { AppLayout } from "@astra/components/layout/AppLayout";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: unknown) => page);
  console.log(Component);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
