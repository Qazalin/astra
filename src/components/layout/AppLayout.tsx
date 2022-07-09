import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { LayoutProps } from "types";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w="100%" h="100vh">
      <Box h="100px" w="100%">
        <Navbar />
      </Box>
      <Box
        w={"100%"}
        ml={{ md: "100px", lg: "250px" }}
        px="10px"
        borderTopLeftRadius="20px"
        bg="bg0"
      >
        {children}
      </Box>
      <Box
        position="absolute"
        width={{ md: "100px", lg: "250px" }}
        left={0}
        h="calc(100% - 100px)"
        top={100}
      >
        <Sidebar />
      </Box>
    </Box>
  );
};
