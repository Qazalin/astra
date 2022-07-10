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
        // width={{ md: "calc(100% - 100px)", lg: `calc(100% - ${sideBarWidth}` }}
        transition="margin 0.6s"
        ml={{ md: "100px", lg: sideBarWidth }}
      >
        {children}
      </Box>
      <Box pos="absolute" top={100} h="100vh">
        <Sidebar changeCb={(w) => setSidebarWidth(w)} />
      </Box>
    </Box>
  );
};
