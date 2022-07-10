import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import React, { ReactText } from "react";
import {
  Pie,
  Cell,
  PieChart,
  Legend,
  LegendProps,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { TooltipProps } from "recharts";
import { numberFormatter } from "utils";

export const CategoricalPieChart: React.FC<{
  data: any;
  colors: string[];
}> = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie dataKey="value" data={data}>
          {data.map((_d: any, index: number) => (
            <Cell key={`pie-${index}`} fill={colors[index % 20]} />
          ))}
        </Pie>
        <Legend content={CustomLegned} />
        <Tooltip content={CustomTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

type ActivityLegendPayload = {
  category: string;
  value: number;
  strokeDasharray: ReactText;
  fill: string;
};

const CustomLegned = (props: LegendProps) => {
  const pl = props.payload as unknown as { payload: ActivityLegendPayload }[];
  return (
    <HStack alignItems="center" justifyContent="center" overflow="scroll">
      {pl.map((p, i) => {
        if (p.payload.value) {
          return (
            <Box
              key={`pie-legend-${i}`}
              color={p.payload.fill}
              textAlign="center"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Text variant="h5">{p.payload.category}</Text>
              <Text variant="h5">{numberFormatter(p.payload.value)}</Text>
            </Box>
          );
        }
        return null;
      })}
    </HStack>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  payload,
  active,
}) => {
  if (active) {
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
          payload[0].payload.category
        } : ${numberFormatter(payload[0].value)}`}</Text>
      </Box>
    );
  }
  return null;
};
