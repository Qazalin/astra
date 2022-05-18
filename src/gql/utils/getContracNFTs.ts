import fetch from "node-fetch";
import { GetContractNFTs, AlchemyNFTRes } from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";
import { Nft } from "../generated/resolvers-types.generated";

/**
 * Returns all the NFTs for a given collection
 * */
export const getContractNFTs: GetContractNFTs = async (address) => {
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection`;
  const params = {
    contractAddress: address,
    withMetadata: "true",
  };
  const endpoint = apiParamEndpoint(url, params);
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data: AlchemyNFTRes = await res.json();
  return data.nfts;
};
