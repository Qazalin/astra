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
import { AstraLogo } from "./icons/Logo";

export const Navbar = () => {
  const menuOptions = ["products", "networks"];
  return (
    <Flex w="100%" h="100%" pos="relative" justifyContent="space-between">
      <Box
        cursor="pointer"
        left={0}
        pos="sticky"
        top={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <AstraLogo />
      </Box>
      <Box
        h="100%"
        display={["none", "none", "flex"]}
        justifyContent="center"
        alignItems="center"
      >
        {menuOptions.map((o, idx) => (
          <Link href={`${o}`} key={idx}>
            <Text
              cursor="pointer"
              mx="20px"
              fontSize="1.6rem"
              textAlign="center"
            >
              {o}
            </Text>
          </Link>
        ))}
        <HStack>
          <Button variant="primary">signup</Button>
          <Button variant="primaryGhost">login</Button>
        </HStack>
      </Box>
    </Flex>
  );
};

/* 
 *
      <Center display={{ md: "flex", lg: "none" }}>
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
      */
