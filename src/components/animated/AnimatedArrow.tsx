import { Box } from "@chakra-ui/react";

export const AnimatedArrow = () => {
  return (
    <Box
      cursor="pointer"
      width="1vmin"
      h="1vmin"
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
          height: "110%",
        },
      }}
    />
  );
};
