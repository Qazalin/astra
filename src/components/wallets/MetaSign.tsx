import { Button } from "@chakra-ui/react";
import { hooks, metaMask } from "@astra/lib/connectors";
import { useEffect } from "react";
import { ConnectWallet } from "@astra/components";
import { ResponseType } from "@astra/types";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
} = hooks;

export const MetaMaskSign = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();

  async function getSignMessage(address: string): Promise<string> {
    const res = await fetch(`/api/account/nonce?address=${address}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ResponseType<{ nonce: string }> = await res.json();
    return data.data.nonce;
  }

  async function signMessage(): Promise<string> {
    const message = await getSignMessage(accounts[0]);
    const signature: string = await provider.provider?.request({
      method: "personal_sign",
      params: [accounts[0], message],
    });
    return signature;
  }
  return (
    <>
      <ConnectWallet
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
      <Button>sign</Button>
    </>
  );
};
