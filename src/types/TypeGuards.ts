/** A set of assertation utility functions for guarding agains any and unknown types */

import { AlchemyNFTRes } from "./ApiTypes";

/**
 * Type guard to check the validity of the response from Alchemy
 * @param valueToTest can be of any kind
 * @returns whether the condition is met
 * throws when assertation fails
 */
export function assertsIsAlchemyNFTRes(
  valueToTest: any
): asserts valueToTest is AlchemyNFTRes {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "nfts" in valueToTest &&
      Array.isArray(valueToTest["nfts"]) &&
      typeof valueToTest["nfts"][0] == "object"
    )
  )
    throw new Error(
      `Value does not apear to be an AlchemyNFTRes ${valueToTest}`
    );
}
