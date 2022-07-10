import { Tooltip, StackProps, Text, HStack, Box } from "@chakra-ui/react";
import { numberFormatter, pctOfArray } from "utils";

export const Ratio: React.FC<{
  value1: number;
  value2: number;
  color1: string;
  color2: string;
  verb1: string;
  verb2: string;
  unit: string;
  sx?: StackProps;
}> = ({ value1, value2, color1, color2, verb1, verb2, unit, sx }) => {
  const [val1Pct, val2Pct] = pctOfArray([value1, value2]);
  return (
    <HStack spacing={3} alignItems="center" maxW="100px" fontSize="8px" {...sx}>
      {value1 !== 0 && value2 !== 0 ? (
        <>
          <RatioDisplay
            value={value1}
            pct={val1Pct}
            color={color1}
            verb={verb1}
            type="val1"
            unit={unit}
          />
          <RatioDisplay
            value={value2}
            pct={val2Pct}
            color={color2}
            verb={verb2}
            type="val2"
            unit={unit}
          />
        </>
      ) : value1 != 0 ? (
        <RatioDisplay
          value={value1}
          pct={val1Pct}
          color={color1}
          verb={verb1}
          type="val1"
          unit={unit}
        />
      ) : value2 != 0 ? (
        <RatioDisplay
          value={value2}
          pct={val2Pct}
          color={color2}
          verb={verb2}
          type="val2"
          unit={unit}
        />
      ) : (
        <>0</>
      )}
    </HStack>
  );
};
const RatioDisplay: React.FC<{
  value: number;
  pct: number;
  color: string;
  verb: string;
  type: "val1" | "val2";
  unit: string;
}> = ({ value, pct, color, verb, type, unit }) => {
  // const colors: { buy: string; sell: string } = { buy: "green1", sell: "red1" };
  // const verbs: { buy: string; sell: string } = { buy: "Bought", sell: "Sold" };
  const leftRads: { val1: string; val2: string } = {
    val1: "10px",
    val2: "5px",
  };
  const rightRads: { val1: string; val2: string } = {
    val1: "5px",
    val2: "10px",
  };
  return (
    <Tooltip
      label={`${verb} ${numberFormatter(value)} ${unit}`}
      placement="top"
      color={color}
      borderRadius="md"
      bg="bg0"
    >
      <Box
        display="flex"
        flexDir="column"
        textAlign="center"
        w={`${Math.round(pct)}%`}
      >
        <Box
          bg={color}
          borderRightRadius={rightRads[type]}
          borderLeftRadius={leftRads[type]}
          h="10px"
        />
        <Text fontSize="inherit" color={color}>
          {verb}
        </Text>
      </Box>
    </Tooltip>
  );
};
