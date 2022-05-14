import Moralis from "moralis/node";

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
export const resolvers = {
  Query: {
    user: async (_, { address }) => {
      const balance = getBalance(address);
      return {
        address,
        balance,
        ens: process.env.NEXT_PUBLIC_APP_ID,
        twitter: "me",
      };
    },
  },
};
