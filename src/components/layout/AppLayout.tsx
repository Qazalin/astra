import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { LoggedInNavbar } from "./LoggedInNavbar";
import { LayoutProps } from "types";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w="100%" h="100vh">
      <Box
        h="100px"
        w="100%"
        borderBottom="1px solid"
        borderBottomColor="gray.800"
      >
        <LoggedInNavbar />
      </Box>
      <Box w={"100%"} px="10px">
        {children}
      </Box>
      <Box position="absolute" left={0}>
        <Sidebar />
      </Box>
    </Box>
  );
};
