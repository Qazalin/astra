import React from "react";
import { LayoutProps } from "@astra/types";
import { SharedLayout } from "./SharedLayout";
import { Box } from "@chakra-ui/react";

export const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};
