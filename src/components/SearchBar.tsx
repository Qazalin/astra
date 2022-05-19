import {
  ScaleFade,
  useDisclosure,
  HStack,
  Input,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchRecommendationCard } from "./SearchRecommendationCard";
import { SearchResultsCard } from "./SearchResultsCard";

/**
 * SearchBar components with Autocomplete, listen to enter key and recommendations
 * The seach bar at first shows recommendations, if the user does not click on any of them and instead starts typing, calls to the API will be made
 */
export const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // show a differnt UI for the search state
  const [isUserSearching, setIsUserSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // side-effects of typing into the search bar: 1. Change the UI, 2. Call the API
  useEffect(() => {
    if (!searchValue) setIsUserSearching(false);
    else setIsUserSearching(true);
  }, [searchValue]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      setSearchValue("");
    }
  }

  function handleSearchValueChange(e: string) {
    setSearchValue(e);
  }

  return (
    <>
      <Stack>
        <HStack>
          <Icon aria-label="search" as={AiOutlineSearch} fontSize="20px" />
          <Input
            // function
            value={searchValue}
            onChange={(e) => handleSearchValueChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            // style
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
        <Box
          mt="10px"
          borderRadius="10px"
          w="100%"
          h="300px"
          p="15px"
          px="40px"
          bg="gray.700"
          overflow="auto"
        >
          <SearchResultsCard />
        </Box>
        <ScaleFade initialScale={0.9} in={isOpen} unmountOnExit={true}>
          <Box
            mt="10px"
            borderRadius="10px"
            w="100%"
            h="300px"
            p="15px"
            px="40px"
            bg="gray.700"
          >
            {isUserSearching ? (
              <SearchResultsCard />
            ) : (
              <SearchRecommendationCard />
            )}
          </Box>
        </ScaleFade>
      </Stack>
    </>
  );
};
