import { Grid, HStack, GridItem, Text, Box, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsCodeSquare } from "react-icons/bs";
import { IoAppsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineDollarCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { IconType } from "react-icons/lib";

export const Sidebar: React.FC<{
  changeCb: (newWidth: string) => void;
}> = ({ changeCb }) => {
  const [width, setWidth] = useState("250px");
  function handleChangeWidth() {
    const newWidth = width === "250px" ? "100px" : "250px";
    changeCb(newWidth);
    setWidth(newWidth);
  }

  const router = useRouter();
  const primaryOptions: { name: string; icon: IconType }[] = [
    { name: "overview", icon: IoAppsOutline },
    { name: "leads", icon: FiMail },
    { name: "deals", icon: AiOutlineDollarCircle },
    { name: "insights", icon: MdShowChart },
  ];

  const secondaryOptions: { name: string; icon: IconType }[] = [
    { name: "knowledge base", icon: BsLightbulb },
    { name: "settings", icon: AiOutlineSetting },
  ];
  return (
    <Box
      width={{ md: "100px", lg: width }}
      transition="width 0.6s"
      borderRight="1px solid"
      h="100%"
      borderRightColor="gray.800"
      fontSize="1.3rem"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Icon
        as={BsCodeSquare}
        pos="absolute"
        top={0}
        right={-2.5}
        color="gray.300"
        cursor="grab"
        _active={{
          cursor: "grabbing",
        }}
        onClick={handleChangeWidth}
      />
      <Grid>
        <Text
          textAlign="center"
          color="text4"
          fontWeight="bold"
          fontSize="0.9rem"
          opacity={0.6}
        >
          Menu
        </Text>
        {primaryOptions.map((po, i) => (
          <Box
            display="flex"
            _hover={{ bg: "bg0" }}
            p="10px"
            mb="10px"
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push(`/${po.name}`)}
            key={`primary-sidebar-${i}`}
            opacity={router.route === `/${po.name}` ? 1 : 0.7}
            bg={router.route === `/${po.name}` ? "bg0" : "transparent"}
          >
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={po.icon} my="auto" />
            </GridItem>
            <GridItem
              w="100%"
              h="100%"
              display="flex"
              flexDir="column"
              textAlign="start"
              ml="15px"
              justifyContent="center"
            >
              <Text
                display={width === "100px" ? "none" : "initial"}
                textTransform="capitalize"
                justifySelf="center"
                fontSize="1.2rem"
              >
                {po.name}
              </Text>
            </GridItem>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
