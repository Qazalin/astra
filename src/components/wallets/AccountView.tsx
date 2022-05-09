import { AccountViewProps } from "@astra/types";
import { Box, Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";

/**
 * Isolated account view component for a single account
 * Has 3 states based on the design: with ens, with ens & twitter, only address
 */
export const AccountView: React.FC<AccountViewProps> = ({
  address,
  ensName,
  twitter,
}) => {
  return (
    <Box maxW="200px">
      {ensName ? (
        twitter ? (
          <HStack spacing={3}>
            <Twitter twitter={twitter} />
            <ENS ensName={ensName} />
            <Address address={address} />
          </HStack>
        ) : (
          <Flex>
            <ENS ensName={ensName} />
            <Address address={address} />
          </Flex>
        )
      ) : (
        <Address address={address} />
      )}
    </Box>
  );
};

const Address: React.FC<{ address: string }> = ({ address }) => {
  return (
    <Box
      mx="auto"
      maxW="170px"
      p="5px"
      px="10px"
      textAlign="center"
      bg="gray.700"
      borderRadius="24px"
    >
      <Link
        href={`https://etherscan.io/address/${address}`}
        target="_blank"
        _focus={{ outline: "none" }}
      >
        {address.slice(0, 6)}...
        {address.slice(address.length - 4, address.length)}
      </Link>
    </Box>
  );
};

const Twitter: React.FC<{ twitter: string }> = ({ twitter }) => {
  return (
    <Link
      _focus={{ outline: "none" }}
      target="_blank"
      href={`https://twitter.com/${twitter}`}
      mt="6px"
    >
      <Icon as={AiOutlineTwitter} color="blue.300" cursor="pointer" m="auto" />
    </Link>
  );
};

const ENS: React.FC<{ ensName: string }> = ({ ensName }) => {
  return (
    <Link margin="auto" color="blue.300" _focus={{ outline: "none" }}>
      {ensName}
    </Link>
  );
};
