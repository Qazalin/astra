import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { LoggedInNavbar } from "./LoggedInNavbar";
import { LayoutProps } from "types";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [sideBarWidth, setSidebarWidth] = useState("250px");
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
      <Box
        w={"100%"}
        px="10px"
        ml={{ md: "100px", lg: sideBarWidth }}
        transition="margin 0.6s"
        bg="bg0"
      >
        {children}
      </Box>
      <Box position="absolute" left={0}>
        <Sidebar changeCb={(w) => setSidebarWidth(w)} />
      </Box>
    </Box>
  );
};
