import { Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Navbar";
import { LayoutProps } from "types";

export const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box h="100vh" w="100vw">
      <Box
        h="100px"
        w="100%"
        borderBottom="1px solid"
        borderBottomColor="gray.800"
      >
        <Navbar />
      </Box>
      <Stack mt="50px" px={["20px", "40px"]}>
        {children}
      </Stack>
    </Box>
  );
};
