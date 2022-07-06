import { hooks, metaMask } from "@astra/lib/connectors";
import { Box, Button, VStack } from "@chakra-ui/react";
import { ConnectWallet, AccountsView } from "@astra/components";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export function MetaMaskConnect() {
  const chainId = useChainId();
  // const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  // const provider = useProvider();
  // const ENSNames = useENSNames(provider);

  return (
    <VStack spacing={6}>
      <Button variant="connect">Connect Wallet</Button>
    </VStack>
  );
}
