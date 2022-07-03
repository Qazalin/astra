// Library functions

import { Maybe, Nft } from "@astra/gql/generated/resolvers-types.generated";
import { AlchemyNFTParams, AlchemyNFTRes } from "./ApiTypes";

export type GetEtherBalance = (address: string) => Promise<number>;

export type GetEnsName = (address: string) => Promise<string> | undefined;

export type GetTwitterHandle = (ens: string) => Promise<string> | undefined;

export type ResolveEns = (ens: string) => Promise<string> | undefined;

/**
 * Generalized type for a function that returns an array of NFTs regardless of implementation
 * @param address The address of the contract
 * @param startToken optional param for selecting a range of tokens
 */
export type GetContractNFTs = (
  params: AlchemyNFTParams
) => Promise<AlchemyNFTRes | undefined>;

/**
 *
 */
