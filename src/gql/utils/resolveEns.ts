import { ResolveEns } from "@astra/types";
import { ethers } from "ethers";

/**
 * Resolve an ENS domain to its hex address
 * @param ens
 */
export const resolveEns: ResolveEns = async (ens) => {
  // Create an ENS resolver
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_ETH_RPC
  );
  try {
    const address = await provider.resolveName(ens);
    return address;
  } catch (error) {
    return undefined;
  }
};
