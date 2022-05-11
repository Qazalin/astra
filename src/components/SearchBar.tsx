import {
  ScaleFade,
  useDisclosure,
  HStack,
  Input,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchRecommendationCard } from "./SearchRecommendationCard";

export const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack>
        <HStack>
          <Icon as={AiOutlineSearch} fontSize="20px" />
          <Input
            _focus={{
              border: "1px",
              borderColor: "primary",
            }}
            borderRadius="10px"
            onFocus={onOpen}
            onBlur={onClose}
            bg="gray.700"
            border="none"
            placeholder={"Search ENS names"}
          />
          <Box
            minW="50px"
            p="10px"
            textAlign="center"
            bg="gray.300"
            color="black"
            borderRadius="10px"
            borderRightRadius="15px"
          >
            .eth
          </Box>
        </HStack>
        <ScaleFade
          initialScale={0.9}
          in={isOpen}
          unmountOnExit={true}
        ></ScaleFade>
      </Stack>
      <SearchRecommendationCard />
    </>
  );
};
