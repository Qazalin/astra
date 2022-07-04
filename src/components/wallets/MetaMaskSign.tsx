import { Button } from "@chakra-ui/react";
import { ethers, providers, Signer } from "ethers";
import { hooks, metaMask } from "@astra/lib/connectors";
import { useEffect } from "react";
import { ConnectWallet } from "@astra/components";
import { ResponseType } from "@astra/types";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";

// https://api.nftgo.io/api/v1/account/verifynonce?address=0x8e269e816374609d3ce5aab10c992a7994d3a5dd&signature=0x422fff40c51ce6a4a2b6489ac65ac15a29e7632fa24ad1c66514ff1a89e6e0cf214a484bca827e083adfcb53117e4ae1d4e04cb31649e3f50102f7675b4d75841c

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
  // const ENSNames = useENSNames(provider);

  useEffect(() => {
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
    if (isActive) {
      signMessage().then((r) => {
        console.log(r);
      });
    }
  }, []);
  return (
    <ConnectWallet
      connector={metaMask}
      chainId={chainId}
      isActivating={isActivating}
      error={error}
      isActive={isActive}
    />
  );
};
