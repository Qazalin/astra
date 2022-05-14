import Moralis from "moralis/node";
import { Resolvers } from "./generated/resolvers-types.generated";
import { queryResolvers } from "./resolvers/Query";
import { queryUserResolver } from "./resolvers/User";

async function getBalance(addr: string) {
  const options = {
    chain: "eth",
    address: addr,
  };
  const data = await Moralis.Web3API.account.getNativeBalance(options);
  const balance = parseInt(data.balance) / 10 ** 18;
  return balance.toFixed(2);
}
const acc = "0x94de7e2c73529ebf3206aa3459e699fbcdfcd49b";

export const resolvers: Resolvers = {
  Query: queryResolvers,
};
