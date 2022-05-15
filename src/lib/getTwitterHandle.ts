import { GetTwitterHandle } from "@astra/types";
import { ethers } from "ethers";

/**
 * Fetches twitter handle based on ENS names
 * @param ens
 */
export const getTwitterHandle: GetTwitterHandle = async (ens) => {
  // Create an ENS resolver
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_ETH_RPC
  );
  try {
    const resolver = await provider.getResolver(ens);

    // Then resolve their twitter handle
    return await resolver.getText("com.twitter");
  } catch (error) {
    return undefined;
  }
};
