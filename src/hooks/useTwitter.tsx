import { hooks } from "@astra/lib/connectors";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

/**
 * hook for connecting with the ENS API to
 * attempt to fetch twitter usernames based on ENS
 * @param ensName
 */
export const useTwitter = (
  ensName: string
): { twitter: string | undefined } => {
  const [twitter, setTwitter] = useState<string | undefined>();
  const { useProvider } = hooks;
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.alchemyapi.io/v2/J6A9687zof8f-11fGiyZ54qkNjZJVE_z"
  );
  console.log(provider);

  async function getTwitter(ensName: string) {
    const resolver = await provider.getResolver(ensName);
    const twitter = await resolver.getText("com.twitter");
    setTwitter(twitter);
  }

  useEffect(() => {
    getTwitter(ensName).catch();
  }, []);

  return {
    twitter,
  };
};
