import { Box, Text } from "@chakra-ui/react";
import { LandingLayout } from "@astra/layouts";
import { ReactElement } from "react";
import { Hero } from "@astra/components";
import { Web3Provider } from "@astra/providers";
import { MetaMaskConnect } from "@astra/components/wallets";
import { useTwitter } from "@astra/hooks";

const Index = () => {
  const { twitter } = useTwitter("paradigm.eth");

  return (
    <Box>
      <Web3Provider />
      <Hero />
      <Text>{twitter}</Text>
    </Box>
  );
};

export default Index;

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
