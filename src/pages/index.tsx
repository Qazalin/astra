import { Box, Text } from "@chakra-ui/react";
import { LandingLayout } from "@astra/layouts";
import { ReactElement } from "react";
import { Hero } from "@astra/components";

const Index = () => {
  return (
    <Box>
      <Hero />
    </Box>
  );
};

export default Index;

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
