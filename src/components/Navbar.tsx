import { Box, Center, Flex, Button, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { useAdaptivityContext } from "@astra/hooks";
import { RiMenu2Line } from "react-icons/ri";

export const Navbar = () => {
  const menuOptions = ["home", "marketplace", "networks"];
  const isSmallScreen = useAdaptivityContext();
  return (
    <Flex w="100%" h="100%" bg="bg1">
      <Logo />
      <Center
        ml="10%"
        display={isSmallScreen ? "none" : "flex"}
        textTransform="capitalize"
      >
        {menuOptions.map((o, idx) => (
          <Text mx="20px" key={idx} variant="h2">
            {o}
          </Text>
        ))}
      </Center>
      <Center display={isSmallScreen ? "flex" : "none"}>
        <Menu>
          <MenuButton as={Button} rightIcon={<RiMenu2Line />} />

          <MenuList>
            {menuOptions.map((o, idx) => (
              <MenuItem key={idx} textTransform="capitalize">
                ✨{o}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};
