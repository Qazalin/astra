import { Text, Box } from "@chakra-ui/react";
import { ChartWrapper } from "@astra/components/charts";
import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { PIPE_TREND } from "@astra/lib/constants";

export const PipelineTrend = () => {
  return (
    <Box>
      <ChartWrapper title="pipeline trends">
        <AreaChart data={PIPE_TREND}>
          <defs>
            <linearGradient id="colorY1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B6484" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B6484" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorY2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#507F6A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#507F6A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="x" opacity={0.5} />
          <YAxis opacity={0.5} />
          <CartesianGrid opacity={0.2} vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="y1"
            stroke="#3B6484"
            name="Negotiations"
            fillOpacity={1}
            fill="url(#colorY1)"
          />
          <Area
            type="monotone"
            dataKey="y2"
            name="Proposals"
            stroke="#507F6A"
            fillOpacity={1}
            fill="url(#colorY2)"
          />
        </AreaChart>
      </ChartWrapper>
    </Box>
  );
};
