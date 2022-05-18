import fetch from "node-fetch";
import { AlchemyNFTRes, GetContractNFTs } from "@astra/types";
import { apiParamEndpoint } from "@astra/lib";

/**
 * Returns all the NFTs for a given collection
 */
export const getContractNFTs: GetContractNFTs = async (address) => {
  /* 
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForCollection`;
  const params = {
    contractAddress: address,
    withMetadata: "true",
  };
  const endpoint = apiParamEndpoint(url, params);
  const res = await fetch(endpoint);
  return res;
  */
  const data: AlchemyNFTRes | undefined = await getNFTsForCollection(address);
  if (data) return data.nfts;
  else return undefined;
};

/** Type gaurded function to fetch the data */
async function getNFTsForCollection(
  address: string
): Promise<AlchemyNFTRes | undefined> {
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

  const data: unknown | AlchemyNFTRes = await res.json();
  if (isAlchemyNFTRes(data)) {
    return data as AlchemyNFTRes;
  } else {
    return null;
  }
}

// the guard
/**
 * Type guard to check the validity of the response from Alchemy
 * @param valueToTest can be of any kind
 * @returns whether the condition is met
 */
function isAlchemyNFTRes(valueToTest: any): boolean {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "nfts" in valueToTest &&
    Array.isArray(valueToTest["nfts"])
  );
}
