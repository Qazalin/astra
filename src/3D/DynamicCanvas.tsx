import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./Sphere"), {
  ssr: false,
});

function DynamicCanvas() {
  return (
    <Box w="100%" h="100%">
      <DynamicComponentWithNoSSR />
    </Box>
  );
}

export default DynamicCanvas;
