import { GetEtherBalance } from "@astra/types";
import Moralis from "moralis/node";
import { operations } from "moralis/types/generated/web3Api";

/**
 * Fetches Etherbalance for an address
 * @param address
 */
export const getEtherBalance: GetEtherBalance = async (address) => {
  type EtherBalanceOptions =
    operations["getNativeBalance"]["parameters"]["query"] &
      operations["getNativeBalance"]["parameters"]["path"];
  const options: EtherBalanceOptions = {
    chain: "eth",
    address: address,
  };
  const data = await Moralis.Web3API.account.getNativeBalance(options);
  const balance = parseInt(data.balance) / 10 ** 18;
  return parseFloat(balance.toFixed(2));
};
