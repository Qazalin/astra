import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "@astra/types";
import { Navbar } from "@astra/components";

export const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      px={{ sm: "20px", md: "25px", lg: "60px", xl: "80px" }}
      w="100vw"
      h="100vh"
    >
      <Box w="100%" h="100px">
        <Navbar />
      </Box>
      <Box w="100%">{children}</Box>
    </Box>
  );
};
