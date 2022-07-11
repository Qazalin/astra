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
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { AstraLogo } from "./icons/Logo";
import { ReactElement } from "react";
import { NavbarOptions } from "@astra/components/layout";

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
      <DesktopNavbar>
        <NavbarOptions menuOptions={menuOptions} />
      </DesktopNavbar>
      <MobileNavbar>
        <NavbarOptions menuOptions={menuOptions} />
      </MobileNavbar>
    </Flex>
  );
};

const DesktopNavbar: React.FC<{ children: ReactElement }> = ({ children }) => (
  <Box
    h="100%"
    display={["none", "none", "flex"]}
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
);

const MobileNavbar: React.FC<{ children: ReactElement }> = ({ children }) => (
  <Box display={["flex", "flex", "none"]}>
    <Menu>
      <MenuButton
        as={Button}
        fontSize="25px"
        rightIcon={<RiMenu2Line />}
        m="auto"
      />

      <MenuList>{children}</MenuList>
    </Menu>
  </Box>
);

const NavbarOptions: React.FC<{ menuOptions: string[] }> = ({
  menuOptions,
}) => (
  <>
    {menuOptions.map((o, idx) => (
      <Link href={`${o}`} key={idx}>
        <Text cursor="pointer" mx="20px" fontSize="1.6rem" textAlign="center">
          {o}
        </Text>
      </Link>
    ))}
    <HStack alignItems="center" justifyContent="center">
      <Button variant="primary">signup</Button>
      <Button variant="primaryGhost">login</Button>
    </HStack>
  </>
);
