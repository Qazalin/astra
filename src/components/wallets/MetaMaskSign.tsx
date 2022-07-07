import { hooks, metaMask } from "@astra/lib/connectors";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { ConnectWallet, AccountsView } from "@astra/components";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { signMessage } from "@astra/lib/signature";
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
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const router = useRouter();
  const toast = useToast();
  const provider = useProvider();

  function sucess(msg: string) {
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
  async function handleConnectWallet(e: MouseEvent) {
    e.preventDefault();
    await metaMask.activate();
  }

  // useEffect(() => {}, [isActive, error]);
  useEffect(() => {
    if (error) err(error.message);
    else if (isActive) sucess("MetaMask connected");
  }, [error, isActive]);

  return (
    <VStack spacing={6}>
      <Button
        variant="connect"
        onClick={async (e) => await handleConnectWallet(e)}
        bg="quarternary"
        disabled={isActivating}
      >
        Get started
      </Button>
    </VStack>
  );
}

/* 
 *
 *
    if (isActive) {
      signMessage(provider, accounts[0]).then(([signature, message]) => {
        fetch(
          `/api/account/verifyNonce?address=${accounts[0]}&signature=${signature}&message=${message}`,
          {
            method: "POST",
          }
        )
          .catch((e) => console.log("e"))
          .then((r: Response) => r.json())
          .then((res) => {
            toast({
              title: "Success",
              description: "MetaMask connected",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            console.log(res);
          })
          .catch((e: Error) => {
            console.log("there was an error");
            toast({
              title: "Error",
              description: e.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          });
      });
    }
    if (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    */
