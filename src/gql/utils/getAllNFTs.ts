import { assertsIsAlchemyNFTRes, GetContractNFTs } from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";

/**
 * Returns all the NFTs in a collection
 * useful for search components and analytics
 * @param address The collection address
 */
export const getAllNFTs: GetContractNFTs = async (address) => {
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForCollection`;
  const params = {
    contractAddress: address,
    withMetadata: "true",
  };
  const endpoint = apiParamEndpoint(url, params);

  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  // probably have this in a try/catch so it doesn't blow up?
  // or keep it as is and handle all error on the client side using ErrorBoundry
  assertsIsAlchemyNFTRes(data);
  return data.nfts;
};
