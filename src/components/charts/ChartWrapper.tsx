import { Box, IconButton, Text } from "@chakra-ui/react";
import { BsFullscreenExit } from "react-icons/bs";
import { ChartWrapperProps } from "types";
import { ResponsiveContainer } from "recharts";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  title,
  children,
  sx,
}) => {
  const handle = useFullScreenHandle();
  return (
    <Box display="flex" flexDir="column" {...sx}>
      <Box display="flex" alignItems="flex-start" justifyContent="center">
        <Text
          variant="h3"
          textTransform="capitalize"
          fontWeight="bold"
          alignSelf="start"
        >
          {title}
        </Text>
        <IconButton
          alignSelf="end"
          _hover={{ color: "primary" }}
          aria-label="full-screen"
          my="auto"
          onClick={handle.enter}
          icon={<BsFullscreenExit />}
          color="text1"
        />
      </Box>
      <FullScreen handle={handle}>
        <ResponsiveContainer width="99%" height={300}>
          {children}
        </ResponsiveContainer>
      </FullScreen>
    </Box>
  );
};
