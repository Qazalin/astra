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
import { AstraLogo } from "components/icons";
import { ReactElement } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Navbar = () => {
  const menuOptions = ["products", "networks", "resources"];
  return (
    <Flex w="100%" h="100%" pos="relative" justifyContent="space-between">
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
    w="100%"
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
        <Text cursor="pointer" mx="20px" fontSize="1.2rem" textAlign="center">
          {o}
        </Text>
      </Link>
    ))}
    <Button
      variant="primary"
      pos="absolute"
      border="1px solid transparent"
      right={5}
      rightIcon={<AnimatedArrow />}
      _hover={{
        bg: "transparent",
        border: "1px solid",
        borderColor: "primary",
        color: "primary",
        textTransform: "capitalize",
        p: "13px",
      }}
    >
      Get started
    </Button>
  </>
);

const AnimatedArrow = () => {
  return (
    <Box
      cursor="pointer"
      width="2vmin"
      h="2vmin"
      boxSizing="border-box"
      transform="rotate(45deg)"
      _before={{
        content: "''",
        width: "100%",
        height: "100%",
        borderWidth: ".2vmin .2vmin 0 0",
        borderStyle: "solid",
        borderColor: "black",
        transition: ".2s ease",
        display: "block",
        transformOrigin: "100% 0",
      }}
      _after={{
        content: "''",
        float: "left",
        pos: "relative",
        top: "-100%",
        width: "100%",
        height: "100%",
        borderWidth: "0 .2vmin 0 0",
        borderStyle: "solid",
        borderColor: "black",
        transformOrigin: "100% 0",
        transition: ".2s ease",
      }}
      _hover={{
        _after: {
          transform: "translate(-1px, 2px)rotate(45deg)",
          borderColor: "primary",
          height: "110%",
        },
        _before: {
          borderColor: "primary",
        },
      }}
    />
  );
};
