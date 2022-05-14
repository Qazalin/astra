export const resolvers = {
  Query: {
    user: async (_, { address }) => {
      return {
        address,
        ens: "me.eth",
        twitter: "me",
      };
    },
  },
};
