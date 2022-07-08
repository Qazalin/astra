import { hooks, metaMask } from "@astra/lib/connectors";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { ConnectWallet, AccountsView } from "@astra/components";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { signMessage, verifySig } from "@astra/lib/signature";
import { isError } from "util";

const {
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export function MetaMaskSign() {
  const [signature, setSignature] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const router = useRouter();
  const toast = useToast();
  const provider = useProvider();

  function success(msg: string) {
    toast({
      title: "Success",
      description: msg,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  function err(msg: string) {
    toast({
      title: "Error",
      description: msg,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  const signToServer = async () => {
    try {
      const [signature, message] = await signMessage(provider, accounts[0]);
      try {
        setIsLoading(true);
        const res = await fetch(
          `/api/account/verifyNonce?address=${accounts[0]}&signature=${signature}&message=${message}`
        );
        const data = await res.json();
        setIsLoading(false);
        if (data.errorCode === 0) {
          success(data.data.nonce);
          setSignature(signature);
        } else {
          err(data.message);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          err(e.message);
        }
      }
    } catch (e: any) {
      // danger
      if (typeof e === "object" && "message" in e) {
        err(e.message);
      }
    }
  };
  async function handleConnectWallet(e: MouseEvent) {
    e.preventDefault();
    await metaMask.activate();
    if (isActive) {
      await signToServer();
    }
  }

  useEffect(() => {
    if (error) err(error.message);
    if (isActive) success("MetaMask connected");
  }, [error]);

  return (
    <VStack w="100%">
      {isLoading ? (
        <Box>loading...</Box>
      ) : (
        <Box
          onClick={async (e) => await handleConnectWallet(e)}
          bg="quarternary"
          w="100%"
          h="100%"
          textAlign="center"
          cursor="pointer"
        >
          {isActive && !signature
            ? "Click here to sign the message"
            : isActive && signature
            ? "Signature received"
            : "Get started"}
        </Box>
      )}
    </VStack>
  );
}
