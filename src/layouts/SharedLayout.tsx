import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "@astra/types";
import { Navbar } from "@astra/components";

export const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box px={["20px", "25px", "60px", "80px"]} w="100vw" h="100vh">
      <Box w="100%" h="100px" pt="15px">
        <Navbar />
      </Box>
      <Box h="100%" w="100%">
        {children}
      </Box>
    </Box>
  );
};
