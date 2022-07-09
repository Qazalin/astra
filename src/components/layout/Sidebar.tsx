import {
  Grid,
  GridItem,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      h="100%"
      fontSize="1.3rem"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Grid w="100%" px="20px"></Grid>
    </Box>
  );
};
