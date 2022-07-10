import { GradientAreaChartProps } from "@types";
import { largeNumFormatter } from "lib";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

export const GradientAreaChart: React.FC<GradientAreaChartProps> = ({
  data,
  color1,
  color2,
  id,
  hideX,
}) => {
  return (
    <ResponsiveContainer width="100%" height="80%" maxHeight={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id={id}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
        </defs>
        <XAxis
          hide={hideX || false}
          dataKey="x"
          domain={["dataMin", "dataMax"]}
        />
        <YAxis tickFormatter={(t) => largeNumFormatter(t)} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="y"
          stroke={color1}
          fillOpacity={1}
          fill={`url(#${id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
