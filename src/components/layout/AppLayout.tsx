import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { LoggedInNavbar } from "./LoggedInNavbar";
import { LayoutProps } from "types";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [sideBarWidth, setSidebarWidth] = useState("250px");
  return (
    <Box>
      <Box
        h="100px"
        w="100%"
        borderBottom="1px solid"
        borderBottomColor="gray.800"
      >
        <LoggedInNavbar />
      </Box>
      <Box
        px="10px"
        ml={{ md: "100px", lg: sideBarWidth }}
        transition="margin 0.6s"
      >
        {children}
      </Box>
      <Box pos="absolute" top={0} mt="100px" h="100vh">
        <Sidebar changeCb={(w) => setSidebarWidth(w)} />
      </Box>
    </Box>
  );
};
