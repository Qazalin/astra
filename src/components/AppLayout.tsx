import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "components";
import { useWindowSize } from "hooks";
import { LayoutProps } from "types";
import { breakpoints } from "theme";
import { Navbar } from "./Navbar";
import { useRouter } from "next/router";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowSize();
  const Sidebarwidth = width <= breakpoints.md ? "100px" : "250px";
  return (
    <Box overflow="hidden">
      <Box h="100px" w="100%">
        <Navbar />
      </Box>
      <Box
        w={`cal(100% - ${Sidebarwidth})`}
        ml={Sidebarwidth}
        px="10px"
        borderTopLeftRadius="20px"
        bg="bg0"
      >
        {children}
      </Box>
      <Box
        position="absolute"
        width={Sidebarwidth}
        left={0}
        h="calc(100% - 100px)"
        top={100}
      >
        <Sidebar />
      </Box>
    </Box>
  );
};
