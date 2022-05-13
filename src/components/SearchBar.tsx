import {
  ScaleFade,
  useDisclosure,
  HStack,
  Input,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { KeyboardEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchRecommendationCard } from "./SearchRecommendationCard";

/**
 * SearchBar components with Autocomplete, listen to enter key and recommendations
 */
export const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

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
        <ScaleFade initialScale={0.9} in={isOpen} unmountOnExit={true}>
          <SearchRecommendationCard />
        </ScaleFade>
      </Stack>
    </>
  );
};
