import type { Web3ReactHooks } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { useCallback, useState } from "react";
import { CHAINS, getAddChainParameters } from "@astra/lib";
import { Stack, Button } from "@chakra-ui/react";
import { ChainSelect, ErrorHandler } from "@astra/components";

export function ConnectWallet({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask;
  chainId: ReturnType<Web3ReactHooks["useChainId"]>;
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  error: ReturnType<Web3ReactHooks["useError"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
}) {
  const chainIds = Object.keys(CHAINS).map((chainId) => Number(chainId));
  const displayDefault = true;

  const [desiredChainId, setDesiredChainId] = useState<number>(-1);

  const switchChain = useCallback(
    async (desiredChainId: number) => {
      setDesiredChainId(desiredChainId);
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) return;
      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) return;

      await connector.activate(
        desiredChainId === -1
          ? undefined
          : getAddChainParameters(desiredChainId)
      );
    },
    [connector, chainId]
  );

  return (
    <Stack w="100%" h="100%">
      <ChainSelect
        chainId={desiredChainId}
        switchChain={isActivating ? undefined : switchChain}
        displayDefault={displayDefault}
        chainIds={chainIds}
      />
      {error ? (
        <ErrorHandler error={error} />
      ) : isActive ? (
        <Button variant="connect" onClick={() => void connector.deactivate()}>
          Disconnect
        </Button>
      ) : (
        <Button
          variant="connect"
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector.activate(
                    desiredChainId === -1
                      ? undefined
                      : getAddChainParameters(desiredChainId)
                  )
          }
          disabled={isActivating}
        >
          Connect
        </Button>
      )}
    </Stack>
  );
}
