import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // TODO: Conditionally switch between dev and production
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});
