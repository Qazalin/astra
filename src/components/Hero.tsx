import { Grid, GridItem, Image, Button, Box, Text } from "@chakra-ui/react";
import { GrowthChart } from "@astra/components";
import { GetStartedButton } from "./GetStartedButton";

export const Hero = () => {
  return (
    <Grid
      w="100vw"
      h="50vh"
      textAlign="center"
      templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
      gap={10}
    >
      <GridItem
        textAlign="center"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
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
        <Box
          pos="relative"
          alignSelf="flex-end"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={10}
        >
          <Text cursor="pointer">how it works</Text>
          <GetStartedButton pos="unset" ml="15px" />
        </Box>
      </GridItem>
      <GridItem
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <GrowthChart />
      </GridItem>
    </Grid>
  );
};
