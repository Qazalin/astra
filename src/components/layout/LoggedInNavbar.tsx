import {
  Center,
  Flex,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { AstraLogo } from "components/icons";
import { BiChevronDown } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

export const LoggedInNavbar = () => {
  return (
    <Flex w="100%" h="100%" justifyContent="space-space-between" pos="relative">
      <Box
        cursor="pointer"
        left={5}
        pos="sticky"
        top={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <AstraLogo />
      </Box>
      <Flex
        pos="absolute"
        top={5}
        right={5}
        justifyContent="center"
        alignItems="center"
      >
        <Box pos="relative" h="100%">
          <Icon
            as={IoMdNotificationsOutline}
            cursor="pointer"
            fontSize="1.2rem"
            onClick={() => console.log("notif todo!")}
            mr="20px"
            pos="absolute"
            bottom={-3}
            right={0}
          />
          <Text
            pos="absolute"
            color="red.400"
            fontSize="0.8rem"
            top={-5}
            right={3}
          >
            5
          </Text>
        </Box>
        <Image
          src="https://static.nftgo.io/asset/metadata/image/ff956acfe1821f4ce6e82fd7e09dbbe44e904806aba0eee67fe995b1839538e7"
          w="40px"
          borderRadius="100%"
          mr="10px"
        />
        <Text fontWeight="semibold">marimba.eth</Text>
        <Icon
          as={BiChevronDown}
          color="gray.500"
          ml="5px"
          cursor="pointer"
          onClick={() => console.log("modal todo!")}
        />
      </Flex>
    </Flex>
  );
};
