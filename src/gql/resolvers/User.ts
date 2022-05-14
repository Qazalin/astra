import { UserResolvers } from "../generated/resolvers-types.generated";

export const queryUserResolver: UserResolvers = {
  address: ({ address }) => {
    return address;
  },
  balance: () => {
    return 12;
  },
  twitter: () => {
    return "me";
  },
  ens: () => {
    return "me.eth";
  },
};
