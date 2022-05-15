import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    address: String!
    balance: Float!
    ens: String
    twitter: String
  }

  type Query {
    userByAddr(address: String!): User
    userByEns(ens: String!): User
  }
`;
