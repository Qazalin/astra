import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

import "@fontsource/lato";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import AdaptivityProvider from "@astra/providers/AdaptivityProvider";

function MyApp({ Component, pageProps }) {
  const SERVER_URL = "https://p99gmxhqipdu.usemoralis.com:2053/server";
  const APP_ID = "LowLESoS9aXr5AK9f9JnWKgYlabyUvMChCvlN1dl";
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: unknown) => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
        <AdaptivityProvider>
          {getLayout(<Component {...pageProps} />)}
        </AdaptivityProvider>
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
