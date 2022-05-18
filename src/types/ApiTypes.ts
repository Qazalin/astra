/** NFT Data returned by alchemy.io */
import { Nft } from "@astra/gql/generated/resolvers-types.generated";

export type TokenTypes = "ERC721" | "ERC1155";
export type AlchemyNFTRes = {
  nfts: Nft[];
};
