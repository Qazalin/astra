import { QueryResolvers } from "../generated/resolvers-types.generated";

export const queryResolvers: QueryResolvers = {
  user: () => {
    return {
      address: "0x",
      ens: "me.eth",
      balance: 1,
    };
  },
};
