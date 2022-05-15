import { getEtherBalance, getEnsName, getTwitterHandle } from "@astra/lib";
import { QueryResolvers } from "../generated/resolvers-types.generated";

export const queryResolvers: QueryResolvers = {
  user: async (_, { address }) => {
    const ens = await getEnsName(address);
    return {
      address: address,
      ens,
      balance: await getEtherBalance(address),
      twitter: ens ? await getTwitterHandle(ens) : null,
    };
  },
};
