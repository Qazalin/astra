import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "@astra/gql";
import { typeDefs } from "@astra/gql";
import Moralis from "moralis/node";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const startApolloServer = apolloServer.start();

async function startMoralisServer() {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const appId = process.env.NEXT_PUBLIC_APP_ID;
  Moralis.start({ serverUrl, appId });
}
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startApolloServer;
  await startMoralisServer();
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
