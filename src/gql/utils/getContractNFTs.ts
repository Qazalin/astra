import fetch from "node-fetch";
import {
  AlchemyNFTParams,
  assertsIsAlchemyNFTRes,
  GetContractNFTs,
} from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";

/**
 * Returns a limited number of NFTs for a given collection
 */
export const getContractNFTs: GetContractNFTs = async (
  params: AlchemyNFTParams
) => {
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForCollection`;
  const endpoint = apiParamEndpoint(url, params);

  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  assertsIsAlchemyNFTRes(data);
  return data;
};
