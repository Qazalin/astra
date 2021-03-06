import { Box, Stack, Text, SkeletonText, Skeleton } from "@chakra-ui/react";

/**
 * Function for displaying the search results
 */
export const SearchResultsCard = () => {
  const isLoading = false;
  return (
    <Stack spacing={8} w="100%" h="100%">
      {isLoading ? (
        <>
          <Skeleton speed={1.7} w="100%" h="10%" />
          <Skeleton speed={1.7} w="100%" h="10%" />
          <Skeleton speed={1.7} w="100%" h="10%" />
          <Skeleton speed={1.7} w="100%" h="10%" />
          <Skeleton speed={1.7} w="100%" h="10%" />
        </>
      ) : (
        <Box>
          <Text>res</Text>
        </Box>
      )}
    </Stack>
  );
};
