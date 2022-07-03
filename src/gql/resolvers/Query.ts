import {
  getEtherBalance,
  getEnsName,
  getTwitterHandle,
  resolveEns,
  getContractNFTs,
  getAllNFTs,
} from "@astra/gql/utils";
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
  contract: async (_, { address }) => {
    const nftData = await getAllNFTs(address);
    return {
      address,
      name: "Bayc",
      nfts: nftData.nfts,
    };
  },
};
