import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/lato";
import "@fontsource/raleway";

import { theme } from "@astra/theme";
import AdaptivityProvider from "@astra/providers/AdaptivityProvider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <AdaptivityProvider>
        {getLayout(<Component {...pageProps} />)}
      </AdaptivityProvider>
    </ChakraProvider>
  );
}

export default MyApp;
