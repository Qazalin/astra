import { Grid, GridItem, Box, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsCodeSquare } from "react-icons/bs";

export const Sidebar = () => {
  const [width, setWidth] = useState("250px");
  const router = useRouter();
  return (
    <Box
      width={{ md: "100px", lg: width }}
      transition="width 0.6s"
      h="100vh"
      borderRight="1px solid"
      borderRightColor="gray.800"
      fontSize="1.3rem"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Icon
        as={BsCodeSquare}
        pos="absolute"
        top={0}
        right={-2.5}
        color="gray.300"
        cursor="grab"
        _active={{
          cursor: "grabbing",
        }}
        onClick={() => setWidth(width === "100px" ? "250px" : "100px")}
      />
      <Grid w="100%" px="20px">
        <GridItem>New</GridItem>
        <GridItem>New</GridItem>
        <GridItem>New</GridItem>
        <GridItem>New</GridItem>
        <GridItem>New</GridItem>
      </Grid>
    </Box>
  );
};
