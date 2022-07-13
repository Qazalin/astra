import { Grid, GridItem, Image, Button, Box, Text } from "@chakra-ui/react";
import { GrowthChart } from "@astra/components";

export const Hero = () => {
  return (
    <Grid
      w="100vw"
      h="50vh"
      textAlign="center"
      templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
      gap={10}
    >
      <GridItem textAlign="center" w="100%" h="100%">
        <Text variant="heading">
          The Collaboration Stack for{" "}
          <span
            style={{
              textTransform: "capitalize",
              textDecoration: "underline",
              fontStyle: "italic",
              fontFamily: "serif",
              fontWeight: "lighter",
            }}
          >
            Web3
          </span>
        </Text>
      </GridItem>
      <GridItem w="100%" h="100%">
        <GrowthChart />
      </GridItem>
    </Grid>
  );
};
