import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { numberFormatter } from "utils";
import { ComposedBarLineData } from "types";
import { Box, Text } from "@chakra-ui/react";
import { TooltipProps } from "recharts";

export const ComposedBarLine: React.FC<{
  data: ComposedBarLineData;
  barName: string;
  lineName: string;
}> = ({ data, barName, lineName }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid stroke="#f5f5f5" vertical={false} opacity={0.3} />
        <XAxis dataKey="x" tickLine={false} />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="bar"
          barSize={20}
          fill="var(--chakra-colors-blue-500)"
          yAxisId="left"
          legendType="rect"
          name={barName}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          dot={false}
          strokeWidth={2}
          strokeLinecap="round"
          type="monotone"
          dataKey="line"
          stroke="var(--chakra-colors-green-500)"
          yAxisId="right"
          legendType="rect"
          name={lineName}
        />
        <YAxis
          tickLine={false}
          yAxisId="left"
          axisLine={{ stroke: "#f5f5f5" }}
          tickFormatter={(value) => numberFormatter(value)}
        />
        <YAxis
          tickLine={false}
          yAxisId="right"
          orientation="right"
          stroke="var(--chakra-colors-green-500)"
          axisLine={{ stroke: "#f5f5f5" }}
          tickFormatter={(value) => numberFormatter(value)}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
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
        <Text textTransform="capitalize">{payload[0].payload.x}</Text>
        <Text color="blue.500">
          {payload[0].name}: {numberFormatter(payload[0].payload.bar)}
        </Text>
        <Text color="green.500">
          {payload[1].name}: {numberFormatter(payload[0].payload.line)}
        </Text>
      </Box>
    );
  }
  return null;
};
