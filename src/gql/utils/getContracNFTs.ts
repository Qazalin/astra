import Moralis from "moralis/node";
import fetch from "node-fetch";
import { GetContractNFTs } from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";

/**
 * Returns all the NFTs for a given collection
 */
export const getContractNFTs: GetContractNFTs = async (address) => {
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection`;
  const params = {
    contractAddress: address,
    withMetadata: true,
  };
  const endpoint = apiParamEndpoint(url, params);
  const res = await fetch(endpoint);
  const data = await res.json();
};
