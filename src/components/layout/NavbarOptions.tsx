import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetStartedButton } from "@astra/components";

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
      <GetStartedButton />
    </>
  );
};
