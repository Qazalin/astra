import { Box, BoxProps, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AnimatedArrow } from "@astra/components/animated";

export const GetStartedButton = (props: BoxProps) => (
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
    {...props}
  >
    Get started
  </Button>
);
