import {
  AlchemyNFTParams,
  assertsIsAlchemyNFTRes,
  GetContractNFTs,
} from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";
import { getContractNFTs } from "./getContractNFTs";
import { Nft } from "../generated/resolvers-types.generated";

/**
 * Returns all the NFTs in a collection
 * useful for search components and analytics
 * @param address The collection address
 */
export const getAllNFTs = async (address: string) => {
  let startT = "";
  let hasNextPage = true;
  let totalNftsFound = 0;
  const allNFTs: Nft[] = [];

  const params: AlchemyNFTParams = {
    contractAddress: address,
    withMetadata: "true",
  };
  const { nfts, nextToken } = await getContractNFTs(params);
  params.startToken = nextToken;
  while (hasNextPage) {
    console.log("looking for more");
    const { nfts, nextToken } = await getContractNFTs(params);
    totalNftsFound += nfts.length;
    allNFTs.concat(nfts);
    console.log("another one");
    console.log(
      nfts.map((nft, i) => {
        if (nft.metadata.name) {
          if (nft.metadata.name.startsWith("mechanica")) {
            return nft;
          }
        }
      })
    );
    console.log("--------------");
    if (!nextToken) {
      hasNextPage = false;
    }
  }
  // When nextToken is not present, then there are no more NFTs to fetch.
  return { nfts: allNFTs };
};
