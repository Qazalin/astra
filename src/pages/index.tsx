import { Icon, Box, Text } from "@chakra-ui/react";
import { LandingLayout } from "@astra/layouts";
import { ReactElement } from "react";
import { Hero, SearchBar } from "@astra/components";
import { Web3Provider } from "@astra/providers";

const Index = () => {
  return (
    <Box>
      <Web3Provider />
      <Hero />
      <Box maxW="400px">
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Index;

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
