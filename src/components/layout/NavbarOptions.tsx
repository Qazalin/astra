import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AnimatedArrow } from "@astra/components/animated";

export const NavbarOptions: React.FC<{ menuOptions: string[] }> = ({
  menuOptions,
}) => {
  const router = useRouter();
  return (
    <>
      {menuOptions.map((o, idx) => (
        <Text
          onClick={() => router.push(`/${o}`)}
          cursor="pointer"
          textTransform="capitalize"
          color={router.pathname === `/${o}` ? "text1" : "text3"}
          mx="20px"
          fontSize="1.2rem"
          textAlign="center"
          key={`navbar-${idx}`}
        >
          {o}
        </Text>
      ))}
      <Button
        pos="absolute"
        border="1px solid transparent"
        right={5}
        _hover={{
          opacity: "0.8",
        }}
        transition="all 0.3s ease"
        bg="primary"
        color="black"
        p="10px"
        fontWeight="700"
        fontSize="0.9rem"
        borderRadius="md"
        cursor="pointer"
        rightIcon={<AnimatedArrow />}
      >
        Get started
      </Button>
    </>
  );
};
