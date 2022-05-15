import { Resolvers } from "./generated/resolvers-types.generated";
import { queryResolvers } from "./resolvers/Query";

export const resolvers: Resolvers = {
  Query: queryResolvers,
};
