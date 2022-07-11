import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { factorialize } from "@astra/utils";
import { useState } from "react";

type GrowthChartData = {
  x: string;
  exp: number;
  linear: number;
  comb: number;
};
export const GrowthChart = () => {
  const [timeHorizon, setTimeHorizon] = useState(3);
  // linear growth = y = mx
  const data: GrowthChartData[] = [];
  const m = 0.1;
  const n = 2;
  const xm = 10;
  for (let x = 0; x < timeHorizon; x++) {
    data.push({
      x: "" + x * xm,
      linear: x * m,
      exp: Math.pow(m, n),
      comb: factorialize(x),
    });
  }

  return (
    <Box w="90%" h="100%">
      <ResponsiveContainer width={"100%"} height="100%" maxHeight={200}>
        <LineChart data={data}>
          <Line
            dataKey="linear"
            dot={false}
            stroke="var(--chakra-colors-yellow-100)"
          />
          <Line
            dataKey="exp"
            dot={false}
            stroke="var(--chakra-colors-blue-200)"
          />
          <Line
            dataKey="comb"
            dot={false}
            stroke="var(--chakra-colors-primary)"
          />
        </LineChart>
      </ResponsiveContainer>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={3}
        min={2}
        max={10}
        colorScheme="green"
        step={0.1}
        onChange={(e) => setTimeHorizon(e)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
