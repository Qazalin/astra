import { GetContractNFTs } from "@astra/types";
import Moralis from "moralis/node";
import { operations } from "moralis/types/generated/web3Api";

export const getContractNFTs: GetContractNFTs = async (address) => {
  type NFTOptions = operations["getNFTsForContract"]["parameters"]["query"] &
    operations["getNFTsForContract"]["parameters"]["path"];

  const options: NFTOptions = {
    chain: "eth",
    token_address: address,
    address,
  };
  const NFTs = await Moralis.Web3API.account.getNFTsForContract(options);
  return NFTs.result;
};
