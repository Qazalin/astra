import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const SearchRecommendationCard = () => {
  return (
    <Box
      mt="10px"
      borderRadius="10px"
      w="100%"
      h="300px"
      p="15px"
      px="40px"
      bg="gray.700"
    >
      <Box>
        <Text>hot🔥</Text>
        <Flex mt="8px" w="100%" h="50%">
          <SearchRecommendation recommendedEns="vitalik.eth" />
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
    >
      <Text>{recommendedEns}</Text>
    </Box>
  );
};
