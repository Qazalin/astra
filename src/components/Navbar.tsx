import {
  Center,
  Flex,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { useAdaptivityContext } from "@astra/hooks";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";
import { MetaMaskIcon } from "@astra/components/icons";
import { MetaMaskConnect } from "@astra/components";

export const Navbar = () => {
  const menuOptions = ["products", "networks"];
  const isSmallScreen = useAdaptivityContext();
  return (
    <Flex w="100%" h="100%" justifyContent="space-between">
      <Box cursor="pointer" w="100%" h="100%">
        <Logo />
      </Box>
      <Center
        ml="10%"
        display={isSmallScreen ? "none" : "flex"}
        textTransform="capitalize"
      >
        {menuOptions.map((o, idx) => (
          <Link href={`${o}`} key={idx}>
            <Text cursor="pointer" mx="20px" variant="h3">
              {o}
            </Text>
          </Link>
        ))}
      </Center>
      <Center display={isSmallScreen ? "flex" : "none"} mx="40px">
        <Menu>
          <MenuButton as={Button} fontSize="25px" rightIcon={<RiMenu2Line />} />

          <MenuList>
            {menuOptions.map((o, idx) => (
              <MenuItem key={idx} textTransform="capitalize">
                {o}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Center>
      <HStack w="280px">
        <MetaMaskConnect />
      </HStack>
    </Flex>
  );
};
