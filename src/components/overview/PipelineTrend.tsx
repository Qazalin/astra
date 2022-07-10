import { Text, Box } from "@chakra-ui/react";
import { ChartWrapper } from "@astra/components/charts";
import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import { PIPE_TREND } from "@astra/lib/constants";

export const PipelineTrend = () => {
  return (
    <Box maxW="500px">
      <ChartWrapper title="Pipeline Trend">
        <AreaChart data={PIPE_TREND}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="x" />
          <YAxis />
          <CartesianGrid opacity={0.4} vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="y1"
            stroke="#8884d8"
            name="negotitations"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="y2"
            name="proposals"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ChartWrapper>
    </Box>
  );
};
