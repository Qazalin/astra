import { Flex, Box, Text, Kbd } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const SearchRecommendationCard = () => {
  return (
    <Box>
      <Text>hot🔥</Text>
      <Flex mt="8px" w="100%" h="50%" justifyContent="space-between">
        <SearchRecommendation recommendedEns="vitalik.eth" />
        <Kbd maxH="20px">Enter</Kbd>
      </Flex>
      <Box mt="40px">
        <Text>history✨</Text>
        <Flex mt="8px" w="100%" h="50%">
          <Text color="gray.400">your search history will appear here!</Text>
        </Flex>
      </Box>
    </Box>
  );
};

const SearchRecommendation = ({ recommendedEns }) => {
  return (
    <Box
      as={motion.div}
      cursor="pointer"
      bg="gray.300"
      color="gray.800"
      maxW="100px"
      textAlign="center"
      borderRadius="5px"
      px="10px"
      py="5px"
    >
      <Text>{recommendedEns}</Text>
    </Box>
  );
};
