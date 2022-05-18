import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    address: String!
    balance: Float!
    ens: String
    twitter: String
  }

  type AlchemyNFTIdType {
    tokenId: String
  }
  type AlchemyTokenUriType {
    raw: String
    gateway: String
  }

  type AlchemyNFTMetadata {
    image: String
    external_url: String
    background_color: String
    name: String
    description: String
    # attributes: Record<any, any>
  }
  type NFT {
    id: AlchemyNFTIdType
    tokenUri: AlchemyTokenUriType
    metadata: AlchemyNFTMetadata
    nextToken: String
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
