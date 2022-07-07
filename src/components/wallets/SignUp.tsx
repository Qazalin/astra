import { hooks, metaMask } from "@astra/lib/connectors";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { ConnectWallet, AccountsView } from "@astra/components";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { signMessage } from "@astra/lib/signature";

export const SignUp = () => {
  function handleConnectWallet(e: MouseEvent) {}
  return (
    <VStack spacing={6}>
      <Button
        variant="connect"
        onClick={(e) => handleConnectWallet(e)}
        bg="quarternary"
      >
        Get started
      </Button>
    </VStack>
  );
};
