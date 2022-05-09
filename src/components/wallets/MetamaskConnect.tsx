import { hooks, metaMask } from "@astra/lib/connectors";
import { Box } from "@chakra-ui/react";
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
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  return (
    <Box w="100%" h="100%">
      <ConnectWallet
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
      {/* <AccountsView
              accounts={accounts}
              provider={provider}
              ENSNames={ENSNames}
          /> */}
    </Box>
  );
}
