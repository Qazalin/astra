import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    address: String!
    balance: Float!
    ens: String
    twitter: String
  }

  type NFT {
    image: String!
    owner: String!
    tokenType: String!
    name: String!
    symbol: String!
    minted_at: String!
  }

  type Contract {
    nfts: [NFT]
    address: String!
    name: String
  }

  type Query {
    userByAddr(address: String!): User
    userByEns(ens: String!): User
    contract(address: String!): Contract
  }
`;
