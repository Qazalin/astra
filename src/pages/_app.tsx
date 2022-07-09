import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/hammersmith-one";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import { SharedLayout } from "@astra/layouts";
import { AppLayout } from "@astra/components/layout/AppLayout";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: unknown) => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
// <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
