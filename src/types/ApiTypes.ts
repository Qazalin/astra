/** NFT Data returned by alchemy.io */
export type TokenTypes = "ERC721" | "ERC1155";
type AlchemyNFTIdType = {
  tokenId: string;
  tokenMetadata: {
    tokenType: TokenTypes;
  };
};
type AlchemyTokenUriType = {
  raw: string;
  gateway: string;
};

type AlchemyNFTMetadata = {
  image: string;
  external_url: string;
  background_color: string;
  name: string;
  description: string;
  attributes: Record<any, any>;
};
export type AlchemyNFTRes = {
  id: AlchemyNFTIdType;
  tokenUri: AlchemyTokenUriType;
  metadata: AlchemyNFTMetadata;
  nextToken: string;
};
