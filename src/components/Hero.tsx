import { Grid, GridItem, Image, Button, Box, Text } from "@chakra-ui/react";
import { GrowthChart } from "@astra/components";

export const Hero = () => {
  return (
    <Grid
      w="100vw"
      h="auto"
      textAlign="center"
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={10}
    >
      <GridItem textAlign="center" w="100%">
        <Text variant="heading">
          Collaboration for the{" "}
          <span
            style={{
              textTransform: "capitalize",
              textDecoration: "underline",
              fontStyle: "italic",
              fontFamily: "serif",
              fontWeight: "lighter",
            }}
          >
            third web
          </span>
        </Text>
      </GridItem>
      <GridItem w="100%" h="100%">
        <GrowthChart />
      </GridItem>
    </Grid>
  );
};
