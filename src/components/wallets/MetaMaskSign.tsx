import { hooks, metaMask } from "@astra/lib/connectors";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { ConnectWallet, AccountsView } from "@astra/components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signMessage } from "@astra/lib/signature";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export function MetaMaskSign() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const router = useRouter();
  const toast = useToast();
  const provider = useProvider();
  // const ENSNames = useENSNames(provider);
  //

  function handleConnectWallet() {
    metaMask.activate().then(() => {
      if (isActive) {
        signMessage(provider, accounts[0]).then((signature) => {
          fetch(
            `/api/account/verifyNonce?address=${accounts[0]}&signature=${signature}`,
            {
              method: "POST",
            }
          )
            .then((r) => r.json())
            .then((res) => {
              console.log(res);
            });
        });
      }
    });
  }

  useEffect(() => {
    if (isActive)
      toast({
        title: "Success",
        description: "MetaMask connected",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    else if (error)
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
  }, [isActive]);
  return (
    <VStack spacing={6}>
      <Button
        variant="connect"
        onClick={handleConnectWallet}
        bg="quarternary"
        disabled={isActivating}
      >
        Get started
      </Button>
    </VStack>
  );
}
