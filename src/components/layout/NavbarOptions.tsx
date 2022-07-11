import { Button, Text } from "@chakra-ui/react";
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
          mx="20px"
          fontSize="1.2rem"
          textAlign="center"
          key={`navbar-${idx}`}
        >
          {o}
        </Text>
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
};
