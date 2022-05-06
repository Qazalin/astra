import { Box, Text } from "@chakra-ui/react";
import { LandingLayout } from "@astra/layouts";
import { ReactElement } from "react";

const Index = () => {
  return (
    <Box>
      <Text variant="heading">To the future</Text>
      <Text variant="heading">and beyond</Text>
    </Box>
  );
};

export default Index;

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
