import { getEtherBalance, getEnsName, getTwitterHandle } from "@astra/lib";
import { resolveEns } from "@astra/lib/resolveEns";
import { QueryResolvers } from "../generated/resolvers-types.generated";

export const queryResolvers: QueryResolvers = {
  userByAddr: async (_, { address }) => {
    const ens = await getEnsName(address);
    return {
      address: address,
      ens,
      balance: await getEtherBalance(address),
      twitter: ens ? await getTwitterHandle(ens) : null,
    };
  },
  userByEns: async (_, { ens }) => {
    const address = await resolveEns(ens);
    return {
      address,
      ens,
      balance: await getEtherBalance(address),
    };
  },
};
