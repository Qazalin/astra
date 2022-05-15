import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    address: String!
    balance: Float!
    ens: String
    twitter: String
  }

  type NFT {
    token_address: String
    token_id: String
    block_number_minted: String
    owner_of: String
    block_number: String
    amount: String
    contract_type: String
    name: String
    symbol: String
    token_uri: String
    metadata: String
    synced_at: String
    is_valid: Int
    syncing: Int
    frozen: Int
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
