import {
  Slider,
  Flex,
  Text,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { factorialize } from "@astra/utils";
import { useState } from "react";

type GrowthChartData = {
  x: string;
  Exponential: number;
  Linear: number;
  Combinatorial: number;
};
export const GrowthChart = () => {
  const [timeHorizon, setTimeHorizon] = useState(3);
  // linear growth = y = mx
  const data: GrowthChartData[] = [];
  const m = 0.1;
  const xm = 10;
  for (let x = 0; x < timeHorizon; x++) {
    data.push({
      x: "" + x * xm,
      Linear: x * m,
      Exponential: Math.exp(x),
      Combinatorial: factorialize(x),
    });
  }

  return (
    <Box w="90%" h="100%">
      <ResponsiveContainer width={"100%"} height="100%" maxHeight={200}>
        <LineChart data={data}>
          <Line
            dataKey="Linear"
            dot={false}
            stroke="var(--chakra-colors-yellow-100)"
          />
          <Line
            dataKey="Exponential"
            dot={false}
            stroke="var(--chakra-colors-blue-200)"
          />
          <Line
            dataKey="Combinatorial"
            dot={false}
            stroke="var(--chakra-colors-primary)"
          />
          <Legend verticalAlign="top" align="left" layout="centric" />
        </LineChart>
      </ResponsiveContainer>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={3}
        min={2}
        max={20}
        colorScheme="whiteAlpha"
        onChange={(e) => setTimeHorizon(Math.round(e))}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          _focus={{
            outline: "none",
          }}
        />
      </Slider>
      <Text color="whiteAlpha.500">Time Horizon</Text>
    </Box>
  );
};

/* Math */
/* 
 *
      <Box bg="bg2" maxW="190px" pos="relative" h="100px">
        <Box
          color="blue.200"
          bg="bg1"
          borderRadius="md"
          _hover={{
            transform: "translateY(100px)",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <MathJax.Node formula={"f(x)=a(1+r)^{x}"} />
        </Box>
        <Box color="yellow.100" bg="bg1" borderRadius="md">
          <MathJax.Node formula={"f(x)=mx"} />
        </Box>
        <Box
          color="primary"
          bg="bg1"
          borderRadius="md"
          _hover={{
            transform: "translateY(-100px)",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <MathJax.Node formula={"f(x)=x!"} />
        </Box>
      </Box>
      */
