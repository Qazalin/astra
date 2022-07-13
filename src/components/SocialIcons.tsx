import { Link, IconButton, IconButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";

export const SocialIcon: React.FC<{
  link: string;
  icon: ReactElement<IconType>;
  ariaLabel: string;
  sx?: IconButtonProps;
}> = ({ link, icon, ariaLabel, sx }) => {
  return (
    <Link href={link} target="_blank">
      <IconButton
        fontSize="2rem"
        color="primary"
        p="5px"
        mx="10px"
        mt="10px"
        aria-label={ariaLabel}
        icon={icon}
        sx={sx}
        _hover={{
          color: "text1",
          opacity: "0.8",
        }}
      />
    </Link>
  );
};
