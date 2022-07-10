import { Grid, GridItem, Text } from "@chakra-ui/react";
export const OverviewLayout = () => {
  return (
    <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={5}>
      <GridItem h="500px" w="100%" bg="bg1" borderRadius="md" colSpan={2} />
      <GridItem h="500px" w="100%" bg="bg1" borderRadius="md" colSpan={2} />
      <GridItem h="500px" w="100%" bg="bg1" borderRadius="md" colSpan={2} />
      <GridItem h="500px" w="100%" bg="bg1" borderRadius="md" colSpan={2} />
    </Grid>
  );
};
