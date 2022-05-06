import React from "react";
import { LayoutProps } from "@astra/types";
import { SharedLayout } from "./SharedLayout";

export const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  return <SharedLayout>{children}</SharedLayout>;
};
