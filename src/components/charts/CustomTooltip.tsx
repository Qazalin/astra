import { Box, Text } from "@chakra-ui/react";
import { TooltipProps } from "recharts";
import { addressFormatter, numberFormatter } from "utils";

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  payload,
  active,
}) => {
  if (active) {
    const x = payload[0].payload.x || payload[0].payload.name;
    return (
      <Box
        bg="bg2"
        color="text2"
        p="12px"
        borderRadius={"md"}
        maxW="300px"
        w="100%"
      >
        <Text textTransform="capitalize">{`${
          x.startsWith("0x") ? addressFormatter(x) : x
        } : ${numberFormatter(payload[0].value)}`}</Text>
      </Box>
    );
  }
  return null;
};
