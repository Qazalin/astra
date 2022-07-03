import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { auth } from "lib";
import { useState } from "react";

export const AuthForm: React.FC<{
  mode: "signin" | "signup";
}> = ({ mode }) => {
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState("");

  const router = useRouter();
  return (
    <Box h="100vh" w="100vw" overflow="hidden">
      <Flex justify="center" align="center" h="100%">
        hello
      </Flex>
    </Box>
  );
};
