import { GetEnsName } from "@astra/types";
import Moralis from "moralis/node";
import { operations } from "moralis/types/generated/web3Api";

/**
 * Fetches Etherbalance for an address
 * @param address
 */
export const getEnsName: GetEnsName = async (address) => {
  type ensOptions = operations["getNativeBalance"]["parameters"]["query"] &
    operations["getNativeBalance"]["parameters"]["path"];
  const options: ensOptions = {
    address,
  };
  try {
    const data = await Moralis.Web3API.resolve.resolveAddress(options);
    return data.name;
  } catch {
    // no ens was found
    return undefined;
  }
};
